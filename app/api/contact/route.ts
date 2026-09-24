const allowedOrigins = new Set([
  "https://structec.vercel.app",
  "http://localhost:3000",
  "http://localhost:3001",
]);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

function originHeaders(origin: string | null) {
  const headers = new Headers({
    "Content-Type": "application/json",
    "Vary": "Origin",
  });
  if (origin && allowedOrigins.has(origin)) {
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type");
  }
  return headers;
}

function response(message: string, status: number, origin: string | null) {
  return new Response(JSON.stringify({ message }), { status, headers: originHeaders(origin) });
}

function originIsAllowed(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  const requestOrigin = new URL(request.url).origin;
  return origin === requestOrigin || allowedOrigins.has(origin);
}

export function OPTIONS(request: Request) {
  const origin = request.headers.get("origin");
  if (!originIsAllowed(request)) return response("Origin not allowed.", 403, origin);
  return new Response(null, { status: 204, headers: originHeaders(origin) });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (!originIsAllowed(request)) return response("Origin not allowed.", 403, origin);

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 20_000) return response("Request is too large.", 413, origin);

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_FORM_TO_EMAIL;
  if (!apiKey || !toEmail) {
    console.error("[contact] Resend environment variables are not configured.");
    return response("The contact form is temporarily unavailable. Please email office@structec.co.nz.", 503, origin);
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json() as Record<string, unknown>;
  } catch {
    return response("Please submit the form again.", 400, origin);
  }

  if (clean(body.website, 200)) return response("Thanks—your enquiry is on its way.", 200, origin);

  const name = clean(body.name, 100);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 160).toLowerCase();
  const projectType = clean(body.projectType, 100) || "Not specified";
  const enquiry = clean(body.message, 3000);

  if (!name || !emailPattern.test(email) || !enquiry) {
    return response("Please provide your name, a valid email and a short project description.", 422, origin);
  }

  const idempotencyKey = `structec-contact-${crypto.randomUUID()}`;
  const resendPayload = {
    from: "Structec Website <onboarding@resend.dev>",
    to: [toEmail],
    reply_to: email,
    subject: `New Structec enquiry from ${name}`,
    text: [
      `New website enquiry from ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not supplied"}`,
      `Project type: ${projectType}`,
      "",
      enquiry,
    ].join("\n"),
    html: `
      <div style="font-family:Arial,sans-serif;color:#202020;line-height:1.6;max-width:640px;margin:auto">
        <div style="background:#252525;color:#fff;padding:24px 28px;border-radius:12px 12px 0 0">
          <p style="margin:0;color:#e2a82f;font-size:12px;letter-spacing:1.6px;text-transform:uppercase">Structec Construction</p>
          <h1 style="margin:6px 0 0;font-size:24px">New website enquiry</h1>
        </div>
        <div style="border:1px solid #e4e0d7;border-top:0;padding:28px;border-radius:0 0 12px 12px">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone || "Not supplied")}</p>
          <p><strong>Project type:</strong> ${escapeHtml(projectType)}</p>
          <hr style="border:0;border-top:1px solid #e4e0d7;margin:24px 0" />
          <p style="white-space:pre-wrap">${escapeHtml(enquiry)}</p>
        </div>
      </div>`,
  };

  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "Idempotency-Key": idempotencyKey,
        },
        body: JSON.stringify(resendPayload),
        signal: AbortSignal.timeout(12_000),
      });

      if (resendResponse.ok) return response("Thanks—your enquiry is on its way. We’ll be in touch soon.", 200, origin);

      if (resendResponse.status < 500 && resendResponse.status !== 429) {
        console.error(`[contact] Resend rejected the request (${resendResponse.status}).`);
        break;
      }
    } catch (error) {
      if (attempt === 1) console.error("[contact] Resend request failed.", error instanceof Error ? error.message : "Unknown error");
    }

    if (attempt === 0) await new Promise((resolve) => setTimeout(resolve, 350));
  }

  return response("We could not send your enquiry just now. Please email office@structec.co.nz.", 502, origin);
}

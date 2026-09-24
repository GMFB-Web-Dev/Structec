# Structec Construction website

Modern multi-page Next.js website for Structec Construction.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

The form posts to `POST /api/contact` and sends the enquiry through Resend. Configure these environment variables locally and in Vercel:

```bash
CONTACT_FORM_TO_EMAIL=office@structec.co.nz
RESEND_API_KEY=re_xxxxxxxxx
```

The endpoint accepts same-origin requests and explicitly allows `https://structec.vercel.app`, plus localhost ports 3000 and 3001. It validates input, includes a honeypot field, sends both HTML and plain-text email, sets the visitor's email as the reply-to address, and retries transient Resend failures once with the same idempotency key.

The sender is `Structec Website <website@weblaunch.co.nz>`. The `weblaunch.co.nz` domain is verified in the connected Resend account with sending enabled, so enquiries can be delivered to the address configured in `CONTACT_FORM_TO_EMAIL` without the `resend.dev` testing restriction. Only the two variables above are required.

## Validation

```bash
npm run lint
npm run build
```

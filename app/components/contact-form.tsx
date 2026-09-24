"use client";

import { FormEvent, useState } from "react";
import { Arrow } from "./arrow";
import { services } from "../lib/site-data";

type FormState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json() as { message?: string };

      if (!response.ok) throw new Error(result.message || "We could not send your enquiry.");

      setState("success");
      setMessage(result.message || "Thanks—your enquiry is on its way.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Name<input type="text" name="name" autoComplete="name" required maxLength={100} placeholder="Your name" /></label>
        <label>Phone<input type="tel" name="phone" autoComplete="tel" maxLength={40} placeholder="Your phone" /></label>
      </div>
      <label>Email<input type="email" name="email" autoComplete="email" required maxLength={160} placeholder="you@email.co.nz" /></label>
      <label>Project type
        <select name="projectType" defaultValue="">
          <option value="">Select a service</option>
          {services.map((service) => <option value={service.title} key={service.slug}>{service.title}</option>)}
          <option value="Other">Other / not sure yet</option>
        </select>
      </label>
      <label>Tell us about your project<textarea name="message" required maxLength={3000} rows={4} placeholder="A little about your project, location and timing..." /></label>
      <label className="form-honeypot" aria-hidden="true">Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      <button className="button button--gold" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send enquiry"} <Arrow /></button>
      {message && <p className={`form-status form-status--${state}`} role="status">{message}</p>}
    </form>
  );
}

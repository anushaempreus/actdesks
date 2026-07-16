"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");
  const submitted = status === "success";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(json.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please check your connection and try again.");
    }
  }

  if (submitted) {
    return (
      <div className="bg-light border-l-4 border-brand-orange p-8">
        <h3 className="font-heading text-2xl font-semibold mb-2">Thank you!</h3>
        <p>
          Your enquiry has been received. The ACT Decks team will be in touch shortly. For urgent
          enquiries, please call us on{" "}
          <a href="tel:0262806858" className="text-brand-orange font-semibold">02 6280 6858</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — hidden from real users, catches bots. Do not remove. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <input type="text" name="name" required placeholder="Name *" className="w-full border border-gray-300 px-4 py-3 focus:border-brand-orange focus:outline-none" />
        <input type="tel" name="phone" required placeholder="Phone number *" className="w-full border border-gray-300 px-4 py-3 focus:border-brand-orange focus:outline-none" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input type="email" name="email" required placeholder="Email address *" className="w-full border border-gray-300 px-4 py-3 focus:border-brand-orange focus:outline-none" />
        <input type="text" name="address" required placeholder="Residential address *" className="w-full border border-gray-300 px-4 py-3 focus:border-brand-orange focus:outline-none" />
      </div>
      <textarea name="message" rows={6} placeholder="Tell us about your project" className="w-full border border-gray-300 px-4 py-3 focus:border-brand-orange focus:outline-none" />
      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">{error}</p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

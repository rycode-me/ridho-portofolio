"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend is wired up yet. Replace this with a real submit
    // handler (API route, Formspree, Resend, etc.) when ready.
    setStatus("sent");
  }

  return (
    <section id="contact" className="border-b border-base-border">
      <div className="mx-auto max-w-content px-6 py-20">
        <p className="section-label">/contact</p>
        <h2 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">
          Let&apos;s Connect
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-muted">
          Saya terbuka untuk berdiskusi mengenai cybersecurity, Linux, networking,
          infrastructure, atau peluang untuk berkembang di bidang IT.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <ul className="space-y-3 text-sm">
            <li>
              <span className="text-ink-faint">Email — </span>
              <a href={profile.social.email} className="text-signal-teal hover:underline">
                {profile.email}
              </a>
            </li>
            <li>
              <span className="text-ink-faint">GitHub — </span>
              <a href={profile.social.github} className="text-signal-teal hover:underline">
                {profile.social.github.replace("https://", "")}
              </a>
            </li>
            <li>
              <span className="text-ink-faint">LinkedIn — </span>
              <a href={profile.social.linkedin} className="text-signal-teal hover:underline">
                {profile.social.linkedin.replace("https://", "")}
              </a>
            </li>
          </ul>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs text-ink-faint">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="focus-ring mt-1 w-full rounded-md border border-base-border bg-base-surface px-3 py-2 text-sm text-ink"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs text-ink-faint">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="focus-ring mt-1 w-full rounded-md border border-base-border bg-base-surface px-3 py-2 text-sm text-ink"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs text-ink-faint">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="focus-ring mt-1 w-full rounded-md border border-base-border bg-base-surface px-3 py-2 text-sm text-ink"
              />
            </div>
            <button
              type="submit"
              className="focus-ring rounded-md bg-signal-teal px-5 py-2.5 text-sm font-medium text-base transition-opacity hover:opacity-90"
            >
              Send message
            </button>
            {status === "sent" && (
              <p role="status" className="text-xs text-signal-teal">
                Message captured locally — connect a backend to actually deliver it.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

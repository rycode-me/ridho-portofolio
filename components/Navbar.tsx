"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-base-border/60 bg-base/85 backdrop-blur">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm text-ink focus-ring rounded">
          ryp<span className="text-signal-teal">@</span>portfolio
        </a>

        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-ink-muted transition-colors hover:text-ink focus-ring rounded"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.social.email}
          className="hidden rounded-md border border-base-border px-4 py-2 text-sm text-ink transition-colors hover:border-signal-teal hover:text-signal-teal focus-ring md:inline-block"
        >
          Contact Me
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          className="focus-ring flex flex-col gap-1.5 rounded p-2 md:hidden"
        >
          <span className={`h-px w-5 bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-base-border md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-ink-muted hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

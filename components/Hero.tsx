"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import NetworkBackground from "./NetworkBackground";

const badges = ["Linux", "Networking", "Security"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-base-border">
      <NetworkBackground />
      <div className="relative mx-auto grid max-w-content gap-12 px-6 py-24 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="section-label">$ whoami --headline</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-mono text-sm text-signal-teal sm:text-base">
            {profile.roles.join(" • ")}
          </p>
          <p className="mt-6 max-w-xl text-lg text-ink-muted">{profile.subheadline}</p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-muted">
            {profile.bio}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="focus-ring rounded-md bg-signal-teal px-5 py-3 text-sm font-medium text-base transition-opacity hover:opacity-90"
            >
              View My Work
            </a>
            <a
              href={profile.cvPath}
              download
              className="focus-ring rounded-md border border-base-border px-5 py-3 text-sm text-ink transition-colors hover:border-signal-teal hover:text-signal-teal"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="focus-ring rounded-md border border-transparent px-5 py-3 text-sm text-ink-muted transition-colors hover:text-ink"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex gap-5 text-ink-muted">
            <a
              href={profile.social.github}
              className="focus-ring rounded text-sm transition-colors hover:text-signal-teal"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href={profile.social.linkedin}
              className="focus-ring rounded text-sm transition-colors hover:text-signal-teal"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href={profile.social.email}
              className="focus-ring rounded text-sm transition-colors hover:text-signal-teal"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-base-border bg-base-surface shadow-[0_0_40px_-10px_rgba(79,179,191,0.25)]">
            <Image
              src={profile.photoPath}
              alt={`Foto profesional ${profile.name}`}
              fill
              sizes="(max-width: 768px) 80vw, 380px"
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute -left-4 -top-4 rounded-md border border-base-border bg-base-raised px-3 py-1.5 font-mono text-xs text-signal-teal shadow-lg">
            {badges[0]}
          </div>
          <div className="absolute -right-3 top-1/3 rounded-md border border-base-border bg-base-raised px-3 py-1.5 font-mono text-xs text-signal-blue shadow-lg">
            {badges[1]}
          </div>
          <div className="absolute -bottom-4 left-1/4 rounded-md border border-base-border bg-base-raised px-3 py-1.5 font-mono text-xs text-signal-amber shadow-lg">
            {badges[2]}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

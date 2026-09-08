import { certifications } from "@/data/profile";

export default function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <section className="border-b border-base-border bg-base-surface/40">
      <div className="mx-auto max-w-content px-6 py-20">
        <p className="section-label">/credentials</p>
        <h2 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">
          Certifications &amp; Learning
        </h2>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <li
              key={i}
              className="rounded-lg border border-base-border bg-base p-5"
            >
              <p className="text-base font-medium text-ink">{cert.name}</p>
              <p className="mt-1 text-sm text-ink-muted">
                {cert.organization} · {cert.year}
              </p>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  className="focus-ring mt-3 inline-block text-xs text-signal-teal hover:underline"
                >
                  View credential
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

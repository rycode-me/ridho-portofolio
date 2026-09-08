import { journey } from "@/data/profile";

export default function Experience() {
  return (
    <section id="journey" className="border-b border-base-border">
      <div className="mx-auto max-w-content px-6 py-20">
        <p className="section-label">/var/log/journey</p>
        <h2 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">My Journey</h2>

        <ol className="mt-10 space-y-8 border-l border-base-border pl-8">
          {journey.map((entry, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[35px] top-1.5 h-2.5 w-2.5 rounded-full border border-signal-teal bg-base" />
              <p className="font-mono text-xs text-signal-teal">{entry.period}</p>
              <h3 className="mt-1 text-lg font-medium text-ink">{entry.title}</h3>
              <p className="mt-1 font-mono text-xs text-ink-faint">{entry.tag}</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
                {entry.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

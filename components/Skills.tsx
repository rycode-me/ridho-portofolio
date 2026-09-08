import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-base-border bg-base-surface/40">
      <div className="mx-auto max-w-content px-6 py-20">
        <p className="section-label">/etc/skills</p>
        <h2 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">
          Skills &amp; Technologies
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="rounded-lg border border-base-border bg-base p-6"
            >
              <p className="font-mono text-xs text-ink-faint">{group.command}</p>
              <h3 className="mt-2 text-base font-medium text-ink">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-base-border px-2.5 py-1 text-xs text-ink-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

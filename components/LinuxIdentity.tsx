import { profile } from "@/data/profile";

const rows: [string, string][] = [
  ["OS", profile.neofetch.os],
  ["Shell", profile.neofetch.shell],
  ["Focus", profile.neofetch.focus],
  ["Network", profile.neofetch.network],
  ["Role", profile.neofetch.role],
  ["Mindset", profile.neofetch.mindset],
];

export default function LinuxIdentity() {
  return (
    <section className="border-b border-base-border">
      <div className="mx-auto max-w-content px-6 py-16">
        <div className="mx-auto max-w-md rounded-lg border border-base-border bg-base-surface p-6 font-mono text-sm">
          <p className="text-ink-faint">$ identity --user ridho</p>
          <div className="mt-4 space-y-1.5">
            {rows.map(([label, value]) => (
              <div key={label} className="flex gap-4">
                <span className="w-24 shrink-0 text-signal-teal">{label}</span>
                <span className="text-ink-muted">: {value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

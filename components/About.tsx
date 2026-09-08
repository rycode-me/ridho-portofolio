import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="border-b border-base-border">
      <div className="mx-auto max-w-content px-6 py-20">
        <p className="section-label">whoami</p>
        <h2 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">About Me</h2>

        <div className="mt-10 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-base-border bg-base-surface p-6 font-mono text-sm leading-relaxed">
            <p className="text-ink-faint">$ whoami</p>
            <p className="mt-1 text-signal-teal">{profile.handle}</p>
            <p className="mt-4 text-ink-faint">$ cat focus.txt</p>
            <p className="mt-1 text-ink-muted">{profile.focus}</p>
          </div>

          <div>
            <p className="text-base leading-relaxed text-ink-muted">{profile.bio}</p>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-base-border pt-6 text-sm">
              <div>
                <dt className="text-ink-faint">Location</dt>
                <dd className="mt-1 text-ink">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-ink-faint">Email</dt>
                <dd className="mt-1 text-ink">{profile.email}</dd>
              </div>
              <div>
                <dt className="text-ink-faint">Education</dt>
                <dd className="mt-1 text-ink">{profile.education}</dd>
              </div>
              <div>
                <dt className="text-ink-faint">Current Goal</dt>
                <dd className="mt-1 text-ink">{profile.currentGoal}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto flex max-w-content flex-col items-center gap-2 px-6 text-center">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} Ridho Yoss Pratama
        </p>
        <p className="text-xs text-ink-faint">
          Built with curiosity, Linux, and too much coffee.
        </p>
      </div>
    </footer>
  );
}

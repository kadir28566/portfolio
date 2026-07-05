export default function StatusLine() {
  return (
    <p className="flex items-center gap-2 font-mono text-sm text-ink-dim">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-pulse-slow rounded-full bg-accent" />
      </span>
      · İstanbul 
    </p>
  );
}

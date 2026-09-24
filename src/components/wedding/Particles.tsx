export function Particles({ count = 24 }: { count?: number }) {
  const particles = Array.from({ length: count });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, i) => {
        const size = 2 + Math.random() * 5;
        const left = Math.random() * 100;
        const delay = Math.random() * 12;
        const duration = 12 + Math.random() * 18;
        const dx = (Math.random() - 0.5) * 120;
        return (
          <span
            key={i}
            className="animate-drift absolute bottom-0 rounded-full"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              background:
                "radial-gradient(circle, oklch(0.95 0.05 20 / 0.9), transparent 70%)",
              boxShadow: "0 0 12px oklch(0.85 0.08 20 / 0.7)",
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              ["--dx" as never]: `${dx}px`,
            }}
          />
        );
      })}
    </div>
  );
}

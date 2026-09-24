import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TARGET = new Date("2026-07-10T20:00:00").getTime();

function useCountdown() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, TARGET - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const t = useCountdown();
  const items = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.minutes },
    { label: "Seconds", value: t.seconds },
  ];

  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-script text-2xl text-rose">counting the days</p>
        <h2 className="mt-4 text-4xl text-primary md:text-5xl">Until forever begins</h2>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass glow-hover rounded-3xl px-6 py-10"
            >
              <div className="text-5xl text-primary md:text-6xl tabular-nums">
                {String(it.value).padStart(2, "0")}
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.4em] text-rose-deep">
                {it.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

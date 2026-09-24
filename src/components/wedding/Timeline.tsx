import { motion } from "framer-motion";
import { Sparkles, Flower2, Wine, Music, Moon } from "lucide-react";

const events = [
  {
    time: "8 pm",
    title: "Guest Reception",
    desc: "Welcoming our beloved family and friends.",
    Icon: Sparkles,
  },
  {
    time: "9 pm",
    title: "Wedding Celebration Begins",
    desc: "The evening officially begins with joy and love.",
    Icon: Flower2,
  },
  {
    time: "9:30 pm",
    title: "First Dance",
    desc: "Our first dance together as husband and wife.",
    Icon: Music,
  },
  {
    time: "1:00 am",
    title: "Farewell Moment",
    desc: "A final memory together and the goodbye photo.",
    Icon: Moon,
  },
];

export function Timeline() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="font-script text-2xl text-rose">the evening</p>
          <h2 className="mt-3 text-4xl text-primary md:text-5xl">Order of the Day</h2>
        </div>

        <div className="relative mt-20">
          <div className="absolute bottom-0 left-8 top-0 w-px bg-gradient-to-b from-transparent via-rose to-transparent md:left-1/2" />

          <div className="space-y-12">
            {events.map((e, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={e.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7 }}
                  className={`relative flex items-start gap-6 md:items-center ${
                    left ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blush text-rose-deep shadow-[var(--shadow-soft)] md:absolute md:left-1/2 md:-translate-x-1/2">
                    <e.Icon className="h-6 w-6" />
                  </div>
                  <div
                    className={`glass glow-hover ml-4 flex-1 rounded-3xl px-7 py-6 md:ml-0 md:max-w-[44%] ${
                      left ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
                    }`}
                  >
                    <div className="font-script text-xl text-rose">{e.time}</div>
                    <h3 className="mt-1 text-2xl text-primary">{e.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

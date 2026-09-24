import { motion } from "framer-motion";

// const palette = [
//   { name: "Blush", hex: "#F4D4D4" },
//   { name: "Champagne", hex: "#E8D5B7" },
//   { name: "Dusty Rose", hex: "#C9A0A0" },
//   { name: "Ivory", hex: "#F8F1E5" },
//   { name: "Mauve", hex: "#B89BAE" },
//   { name: "Sage", hex: "#B8C5A6" },
// ];

export function DressCode() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-rose-deep">Attire</p>

          <h2 className="mt-4 text-5xl text-primary md:text-6xl">
            Dress to <span className="font-script text-rose">celebrate</span>
          </h2>

          <p className="mt-6 leading-relaxed text-muted-foreground">
            Elegant attire is warmly encouraged. We would love for everyone to feel beautiful,
            comfortable, and completely themselves on this special evening.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import floral from "@/assets/floral.png";

export function Closing() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

  return (
    <section ref={ref} className="relative overflow-hidden px-6 py-40 dreamy-bg">
      <motion.img
        src={floral}
        alt=""
        aria-hidden
        style={{ y, scale }}
        className="pointer-events-none absolute -bottom-32 left-1/2 w-[600px] -translate-x-1/2 opacity-50"
      />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-script text-3xl text-rose"
        >
          and so, the story begins
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mt-6 text-5xl text-primary md:text-7xl"
        >
          With love, <br />
          <span className="font-script text-rose-deep">Maryam & Mohamed</span>
        </motion.h2>
        <div className="divider-ornament mt-12">✦</div>
        <p className="mt-6 text-xs uppercase tracking-[0.5em] text-muted-foreground">
          July Tenth · Two Thousand Twenty Six
        </p>
      </div>
    </section>
  );
}

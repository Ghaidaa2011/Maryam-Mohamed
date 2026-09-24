import { motion } from "framer-motion";
import floral from "@/assets/floral.png";
import { Particles } from "./Particles";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden dreamy-bg">
      <motion.img
        src={floral}
        alt=""
        aria-hidden
        className="animate-float-slow pointer-events-none absolute -left-24 -top-20 w-[420px] opacity-70 md:w-[560px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.img
        src={floral}
        alt=""
        aria-hidden
        className="animate-float-slow pointer-events-none absolute -bottom-32 -right-24 w-[480px] rotate-180 opacity-60 md:w-[620px]"
        style={{ animationDelay: "3s" }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2, delay: 0.4 }}
      />

      <Particles count={28} />

      <div className="relative z-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-script text-2xl text-rose md:text-3xl"
        >
          together with their families
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-6 text-6xl leading-[0.95] text-primary md:text-[10rem]"
        >
          Maryam
          <span className="mx-4 font-script text-5xl text-rose md:text-7xl">&</span>
          <br className="md:hidden" />
          Mohamed
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10"
        >
          <div className="divider-ornament">
            <span className="text-xs uppercase tracking-[0.5em] text-rose-deep">10 · 7 · 2026</span>
          </div>
          <p className="mt-6 text-sm uppercase tracking-[0.4em] text-muted-foreground">
            La Reine Hall
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute -bottom-32 left-1/2 -translate-x-1/2"
        >
          <div className="h-16 w-px bg-gradient-to-b from-transparent to-rose" />
        </motion.div>
      </div>
    </section>
  );
}

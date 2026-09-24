import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import venue from "@/assets/hall.jpeg";

export function Venue() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden rounded-[2.5rem] shadow-[var(--shadow-soft)]"
        >
          <img
            src={venue}
            alt="La Reine ceremony hall"
            width={1920}
            height={1080}
            loading="lazy"
            className="h-[460px] w-full object-cover md:h-[560px]"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-blush/30" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div className="text-primary-foreground">
              <p className="font-script text-xl">where it begins</p>
              <p className="text-xs uppercase tracking-[0.4em]">Cairo, Egypt</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-rose-deep">The Venue</p>
          <h2 className="mt-4 text-5xl text-primary">La Reine Hall</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            An elegant celebration venue in the heart of New Cairo. Join us for a magical evening
            filled with love, music, and unforgettable memories.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-rose-deep">
            <MapPin className="h-4 w-4" />
            <span>التجمع الخامس - محور المشير طنطاوي - دار ضباط الوقود - فندق راماچ</span>
          </div>
          <a
            href="https://www.google.com/maps?q=30.022729873657227,31.363452911376953&z=17&hl=en"
            target="_blank"
            rel="noreferrer"
            className="glass glow-hover mt-8 inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm uppercase tracking-[0.3em] text-primary"
          >
            Open in Maps <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

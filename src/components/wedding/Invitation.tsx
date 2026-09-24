import { motion } from "framer-motion";
import couple from "@/assets/couple.jpeg";

export function Invitation() {
  return (
    <section className="relative px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="glass mx-auto max-w-2xl rounded-[2rem] px-10 py-16 text-center md:px-16"
      >
        <motion.figure
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mx-auto mb-14 max-w-sm"
        >
          <div className="border border-champagne bg-ivory p-2 shadow-[0_18px_45px_-18px_oklch(0.42_0.09_15_/_0.35)]">
            <img
              src={couple}
              alt="Maryam and Mohamed together"
              className="aspect-[3/4] w-full object-cover object-center"
            />
          </div>
          <figcaption className="mt-5 font-script text-2xl text-rose-deep">
            our favorite beginning
          </figcaption>
        </motion.figure>
        <p className="font-script text-3xl text-rose">an invitation</p>
        <div className="divider-ornament my-8">✦</div>
        <h2 className="text-4xl text-primary md:text-5xl">
          Two souls, one promise — written in the warmth of a summer evening.
        </h2>
        <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
          We invite you to share in the quiet beginning of our forever. A day of gentle vows, slow
          dinners, and dancing beneath the olive trees.
        </p>
        <p className="font-script mt-10 text-2xl text-rose-deep">— M. & M.</p>
      </motion.div>
    </section>
  );
}

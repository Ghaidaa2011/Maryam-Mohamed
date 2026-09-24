import { motion } from "framer-motion";

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

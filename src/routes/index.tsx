import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Hero } from "@/components/wedding/Hero";
import { Invitation } from "@/components/wedding/Invitation";
import { Countdown } from "@/components/wedding/Countdown";
import { Venue } from "@/components/wedding/Venue";
import { Timeline } from "@/components/wedding/Timeline";
import { DressCode } from "@/components/wedding/DressCode";
// import { Rsvp } from "@/components/wedding/Rsvp";
import { Closing } from "@/components/wedding/Closing";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Maryam & Mohamed · October 6, 2026" },
      {
        name: "description",
        content:
          "A luxury wedding invitation for the marriage of Maryam & Mohamed at Diamond Hall, Cairo — October 6 , 2026.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Jost:wght@300;400;500&family=Pinyon+Script&display=swap",
      },
    ],
  }),
});

function Loader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1800);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background dreamy-bg"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-script text-5xl text-rose-deep"
        >
          M &amp; M
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="mx-auto mt-6 h-px w-40 origin-left bg-gradient-to-r from-transparent via-rose to-transparent"
        />
        <p className="mt-6 text-xs uppercase tracking-[0.5em] text-muted-foreground">
          A love letter loading…
        </p>
      </div>
    </motion.div>
  );
}

function Index() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-background">
      <AnimatePresence>{loading && <Loader onDone={() => setLoading(false)} />}</AnimatePresence>

      <Hero />
      <Invitation />
      <Countdown />
      <Venue />
      <Timeline />
      <DressCode />
      {/* <Rsvp /> */}
      <Closing />
    </main>
  );
}

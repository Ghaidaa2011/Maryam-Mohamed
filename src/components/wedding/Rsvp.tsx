// import { motion, AnimatePresence } from "framer-motion";
// import { useState, type FormEvent } from "react";
// import { Heart, Check } from "lucide-react";

// export function Rsvp() {
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const FORM_ENDPOINT = import.meta.env.VITE_RSVP_ENDPOINT ?? "https://formspree.io/f/mykvpklj";

//   const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const form = e.currentTarget;
//       const formData = new FormData(form);

//       const res = await fetch(FORM_ENDPOINT, {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//         },
//         body: formData,
//       });

//       setLoading(false);

//       if (res.ok) {
//         form.reset();
//         setOpen(true);
//       } else {
//         const data = await res.json().catch(() => ({}));
//         console.error("RSVP submit error", data);
//         alert("Unable to send RSVP. Please try again later.");
//       }
//     } catch (err) {
//       console.error(err);
//       setLoading(false);
//       alert("Unable to send RSVP. Please try again later.");
//     }
//   };

//   const input =
//     "glass w-full rounded-2xl border border-border bg-card/60 px-6 py-4 text-primary placeholder:text-muted-foreground/70 outline-none transition focus:border-rose focus:ring-4 focus:ring-rose/15";

//   return (
//     <section className="relative px-6 py-32">
//       <div className="mx-auto max-w-2xl">
//         <div className="text-center">
//           <p className="font-script text-2xl text-rose">kindly reply</p>
//           <h2 className="mt-3 text-4xl text-primary md:text-5xl">RSVP</h2>
//           <p className="mt-4 text-sm text-muted-foreground">Please respond by August 1st, 2026</p>
//         </div>

//         <motion.form
//           onSubmit={onSubmit}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.9 }}
//           className="glass mt-12 space-y-5 rounded-[2rem] p-8 md:p-12"
//         >
//           <input name="name" className={input} placeholder="Your full name" required />
//           <input name="email" className={input} type="email" placeholder="Email" required />
//           <div className="grid gap-5 md:grid-cols-2">
//             <select name="attendance" className={input} defaultValue="" required>
//               <option value="" disabled>
//                 Will you attend?
//               </option>
//               <option>Joyfully accepts</option>
//               <option>Regretfully declines</option>
//             </select>
//             <input
//               name="guests"
//               className={input}
//               type="number"
//               min={1}
//               max={5}
//               placeholder="Guests"
//             />
//           </div>
//           <textarea
//             name="message"
//             className={`${input} min-h-32 resize-none`}
//             placeholder="A message for the couple…"
//           />

//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             disabled={loading}
//             className="group relative w-full overflow-hidden rounded-2xl bg-primary px-8 py-5 text-sm uppercase tracking-[0.4em] text-primary-foreground shadow-[var(--shadow-soft)] transition hover:shadow-[var(--shadow-glow)]"
//           >
//             <span className="relative z-10 inline-flex items-center justify-center gap-3">
//               {loading ? "Sending…" : "Send RSVP"}
//               <Heart className="h-4 w-4" />
//             </span>
//             <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-rose via-blush to-rose opacity-80 transition-transform duration-700 group-hover:translate-x-0" />
//           </motion.button>
//         </motion.form>
//       </div>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-primary/30 backdrop-blur-md"
//             onClick={() => setOpen(false)}
//           >
//             <motion.div
//               initial={{ scale: 0.85, opacity: 0, y: 20 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ type: "spring", damping: 18 }}
//               onClick={(e) => e.stopPropagation()}
//               className="glass mx-6 max-w-md rounded-[2rem] p-12 text-center"
//             >
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.2, type: "spring" }}
//                 className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blush text-rose-deep"
//               >
//                 <Check className="h-10 w-10" />
//               </motion.div>
//               <h3 className="mt-6 text-3xl text-primary">Thank you</h3>
//               <p className="font-script mt-2 text-2xl text-rose">
//                 we cannot wait to celebrate with you
//               </p>
//               <button
//                 onClick={() => setOpen(false)}
//                 className="mt-8 rounded-full border border-border px-6 py-3 text-xs uppercase tracking-[0.3em] text-primary transition hover:bg-blush/40"
//               >
//                 Close
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

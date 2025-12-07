'use client';

// import { motion } from 'framer-motion';
// import Button from '../ui/Button';
// import Container from '../ui/Container';
// import Link from 'next/link';

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.18 },
//   },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
// };

// export default function Hero() {
//   return (
//     <section
//       id="top"
//       className="relative min-h-[100vh] overflow-hidden pb-24 pt-28 lg:pt-32"
//     >
//       {/* Background lighting */}
//       <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_30%_0%,rgba(56,189,248,0.85),transparent)] blur-3xl" />
//       <div className="pointer-events-none absolute -right-40 top-32 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_70%_0%,rgba(249,115,22,0.95),transparent)] blur-3xl" />
//       <div className="pointer-events-none absolute inset-x-0 bottom-[-40%] h-[60%] bg-[radial-gradient(circle_at_bottom,rgba(129,140,248,0.85),transparent)] blur-3xl" />

//       {/* Grid Overlay */}
//       <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
//         <div className="bg-grid" />
//       </div>

//       <Container>
//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="show"
//           className="relative grid gap-12 lg:grid-cols-[1.15fr_0.9fr] lg:items-center"
//         >
//           {/* LEFT CONTENT */}
//           <div className="space-y-8">
//             {/* Small Tagline */}
//             <motion.div
//               variants={fadeUp}
//               className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300"
//             >
//               <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
//               Smartphone EMI providers for Bangladesh
//             </motion.div>

//             {/* HEADLINE */}
//             <motion.h1
//               variants={fadeUp}
//               className="text-4xl font-semibold leading-tight md:text-6xl"
//             >
//               Own the smartphone you need.
//               <br />
//               <span className="bg-[linear-gradient(to_right,#22d3ee,#f97316,#ec4899)] bg-clip-text text-transparent">
//                 Pay in easy EMIs.
//               </span>
//             </motion.h1>

//             {/* SUBHEADLINE */}
//             <motion.p
//               variants={fadeUp}
//               className="max-w-xl text-sm text-slate-300 md:text-base"
//             >
//               Get your next smartphone from any SahajMobile partner shop. No
//               credit card, minimal paperwork, and instant approval — built for
//               everyday workers across Bangladesh.
//             </motion.p>

//             {/* CTAs */}
//             <motion.div
//               variants={fadeUp}
//               className="flex flex-wrap items-center gap-4"
//             >
//               <a
//                 href="https://api.whatsapp.com/send?phone=%2B8801901634762"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Button className="w-full text-[13px]">
//                   Get a Phone on EMI
//                 </Button>
//               </a>
//               <Link
//                 href="mailto:info@sahajmobile.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Button variant="secondary" className="px-6 py-3 text-sm">
//                   Become Partner
//                 </Button>
//               </Link>

//               <span className="text-[11px] text-slate-400">
//                 17k+ customers · 1,250+ shops · Fair, secure EMI for all
//               </span>
//             </motion.div>
//           </div>
//         </motion.div>
//       </Container>
//     </section>
//   );
// }
'use client';

import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const phoneRef = useRef(null);
  const { scrollY } = useScroll();

  // ----- Scroll reactive particles -----
  const particleY = useTransform(scrollY, [0, 400], [0, -150]);

  // ----- 360° phone rotation -----
  const rotatePhone = useTransform(scrollY, [0, 300], [0, 360]);

  // ----- EMI text pulse animation -----
  const emiPulse = {
    animate: {
      opacity: [0.7, 1, 0.7],
      scale: [1, 1.05, 1],
      transition: { repeat: Infinity, duration: 2.5, ease: 'easeInOut' },
    },
  };

  // ----- Mouse parallax -----
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <section
      className="
        relative h-screen w-full overflow-hidden flex justify-center items-center 
        bg-[#040b19] z-[30]   /* THIS HIDES THREE.JS BEHIND HERO */
      "
      onMouseMove={(e) => {
        x.set((e.clientX - window.innerWidth / 2) / 80);
        y.set((e.clientY - window.innerHeight / 2) / 80);
      }}
    >
      {/* BACKGROUND VIDEO */}
      <video
        src="/videos/hero1.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-[0.60]"
      />

      {/* DARK GRADIENT MASK */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.15),rgba(0,0,0,0.9))]"></div>

      {/* GLASS ORBIT RINGS */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="
          absolute w-[900px] h-[900px] rounded-full 
          border border-slate-500/10 
          backdrop-blur-3xl opacity-30
        "
        style={{ x, y }}
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        className="
          absolute w-[1200px] h-[1200px] rounded-full 
          border border-slate-500/5 
          backdrop-blur-3xl opacity-20
        "
      />

      {/* SWIRLING PARTICLES */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            y: particleY,
            x: Math.sin(i) * 200,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
            y: [0, -150, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.15,
          }}
          className="absolute w-2 h-2 rounded-full bg-cyan-300/40 blur-sm"
        />
      ))}

      {/* HERO TEXT */}
      <div className="relative z-20 text-center max-w-3xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-white"
        >
          Own the smartphone you need.
          <br />
          <motion.span
            variants={emiPulse}
            animate="animate"
            className="bg-gradient-to-r from-cyan-400 via-orange-400 to-pink-400 
            bg-clip-text text-transparent inline-block"
          >
            Pay in easy EMIs.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-slate-300 mt-5 max-w-xl mx-auto"
        >
          Secure EMI for real Bangladesh. No credit card, instant approval.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex gap-5 justify-center mt-8"
        >
          <motion.a
            href="https://api.whatsapp.com/send?phone=%2B8801901634762"
            animate={{
              boxShadow: [
                '0 0 20px rgba(56,189,248,0.4)',
                '0 0 45px rgba(56,189,248,0.7)',
                '0 0 20px rgba(56,189,248,0.4)',
              ],
            }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="
              px-8 py-3 bg-gradient-to-r from-cyan-400 to-pink-400 
              text-black font-semibold rounded-full
            "
          >
            Get a Phone on EMI
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

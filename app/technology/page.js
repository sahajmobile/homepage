// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import SectionWrapper from '@/components/sections/SectionWrapper';
// import Navbar from '@/components/Navbar';

// const tech = [
//   {
//     title: 'Sahaj Manager App',
//     body: 'Retail partners onboard customers, verify identity, and issue EMI directly inside the SahajMobile Manager App.',
//   },
//   {
//     title: 'Sahaj Locker',
//     body: 'Device-level security allows locking/unlocking smartphones based on repayment performance — reducing default rates dramatically.',
//   },

// ];

// export default function Technology() {
//   return (
//     <>
//       <Navbar />
//       <SectionWrapper className="section-padding animated-bg">
//         {/* Header */}
//         <div className="text-center mb-16 relative z-10">
//           <h2 className="text-4xl font-semibold bg-gradient-to-r from-cyan-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
//             Technology
//           </h2>
//           <p className="text-slate-400 max-w-xl mx-auto text-sm mt-3">
//             Lightweight infrastructure powering EMI, device intelligence, and
//             underwriting across low-income markets.
//           </p>
//         </div>

//         {/* FEATURE MOCKUP IMAGE */}
//         <div className="relative w-full flex justify-center mb-20">
//           {/* Glow aura */}
//           <div
//             className="absolute w-[500px] h-[500px] rounded-full
//           bg-[radial-gradient(circle,rgba(56,189,248,0.25),transparent)]
//           blur-3xl opacity-60 -z-10"
//           />

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, y: 30 }}
//             whileInView={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.03, y: -5 }}
//             className="relative drop-shadow-[0_0_50px_rgba(56,189,248,0.35)] transition-all"
//           >
//             <Image
//               src="/tech2.png"
//               alt="SahajMobile System UI"
//               width={1200}
//               height={700}
//               className="rounded-2xl shadow-xl"
//               priority
//             />
//           </motion.div>
//         </div>

//         {/* TECHNOLOGY CARDS */}
//         <div className="grid md:grid-cols-3 gap-8 relative z-10">
//           {tech.map((t, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.45, delay: idx * 0.15 }}
//               viewport={{ once: true }}
//               whileHover={{
//                 y: -8,
//                 boxShadow: '0 0 35px rgba(129,140,248,0.35)',
//               }}
//               className="rounded-2xl bg-slate-900/60 border border-slate-800
//             p-6 backdrop-blur-xl
//             transition-all duration-300"
//             >
//               <h3 className="text-lg font-semibold text-white">{t.title}</h3>
//               <p className="text-slate-400 text-sm mt-3">{t.body}</p>
//             </motion.div>
//           ))}
//         </div>
//       </SectionWrapper>
//     </>
//   );
// }
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from '@/components/sections/SectionWrapper';
import Navbar from '@/components/Navbar';

const tech = [
  {
    title: 'Sahaj Manager App',
    body: 'Retail partners onboard customers, verify identity, and issue EMI directly inside the SahajMobile Manager App.',
  },
  {
    title: 'Sahaj Locker',
    body: 'Device-level security allows locking/unlocking smartphones based on repayment performance — reducing default rates dramatically.',
  },
];

export default function Technology() {
  return (
    <>
      <Navbar />

      <SectionWrapper className="relative section-padding pb-32 overflow-hidden">
        {/* === Soft star gradient overlays (matches How It Works) === */}
        <div className="pointer-events-none absolute inset-0">
          {/* top blend */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950 via-transparent to-transparent"></div>
          {/* bottom blend */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>

        {/* Header */}
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-4xl font-semibold bg-gradient-to-r from-cyan-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
            Technology
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm mt-3">
            Lightweight infrastructure powering EMI, device intelligence, and
            underwriting.
          </p>
        </div>

        {/* FEATURE SECTION — NEW PREMIUM LOOK */}
        <div className="relative flex justify-center mb-28">
          {/* Ambient glow */}
          <div className="absolute w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.18),transparent)] blur-3xl opacity-70 -z-10"></div>

          {/* Gradient Border Container */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="
              relative p-[2px] rounded-3xl
              bg-gradient-to-r from-cyan-400/40 via-orange-400/40 to-pink-400/40
              shadow-[0_0_80px_rgba(56,189,248,0.25)]
            "
          >
            <div className="rounded-3xl bg-black/40 backdrop-blur-2xl p-2">
              <Image
                src="/tech2.png"
                alt="SahajMobile System UI"
                width={1300}
                height={800}
                className="rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)]"
              />
            </div>
          </motion.div>
        </div>

        {/* TECHNOLOGY CARDS — now gradient + neon style */}
        <div className="grid md:grid-cols-3 gap-10 relative z-10">
          {tech.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.15 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="
                relative p-[2px] rounded-2xl
                bg-gradient-to-r from-cyan-400/30 via-orange-400/30 to-pink-400/30
                hover:shadow-[0_0_45px_rgba(56,189,248,0.45)]
                transition-all duration-300
              "
            >
              <div className="rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl p-6">
                <h3 className="text-lg font-semibold text-white drop-shadow-[0_0_12px_rgba(56,189,248,0.3)]">
                  {t.title}
                </h3>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  {t.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}

// 'use client';

// import { motion } from 'framer-motion';
// import Button from '../ui/Button';
// import Container from '../ui/Container';

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
//       {/* Background accent gradients */}
//       <div
//         className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full
//         bg-[radial-gradient(circle_at_30%_0%,rgba(56,189,248,0.8),transparent)] blur-3xl"
//       />
//       <div
//         className="pointer-events-none absolute -right-40 top-32 h-96 w-96 rounded-full
//         bg-[radial-gradient(circle_at_70%_0%,rgba(249,115,22,0.9),transparent)] blur-3xl"
//       />
//       <div
//         className="pointer-events-none absolute inset-x-0 bottom-[-40%] h-[60%]
//         bg-[radial-gradient(circle_at_bottom,rgba(129,140,248,0.7),transparent)] blur-3xl"
//       />

//       {/* Optional grid overlay */}
//       <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
//         <div className="bg-grid" />
//       </div>

//       <Container>
//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="show"
//           className="relative grid gap-12 lg:grid-cols-[1.15fr_0.9fr] lg:items-center"
//         >
//           {/* LEFT COLUMN */}
//           <div className="space-y-8">
//             <motion.div
//               variants={fadeUp}
//               className="inline-flex items-center gap-2 rounded-full border border-slate-700/70
//                 bg-slate-900/70 px-3 py-1 text-[11px] text-slate-300"
//             >
//               <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
//               Digital underwriting rails for South Asia&apos;s next 150M
//               customers
//             </motion.div>

//             <motion.h1
//               variants={fadeUp}
//               className="text-4xl font-semibold leading-tight md:text-6xl"
//             >
//               Credit infrastructure
//               <br />
//               <span className="bg-[linear-gradient(to_right,#22d3ee,#f97316,#ec4899)] bg-clip-text text-transparent">
//                 built on smartphones,
//               </span>
//               <br />
//               not paperwork.
//             </motion.h1>

//             <motion.p
//               variants={fadeUp}
//               className="max-w-xl text-sm text-slate-300 md:text-base"
//             >
//               SahajMobile plugs into handset retailers across Bangladesh to
//               unlock instant EMI, build alternative credit data, and connect
//               banks to the 84% of workers that traditional rails can&apos;t
//               reach.
//             </motion.p>

//             <motion.div
//               variants={fadeUp}
//               className="flex flex-wrap items-center gap-4"
//             >
//               <Button>Partner With Us</Button>
//               <Button variant="secondary">How It Works</Button>
//               <span className="text-[11px] text-slate-400">
//                 17,000+ customers · 1,250+ shops · High-yield small-ticket
//                 credit
//               </span>
//             </motion.div>
//           </div>

//           {/* RIGHT COLUMN – “PHONE / DATA CARD” */}
//           <motion.div
//             variants={fadeUp}
//             className="relative flex items-center justify-center"
//           >
//             {/* Floating shapes */}
//             {/* <motion.div
//               className="absolute -top-16 -left-6 h-24 w-24 rounded-3xl border border-slate-700/70
//                 bg-slate-900/80"
//               animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
//               transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
//             /> */}
//             <motion.div
//               className="absolute -bottom-14 -right-6 h-24 w-24 rounded-full
//                 bg-[radial-gradient(circle_at_30%_0%,rgba(56,189,248,0.8),rgba(15,23,42,0.4))]"
//               animate={{ y: [0, 10, 0], opacity: [0.9, 1, 0.9] }}
//               transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
//             />

//             {/* Main card (phone-like) */}
//             <motion.div
//               className="relative h-[430px] w-[240px] rounded-[30px] border border-slate-600/60
//                 bg-[radial-gradient(circle_at_top,#020617,#020617,#000000)]
//                 shadow-[0_0_48px_rgba(15,23,42,0.9)]"
//               animate={{
//                 rotate: [-7, -3, -7],
//                 y: [0, -6, 0],
//               }}
//               transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
//             >
//               <div className="absolute inset-[6px] rounded-[24px] bg-slate-950/95 p-4">
//                 {/* Card header */}
//                 <div className="flex items-center justify-between text-[11px] text-slate-400">
//                   <span>SahajMobile EMI</span>
//                   <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">
//                     Live repayments
//                   </span>
//                 </div>

//                 {/* Customer summary */}
//                 <div className="mt-4 space-y-1 text-[11px] text-slate-300">
//                   <p>
//                     Customer: <span className="text-slate-50">Julekha</span>
//                   </p>
//                   <p>
//                     Device: <span className="text-slate-50">BDT 20,000</span>
//                   </p>
//                   <p>
//                     Tenor: <span className="text-slate-50">24 weeks</span>
//                   </p>
//                   <p>
//                     Status:{' '}
//                     <span className="font-medium text-emerald-400">
//                       On-time
//                     </span>
//                   </p>
//                 </div>

//                 {/* EMI list */}
//                 <div className="mt-6 space-y-3">
//                   {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((label, i) => (
//                     <div
//                       key={label}
//                       className="flex items-center justify-between text-[11px]"
//                     >
//                       <span className="text-slate-500">{label}</span>
//                       <div className="flex items-center gap-2">
//                         <span className="text-slate-100">BDT 1,250</span>
//                         <span
//                           className={`h-4 w-4 rounded-full border ${
//                             i < 3
//                               ? 'border-emerald-400/70 bg-emerald-400/15'
//                               : 'border-amber-400/70 bg-amber-400/10'
//                           }`}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Score */}
//                 <div className="mt-7 rounded-2xl bg-slate-900/80 p-3 text-[11px] text-slate-300">
//                   Alternative data score{' '}
//                   <span className="font-semibold text-sky-300">742</span>
//                   <div className="mt-2 h-1.5 w-full rounded-full bg-slate-800">
//                     <div
//                       className="h-1.5 w-[72%] rounded-full
//                       bg-[linear-gradient(to_right,#22d3ee,#f97316,#ec4899)]"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </Container>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Container from '../ui/Container';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100vh] overflow-hidden pb-24 pt-28 lg:pt-32"
    >
      {/* Background accents */}
      <div
        className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full 
        bg-[radial-gradient(circle_at_30%_0%,rgba(56,189,248,0.85),transparent)] blur-3xl"
      />
      <div
        className="pointer-events-none absolute -right-40 top-32 h-96 w-96 rounded-full 
        bg-[radial-gradient(circle_at_70%_0%,rgba(249,115,22,0.95),transparent)] blur-3xl"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[-40%] h-[60%] 
        bg-[radial-gradient(circle_at_bottom,rgba(129,140,248,0.85),transparent)] blur-3xl"
      />

      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="bg-grid" />
      </div>

      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative grid gap-12 lg:grid-cols-[1.15fr_0.9fr] lg:items-center"
        >
          {/* LEFT */}
          <div className="space-y-8">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 
                bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Credit infrastructure for South Asia&apos;s unbanked smartphone
              users
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl font-semibold leading-tight md:text-6xl"
            >
              Credit infrastructure
              <br />
              <span className="bg-[linear-gradient(to_right,#22d3ee,#f97316,#ec4899)] bg-clip-text text-transparent">
                built on smartphones,
              </span>
              <br />
              not paperwork.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-sm text-slate-300 md:text-base"
            >
              SahajMobile plugs into handset retailers across Bangladesh to
              unlock instant EMI, build alternative credit rails from repayment
              behavior, and connect banks to the 84% of workers that traditional
              systems can&apos;t underwrite.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4"
            >
              <Button>Partner With Us</Button>
              <Button variant="secondary">How It Works</Button>
              <span className="text-[11px] text-slate-400">
                17k+ customers · 1,250+ shops · High-yield, device-secured
                credit
              </span>
            </motion.div>
          </div>

          {/* RIGHT – animated phone card */}
          <motion.div
            variants={fadeUp}
            className="relative flex items-center justify-center"
          >
            {/* Floating shapes */}
            {/* <motion.div
              className="absolute -top-16 -left-6 h-24 w-24 rounded-3xl border border-slate-700/70 
                bg-slate-900/80"
              animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
            /> */}
            <motion.div
              className="absolute -bottom-14 -right-6 h-24 w-24 rounded-full 
                bg-[radial-gradient(circle_at_30%_0%,rgba(56,189,248,0.8),rgba(15,23,42,0.4))]"
              animate={{ y: [0, 10, 0], opacity: [0.9, 1, 0.9] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            />

            <motion.div
              className="relative h-[430px] w-[240px] rounded-[30px] border border-slate-600/60 
                bg-[radial-gradient(circle_at_top,#020617,#020617,#000000)] 
                shadow-[0_0_48px_rgba(15,23,42,0.9)]"
              animate={{
                rotate: [-7, -3, -7],
                y: [0, -6, 0],
              }}
              transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
            >
              <div className="absolute inset-[6px] rounded-[24px] bg-slate-950/95 p-4">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>SahajMobile EMI</span>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">
                    Live repayments
                  </span>
                </div>

                <div className="mt-4 space-y-1 text-[11px] text-slate-300">
                  <p>
                    Customer: <span className="text-slate-50">Julekha</span>
                  </p>
                  <p>
                    Device: <span className="text-slate-50">BDT 20,000</span>
                  </p>
                  <p>
                    Tenor: <span className="text-slate-50">24 weeks</span>
                  </p>
                  <p>
                    Status:{' '}
                    <span className="font-medium text-emerald-400">
                      On-time
                    </span>
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((label, i) => (
                    <div
                      key={label}
                      className="flex items-center justify-between text-[11px]"
                    >
                      <span className="text-slate-500">{label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-100">BDT 1,250</span>
                        <span
                          className={`h-4 w-4 rounded-full border ${
                            i < 3
                              ? 'border-emerald-400/70 bg-emerald-400/15'
                              : 'border-amber-400/70 bg-amber-400/10'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl bg-slate-900/80 p-3 text-[11px] text-slate-300">
                  Alternative data score{' '}
                  <span className="font-semibold text-sky-300">742</span>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-slate-800">
                    <div
                      className="h-1.5 w-[72%] rounded-full 
                      bg-[linear-gradient(to_right,#22d3ee,#f97316,#ec4899)]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

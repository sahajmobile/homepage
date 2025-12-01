// 'use client';

// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import SectionWrapper from './SectionWrapper';

// const steps = [
//   {
//     title: 'We Lend First',
//     desc: 'Each funding creates a digital repayment track record for previously invisible customers.',
//   },
//   {
//     title: 'Track Payment Performance',
//     desc: 'Customer repayment behavior becomes alternative data and feeds credit scoring profiles.',
//   },
//   {
//     title: 'Connect Banks to Customers',
//     desc: 'Banks, MFIs, Retail/OEMs use this behavioral data to underwrite and price unreachable segments.',
//   },
//   {
//     title: 'SM Underwriting Platform',
//     desc: 'We evolve into the underwriting platform for small-ticket credit. APIs allow lending at scale.',
//   },
// ];

// export default function WhatWeDo() {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

//   if (inView) controls.start('show');

//   return (
//     <SectionWrapper id="what-we-do" className="animated-bg">
//       <div className="relative z-20 text-center mb-16">
//         <h2 className="text-4xl font-semibold bg-gradient-to-r from-sky-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
//           What We Do
//         </h2>
//         <p className="text-slate-300 max-w-2xl mx-auto mt-3 text-sm">
//           SahajMobile invests first → builds rails → unlocks credit access for
//           the 84% of Bangladeshis that traditional banks cannot reach.
//         </p>
//       </div>

//       <div
//         ref={ref}
//         className="grid lg:grid-cols-2 gap-16 items-center relative z-20"
//       >
//         {/* Animated Placeholder Phone */}
//         <motion.div
//           variants={{
//             hidden: { opacity: 0, y: 80, rotate: -6 },
//             show: { opacity: 1, y: 0, rotate: -2, transition: { duration: 1 } },
//           }}
//           initial="hidden"
//           animate={controls}
//           className="mx-auto"
//         >
//           <div className="relative w-[260px] h-[520px] rounded-[36px] bg-slate-900/90 border border-slate-700/40 shadow-[0_0_35px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center">
//             <p className="text-slate-500 text-xs">Phone UI Placeholder</p>
//           </div>
//         </motion.div>

//         {/* Steps */}
//         <div className="space-y-10">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               variants={{
//                 hidden: { opacity: 0, x: 60 },
//                 show: {
//                   opacity: 1,
//                   x: 0,
//                   transition: { delay: index * 0.25, duration: 0.6 },
//                 },
//               }}
//               initial="hidden"
//               animate={controls}
//               className="flex gap-5 group"
//             >
//               <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-400 to-orange-400 opacity-70 group-hover:opacity-100 shadow-[0_0_15px_rgba(56,189,248,0.5)]"></div>

//               <div>
//                 <h3 className="text-xl text-white font-semibold group-hover:text-sky-300 transition-colors">
//                   {step.title}
//                 </h3>
//                 <p className="text-slate-400 text-sm mt-1 leading-relaxed">
//                   {step.desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#040b19]" />
//     </SectionWrapper>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from './SectionWrapper';

const steps = [
  {
    id: 'A',
    title: 'We Lend First',
    desc: 'Each funding creates a digital repayment track record for previously invisible customers.',
    image: '/pic1.png',
  },
  {
    id: 'B',
    title: 'Track Payment Performance',
    desc: 'Customer repayment behavior becomes alternative data and feeds credit scoring profiles.',
    image: '/pic2.png',
  },
  {
    id: 'C',
    title: 'Connect Banks to Customers',
    desc: 'Banks, MFIs, Retail/OEMs use this behavioral data to underwrite and price previously unreachable segments.',
    image: '/pic3.png',
  },
  {
    id: 'D',
    title: 'SM Underwriting Platform',
    desc: 'We evolve into the underwriting platform for small-ticket credit. Partners plug into our platform & APIs.',
    image: '/pic4.png',
  },
  {
    id: 'E',
    title: 'Scale Lending on Our Rails',
    desc: 'Banks and investors use SahajMobile rails to launch new credit products for 84% of Bangladeshis that banks couldn’t previously serve.',
    image: '/pic5.png',
  },
];

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);

  // in-view detection for autoplay
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  // autoplay through steps while in view
  useEffect(() => {
    if (!inView) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(id);
  }, [inView]);

  const activeStep = steps[activeIndex];

  return (
    <SectionWrapper id="what-we-do" className="animated-bg">
      <div className="relative z-20 text-center mb-16">
        <h2 className="text-4xl font-semibold bg-gradient-to-r from-sky-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
          What We Do
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto mt-3 text-sm">
          SahajMobile invests first → builds the rails → and unlocks credit
          access for the 84% of Bangladeshis that traditional banks cannot
          reach.
        </p>
      </div>

      <div
        ref={ref}
        className="grid lg:grid-cols-2 gap-16 items-center relative z-20"
      >
        {/* LEFT: Animated phone with 5-step journey */}
        <motion.div
          className="mx-auto"
          initial={{ opacity: 0, y: 60, rotate: -6 }}
          whileInView={{ opacity: 1, y: 0, rotate: -2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            className="relative w-[260px] h-[520px] rounded-[36px] bg-slate-900/90 border border-slate-700/40 shadow-[0_0_35px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeStep.image}
                src={activeStep.image}
                alt={activeStep.title}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* RIGHT: Steps A–E */}
        <div className="space-y-6">
          {steps.map((step, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={step.id}
                type="button"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className="w-full text-left group"
              >
                <div
                  className={`flex gap-4 items-start rounded-2xl px-4 py-3 transition-all 
                    ${
                      isActive
                        ? 'bg-slate-900/70 border border-cyan-400/40 shadow-[0_0_30px_rgba(34,211,238,0.45)]'
                        : 'border border-transparent hover:bg-slate-900/40'
                    }`}
                >
                  <div
                    className={`mt-1 h-9 w-9 rounded-2xl bg-gradient-to-br from-sky-400 to-orange-400 shadow-[0_0_18px_rgba(56,189,248,0.6)] transition-opacity ${
                      isActive
                        ? 'opacity-100'
                        : 'opacity-60 group-hover:opacity-90'
                    }`}
                  />

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                        Step {step.id}
                      </span>
                    </div>
                    <h3
                      className={`text-lg font-semibold ${
                        isActive
                          ? 'text-white'
                          : 'text-slate-200 group-hover:text-slate-50'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* subtle bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#040b19]" />
    </SectionWrapper>
  );
}

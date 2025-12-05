// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import SectionWrapper from './SectionWrapper';

// const tech = [
//   {
//     title: 'Sahaj Manager App',
//     body: 'Retail partners onboard customers, verify identity, and issue EMI directly inside the SahajMobile Manager App.',
//   },
//   {
//     title: 'Sahaj Locker',
//     body: 'Device-level security allows locking/unlocking smartphones based on repayment performance — reducing default rates dramatically.',
//   },
//   {
//     title: 'Underwriting Engine',
//     body: 'Behavioral + alternative data models generate risk scores and repayment predictions for banks integrating with us.',
//   },
// ];

// export default function Technology() {
//   return (
//     <SectionWrapper className="section-padding animated-bg">
//       {/* Header */}
//       <div className="text-center mb-16 relative z-10">
//         <h2 className="text-4xl font-semibold bg-gradient-to-r from-cyan-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
//           {/* block bg-gradient-to-r from-cyan-400 via-orange-400 to-pink-400
//                   bg-clip-text text-transparent */}
//           Technology
//         </h2>
//         <p className="text-slate-400 max-w-xl mx-auto text-sm mt-3">
//           Lightweight infrastructure powering EMI, device intelligence, and
//           underwriting across low-income markets.
//         </p>
//       </div>

//       {/* FEATURE MOCKUP IMAGE */}
//       <div className="relative w-full flex justify-center mb-20">
//         {/* Glow aura */}
//         <div
//           className="absolute w-[500px] h-[500px] rounded-full
//           bg-[radial-gradient(circle,rgba(56,189,248,0.25),transparent)]
//           blur-3xl opacity-60 -z-10"
//         />

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9, y: 30 }}
//           whileInView={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//           viewport={{ once: true }}
//           whileHover={{ scale: 1.03, y: -5 }}
//           className="relative drop-shadow-[0_0_50px_rgba(56,189,248,0.35)] transition-all"
//         >
//           <Image
//             src="/tech2.png"
//             alt="SahajMobile System UI"
//             width={1200}
//             height={700}
//             className="rounded-2xl shadow-xl"
//             priority
//           />
//         </motion.div>
//       </div>

//       {/* TECHNOLOGY CARDS */}
//       <div className="grid md:grid-cols-3 gap-8 relative z-10">
//         {tech.map((t, idx) => (
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.45, delay: idx * 0.15 }}
//             viewport={{ once: true }}
//             whileHover={{ y: -8, boxShadow: '0 0 35px rgba(129,140,248,0.35)' }}
//             className="rounded-2xl bg-slate-900/60 border border-slate-800
//             p-6 backdrop-blur-xl
//             transition-all duration-300"
//           >
//             <h3 className="text-lg font-semibold text-white">{t.title}</h3>
//             <p className="text-slate-400 text-sm mt-3">{t.body}</p>
//           </motion.div>
//         ))}
//       </div>
//     </SectionWrapper>
//   );
// }

// // 'use client';

// // import { motion } from 'framer-motion';
// // import Image from 'next/image';
// // import SectionWrapper from '@/components/sections/SectionWrapper';
// // import Navbar from '@/components/Navbar';

// // export default function Technology() {
// //   return (
// //     <>
// //       <Navbar />

// //       <SectionWrapper className="section-padding animated-bg">
// //         {/* ========================= */}
// //         {/* HEADER */}
// //         {/* ========================= */}
// //         <div className="text-center mb-16 relative z-10">
// //           <h2 className="text-4xl font-semibold bg-gradient-to-r from-cyan-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
// //             Technology
// //           </h2>

// //           <p className="text-slate-400 max-w-xl mx-auto text-sm mt-3">
// //             Lightweight infrastructure powering EMI, device intelligence, and
// //             underwriting across low-income markets.
// //           </p>
// //         </div>

// //         {/* ========================= */}
// //         {/* MOCKUP IMAGE */}
// //         {/* ========================= */}
// //         <div className="relative w-full flex justify-center mb-20">
// //           <div
// //             className="absolute w-[500px] h-[500px] rounded-full
// //             bg-[radial-gradient(circle,rgba(56,189,248,0.25),transparent)]
// //             blur-3xl opacity-60 -z-10"
// //           />

// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.9, y: 30 }}
// //             whileInView={{ opacity: 1, scale: 1, y: 0 }}
// //             transition={{ duration: 0.8, ease: 'easeOut' }}
// //             viewport={{ once: true }}
// //             whileHover={{ scale: 1.03, y: -5 }}
// //             className="relative drop-shadow-[0_0_50px_rgba(56,189,248,0.35)] transition-all"
// //           >
// //             <Image
// //               src="/tech2.png"
// //               alt="SahajMobile System UI"
// //               width={1200}
// //               height={700}
// //               className="rounded-2xl shadow-xl"
// //               priority
// //             />
// //           </motion.div>
// //         </div>

// //         {/* ========================= */}
// //         {/* YOUR TIMELINE IMPLEMENTATION */}
// //         {/* ========================= */}

// //         <section className="bg-black text-white py-8 mt-20 rounded-3xl border border-white/10 relative z-20">
// //           <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
// //             {/* LEFT SIDE TEXT */}
// //             <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
// //               <p className="ml-2 text-yellow-300 uppercase tracking-loose">
// //                 Working Process
// //               </p>

// //               <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
// //                 Working Process of Fest
// //               </p>

// //               <p className="text-sm md:text-base text-gray-300 mb-4">
// //                 Here’s your guide to the tech fest 2021 process. Go through all
// //                 the steps to know the exact process of the fest.
// //               </p>

// //               <a
// //                 href="#"
// //                 className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300
// //                 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border
// //                 border-yellow-300 hover:border-transparent transition-all"
// //               >
// //                 Explore Now
// //               </a>
// //             </div>

// //             {/* RIGHT SIDE TIMELINE */}
// //             <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
// //               <div className="container mx-auto w-full h-full">
// //                 <div className="relative wrap overflow-hidden p-10 h-full">
// //                   {/* CENTER LINES */}
// //                   <div
// //                     className="absolute h-full border border-yellow-400"
// //                     style={{ right: '50%' }}
// //                   ></div>

// //                   <div
// //                     className="absolute h-full border border-yellow-400"
// //                     style={{ left: '50%' }}
// //                   ></div>

// //                   {/* TIMELINE ITEM 1 */}
// //                   <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">
// //                     <div className="order-1 w-5/12"></div>

// //                     <div className="order-1 w-5/12 px-1 py-4 text-right">
// //                       <p className="mb-3 text-yellow-300">1–6 May, 2021</p>

// //                       <h4 className="mb-3 font-bold text-lg md:text-2xl">
// //                         Registration
// //                       </h4>

// //                       <p className="text-sm md:text-base leading-snug text-gray-300">
// //                         Pick your favourite event(s) and register by filling the
// //                         form. Its that easy :
// //                       </p>
// //                     </div>
// //                   </div>

// //                   {/* TIMELINE ITEM 2 */}
// //                   <div className="mb-8 flex justify-between items-center w-full">
// //                     <div className="order-1 w-5/12"></div>

// //                     <div className="order-1 w-5/12 px-1 py-4">
// //                       <p className="mb-3 text-yellow-300">6–9 May, 2021</p>

// //                       <h4 className="mb-3 font-bold text-lg md:text-2xl">
// //                         Participation
// //                       </h4>

// //                       <p className="text-sm md:text-base leading-snug text-gray-300">
// //                         Participate online. Links to your events will be sent
// //                         via email and WhatsApp groups.
// //                       </p>
// //                     </div>
// //                   </div>

// //                   {/* TIMELINE ITEM 3 */}
// //                   <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">
// //                     <div className="order-1 w-5/12"></div>

// //                     <div className="order-1 w-5/12 px-1 py-4 text-right">
// //                       <p className="mb-3 text-yellow-300">10 May, 2021</p>

// //                       <h4 className="mb-3 font-bold text-lg md:text-2xl">
// //                         Result Declaration
// //                       </h4>

// //                       <p className="text-sm md:text-base leading-snug text-gray-300">
// //                         Results will be announced on WhatsApp and mailed to you
// //                         directly.
// //                       </p>
// //                     </div>
// //                   </div>

// //                   {/* TIMELINE ITEM 4 */}
// //                   <div className="mb-8 flex justify-between items-center w-full">
// //                     <div className="order-1 w-5/12"></div>

// //                     <div className="order-1 w-5/12 px-1 py-4">
// //                       <p className="mb-3 text-yellow-300">12 May, 2021</p>

// //                       <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">
// //                         Prize Distribution
// //                       </h4>

// //                       <p className="text-sm md:text-base leading-snug text-gray-300">
// //                         Winners will be contacted for address verification and
// //                         the goodies will be sent to them.
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* TIMELINE DECOR IMAGE */}
// //                 {/* <Image
// //                   className="mx-auto -mt-36 md:-mt-36"
// //                   src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
// //                   alt="timeline-art"
// //                 /> */}
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       </SectionWrapper>
// //     </>
// //   );
// // }

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

//       <SectionWrapper className="relative section-padding pb-32 overflow-hidden">
//         {/* === Soft star gradient overlays (matches How It Works) === */}
//         <div className="pointer-events-none absolute inset-0">
//           {/* top blend */}
//           <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950 via-transparent to-transparent"></div>
//           {/* bottom blend */}
//           <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
//         </div>

//         {/* Header */}
//         <div className="text-center mb-20 relative z-10">
//           <h2 className="text-4xl font-semibold bg-gradient-to-r from-cyan-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
//             Technology
//           </h2>
//           <p className="text-slate-400 max-w-xl mx-auto text-sm mt-3">
//             Lightweight infrastructure powering EMI, device intelligence, and
//             underwriting.
//           </p>
//         </div>

//         {/* ========= NEW TECHNOLOGY FEATURE SECTION ======== */}
//         <div
//           className="
//     max-w-6xl mx-auto mt-20 mb-24
//     bg-slate-900/60 backdrop-blur-xl
//     border border-slate-800
//     rounded-3xl px-10 py-14
//     grid lg:grid-cols-2 gap-10
//     shadow-[0_0_40px_rgba(56,189,248,0.15)]
//   "
//         >
//           {/* LEFT TEXT CONTENT */}
//           <div className="flex flex-col justify-center">
//             <p className="text-[12px] uppercase tracking-[0.25em] text-cyan-300 mb-4">
//               SahajMobile Technology
//             </p>

//             <h2 className="text-4xl font-semibold text-white leading-tight">
//               Advanced tools built for
//               <span
//                 className="block bg-gradient-to-r from-cyan-400 via-orange-400 to-pink-400
//         bg-clip-text text-transparent"
//               >
//                 secure smartphone EMI
//               </span>
//             </h2>

//             <p className="text-slate-300 text-sm mt-5 max-w-md">
//               From device intelligence to automated underwriting, SahajMobile's
//               technology stack powers safe, instant EMI for thousands of
//               customers.
//             </p>

//             <button
//               className="
//         mt-8 w-fit px-6 py-3 rounded-full font-medium
//         bg-gradient-to-r from-cyan-400 to-pink-400
//         text-black hover:scale-105 transition-all
//       "
//             >
//               Learn More →
//             </button>
//           </div>

//           {/* RIGHT GRAPHIC / ILLUSTRATION */}
//           <div className="flex justify-center items-center">
//             <div
//               className="
//         w-72 h-72 rounded-2xl
//         bg-gradient-to-br from-slate-800 to-slate-900
//         border border-slate-700
//         shadow-[0_0_30px_rgba(56,189,248,0.3)]
//         flex items-center justify-center
//       "
//             >
//               <p className="text-white/80 font-semibold text-xl text-center">
//                 Smart
//                 <br />
//                 Device
//                 <br />
//                 Security
//               </p>
//             </div>
//           </div>
//         </div>
//       </SectionWrapper>
//     </>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import SectionWrapper from '@/components/sections/SectionWrapper';

/* ========= 3D STACKED CARD ========= */
function ThreeDCard({ colors = ['#38bdf8', '#0ea5e9', '#0369a1'], label }) {
  return (
    <div className="relative w-48 h-48 select-none">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-2xl flex items-center justify-center text-white font-semibold text-sm tracking-wide"
          style={{
            transform: `translateY(${i * 14}px)`,
            background: `linear-gradient(135deg, ${
              colors[i % colors.length]
            }, #0f172a)`,
            boxShadow: '0 8px 18px rgba(0,0,0,0.35)',
          }}
        >
          {label}
        </div>
      ))}
    </div>
  );
}

/* ========= MULTI-ITEM HOVER INFO CARD ========= */
function HoverInfoCard({ items = [], glow = 'rgba(56,189,248,0.35)' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 6 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="
        w-64 p-5 rounded-2xl
        bg-[#0d1320]/90 border border-slate-700
        backdrop-blur-xl
      "
      style={{
        boxShadow: `0 0 30px ${glow}`,
      }}
    >
      {items.map((info, i) => (
        <div key={i} className="mb-4 last:mb-0">
          <h3 className="text-white font-semibold text-sm">{info.title}</h3>
          <p className="text-slate-400 text-xs mt-2 leading-relaxed">
            {info.body}
          </p>
        </div>
      ))}
    </motion.div>
  );
}

export default function Technology() {
  return (
    <>
      <Navbar />

      <SectionWrapper className="pt-24 pb-24">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold bg-gradient-to-r from-cyan-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
            Technology
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm mt-3">
            Lightweight infrastructure powering EMI, device intelligence, and
            underwriting.
          </p>
        </div>

        {/* MAIN FEATURE CONTAINER */}
        <div
          className="
            max-w-6xl mx-auto rounded-3xl px-10 py-14 
            bg-[#0A0F1C] shadow-[0_0_45px_rgba(34,211,238,0.18)]
            grid lg:grid-cols-2 gap-16 items-center
          "
        >
          {/* LEFT SIDE TEXT */}
          <div>
            <p className="text-[12px] uppercase tracking-[0.25em] text-cyan-300 mb-4">
              SahajMobile Technology
            </p>

            <h2 className="text-4xl font-semibold text-white leading-snug">
              Advanced tools built for
              <span className="block bg-gradient-to-r from-cyan-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                secure smartphone EMI
              </span>
            </h2>

            <p className="text-slate-300 text-sm mt-5 max-w-md">
              From device intelligence to automated underwriting, SahajMobile’s
              technology stack enables fast, safe EMI for thousands of users.
            </p>
          </div>

          {/* RIGHT SIDE INTERACTIVE VISUALS */}
          <div className="flex flex-col items-center gap-20">
            {/* ==== MANAGER APP ITEM (FIXED GROUP STRUCTURE) ==== */}
            <div className="relative group flex flex-col items-center">
              <ThreeDCard
                label="Manager App"
                colors={['#38bdf8', '#0ea5e9', '#0369a1']}
              />

              {/* Hover Panel */}
              <div
                className={`
    absolute left-1/2 -translate-x-1/2 top-full mt-4
    opacity-0 group-hover:opacity-100
    transition-all duration-300
    pointer-events-auto
  `}
              >
                <HoverInfoCard
                  glow="rgba(56,189,248,0.35)"
                  items={[
                    {
                      title: 'Sahaj Manager App',
                      body: 'Retail partners onboard customers, verify identity, and issue EMI directly inside the SahajMobile Manager App.',
                    },
                    {
                      title: 'Sahaj Locker',
                      body: 'Device-level security allows locking/unlocking smartphones based on repayment performance — reducing default rates dramatically.',
                    },
                  ]}
                />
              </div>
            </div>

            {/* ==== DEVICE LOCKER ITEM (FIXED GROUP STRUCTURE) ==== */}
            <div className="relative group flex flex-col items-center">
              <ThreeDCard
                label="Device Locker"
                colors={['#f472b6', '#db2777', '#be185d']}
              />

              <div
                className="
                  absolute left-1/2 -translate-x-1/2 top-full mt-4
                  opacity-0 group-hover:opacity-100
                  transition-all duration-300
                  pointer-events-auto
                "
              >
                <HoverInfoCard
                  glow="rgba(249,115,22,0.35)"
                  items={[
                    {
                      title: 'Sahaj Manager App',
                      body: 'Retail partners onboard customers, verify identity, and issue EMI directly inside the SahajMobile Manager App.',
                    },
                    {
                      title: 'Sahaj Locker',
                      body: 'Device-level security allows locking/unlocking smartphones based on repayment performance — reducing default rates dramatically.',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

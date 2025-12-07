// // 'use client';

// // import { useState, useEffect } from 'react';
// // import Image from 'next/image';
// // import { motion, AnimatePresence } from 'framer-motion';

// // export default function StepShowcase({ items, className }) {
// //   const [index, setIndex] = useState(0);

// //   // Auto slide every 3 seconds
// //   useEffect(() => {
// //     const id = setInterval(() => {
// //       setIndex((prev) => (prev + 1) % items.length);
// //     }, 3000);

// //     return () => clearInterval(id);
// //   }, [items.length]);

// //   return (
// //     <div className={`grid md:grid-cols-2 gap-8 items-center ${className}`}>
// //       {/* PHONE UI */}
// //       <div className="relative w-[260px] md:w-[300px] aspect-[9/19] mx-auto rounded-[32px] overflow-hidden bg-black border border-white/10 shadow-[0_0_45px_rgba(0,0,0,0.7)]">
// //         <AnimatePresence mode="wait">
// //           <motion.div
// //             key={index}
// //             initial={{ opacity: 0, scale: 1.03 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             exit={{ opacity: 0, scale: 0.97 }}
// //             transition={{ duration: 0.4 }}
// //             className="absolute inset-0"
// //           >
// //             <Image
// //               src={items[index].image}
// //               alt="Phone UI"
// //               fill
// //               className="object-cover"
// //             />
// //           </motion.div>
// //         </AnimatePresence>
// //       </div>

// //       {/* STEP TEXT */}
// //       <div className="space-y-6">
// //         <AnimatePresence mode="wait">
// //           <motion.div
// //             key={index}
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -20 }}
// //             transition={{ duration: 0.4 }}
// //             className=""
// //           >
// //             <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300 mb-2">
// //               Step {index + 1}
// //             </p>

// //             <h3 className="text-xl font-semibold text-white">
// //               {items[index].title}
// //             </h3>

// //             <p className="text-slate-300 text-sm leading-relaxed mt-2">
// //               {items[index].body}
// //             </p>
// //           </motion.div>
// //         </AnimatePresence>

// //         {/* DOTS */}
// //         <div className="flex gap-2">
// //           {items.map((_, i) => (
// //             <button
// //               key={i}
// //               onClick={() => setIndex(i)}
// //               className={`h-2 w-2 rounded-full transition ${
// //                 i === index ? 'bg-cyan-400 scale-110' : 'bg-slate-600'
// //               }`}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// export default function StepShowcase({ items, onStepChange }) {
//   const [index, setIndex] = useState(0);

//   const next = () => {
//     const newIndex = (index + 1) % items.length;
//     setIndex(newIndex);
//     onStepChange && onStepChange(newIndex);
//   };

//   const prev = () => {
//     const newIndex = (index - 1 + items.length) % items.length;
//     setIndex(newIndex);
//     onStepChange && onStepChange(newIndex);
//   };

//   return (
//     <div className="flex flex-col items-center space-y-4">
//       <motion.div
//         key={index}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//         className="relative w-[260px] h-[520px] rounded-[30px] bg-black/70 border border-slate-600/40 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]"
//       >
//         <Image
//           src={items[index].image}
//           alt="Phone UI"
//           fill
//           className="object-cover"
//         />
//       </motion.div>

//       {/* Pagination */}
//       <div className="flex space-x-3 mt-3">
//         {items.map((_, i) => (
//           <div
//             key={i}
//             className={`h-2 w-2 rounded-full transition ${
//               i === index ? 'bg-cyan-400' : 'bg-slate-500'
//             }`}
//           />
//         ))}
//       </div>

//       {/* Arrows */}
//       <div className="flex space-x-6 mt-2">
//         <button onClick={prev} className="text-slate-300">
//           ←
//         </button>
//         <button onClick={next} className="text-slate-300">
//           →
//         </button>
//       </div>
//     </div>
//   );
// }
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function StepShowcase({
  items,
  interval = 2000,
  onStepChange = () => {},
  className = '',
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % items.length;
        onStepChange(next); // 🔥 CRITICAL LINE
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval, onStepChange]);

  return (
    <div className={`flex flex-col items-center space-y-4 ${className}`}>
      {/* PHONE SCREEN */}
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          relative w-[260px] h-[520px] md:w-[300px] md:h-[600px]
          rounded-[36px] overflow-hidden 
          bg-white/10 backdrop-blur-2xl 
          border border-white/20
          shadow-[0_0_60px_rgba(0,0,0,0.7)]
        "
      >
        <Image
          src={items[index].image}
          alt="Phone UI"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* DOTS */}
      <div className="flex space-x-2 mt-2">
        {items.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i === index ? 'bg-cyan-400 scale-125' : 'bg-slate-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

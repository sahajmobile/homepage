// 'use client';

// import { motion } from 'framer-motion';

// export default function GlobalBackground() {
//   return (
//     <div className="fixed inset-0 -z-10 overflow-hidden bg-[#040b19]">
//       {/* Left Blue Glow */}
//       <motion.div
//         initial={{ opacity: 0.5, x: -150, y: -120 }}
//         animate={{ opacity: 0.8, x: -100, y: -80 }}
//         transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}
//         className="absolute h-[600px] w-[600px] rounded-full
//         bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.65),rgba(4,11,25,0))] blur-[140px]"
//       ></motion.div>

//       {/* Right Orange Glow */}
//       <motion.div
//         initial={{ opacity: 0.4, x: 200, y: 180 }}
//         animate={{ opacity: 0.7, x: 260, y: 130 }}
//         transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
//         className="absolute h-[650px] w-[650px] rounded-full
//         bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.55),rgba(4,11,25,0))] blur-[170px]"
//       ></motion.div>

//       {/* Bottom Purple Glow */}
//       <motion.div
//         initial={{ opacity: 0.4, x: 0, y: 250 }}
//         animate={{ opacity: 0.7, x: 40, y: 290 }}
//         transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror' }}
//         className="absolute h-[700px] w-[700px] rounded-full
//         bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.5),rgba(4,11,25,0))] blur-[160px]"
//       ></motion.div>

//       {/* Subtle Noise Texture */}
//       <div className="absolute inset-0 opacity-[0.07] bg-[url('/noise.png')] mix-blend-soft-light"></div>
//     </div>
//   );
// }
'use client';

import { motion } from 'framer-motion';

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#040b19]">
      {/* Left Blue Glow */}
      <motion.div
        initial={{ opacity: 0.5, x: -150, y: -120 }}
        animate={{ opacity: 0.8, x: -100, y: -80 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute h-[600px] w-[600px] rounded-full 
        bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.65),rgba(4,11,25,0))] blur-[140px]"
      ></motion.div>

      {/* Right Orange Glow */}
      <motion.div
        initial={{ opacity: 0.4, x: 200, y: 180 }}
        animate={{ opacity: 0.7, x: 260, y: 130 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute h-[650px] w-[650px] rounded-full 
        bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.55),rgba(4,11,25,0))] blur-[170px]"
      ></motion.div>

      {/* Bottom Purple Glow */}
      <motion.div
        initial={{ opacity: 0.4, x: 0, y: 250 }}
        animate={{ opacity: 0.7, x: 40, y: 290 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute h-[700px] w-[700px] rounded-full 
        bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.5),rgba(4,11,25,0))] blur-[160px]"
      ></motion.div>

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.07] bg-[url('/noise.png')] mix-blend-soft-light"></div>
    </div>
  );
}

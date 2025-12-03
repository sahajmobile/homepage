// export default function Footer() {
//   return (
//     <footer className=" py-10 bg-slate-950 border-t border-slate-800">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         <h3 className="text-sm text-slate-400 tracking-wider uppercase">
//           SahajMobile
//         </h3>
//         <p className="text-slate-500 text-xs mt-2">
//           © {new Date().getFullYear()} SahajMobile. All Rights Reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

function createParticles() {
  return Array.from({ length: 25 }).map(() => ({
    x: Math.random() * 700 + 50,
    delay: Math.random() * 2,
    duration: 6 + Math.random() * 6,
    size: Math.random() * 2 + 1,
  }));
}

export default function Footer() {
  // SAFE: runs ONCE on the client; React allows randomness here.
  const [particles] = useState(() => createParticles());

  return (
    <footer className="relative mt-40 overflow-hidden bg-transparent">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 
          w-[90vw] h-[45vw]
          bg-[radial-gradient(circle,rgba(56,189,248,0.18),transparent_70%)]
          blur-3xl opacity-60"
        />
      </div>

      {/* Main footer container */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 py-16 
        rounded-3xl bg-slate-900/30 backdrop-blur-xl 
        border border-slate-800/40"
      >
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-white">SahajMobile</h3>
            <p className="text-sm text-slate-400 mt-3">
              Smartphone EMI for Bangladesh’s real economy.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-300 mb-3">Company</p>
            <ul className="space-y-1.5 text-sm">
              {['About', 'Technology', 'Partners', 'Careers'].map((item) => (
                <li
                  key={item}
                  className="text-slate-400 hover:text-white transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-300 mb-3">Support</p>
            <ul className="space-y-1.5 text-sm">
              {['FAQ', 'Contact', 'Blog'].map((item) => (
                <li
                  key={item}
                  className="text-slate-400 hover:text-white transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-300 mb-3">
              Get in Touch
            </p>
            <p className="text-sm text-slate-400">info@sahajmobile.com</p>
            <p className="text-sm text-slate-400 mt-2">+880 9666 753953</p>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} SahajMobile. All rights reserved.
        </div>
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: p.x, y: 900 }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [900, -50],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
            className="absolute bg-cyan-300/40 rounded-full"
            style={{ width: p.size, height: p.size }}
          />
        ))}
      </div>
    </footer>
  );
}

// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import Button from './ui/Button';
// import Container from './ui/Container';

// const links = [
//   { label: 'Home', href: '#top' },
//   // { label: 'Marquee', href: '#marques' },
//   { label: 'What We Do', href: '#what-we-do' },
//   { label: 'Technology', href: '#technology' },

//   { label: 'Impact', href: '#impact' },
//   { label: 'Team', href: '#team' },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handler = () => setScrolled(window.scrollY > 10);
//     window.addEventListener('scroll', handler);
//     return () => window.removeEventListener('scroll', handler);
//   }, []);

//   return (
//     <motion.header
//       className={`fixed inset-x-0 top-0 z-40 transition-all ${
//         scrolled
//           ? 'backdrop-blur-xl bg-slate-950/85 border-b border-slate-800/70'
//           : 'bg-transparent'
//       }`}
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//     >
//       <Container>
//         <nav className="flex h-20 items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center gap-3">
//             <div
//               className="flex h-9 w-9 items-center justify-center rounded-2xl
//               bg-[radial-gradient(circle_at_20%_0%,#22d3ee,#0ea5e9,#4f46e5)]
//               shadow-[0_0_32px_rgba(56,189,248,0.65)]"
//             >
//               <span className="text-xs font-bold tracking-[0.12em] text-slate-50">
//                 SM
//               </span>
//             </div>
//             <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
//               SahajMobile
//             </span>
//           </div>

//           {/* Links */}
//           <div className="hidden items-center gap-8 md:flex">
//             {links.map((item) => (
//               <a
//                 key={item.href}
//                 href={item.href}
//                 className="relative text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400 hover:text-slate-50 transition-colors group"
//               >
//                 {item.label}
//                 <span
//                   className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0
//                     bg-[linear-gradient(to_right,#22d3ee,#f97316)] transition-all duration-300
//                     group-hover:w-full"
//                 />
//               </a>
//             ))}
//             <Button className="ml-2">Partner With Us</Button>
//           </div>
//         </nav>
//       </Container>
//     </motion.header>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './ui/Container';
import Button from './ui/Button';

const mainLinks = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Customers', href: '/for-customers' },
  { label: 'Partners', href: '/for-shops-oems' },
  { label: 'Technology', href: '/technology' },
];

const moreLinks = [
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog / News', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMore, setOpenMore] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-all ${
          scrolled
            ? 'backdrop-blur-xl bg-slate-950/75 border-b border-slate-800/60'
            : 'bg-transparent'
        }`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
      >
        <Container>
          <nav className="flex h-20 items-center justify-between">
            {/* LOGO + GLOW */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-9 w-9 flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 rounded-2xl blur-md"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    background:
                      'radial-gradient(circle, rgba(56,189,248,0.75), #fff)',
                    // 'radial-gradient(circle, rgba(56,189,248,0.75), rgba(139,92,246,0.40))',
                  }}
                />

                <Image
                  src="/logo.png"
                  alt="SahajMobile Logo"
                  width={34}
                  height={34}
                  className="relative z-10"
                />
              </div>

              <motion.span
                className="text-[11px] font-semibold tracking-[0.28em] uppercase text-slate-200"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                SahajMobile
              </motion.span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-8">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-xs font-medium uppercase tracking-wider text-slate-400 hover:text-white group"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              {/* MORE DROPDOWN */}
              <div className="relative">
                <button
                  onClick={() => setOpenMore((p) => !p)}
                  className="text-xs uppercase tracking-wider text-slate-400 hover:text-white"
                >
                  More ▾
                </button>

                <AnimatePresence>
                  {openMore && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="absolute right-0 mt-3 w-48 bg-slate-900/90 rounded-xl border border-slate-700/40 p-3 backdrop-blur-xl shadow-2xl space-y-2"
                    >
                      {moreLinks.map((menu) => (
                        <Link
                          key={menu.href}
                          href={menu.href}
                          className="block px-3 py-2 rounded-lg text-xs text-slate-300 hover:bg-slate-800/40 hover:text-white"
                        >
                          {menu.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA */}
              <Link href="/for-customers">
                <Button className="text-[11px] tracking-wider">
                  Get a Phone on EMI
                </Button>
              </Link>
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center relative"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <motion.span
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 4 : 0 }}
                className="absolute h-[2px] w-6 bg-white"
              />
              <motion.span
                animate={{ opacity: mobileOpen ? 0 : 1 }}
                className="absolute h-[2px] w-6 bg-white"
              />
              <motion.span
                animate={{
                  rotate: mobileOpen ? -45 : 0,
                  y: mobileOpen ? -4 : 0,
                }}
                className="absolute h-[2px] w-6 bg-white"
              />
            </button>
          </nav>
        </Container>
      </motion.header>

      {/* MOBILE MENU FULL SCREEN */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl flex flex-col p-10 space-y-6"
          >
            <div className="mt-16 space-y-6">
              {[...mainLinks, ...moreLinks].map((item) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Link
                    href={item.href}
                    className="text-2xl font-semibold text-slate-200 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <div className="pt-4">
                <Button className="w-full text-[13px]">
                  Get a Phone on EMI
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

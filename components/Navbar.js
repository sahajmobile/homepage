// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import Container from './ui/Container';
// import Button from './ui/Button';

// // const mainLinks = [
// //   { label: 'Home', href: '/' },
// //   { label: 'How It Works', href: '/how-it-works' },
// //   { label: 'Customers', href: '/for-customers' },
// //   { label: 'Partners', href: '/for-shops-oems' },
// //   {
// //     label: 'Partners',
// //     submenu: [
// //       { label: 'Our Partners', type: 'label' },
// //       { label: 'Samsung', href: '/partners/samsung' },
// //       { label: 'Xiaomi', href: '/partners/xiaomi' },
// //       { label: 'Oppo', href: '/partners/oppo' },
// //       { label: 'Realme', href: '/partners/realme' },
// //     ],
// //   },
// //   { label: 'Technology', href: '/technology' },
// // ];

// const mainLinks = [
//   { label: 'Home', href: '/' },
//   { label: 'How It Works', href: '/how-it-works' },
//   { label: 'Customers', href: '/for-customers' },

//   {
//     label: 'Partners',
//     submenu: [
//       { type: 'label', label: 'Our Partners' },
//       { label: 'Samsung', href: '/partners/samsung' },
//       { label: 'Xiaomi', href: '/partners/xiaomi' },
//       { label: 'Oppo', href: '/partners/oppo' },
//       { label: 'Realme', href: '/partners/realme' },
//       { type: 'divider' },
//       { label: 'Partner Overview', href: '/for-shops-oems' },
//     ],
//   },

//   { label: 'Technology', href: '/technology' },
// ];

// const moreLinks = [
//   { label: 'About', href: '/about' },
//   { label: 'Careers', href: '/careers' },
//   { label: 'FAQ', href: '/faq' },
//   { label: 'Blog / News', href: '/blog' },
//   { label: 'Contact', href: '/contact' },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openMore, setOpenMore] = useState(false);

//   useEffect(() => {
//     const handler = () => setScrolled(window.scrollY > 10);
//     window.addEventListener('scroll', handler);
//     return () => window.removeEventListener('scroll', handler);
//   }, []);

//   return (
//     <>
//       {/* NAVBAR */}
//       <motion.header
//         className={`fixed inset-x-0 top-0 z-50 transition-all ${
//           scrolled
//             ? 'backdrop-blur-xl bg-slate-950/75 border-b border-slate-800/60'
//             : 'bg-transparent'
//         }`}
//         initial={{ y: -60, opacity: 0 }}
//         animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
//       >
//         <Container>
//           <nav className="flex h-20 items-center justify-between">
//             {/* LOGO + GLOW */}
//             <Link href="/" className="flex items-center gap-3">
//               <div className="relative h-9 w-9 flex items-center justify-center">
//                 <motion.div
//                   className="absolute inset-0 rounded-2xl blur-md"
//                   animate={{
//                     opacity: [0.6, 1, 0.6],
//                     scale: [1, 1.15, 1],
//                   }}
//                   transition={{
//                     duration: 5,
//                     repeat: Infinity,
//                     ease: 'easeInOut',
//                   }}
//                   style={{
//                     background:
//                       'radial-gradient(circle, rgba(56,189,248,0.75), #fff)',
//                     // 'radial-gradient(circle, rgba(56,189,248,0.75), rgba(139,92,246,0.40))',
//                   }}
//                 />

//                 <Image
//                   src="/logo.png"
//                   alt="SahajMobile Logo"
//                   width={34}
//                   height={34}
//                   className="relative z-10"
//                 />
//               </div>

//               <motion.span
//                 className="text-[11px] font-semibold tracking-[0.28em] uppercase text-slate-200"
//                 animate={{
//                   opacity: [0.7, 1, 0.7],
//                 }}
//                 transition={{ duration: 3, repeat: Infinity }}
//               >
//                 SahajMobile
//               </motion.span>
//             </Link>

//             {/* DESKTOP NAV */}
//             {/* DESKTOP NAV */}
//             <div className="hidden lg:flex items-center gap-8">
//               {mainLinks.map((item, idx) => (
//                 <div key={idx} className="relative group">
//                   {/* If normal link */}
//                   {!item.submenu && (
//                     <Link
//                       href={item.href}
//                       className="text-xs font-medium uppercase tracking-wider text-slate-400 hover:text-white group"
//                     >
//                       {item.label}
//                       <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-orange-400 transition-all duration-300 group-hover:w-full"></span>
//                     </Link>
//                   )}

//                   {/* If submenu */}
//                   {item.submenu && (
//                     <>
//                       <button className="text-xs font-medium uppercase tracking-wider text-slate-400 hover:text-white flex items-center gap-1">
//                         {item.label} ▾
//                       </button>

//                       {/* DROPDOWN */}
//                       <div className="absolute hidden group-hover:block mt-3 w-52 bg-slate-900/90 rounded-xl border border-slate-700/40 p-3 backdrop-blur-xl shadow-xl">
//                         {item.submenu.map((sub, sIdx) => (
//                           <div key={sIdx}>
//                             {/* LABEL */}
//                             {sub.type === 'label' && (
//                               <div className="px-2 py-1 text-[10px] uppercase tracking-wider text-slate-500">
//                                 {sub.label}
//                               </div>
//                             )}

//                             {/* DIVIDER */}
//                             {sub.type === 'divider' && (
//                               <div className="my-2 h-px bg-slate-700/40" />
//                             )}

//                             {/* CLICKABLE LINK */}
//                             {!sub.type && (
//                               <Link
//                                 href={sub.href}
//                                 className="block px-3 py-2 rounded-lg text-xs text-slate-300 hover:bg-slate-800/40 hover:text-white"
//                               >
//                                 {sub.label}
//                               </Link>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     </>
//                   )}
//                 </div>
//               ))}

//               {/* CTA */}
//               <Link href="/for-customers">
//                 <Button className="text-[11px] tracking-wider">
//                   Get a Phone on EMI
//                 </Button>
//               </Link>
//             </div>

//             {/* MOBILE HAMBURGER */}
//             <button
//               className="lg:hidden w-10 h-10 flex items-center justify-center relative"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               <motion.span
//                 animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 4 : 0 }}
//                 className="absolute h-[2px] w-6 bg-white"
//               />
//               <motion.span
//                 animate={{ opacity: mobileOpen ? 0 : 1 }}
//                 className="absolute h-[2px] w-6 bg-white"
//               />
//               <motion.span
//                 animate={{
//                   rotate: mobileOpen ? -45 : 0,
//                   y: mobileOpen ? -4 : 0,
//                 }}
//                 className="absolute h-[2px] w-6 bg-white"
//               />
//             </button>
//           </nav>
//         </Container>
//       </motion.header>

//       {/* MOBILE MENU FULL SCREEN */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl flex flex-col p-10 space-y-6"
//           >
//             <div className="mt-16 space-y-6">
//               {[...mainLinks, ...moreLinks].map((item) => (
//                 <motion.div
//                   key={item.href}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.25 }}
//                 >
//                   <Link
//                     href={item.href}
//                     className="text-2xl font-semibold text-slate-200 hover:text-white"
//                     onClick={() => setMobileOpen(false)}
//                   >
//                     {item.label}
//                   </Link>
//                 </motion.div>
//               ))}

//               <div className="pt-4">
//                 <Button className="w-full text-[13px]">
//                   Get a Phone on EMI
//                 </Button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './ui/Container';
import Button from './ui/Button';

//
// ---------------------- NAV LINKS ----------------------
//

const mainLinks = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Customers', href: '/for-customers' },

  {
    label: 'Partners',
    submenu: [
      { label: 'Partner Shops', href: '/partner-shops' },

      { label: 'Partner Overview', href: '/for-shops-oems' },
    ],
  },

  { label: 'Technology', href: '/technology' },
];

const moreLinks = [
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog / News', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

//
// ---------------------- NAVBAR COMPONENT ----------------------
//

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMore, setOpenMore] = useState(false);
  const [openPartners, setOpenPartners] = useState(false);

  // Detect scroll
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
            {/* ------------------ LOGO ------------------ */}
            <Link href="/" className="flex items-center gap-3">
              {/* <div className="relative h-9 w-9 flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 rounded-2xl blur-md"
                  animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.15, 1] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    background:
                      'radial-gradient(circle, rgba(56,189,248,0.75), #fff)',
                  }}
                />

                <Image
                  src="/logo.png"
                  // <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><filter x="0%" y="0%" width="100%" height="100%" id="0d4cc437a6"><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" color-interpolation-filters="sRGB"/></filter><filter x="0%" y="0%" width="100%" height="100%" id="0c5c4665d6"><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.2126 0.7152 0.0722 0 0" color-interpolation-filters="sRGB"/></filter><clipPath id="8595283e70"><path d="M 61.054688 66 L 313.804688 66 L 313.804688 309.476562 L 61.054688 309.476562 Z M 61.054688 66 " clip-rule="nonzero"/></clipPath><mask id="3efcbc5d5f"><g filter="url(#0d4cc437a6)"><g filter="url(#0c5c4665d6)" transform="matrix(0.493652, 0, 0, 0.493652, 61.054424, 65.727008)"><image x="0" y="0" width="512" xlink:href="data:image/png;base64,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" height="512" preserveAspectRatio="xMidYMid meet"/></g></g></mask></defs><g clip-path="url(#8595283e70)"><g mask="url(#3efcbc5d5f)"><g transform="matrix(0.493652, 0, 0, 0.493652, 61.054424, 65.727008)"><image x="0" y="0" width="512" xlink:href="data:image/png;base64,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" height="512" preserveAspectRatio="xMidYMid meet"/></g></g></g></svg>

                  width={34}
                  height={34}
                  alt="SahajMobile Logo"
                  className="relative z-10"
                />
              </div> */}
              <div className="relative h-10 w-10 flex items-center justify-center">
                {/* Glow SVG behind */}
                <div className="absolute inset-0 -z-10 opacity-90">
                  <Image
                    src="/svg/logo-glow.svg"
                    alt=""
                    fill
                    className="object-contain blur-sm"
                  />
                </div>

                {/* Animated radial glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl blur-md"
                  animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.15, 1] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    background:
                      'radial-gradient(circle, rgba(56,189,248,0.75), #fff)',
                  }}
                />

                {/* Actual logo */}
                <Image
                  src="/svg/logo-glow.svg"
                  width={54}
                  height={54}
                  alt="SahajMobile Logo"
                  className="relative z-10"
                />
              </div>

              <motion.span
                className="text-[11px] font-semibold tracking-[0.28em] uppercase text-slate-200"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                SahajMobile
              </motion.span>
            </Link>

            {/* ------------------ DESKTOP NAV ------------------ */}
            <div className="hidden lg:flex items-center gap-8">
              {mainLinks.map((item, idx) => (
                <div key={`nav-${idx}`} className="relative">
                  {/* Normal link */}
                  {!item.submenu && (
                    // <Link
                    //   href={item.href}
                    //   className="text-xs uppercase tracking-wider text-slate-400 hover:text-white"
                    // >
                    //   {item.label}
                    //   <span className="block h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-orange-400 transition-all duration-300 group-hover:w-full"></span>
                    // </Link>
                    <div className="group relative">
                      <Link
                        href={item.href}
                        className="text-xs uppercase tracking-wider text-slate-400 hover:text-white"
                      >
                        {item.label}
                      </Link>

                      <span
                        className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-orange-400 
    transition-all duration-300 group-hover:w-full"
                      ></span>
                    </div>
                  )}

                  {/* Partners submenu */}
                  {item.submenu && (
                    <>
                      <button
                        onClick={() => {
                          setOpenPartners((v) => !v);
                          setOpenMore(false);
                        }}
                        className="text-xs uppercase tracking-wider flex items-center gap-1 text-slate-400 hover:text-white"
                      >
                        {item.label}
                        <motion.span
                          animate={{ rotate: openPartners ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          ▾
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {openPartners && (
                          <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            className="absolute mt-3 w-56 bg-slate-900/90 rounded-xl border border-slate-700/40 p-3 backdrop-blur-xl shadow-xl z-50"
                          >
                            {item.submenu.map((sub, sIdx) => (
                              <div key={`submenu-${sIdx}`}>
                                {/* Label */}
                                {sub.type === 'label' && (
                                  <div className="px-2 py-1 text-[10px] uppercase tracking-wider text-slate-500">
                                    {sub.label}
                                  </div>
                                )}

                                {/* Divider */}
                                {sub.type === 'divider' && (
                                  <div className="my-2 h-px bg-slate-700/40" />
                                )}

                                {/* Link */}
                                {!sub.type && (
                                  <Link
                                    href={sub.href}
                                    onClick={() => setOpenPartners(false)}
                                    className="block px-3 py-2 rounded-lg text-xs text-slate-300 hover:bg-slate-800/40 hover:text-white"
                                  >
                                    {sub.label}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}

              {/* ---------------- MORE dropdown ---------------- */}
              <div className="relative">
                <button
                  onClick={() => {
                    setOpenMore((v) => !v);
                    setOpenPartners(false);
                  }}
                  className="text-xs uppercase tracking-wider text-slate-400 hover:text-white"
                >
                  More ▾
                </button>

                <AnimatePresence>
                  {openMore && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="absolute right-0 mt-3 w-48 bg-slate-900/90 rounded-xl border border-slate-700/40 p-3 backdrop-blur-xl shadow-xl"
                    >
                      {moreLinks.map((menu, i) => (
                        <Link
                          key={`more-${i}`}
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

            {/* ------------------ MOBILE MENU BUTTON ------------------ */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center relative"
              onClick={() => {
                setMobileOpen((v) => !v);
                setOpenMore(false);
                setOpenPartners(false);
              }}
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

      {/* ------------------ MOBILE MENU ------------------ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl flex flex-col p-10 space-y-6"
          >
            <div className="mt-16 space-y-6">
              {mainLinks.map((item, i) => (
                <div key={`m-${i}`}>
                  {/* Partners submenu on mobile */}
                  {item.submenu && (
                    <>
                      <p className="text-slate-500 text-xs uppercase tracking-widest mb-2">
                        Partners
                      </p>

                      {item.submenu.map(
                        (sub, si) =>
                          !sub.type && (
                            <Link
                              key={`ms-${si}`}
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className="text-xl text-slate-200 hover:text-white block py-1"
                            >
                              {sub.label}
                            </Link>
                          )
                      )}

                      <div className="my-4 border-t border-slate-800" />
                    </>
                  )}

                  {/* Normal mobile link */}
                  {!item.submenu && (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-2xl text-slate-200 hover:text-white block"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* MORE LINKS */}
              <p className="text-slate-500 text-xs uppercase tracking-widest mt-4">
                More
              </p>

              {moreLinks.map((item, i) => (
                <Link
                  key={`ml-${i}`}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl text-slate-200 hover:text-white block"
                >
                  {item.label}
                </Link>
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

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
              <div className="relative h-9 w-9 flex items-center justify-center">
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
                  width={34}
                  height={34}
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
                    <Link
                      href={item.href}
                      className="text-xs uppercase tracking-wider text-slate-400 hover:text-white"
                    >
                      {item.label}
                      <span className="block h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-orange-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
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

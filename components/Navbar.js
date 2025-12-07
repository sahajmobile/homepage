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
  {
    label: 'Partners',
    submenu: [
      { label: 'Partner Shops', href: '/partner-shops' },
      { label: 'Partner Overview', href: '/for-shops-oems' },
    ],
  },
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
  const [openPartners, setOpenPartners] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-all
  backdrop-blur-xl
  ${
    scrolled
      ? 'bg-black/60 border-b border-white/10'
      : 'bg-black/30 border-b border-white/10'
  }
`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Container>
          <nav className="flex h-20 items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-20 w-20 flex items-center justify-center">
                <Image
                  src="/svg/logo-glow.svg"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <motion.span
                className="text-[12px] font-semibold tracking-[0.28em] uppercase text-slate-300"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                SahajMobile
              </motion.span>
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              {mainLinks.map((item, idx) => (
                <div key={idx} className="relative group">
                  {!item.submenu && (
                    <Link
                      href={item.href}
                      className="text-xs uppercase tracking-wider text-slate-400 group-hover:text-white transition"
                    >
                      {item.label}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-orange-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}

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
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            className="absolute mt-4 w-56 bg-black/60 backdrop-blur-2xl rounded-xl border border-white/10 p-4 shadow-lg"
                          >
                            {item.submenu.map((sub, i) => (
                              <Link
                                key={i}
                                href={sub.href}
                                onClick={() => setOpenPartners(false)}
                                className="block px-3 py-2 rounded-md text-xs text-slate-300 hover:bg-white/10 hover:text-white"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}

              {/* MORE MENU */}
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
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="absolute right-0 mt-4 w-48 bg-black/60 backdrop-blur-2xl rounded-xl border border-white/10 p-4 shadow-lg"
                    >
                      {moreLinks.map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-xs text-slate-300 hover:bg-white/10 hover:text-white"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/for-customers">
                <Button className="text-[11px] tracking-wider">
                  Get a Phone on EMI
                </Button>
              </Link>
            </div>

            <button
              className="lg:hidden w-20 h-20 flex items-center justify-center relative"
              onClick={() => {
                setMobileOpen((v) => !v);
                setOpenMore(false);
                setOpenPartners(false);
              }}
            >
              <motion.span
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }}
                className="absolute h-[2px] w-7 bg-white"
              />
              <motion.span
                animate={{ opacity: mobileOpen ? 0 : 1 }}
                className="absolute h-[2px] w-7 bg-white"
              />
              <motion.span
                animate={{
                  rotate: mobileOpen ? -45 : 0,
                  y: mobileOpen ? -6 : 0,
                }}
                className="absolute h-[2px] w-7 bg-white"
              />
            </button>
          </nav>
        </Container>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-2xl flex flex-col p-10 space-y-6"
          >
            <div className="mt-16 space-y-6">
              {mainLinks.map((item, i) => (
                <div key={i}>
                  {!item.submenu && (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-2xl text-slate-300 hover:text-white block"
                    >
                      {item.label}
                    </Link>
                  )}

                  {item.submenu && (
                    <>
                      <p className="text-slate-500 text-xs uppercase tracking-widest mt-4">
                        Partners
                      </p>

                      {item.submenu.map((s, j) => (
                        <Link
                          key={j}
                          href={s.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-xl text-slate-300 hover:text-white block py-1"
                        >
                          {s.label}
                        </Link>
                      ))}

                      <div className="my-4 border-t border-white/10" />
                    </>
                  )}
                </div>
              ))}

              <p className="text-slate-500 text-xs uppercase tracking-widest">
                More
              </p>

              {moreLinks.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl text-slate-300 hover:text-white block"
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4">
                <Link
                  href="https://api.whatsapp.com/send?phone=%2B8801901634762"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full text-[13px]">
                    Get a Phone on EMI
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

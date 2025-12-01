'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import Container from './ui/Container';

const links = [
  { label: 'Home', href: '#top' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Technology', href: '#technology' },
  { label: 'Impact', href: '#impact' },
  { label: 'Team', href: '#team' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled
          ? 'backdrop-blur-xl bg-slate-950/85 border-b border-slate-800/70'
          : 'bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-2xl
              bg-[radial-gradient(circle_at_20%_0%,#22d3ee,#0ea5e9,#4f46e5)]
              shadow-[0_0_32px_rgba(56,189,248,0.65)]"
            >
              <span className="text-xs font-bold tracking-[0.12em] text-slate-50">
                SM
              </span>
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
              SahajMobile
            </span>
          </div>

          {/* Links */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400 hover:text-slate-50 transition-colors group"
              >
                {item.label}
                <span
                  className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0
                    bg-[linear-gradient(to_right,#22d3ee,#f97316)] transition-all duration-300
                    group-hover:w-full"
                />
              </a>
            ))}
            <Button className="ml-2">Partner With Us</Button>
          </div>
        </nav>
      </Container>
    </motion.header>
  );
}

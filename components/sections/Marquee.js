'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const partners = [
  'EMI Financing',
  'Alternative Data',
  'Device Intelligence',
  'Retail Rails',
  'Sahaj Locker',
  'Underwriting Engine',
  'Bank Partnerships',
  'Credit-Invisible Customers',
];

export default function Marquee() {
  return (
    <SectionWrapper
      id="partners"
      subtle
      className="border-y border-slate-800/60 bg-slate-950/70"
    >
      <div className="flex flex-col gap-4">
        <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
          Trusted rails for modern lenders & OEMs
        </p>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12 whitespace-nowrap text-sm text-slate-300"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              duration: 24,
              ease: 'linear',
            }}
          >
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-emerald-400" />
                {p}
              </span>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent" />
        </div>
      </div>
    </SectionWrapper>
  );
}

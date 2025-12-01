'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { useEffect } from 'react';

function Counter({ value }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));

  useEffect(() => {
    animate(count, value, { duration: 2 });
  }, [value]);

  return <motion.span>{rounded}</motion.span>;
}

const stats = [
  { value: 17000, label: 'Honorable Customers', suffix: '+' },
  { value: 1250, label: 'Partner Shops', suffix: '+' },
  { value: 80, label: 'Gross Yield', suffix: '%' },
  { value: 10, label: 'Default Rate', suffix: '% <' },
];

export default function Impact() {
  return (
    <SectionWrapper className="section-padding bg-slate-950/40">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold bg-gradient-to-r from-cyan-400 via-sky-300 to-white bg-clip-text text-transparent">
          Impact
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm mt-3">
          High-yield small-ticket credit powered by device intelligence and
          behavioral underwriting.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 text-center hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(14,165,233,0.35)] transition-all"
          >
            <p className="text-3xl font-bold text-white">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="text-slate-400 text-sm mt-2">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

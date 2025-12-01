'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const tech = [
  {
    title: 'Sahaj Manager App',
    body: 'Retail partners onboard customers, verify identity, and issue EMI directly inside the SahajMobile Manager App.',
  },
  {
    title: 'Sahaj Locker',
    body: 'Device-level security allows locking/unlocking smartphones based on repayment performance — reducing default rates dramatically.',
  },
  {
    title: 'Underwriting Engine',
    body: 'Behavioral + alternative data models generate risk scores and repayment predictions for banks integrating with us.',
  },
];

export default function Technology() {
  return (
    <SectionWrapper className="section-padding">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
          Technology
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm mt-3">
          Lightweight infrastructure powering EMI, device intelligence, and
          underwriting across low-income markets.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {tech.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-slate-900/60 border border-slate-800 
              p-6 hover:shadow-[0_0_35px_rgba(129,140,248,0.35)] hover:-translate-y-2 transition-all"
          >
            <h3 className="text-lg font-semibold text-white">{t.title}</h3>
            <p className="text-slate-400 text-sm mt-3">{t.body}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

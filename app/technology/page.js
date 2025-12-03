'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from '@/components/sections/SectionWrapper';
import Navbar from '@/components/Navbar';

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
    <>
      <Navbar />
      <SectionWrapper className="section-padding animated-bg">
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-semibold bg-gradient-to-r from-cyan-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
            Technology
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm mt-3">
            Lightweight infrastructure powering EMI, device intelligence, and
            underwriting across low-income markets.
          </p>
        </div>

        {/* FEATURE MOCKUP IMAGE */}
        <div className="relative w-full flex justify-center mb-20">
          {/* Glow aura */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full
          bg-[radial-gradient(circle,rgba(56,189,248,0.25),transparent)]
          blur-3xl opacity-60 -z-10"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="relative drop-shadow-[0_0_50px_rgba(56,189,248,0.35)] transition-all"
          >
            <Image
              src="/tech2.png"
              alt="SahajMobile System UI"
              width={1200}
              height={700}
              className="rounded-2xl shadow-xl"
              priority
            />
          </motion.div>
        </div>

        {/* TECHNOLOGY CARDS */}
        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {tech.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                boxShadow: '0 0 35px rgba(129,140,248,0.35)',
              }}
              className="rounded-2xl bg-slate-900/60 border border-slate-800
            p-6 backdrop-blur-xl
            transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white">{t.title}</h3>
              <p className="text-slate-400 text-sm mt-3">{t.body}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}

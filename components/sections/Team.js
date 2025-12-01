'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const team = [
  {
    name: 'Rafsun Faiz',
    role: 'Founder & CEO',
    bio: `Finance professional with 10+ years of experience across lending, FinTech, and structured finance. 
Former VP at Guggenheim Partners with roles at a FinTech real estate fund and Macquarie. UC Berkeley graduate.`,
  },
  {
    name: 'Abu Al Motalib',
    role: 'Co-Founder & Managing Director',
    bio: `Dynamic entrepreneur with a strong track record in building successful startups. 
Owner Director of Tritech Building Services Ltd, leading innovation and new ventures.`,
  },
  {
    name: 'Feng Wang',
    role: 'Co-founder, Advisor',
    bio: `Director at 1Sharpe Capital & 1Sharpe Ventures, leading capital markets, asset management & venture advisory. 
Ex-Kiavi founding team member with experience at Cerberus & BlackRock. Cornell University graduate.`,
  },
];

export default function Team() {
  return (
    <SectionWrapper className="section-padding animated-bg">
      <div className="text-center mb-16 relative z-10">
        <h2
          className="text-4xl font-semibold bg-gradient-to-r 
            from-sky-400 via-indigo-400 to-pink-400 
            bg-clip-text text-transparent"
        >
          Bangladesh-rooted Leadership
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto mt-3">
          Deep B2B & B2C relationships, guided by global fintech veterans.
        </p>
      </div>

      {/* TEAM CARDS */}
      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, boxShadow: '0 0 50px rgba(56,189,248,0.4)' }}
            className="relative rounded-3xl p-8 
              bg-slate-900/40 backdrop-blur-xl 
              border border-slate-800 
              shadow-[0_0_30px_rgba(0,0,0,0.4)]
              hover:shadow-[0_0_50px_rgba(56,189,248,0.4)]
              transition-all duration-500"
          >
            {/* Gradient Ring Aura */}
            <div
              className="absolute inset-0 rounded-3xl 
              bg-gradient-to-b from-cyan-500/5 to-orange-500/5
              pointer-events-none"
            ></div>

            {/* Avatar Placeholder */}
            <div
              className="mx-auto mb-6 h-24 w-24 rounded-full 
                bg-gradient-to-br from-sky-400 to-orange-400 
                shadow-[0_0_40px_rgba(56,189,248,0.3)]"
            />

            <h3 className="text-xl font-semibold text-white text-center">
              {member.name}
            </h3>
            <p className="text-indigo-300 text-sm text-center mt-1">
              {member.role}
            </p>

            <p className="text-slate-400 text-sm mt-4 leading-relaxed">
              {member.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

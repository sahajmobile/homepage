'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '../../components/sections/SectionWrapper';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import Navbar from '@/components/Navbar';
import NeonBackground from '@/components/sections/NeonBackground';
import ThreeBackground from '@/components/background/ThreeBackground';
import Link from 'next/link';

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function ForCustomersPage() {
  return (
    <>
      <Navbar />
      <ThreeBackground>
        <main className="pt-28 lg:pt-32 pb-24">
          {/* HERO SECTION */}

          <SectionWrapper>
            <Container>
              <motion.div
                variants={fade}
                initial="hidden"
                animate="show"
                className="max-w-3xl"
              >
                <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400 mb-3">
                  For Customers
                </p>

                <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
                  Smartphone EMI made for everyday life.
                </h1>

                <p className="mt-4 text-sm md:text-base text-slate-300 leading-relaxed">
                  Whether you&apos;re a rider, student, garment worker,
                  freelancer, or someone upgrading their first smartphone —
                  SahajMobile helps you get the phone you need today and pay
                  over time.
                </p>

                <div className="mt-8">
                  <Link
                    href="https://api.whatsapp.com/send?phone=%2B8801901634762"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="px-6 py-3 text-sm">
                      Get a Phone on EMI
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </Container>
          </SectionWrapper>

          {/* WHO CAN APPLY */}
          <SectionWrapper className="pt-10">
            <Container>
              <motion.h2
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-semibold text-white mb-4"
              >
                Who Can Apply?
              </motion.h2>

              <motion.ul
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-3 text-sm md:text-base text-slate-300"
              >
                <li className="flex gap-3">
                  <span className="h-2 w-2 mt-2 rounded-full bg-cyan-400" />
                  Adults 18+ with valid NID.
                </li>
                <li className="flex gap-3">
                  <span className="h-2 w-2 mt-2 rounded-full bg-cyan-400" />
                  Anyone with regular income — salary, small business, gig work,
                  shop work, garment work, delivery riding, or freelancing.
                </li>
                <li className="flex gap-3">
                  <span className="h-2 w-2 mt-2 rounded-full bg-cyan-400" />
                  Customers living in areas where SahajMobile partner shops are
                  available.
                </li>
              </motion.ul>
            </Container>
          </SectionWrapper>

          {/* WHAT YOU NEED */}
          <SectionWrapper className="pt-8">
            <Container>
              <motion.h2
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-semibold text-white mb-4"
              >
                What You Need
              </motion.h2>

              <motion.div
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-3 text-sm md:text-base text-slate-300"
              >
                <p>• National ID (NID)</p>
                <p>• Basic personal and contact information</p>
                <p>
                  • Sometimes a reference or guarantor may be requested
                  depending on your profile
                </p>
              </motion.div>
            </Container>
          </SectionWrapper>

          {/* WHAT YOU GET */}
          <SectionWrapper className="pt-8">
            <Container>
              <motion.h2
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-semibold text-white mb-4"
              >
                What You Get
              </motion.h2>

              <motion.div
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid gap-6 md:grid-cols-2"
              >
                <div className="rounded-2xl border border-slate-700/60 bg-slate-950/80 p-5">
                  <h3 className="text-sm font-semibold text-white">
                    A Better Smartphone
                  </h3>
                  <p className="mt-2 text-xs md:text-sm text-slate-300 leading-relaxed">
                    Choose from trusted brands at partner shops — upgrade to a
                    higher-quality device without paying the full price upfront.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-700/60 bg-slate-950/80 p-5">
                  <h3 className="text-sm font-semibold text-white">
                    Flexible Repayment
                  </h3>
                  <p className="mt-2 text-xs md:text-sm text-slate-300 leading-relaxed">
                    Weekly or monthly EMIs that match your real-life cash flow
                    and income patterns.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-700/60 bg-slate-950/80 p-5">
                  <h3 className="text-sm font-semibold text-white">
                    Clear EMI Plan
                  </h3>
                  <p className="mt-2 text-xs md:text-sm text-slate-300">
                    Know exactly how much you pay, and when. No hidden charges.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-700/60 bg-slate-950/80 p-5">
                  <h3 className="text-sm font-semibold text-white">
                    Build Your Track Record
                  </h3>
                  <p className="mt-2 text-xs md:text-sm text-slate-300">
                    On-time repayment builds a digital repayment history that
                    may unlock more financial products in the future.
                  </p>
                </div>
              </motion.div>
            </Container>
          </SectionWrapper>

          {/* MINI FAQ PREVIEW */}
          <SectionWrapper className="pt-16">
            <Container>
              <motion.h2
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-semibold text-white mb-3"
              >
                Frequently Asked Questions
              </motion.h2>

              <motion.div
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-5"
              >
                <div className="p-5 rounded-xl border border-slate-700/60 bg-slate-900/60">
                  <h4 className="text-sm font-semibold text-white">
                    Do I need a credit card or bank account?
                  </h4>
                  <p className="mt-1 text-sm text-slate-300">
                    No. You only need NID and basic personal info to apply.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-slate-700/60 bg-slate-900/60">
                  <h4 className="text-sm font-semibold text-white">
                    How do I pay my instalments?
                  </h4>
                  <p className="mt-1 text-sm text-slate-300">
                    You can pay weekly or monthly via mobile wallet or bank
                    transfer.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-slate-700/60 bg-slate-900/60">
                  <h4 className="text-sm font-semibold text-white">
                    What happens if I miss a payment?
                  </h4>
                  <p className="mt-1 text-sm text-slate-300">
                    Some phone features may be temporarily locked until your EMI
                    is updated. Once paid, everything returns to normal.
                  </p>
                </div>
              </motion.div>

              <div className="mt-6">
                <Link href="/faq">
                  <Button variant="secondary" className="px-6 py-3 text-sm">
                    View Full FAQ
                  </Button>
                </Link>
              </div>
            </Container>
          </SectionWrapper>
        </main>
      </ThreeBackground>
    </>
  );
}

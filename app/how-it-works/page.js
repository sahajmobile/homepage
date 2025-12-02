'use client';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import SectionWrapper from '../../components/sections/SectionWrapper';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stepsCustomer = [
  {
    title: 'Visit a Partner Shop',
    body: 'Choose your smartphone at a SahajMobile partner retailer. The shop manager opens the SahajMobile Manager App to start your EMI application.',
  },
  {
    title: 'Apply With Basic Info',
    body: 'Share your NID and a few simple details. No credit card, complex forms, or bank visit needed. Everything happens at the shop counter.',
  },
  {
    title: 'Get Approved & Take Your Phone',
    body: 'Once approved, you pay the agreed down payment, digitally sign your EMI agreement, and leave the shop with your new smartphone the same day.',
  },
  {
    title: 'Repay & Build Your Track Record',
    body: 'Pay weekly or monthly instalments via mobile wallet or bank transfer. Your repayment history becomes a digital credit profile for future products.',
  },
];

const stepsPartner = [
  {
    title: 'Install the SahajMobile Manager App',
    body: 'Your staff use our app on a standard Android phone to onboard customers, submit applications, and track EMIs at checkout.',
  },
  {
    title: 'Onboard Your Shop With Our Team',
    body: 'We register your shop, set up your users, and configure eligible devices / offers. Training sessions and materials are provided.',
  },
  {
    title: 'Offer EMI at Checkout',
    body: 'For eligible customers, your team can instantly offer SahajMobile EMI while they are choosing their device — no separate credit counter needed.',
  },
  {
    title: 'Track Approvals & Overdues in One Place',
    body: 'View submitted applications, status updates, and overdue EMIs in the app. SahajMobile handles underwriting, collections, and device security.',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 lg:pt-32 pb-24">
        {/* HERO STRIP */}
        <SectionWrapper className="pb-10">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400 mb-3">
                How SahajMobile Works
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold text-white">
                Simple smartphone EMI for everyday life.
              </h1>
              <p className="mt-4 text-sm md:text-base text-slate-300">
                SahajMobile turns local phone shops into mini credit desks.
                Customers walk in, choose a phone, and walk out with a device on
                EMI — without needing a credit card or traditional bank history.
              </p>
            </motion.div>
          </Container>
        </SectionWrapper>

        {/* SECTION 1 – FOR CUSTOMERS */}
        <SectionWrapper id="how-customers" className="pt-0">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            {/* Left – steps */}
            <div>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-semibold text-white"
              >
                For Customers: 4 simple steps to get a phone on EMI
              </motion.h2>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-3 text-sm text-slate-300 max-w-xl"
              >
                Whether you&apos;re a rider, student, garment worker, or small
                business owner, SahajMobile helps you upgrade to the smartphone
                you need and pay over time.
              </motion.p>

              <div className="mt-8 space-y-5">
                {stepsCustomer.map((step, idx) => (
                  <motion.div
                    key={step.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06 }}
                    className="flex gap-4"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900/70 border border-slate-700/70 text-xs text-slate-300">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-xs md:text-sm text-slate-300 leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Device lock note */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-8 rounded-2xl border border-slate-700/60 bg-slate-900/60 p-4 text-xs md:text-sm text-slate-300"
              >
                <span className="font-semibold text-slate-100">
                  A quick note on device security:
                </span>{' '}
                if a payment is missed, some features of the phone may be
                temporarily blocked until the EMI is updated. Once you catch up
                on payments, full access is restored. This keeps EMI pricing
                fair and sustainable for everyone.
              </motion.div>
            </div>

            {/* Right – visual card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative mx-auto w-full max-w-sm"
            >
              <div className="pointer-events-none absolute -left-16 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_30%_0%,rgba(56,189,248,0.7),transparent)] blur-3xl" />
              <div className="pointer-events-none absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_70%_90%,rgba(249,115,22,0.8),transparent)] blur-3xl" />

              <div className="relative rounded-3xl border border-slate-700/70 bg-slate-950/90 p-6 shadow-[0_0_40px_rgba(15,23,42,0.9)]">
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                  Example journey
                </p>
                <h3 className="mt-3 text-sm font-semibold text-white">
                  Julekha upgrades her work phone
                </h3>
                <p className="mt-2 text-xs text-slate-300">
                  Julekha, a garment worker, upgrades to a BDT 14,000 smartphone
                  on weekly EMI. She pays via mobile wallet and uses the phone
                  to coordinate extra piecework over WhatsApp and Facebook —
                  increasing her earnings.
                </p>

                <div className="mt-4 rounded-2xl bg-slate-900/80 p-4 space-y-2 text-[11px] text-slate-300">
                  <div className="flex justify-between">
                    <span>Phone price</span>
                    <span className="text-slate-50">BDT 14,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Down payment</span>
                    <span className="text-slate-50">BDT 5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tenor</span>
                    <span className="text-slate-50">24 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Repayment</span>
                    <span className="text-emerald-300">On-time</span>
                  </div>
                </div>

                <div className="mt-5 flex justify-between gap-2 text-[11px] text-slate-400">
                  <span>Smartphone EMI made for real-life cash flows.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* SECTION 2 – FOR SHOPS & OEMS */}
        <SectionWrapper id="how-partners" className="pt-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            {/* Left intro */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                For Shops & OEMs: turn your shop into a mini credit desk
              </h2>
              <p className="mt-3 text-sm text-slate-300 max-w-md">
                SahajMobile lets you offer EMI at the point of sale — driving
                higher conversion and bigger basket sizes without turning your
                shop into a bank.
              </p>

              <div className="mt-6 space-y-3 text-xs text-slate-300">
                <div>• Higher conversion & bigger ticket sizes</div>
                <div>
                  • Cardless EMI — SahajMobile handles risk & collections
                </div>
                <div>• Simple tools and training for your team</div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button className="text-sm px-5 py-2.5">Become Partner</Button>
                <Button variant="secondary" className="text-sm px-5 py-2.5">
                  Talk to Partnerships
                </Button>
              </div>
            </motion.div>

            {/* Right partner steps */}
            <div className="space-y-5">
              {stepsPartner.map((step, idx) => (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="rounded-2xl border border-slate-700/70 bg-slate-950/80 p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-xs md:text-sm text-slate-300 leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </main>
    </>
  );
}

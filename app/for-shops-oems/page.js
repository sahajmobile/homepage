'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionWrapper from '@/components/sections/SectionWrapper';
import ThreeBackground from '@/components/background/ThreeBackground';

const fade = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* =================== MAIN PAGE ==================== */
/* ================================================== */

export default function ForShopsOEMsPage() {
  /* ---------------- EMI CALCULATOR ---------------- */
  const [price, setPrice] = useState(20000);
  const [down, setDown] = useState(40);
  const [tenor, setTenor] = useState(6);

  const downAmount = Math.round((price * down) / 100);
  const financed = Math.max(price - downAmount, 0);
  const monthly = tenor > 0 ? Math.round(financed / tenor) : 0;

  /* ---------------- Phones Grid ---------------- */
  const phones = [
    {
      name: 'Samsung Galaxy A04',
      emi: 'Tk 1,299 / month',
      specs: '4GB • 64GB • 12 months',
      img: '/phones/a04.webp',
    },
    {
      name: 'vivo Y02',
      emi: 'Tk 1,199 / month',
      specs: '3GB • 32GB',
      img: '/phones/y02.png',
    },
    {
      name: 'Samsung Galaxy A14',
      emi: 'Tk 1,699 / month',
      specs: '4GB • 128GB',
      img: '/phones/a14.jpg',
    },
    {
      name: 'Redmi 12',
      emi: 'Tk 1,499 / month',
      specs: '4GB • 128GB',
      img: '/phones/12.webp',
    },
    {
      name: 'Oppo A17',
      emi: 'Tk 1,399 / month',
      specs: '4GB • 64GB',
      img: '/phones/a17.jpg',
    },
    {
      name: 'Infinix Hot 12',
      emi: 'Tk 1,249 / month',
      specs: '4GB • 64GB',
      img: '/phones/i12.webp',
    },
    {
      name: 'Realme C30',
      emi: 'Tk 1,099 / month',
      specs: '3GB • 32GB',
      img: '/phones/c30.jpg',
    },
    {
      name: 'vivo Y17',
      emi: 'Tk 1,599 / month',
      specs: '6GB • 128GB',
      img: '/phones/y17.png',
    },
    {
      name: 'Samsung S22 Ultra',
      emi: 'Tk 6,999 / month',
      specs: '12GB • 256GB',
      img: '/phones/s22.webp',
    },
  ];

  return (
    <ThreeBackground>
      <Navbar />
      <main className="pt-28 lg:pt-32 pb-24">
        <SectionWrapper>
          <Container>
            <motion.div
              variants={fade}
              initial="hidden"
              animate="show"
              className="max-w-3xl"
            >
              <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400 mb-3">
                For Shops & OEMs
              </p>

              <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
                Grow your smartphone sales with
                <span className="block bg-gradient-to-r from-cyan-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                  SahajMobile EMI.
                </span>
              </h1>

              <p className="mt-5 text-sm md:text-base text-slate-300">
                Turn walk-in customers into instant EMI buyers — without
                becoming a bank. SahajMobile handles risk, underwriting,
                collections, and device security.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="https://api.whatsapp.com/send?phone=%2B8801901634762"
                  target="_blank"
                >
                  <Button className="px-6 py-3 text-sm">
                    Get a Phone on EMI
                  </Button>
                </Link>

                <Link
                  href="https://mail.google.com/mail/?view=cm&to=info@sahajmobile.com"
                  target="_blank"
                >
                  <Button className="px-6 py-3 text-sm bg-gradient-to-r from-cyan-400 to-orange-400 text-slate-900 font-semibold">
                    Mail Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </Container>
        </SectionWrapper>

        <SectionWrapper className="pt-4">
          <Container>
            <motion.div
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-700/60 bg-slate-950/70 px-6 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                Trusted by leading smartphone brands & retailers
              </p>

              <div className="flex flex-wrap items-center gap-6 opacity-80">
                <Image
                  src="/samsung1.png"
                  alt="Samsung"
                  width={80}
                  height={26}
                />
                <Image src="/vivo.png" alt="Vivo" width={70} height={26} />
                <Image src="/oppo.png" alt="Oppo" width={70} height={26} />
                <Image src="/realme.jpg" alt="Realme" width={78} height={26} />
                <Image src="/honor.png" alt="Honor" width={78} height={26} />
              </div>
            </motion.div>
          </Container>
        </SectionWrapper>

        <SectionWrapper>
          <Container>
            <motion.h2
              variants={fade}
              initial="hidden"
              whileInView="show"
              className="text-xl md:text-2xl font-semibold text-white mb-8"
            >
              Why Partner With SahajMobile?
            </motion.h2>

            <div className="grid gap-6 md:grid-cols-3">
              <WhyCard
                icon="graph"
                title="Higher Conversion & Bigger Basket Size"
                text="Customers buy better devices when they can pay over time. SahajMobile unlocks instant EMI at your shop."
              />
              <WhyCard
                icon="shield"
                title="Cardless EMI — We Handle Risk"
                text="Shops do not take credit risk. We underwrite customers using alternative data and manage collections."
              />
              <WhyCard
                icon="app"
                title="Simple Tools For Your Team"
                text="The SahajMobile Manager App trains your sales team to onboard customers in minutes."
              />
            </div>
          </Container>
        </SectionWrapper>

        <SectionWrapper className="pt-10">
          <Container>
            <motion.h2
              variants={fade}
              initial="hidden"
              whileInView="show"
              className="text-xl md:text-2xl font-semibold text-white mb-5"
            >
              How Partnership Works
            </motion.h2>

            <div className="space-y-6">
              {[
                'Sign partnership agreement',
                'Onboard your store & eligible devices',
                'Train your managers & brand promoters',
                'Offer EMI instantly with the SahajMobile Manager App',
                'Track applications, approvals & overdue EMIs in real time',
              ].map((step, i) => (
                <motion.div
                  key={i}
                  variants={fade}
                  initial="hidden"
                  whileInView="show"
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900/70 border border-slate-700/70 text-xs text-slate-200">
                    {i + 1}
                  </div>
                  <p className="text-sm md:text-base text-slate-300">{step}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </SectionWrapper>

        {/* ================= BANGLADESH MAP ================= */}
        <SectionWrapper className="pt-12">
          <Container>
            <motion.div
              variants={fade}
              initial="hidden"
              whileInView="show"
              className="rounded-3xl border border-slate-700/60 bg-slate-950/80 px-6 py-6 md:px-8 md:py-7 relative overflow-hidden"
            >
              <div className="pointer-events-none absolute -left-10 top-10 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_30%_0%,rgba(56,189,248,0.5),transparent)] blur-3xl" />

              <div className="pointer-events-none absolute right-0 bottom-0 h-52 w-52 rounded-full bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.6),transparent)] blur-3xl" />

              <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400 mb-2">
                    Bangladesh coverage
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    Built for Bangladesh’s retail networks
                  </h3>

                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    SahajMobile works with multi-brand retailers, single-brand
                    stores, and OEM networks to bring EMI to customers across
                    Dhaka and beyond.
                  </p>

                  <div className="mt-4 text-xs text-slate-400 space-y-1">
                    <p>• Dhaka city live</p>
                    <p>• Expansion to Chattogram, Gazipur, Narayanganj</p>
                    <p>• Focus on mid-income & mass-market segments</p>
                  </div>
                </div>

                <div className="relative h-56 rounded-2xl border border-slate-700/70 bg-slate-950/90 overflow-hidden">
                  <Image
                    src="/map-bd2.png"
                    alt="Bangladesh map"
                    fill
                    className="object-cover"
                  />

                  <motion.div
                    className="absolute left-[55%] top-[45%] flex items-center gap-2"
                    animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                    <span className="text-[10px] text-slate-200">Dhaka</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Container>
        </SectionWrapper>

        <SectionWrapper className="pt-10">
          <Container>
            <motion.h2
              variants={fade}
              initial="hidden"
              whileInView="show"
              className="text-xl md:text-2xl font-semibold text-white mb-6"
            >
              Tailored Benefits for Retailers & OEMs
            </motion.h2>

            <div className="grid gap-8 lg:grid-cols-2">
              <BenefitCard
                title="Retail Shops"
                items={[
                  'Sell more smartphones instantly',
                  'Convert foot traffic into EMI buyers',
                  'No credit underwriting needed',
                  'Incentives on each completed EMI sale',
                ]}
              />

              <BenefitCard
                title="OEM Partners (Brands)"
                items={[
                  'Boost sell-through at authorized outlets',
                  'Make EMI accessible for first-time buyers',
                  'Increase adoption of mid/high-tier devices',
                  'Simple commercial & operational integration',
                ]}
              />
            </div>
          </Container>
        </SectionWrapper>

        <SectionWrapper className="pt-12">
          <Container>
            <motion.h2
              variants={fade}
              initial="hidden"
              whileInView="show"
              className="text-xl md:text-2xl font-semibold text-white mb-5"
            >
              Designed for modern smartphone shelves.
            </motion.h2>

            <div className="grid gap-4 md:grid-cols-3">
              {phones.map((phone, i) => (
                <motion.div
                  key={i}
                  variants={fade}
                  initial="hidden"
                  whileInView="show"
                  transition={{ delay: i * 0.05 }}
                  className="h-32 flex items-center gap-4 p-4 rounded-3xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-lg hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-all duration-300"
                >
                  <div className="h-20 w-20 rounded-2xl bg-slate-800/40 flex items-center justify-center overflow-hidden">
                    <Image
                      src={phone.img}
                      alt={phone.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>

                  <div className="text-slate-300 text-sm">
                    <p className="font-medium text-white">{phone.name}</p>
                    <p className="text-cyan-300 text-xs">{phone.emi}</p>
                    <p className="text-slate-500 text-[11px]">{phone.specs}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="mt-3 text-[11px] text-slate-400">
              Charges applicable
            </p>
          </Container>
        </SectionWrapper>

        <SectionWrapper className="pt-12">
          <Container>
            <motion.div
              variants={fade}
              initial="hidden"
              whileInView="show"
              className="rounded-3xl border border-slate-700/60 bg-slate-950/80 p-6 md:p-8"
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                Partner Highlight
              </p>

              <h3 className="text-lg font-semibold text-white mt-2">
                How a local shop doubled EMI sales in 90 days
              </h3>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                A mid-level smartphone retailer in Dhaka integrated SahajMobile
                EMI across all sales desks. Customers were onboarded in under 4
                minutes with flexible weekly plans. Within 3 months, device
                price upgrades increased by 22%.
              </p>
            </motion.div>
          </Container>
        </SectionWrapper>

        <SectionWrapper className="pt-12">
          <Container>
            <motion.div
              variants={fade}
              initial="hidden"
              whileInView="show"
              className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] rounded-3xl border border-slate-700/60 bg-slate-950/80 p-6 md:p-8"
            >
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  See how SahajMobile EMI can work for your customers.
                </h2>
                <p className="mt-3 text-sm text-slate-300">
                  Adjust a sample phone price, down payment, and tenure to see a
                  typical monthly EMI.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700/60 bg-slate-950 p-5 space-y-4 text-sm text-slate-200">
                {/* Price */}
                <Field label="Phone price (BDT)">
                  <input
                    type="number"
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 outline-none"
                    value={price}
                    min={0}
                    onChange={(e) => setPrice(Number(e.target.value))}
                  />
                </Field>

                {/* Down Payment */}
                <Field label="Down payment (%)">
                  <input
                    type="range"
                    min={20}
                    max={70}
                    value={down}
                    onChange={(e) => setDown(Number(e.target.value))}
                    className="w-full"
                  />
                  <p className="mt-1 text-xs text-slate-300">
                    {down}% down · BDT {downAmount.toLocaleString()}
                  </p>
                </Field>

                {/* Tenor */}
                <Field label="Tenor (months)">
                  <input
                    type="range"
                    min={3}
                    max={18}
                    value={tenor}
                    onChange={(e) => setTenor(Number(e.target.value))}
                    className="w-full"
                  />
                  <p className="mt-1 text-xs text-slate-300">{tenor} months</p>
                </Field>

                {/* Output */}
                <div className="mt-3 rounded-xl bg-slate-900/80 p-4">
                  <p className="text-slate-400 text-xs">
                    Illustrative monthly EMI
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-white">
                    BDT {monthly.toLocaleString()}
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    Financed amount: BDT {financed.toLocaleString()}
                  </p>
                </div>
              </div>
            </motion.div>
          </Container>
        </SectionWrapper>
      </main>
    </ThreeBackground>
  );
}

function WhyCard({ icon, title, text }) {
  return (
    <motion.div
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="rounded-2xl border border-slate-700/60 bg-slate-950/70 p-6 shadow-[0_0_32px_rgba(56,189,248,0.18)]"
    >
      <NeonIcon type={icon} />
      <h3 className="mt-4 text-sm font-semibold text-white">{title}</h3>
      <p className="text-slate-300 text-sm mt-2 leading-relaxed">{text}</p>
    </motion.div>
  );
}

function BenefitCard({ title, items }) {
  return (
    <motion.div
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="rounded-3xl border border-slate-700/60 bg-slate-950/80 p-6"
    >
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <ul className="space-y-2 text-sm text-slate-300 leading-relaxed">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
        {label}
      </label>
      <div className="mt-1">{children}</div>
    </div>
  );
}

function NeonIcon({ type }) {
  const base = 'h-8 w-8 rounded-2xl flex items-center justify-center';

  const icons = {
    graph: {
      color: 'text-cyan-300',
      border: 'border-cyan-400/50',
      shadow: 'shadow-[0_0_18px_rgba(34,211,238,0.55)]',
    },
    shield: {
      color: 'text-amber-300',
      border: 'border-amber-400/50',
      shadow: 'shadow-[0_0_18px_rgba(251,191,36,0.55)]',
    },
    app: {
      color: 'text-violet-300',
      border: 'border-violet-400/50',
      shadow: 'shadow-[0_0_18px_rgba(167,139,250,0.55)]',
    },
  };

  return (
    <div
      className={`${base} bg-slate-900/80 border ${icons[type].border} ${icons[type].shadow}`}
    >
      {type === 'graph' && (
        <svg viewBox="0 0 24 24" className={`h-4 w-4 ${icons[type].color}`}>
          <path
            fill="currentColor"
            d="M5 17V7h2v10H5Zm6 0V4h2v13h-2Zm6 0v-7h2v7h-2Z"
          />
        </svg>
      )}

      {type === 'shield' && (
        <svg viewBox="0 0 24 24" className={`h-4 w-4 ${icons[type].color}`}>
          <path
            fill="currentColor"
            d="M12 3 5 6v5c0 3.7 2.55 7.4 7 9 4.45-1.6 7-5.3 7-9V6l-7-3Z"
          />
        </svg>
      )}

      {type === 'app' && (
        <svg viewBox="0 0 24 24" className={`h-4 w-4 ${icons[type].color}`}>
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="4"
            fill="currentColor"
            opacity="0.3"
          />
          <path fill="currentColor" d="M8 9h8v2H8V9Zm0 4h5v2H8v-2Z" />
        </svg>
      )}
    </div>
  );
}

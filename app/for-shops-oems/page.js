'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from '../../components/sections/SectionWrapper';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import Navbar from '@/components/Navbar';

const fade = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ForShopsOEMsPage() {
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

  const [price, setPrice] = useState(20000);
  const [down, setDown] = useState(40); // percent
  const [tenor, setTenor] = useState(6); // months

  const downAmount = Math.round((price * down) / 100);
  const financed = Math.max(price - downAmount, 0);
  const monthly = tenor > 0 ? Math.round(financed / tenor) : 0;

  return (
    <main className="pt-28 lg:pt-32 pb-24">
      <Navbar />

      {/* ================= HERO ================= */}
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
              Turn walk-in customers into instant EMI buyers — without becoming
              a bank. SahajMobile handles risk, underwriting, collections, and
              device security.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="px-6 py-3 text-sm">
                Become a Partner Shop
              </Button>
              <Button variant="secondary" className="px-6 py-3 text-sm">
                Talk to Our Team
              </Button>
            </div>
          </motion.div>
        </Container>
      </SectionWrapper>

      {/* ================= PARTNER LOGOS STRIP (A) ================= */}
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
            <div className="flex flex-wrap items-center gap-6">
              {/* update src paths to match your actual logo files */}
              <Image
                src="/samsung1.png"
                alt="Samsung"
                width={80}
                height={26}
                className="opacity-80"
              />
              <Image
                src="/vivo.png"
                alt="Vivo"
                width={70}
                height={26}
                className="opacity-80"
              />
              <Image
                src="/oppo.png"
                alt="Oppo"
                width={70}
                height={26}
                className="opacity-80"
              />
              <Image
                src="/realme.jpg"
                alt="Realme"
                width={78}
                height={26}
                className="opacity-80"
              />
              <Image
                src="/honor.png"
                alt="honor"
                width={78}
                height={26}
                className="opacity-80"
              />
            </div>
          </motion.div>
        </Container>
      </SectionWrapper>

      {/* ================= WHY PARTNER (WITH NEON ICONS C) ================= */}
      <SectionWrapper>
        <Container>
          <motion.h2
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-semibold text-white mb-8"
          >
            Why Partner With SahajMobile?
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-3">
            {/* CARD 1 */}
            <motion.div
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-700/60 bg-slate-950/70 p-6 shadow-[0_0_32px_rgba(56,189,248,0.18)]"
            >
              <NeonIcon type="graph" />
              <h3 className="mt-4 text-sm font-semibold text-white">
                Higher Conversion & Bigger Basket Size
              </h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                Customers buy better devices when they can pay over time.
                SahajMobile unlocks instant EMI at your shop without paperwork.
              </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-700/60 bg-slate-950/70 p-6 shadow-[0_0_32px_rgba(249,115,22,0.18)]"
            >
              <NeonIcon type="shield" />
              <h3 className="mt-4 text-sm font-semibold text-white">
                Cardless EMI — We Handle Risk
              </h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                Shops do not take credit risk. We underwrite customers using
                alternative data and manage collections and device security.
              </p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-700/60 bg-slate-950/70 p-6 shadow-[0_0_32px_rgba(139,92,246,0.22)]"
            >
              <NeonIcon type="app" />
              <h3 className="mt-4 text-sm font-semibold text-white">
                Simple Tools For Your Team
              </h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                The SahajMobile Manager App trains your sales team to onboard
                customers in minutes — even during peak traffic hours.
              </p>
            </motion.div>
          </div>
        </Container>
      </SectionWrapper>

      {/* ================= HOW PARTNERSHIP WORKS ================= */}
      <SectionWrapper className="pt-10">
        <Container>
          <motion.h2
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
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
            ].map((step, idx) => (
              <motion.div
                key={step}
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-4"
              >
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-xl 
                  bg-slate-900/70 border border-slate-700/70 text-xs text-slate-200"
                >
                  {idx + 1}
                </div>
                <p className="text-sm md:text-base text-slate-300">{step}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* ================= BANGLADESH MAP (B) ================= */}
      <SectionWrapper className="pt-12">
        <Container>
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-700/60 bg-slate-950/80 px-6 py-6 md:px-8 md:py-7 relative overflow-hidden"
          >
            {/* Glowing map style background */}
            <div className="pointer-events-none absolute -left-10 top-10 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_30%_0%,rgba(56,189,248,0.5),transparent)] blur-3xl" />
            <div className="pointer-events-none absolute right-0 bottom-0 h-52 w-52 rounded-full bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.6),transparent)] blur-3xl" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400 mb-2">
                  Bangladesh coverage
                </p>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Built for Bangladesh&apos;s retail & brand networks.
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  SahajMobile works with multi-brand retailers, single-brand
                  stores, and OEM networks to bring EMI to customers across
                  Dhaka and beyond. As portfolio scales, we extend coverage city
                  by city.
                </p>

                <div className="mt-4 text-xs text-slate-400 space-y-1">
                  <p>• Dhaka city live</p>
                  <p>
                    • Priority expansion to Chattogram, Gazipur, Narayanganj
                  </p>
                  <p>• Deep focus on mid-income & mass-market segments</p>
                </div>
              </div>

              {/* Map illustration placeholder */}
              <div className="relative h-56 rounded-2xl border border-slate-700/70 bg-slate-950/90 overflow-hidden">
                <div className="absolute inset-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950/90" />
                {/* You can replace this div with <Image src="/map-bd.png"...> when ready */}
                <Image
                  src="/map-bd2.png"
                  alt="Bangladesh map"
                  fill
                  className="object-cover"
                />

                {/* <motion.div
                  className="absolute inset-6 grid grid-cols-8 grid-rows-10"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {Array.from({ length: 80 }).map((_, i) => (
                    <div key={i} className="flex items-center justify-center">
                      <div className="h-1 w-1 rounded-full bg-slate-700" />
                    </div>
                  ))}
                </motion.div> */}

                {/* Pulsing "Dhaka" marker */}
                <motion.div
                  className="absolute left-[55%] top-[45%] flex items-center gap-2"
                  animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                  <span className="text-[10px] text-slate-200">Dhaka</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Container>
      </SectionWrapper>

      {/* ================= RETAIL & OEM BENEFITS ================= */}
      <SectionWrapper className="pt-10">
        <Container>
          <motion.h2
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-semibold text-white mb-6"
          >
            Tailored Benefits for Retailers & OEMs
          </motion.h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Retailers */}
            <motion.div
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-700/60 bg-slate-950/80 p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                Retail Shops
              </h3>
              <ul className="space-y-2 text-sm text-slate-300 leading-relaxed">
                <li>• Sell more smartphones, instantly</li>
                <li>• Convert foot traffic into EMI buyers</li>
                <li>• No credit underwriting done by shop owners</li>
                <li>• Incentives on each completed EMI sale</li>
              </ul>
            </motion.div>

            {/* OEMs */}
            <motion.div
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-700/60 bg-slate-950/80 p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                OEM Partners (Brands)
              </h3>
              <ul className="space-y-2 text-sm text-slate-300 leading-relaxed">
                <li>• Boost sell-through at authorized outlets</li>
                <li>• Make EMI accessible for first-time smartphone users</li>
                <li>• Increase adoption of mid/high-tier devices</li>
                <li>• Simple commercial & operational integration</li>
              </ul>
            </motion.div>
          </div>
        </Container>
      </SectionWrapper>

      {/* ================= PARALLAX PHONE GRID (D) ================= */}
      {/* <SectionWrapper className="pt-12">
        <Container>
          <motion.h2
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-semibold text-white mb-5"
          >
            Designed for modern smartphone shelves.
          </motion.h2>

          <div className="grid gap-4 md:grid-cols-3">
            {[0, 1, 2].map((col) => (
              <motion.div
                key={col}
                initial={{
                  y: col === 0 ? 10 : col === 1 ? -10 : 5,
                  opacity: 0,
                }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                {[0, 1, 2].map((row) => (
                  <div
                    key={row}
                    className="h-32 rounded-3xl border border-slate-700/60 bg-[radial-gradient(circle_at_top,#020617,#020617,#000000)] shadow-[0_0_26px_rgba(15,23,42,0.9)]"
                  >
                    <div className="h-full w-full rounded-3xl border border-slate-800/60 border-dashed opacity-40" />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-slate-400">
            Each box represents a device SKU that can be sold on SahajMobile EMI
            at your shop.
          </p>
        </Container>
      </SectionWrapper> */}
      {/* ================= PARALLAX PHONE GRID (D) ================= */}
      <SectionWrapper className="pt-12">
        <Container>
          <motion.h2
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-semibold text-white mb-5"
          >
            Designed for modern smartphone shelves.
          </motion.h2>

          <div className="grid gap-4 md:grid-cols-3">
            {phones.map((phone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: idx % 3 === 0 ? 20 : -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.05 }}
                className="
            h-32 rounded-3xl bg-slate-900/40 backdrop-blur-lg
            border border-slate-700/50 shadow-[0_0_20px_rgba(0,0,0,0.4)]
            p-4 flex items-center gap-4 hover:border-cyan-400/50
            hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
            transition-all duration-300
          "
              >
                {/* IMAGE */}
                <div className="h-20 w-20 rounded-2xl bg-slate-800/40 flex items-center justify-center overflow-hidden">
                  <Image
                    src={phone.img}
                    width={80}
                    height={80}
                    alt={phone.name}
                    className="object-contain"
                  />
                </div>

                {/* DETAILS */}
                <div className="text-slate-300 text-sm leading-tight">
                  <p className="font-medium text-white">{phone.name}</p>
                  <p className="text-cyan-300 text-xs">{phone.emi}</p>
                  <p className="text-slate-500 text-[11px]">{phone.specs}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-3 text-[11px] text-slate-400">
            {/* Each box represents a device SKU that can be sold on SahajMobile EMI
            at your shop. */}
            charges applicable
          </p>
        </Container>
      </SectionWrapper>

      {/* ================= PARTNER STORY ================= */}
      <SectionWrapper className="pt-12">
        <Container>
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-700/60 bg-slate-950/80 p-6 md:p-8"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
              Partner Highlight
            </p>

            <h3 className="text-lg font-semibold text-white mt-2">
              How a local shop doubled EMI sales in 90 days
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mt-3">
              A mid-level smartphone retailer in Dhaka integrated SahajMobile
              EMI across all sales desks. By using our Manager App, they
              onboarded customers in under 4 minutes, offered flexible weekly
              plans, and relied on our device lock for risk management. Within 3
              months, their average device price increased by 22% and overall
              sales grew significantly.
            </p>
          </motion.div>
        </Container>
      </SectionWrapper>

      {/* ================= EMI CALCULATOR (E) ================= */}
      <SectionWrapper className="pt-12">
        <Container>
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center rounded-3xl border border-slate-700/60 bg-slate-950/80 p-6 md:p-8"
          >
            {/* LEFT */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                See how SahajMobile EMI can work for your customers.
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                Adjust a sample phone price, down payment, and tenure to see a
                typical monthly EMI. This is only an illustration — actual
                offers depend on customer profile and product.
              </p>
            </div>

            {/* RIGHT CALC */}
            <div className="rounded-2xl border border-slate-700/60 bg-slate-950 p-5 space-y-4 text-sm text-slate-200">
              {/* Price */}
              <div>
                <label className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Phone price (BDT)
                </label>
                <input
                  type="number"
                  className="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value) || 0)}
                  min={0}
                />
              </div>

              {/* Down payment */}
              <div>
                <label className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Down payment (%)
                </label>
                <input
                  type="range"
                  min={20}
                  max={70}
                  value={down}
                  onChange={(e) => setDown(Number(e.target.value))}
                  className="mt-2 w-full"
                />
                <p className="mt-1 text-xs text-slate-300">
                  {down}% down &nbsp;·&nbsp; BDT {downAmount.toLocaleString()}
                </p>
              </div>

              {/* Tenor */}
              <div>
                <label className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Tenor (months)
                </label>
                <input
                  type="range"
                  min={3}
                  max={18}
                  value={tenor}
                  onChange={(e) => setTenor(Number(e.target.value))}
                  className="mt-2 w-full"
                />
                <p className="mt-1 text-xs text-slate-300">
                  {tenor} months &nbsp;·&nbsp; approx weekly EMI also available
                </p>
              </div>

              {/* Output */}
              <div className="mt-3 rounded-xl bg-slate-900/80 p-4 text-sm">
                <p className="text-slate-400 text-xs">
                  Illustrative monthly EMI
                </p>
                <p className="mt-1 text-2xl font-semibold text-white">
                  BDT {monthly.toLocaleString()}
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Financed amount: BDT {financed.toLocaleString()} (approx)
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </SectionWrapper>

      {/* ================= FINAL CTA ================= */}
      <SectionWrapper className="pt-16">
        <Container>
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-semibold text-white">
              Ready to grow your business with SahajMobile?
            </h2>

            <p className="mt-3 text-sm md:text-base text-slate-300">
              Join our partner network and bring device financing to more
              customers across Bangladesh.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <Button className="px-6 py-3 text-sm">Become a Partner</Button>
              <Button variant="secondary" className="px-6 py-3 text-sm">
                Contact Partnerships
              </Button>
            </div>
          </motion.div>
        </Container>
      </SectionWrapper>
    </main>
  );
}

/* =============== NEON SVG ICONS (C) =============== */

function NeonIcon({ type }) {
  const base = 'h-8 w-8 rounded-2xl flex items-center justify-center';

  if (type === 'graph') {
    return (
      <div
        className={`${base} bg-slate-900/80 border border-cyan-400/50 shadow-[0_0_18px_rgba(34,211,238,0.55)]`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-cyan-300">
          <path
            fill="currentColor"
            d="M5 17V7h2v10H5Zm6 0V4h2v13h-2Zm6 0v-7h2v7h-2Z"
          />
        </svg>
      </div>
    );
  }

  if (type === 'shield') {
    return (
      <div
        className={`${base} bg-slate-900/80 border border-amber-400/50 shadow-[0_0_18px_rgba(251,191,36,0.55)]`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-amber-300">
          <path
            fill="currentColor"
            d="M12 3 5 6v5c0 3.7 2.55 7.4 7 9 4.45-1.6 7-5.3 7-9V6l-7-3Zm0 2.18 5 2.22v3.6c0 2.92-1.92 5.76-5 7.22-3.08-1.46-5-4.3-5-7.22V7.4l5-2.22Z"
          />
        </svg>
      </div>
    );
  }

  // app icon
  return (
    <div
      className={`${base} bg-slate-900/80 border border-violet-400/50 shadow-[0_0_18px_rgba(167,139,250,0.55)]`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-violet-300">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="4"
          ry="4"
          fill="currentColor"
          opacity="0.3"
        />
        <path fill="currentColor" d="M8 9h8v2H8V9Zm0 4h5v2H8v-2Z" />
      </svg>
    </div>
  );
}

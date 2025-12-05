'use client';

import Navbar from '@/components/Navbar';
import ThreeBackground from '@/components/background/ThreeBackground';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import StepShowcase from '@/components/StepShowcase';
import Link from 'next/link';
import { useState } from 'react';

export default function HowItWorksPage() {
  const [customerStep, setCustomerStep] = useState(0);
  const [managerStep, setManagerStep] = useState(0);

  const customerSteps = [
    'Welcome to SahajMobile',
    'Apply with Basic Info',
    'Instant Approval',
    'Rapay before Due',
    'Access Full account',
  ];

  const managerSteps = [
    'Install Manager App & Authenticate',
    'Onboard Your Shop & select model',
    'Payments Terms',
    'Sales Calculators ',
    'Payment Breakdown',
    'Full Sales Data ',
  ];

  return (
    <ThreeBackground>
      <Navbar />

      <main className="pt-28 lg:pt-32 pb-24">
        <Container>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-4xl font-bold pb-10
              bg-linear-to-r from-cyan-400 via-orange-400 to-pink-400
              bg-clip-text text-transparent"
          >
            How It Works
          </motion.h1>
        </Container>

        <Container className="mt-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* PHONE LEFT */}
            <StepShowcase
              interval={2000}
              onStepChange={setCustomerStep}
              items={[
                { image: '/ui/customer/home.png' },
                { image: '/ui/customer/2.png' },
                { image: '/ui/customer/3.png' },
                { image: '/ui/customer/4.png' },
                { image: '/ui/customer/5.png' },
              ]}
            />

            {/* STEPS RIGHT */}
            <div className="space-y-6 order-last lg:order-none">
              <p className="text-xs tracking-[0.25em] text-slate-400 uppercase">
                For Customers
              </p>

              {customerSteps.map((label, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: customerStep === i ? 1 : 0.2 }}
                  transition={{ duration: 0.5 }}
                  className="
                    p-4 rounded-xl 
                    bg-white/10 backdrop-blur-xl 
                    border border-white/20 
                    shadow-[0_0_30px_rgba(0,0,0,0.5)]
                  "
                >
                  <h3 className="text-lg font-semibold text-white">
                    {i + 1}. {label}
                  </h3>
                  <p className="text-slate-300 text-sm mt-1">
                    Description for {label}.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>

        <Container className="mt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <StepShowcase
              interval={2000}
              onStepChange={setManagerStep}
              className="order-1 lg:order-2 pt-10 lg:pt-0"
              items={[
                { image: '/ui/manager/1.jpeg' },
                { image: '/ui/manager/2.jpeg' },
                { image: '/ui/manager/3.jpeg' },
                { image: '/ui/manager/4.jpeg' },
                { image: '/ui/manager/5.jpeg' },
                { image: '/ui/manager/6.jpeg' },
              ]}
            />

            <div className="space-y-6 order-2 lg:order-1">
              <p className="text-xs tracking-[0.25em] text-slate-400 uppercase">
                For Shop Managers
              </p>

              {managerSteps.map((label, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: managerStep === i ? 1 : 0.2 }}
                  transition={{ duration: 0.5 }}
                  className="
            p-4 rounded-xl 
            bg-white/10 backdrop-blur-xl 
            border border-white/20 
            shadow-[0_0_30px_rgba(0,0,0,0.5)]
          "
                >
                  <h3 className="text-lg font-semibold text-white">
                    {i + 1}. {label}
                  </h3>
                  <p className="text-slate-300 text-sm mt-1">
                    Description for {label}.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </main>
    </ThreeBackground>
  );
}

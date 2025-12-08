'use client';

import { motion } from 'framer-motion';

export default function ShowcaseVideo() {
  return (
    <section className="relative flex flex-col items-center py-32">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative w-[75%] max-w-5xl overflow-hidden rounded-3xl 
                   border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
      >
        <video
          src="/videos/v1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}

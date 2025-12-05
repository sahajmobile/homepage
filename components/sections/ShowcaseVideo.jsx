'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const videos = ['/v1.mp4', '/v2.mp4', '/v3.mp4', '/v4.mp4', '/v5.mp4'];

export default function ShowcaseVideo() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % videos.length);
  const prev = () => setIndex((i) => (i - 1 + videos.length) % videos.length);

  return (
    <section className="relative flex flex-col items-center py-32">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative w-[75%] max-w-4xl overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
      >
        <video
          src={videos[index]}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />

        {/* pagination */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <button onClick={prev} className="text-white/60 hover:text-white">
            ←
          </button>
          <span className="text-white/80 text-sm">
            {index + 1} / {videos.length}
          </span>
          <button onClick={next} className="text-white/60 hover:text-white">
            →
          </button>
        </div>
      </motion.div>
    </section>
  );
}

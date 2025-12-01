'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function Button({
  children,
  variant = 'primary',
  className,
  ...props
}) {
  const base =
    'relative inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-300';

  const variants = {
    primary:
      'text-white shadow-[0_0_40px_rgba(59,130,246,0.45)] ' +
      'bg-[linear-gradient(to_right,#f97316,#ec4899,#22d3ee)] ' +
      'bg-[length:200%_200%] hover:bg-[position:100%_0%] hover:shadow-[0_0_55px_rgba(56,189,248,0.6)] hover:-translate-y-0.5 hover:scale-[1.02]',
    secondary:
      'border border-sky-400/70 text-slate-100 ' +
      'bg-transparent hover:bg-sky-400/10 hover:text-white',
    ghost: 'text-slate-300 hover:text-white hover:bg-white/5',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={clsx(base, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}

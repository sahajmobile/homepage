'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Container from '../ui/Container';

export default function SectionWrapper({ id, children, className }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('show');
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section ref={ref} id={id} className={className}>
      <Container>
        <motion.div initial="hidden" animate={controls} variants={variants}>
          {children}
        </motion.div>
      </Container>
    </section>
  );
}

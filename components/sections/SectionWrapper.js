// 'use client';

// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { useEffect } from 'react';
// import Container from '../ui/Container';

// export default function SectionWrapper({
//   id,
//   children,
//   className = '',
//   subtle = false,
// }) {
//   const controls = useAnimation();
//   const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

//   useEffect(() => {
//     if (inView) controls.start('show');
//   }, [inView, controls]);

//   const variants = {
//     hidden: { opacity: 0, y: subtle ? 12 : 32 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
//     },
//   };

//   return (
//     <section
//       id={id}
//       ref={ref}
//       className={`relative section-padding ${className}`}
//     >
//       <Container>
//         <motion.div initial="hidden" animate={controls} variants={variants}>
//           {children}
//         </motion.div>
//       </Container>
//     </section>
//   );
// }
'use client';

import { motion } from 'framer-motion';
import Container from '../ui/Container';

export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative w-full py-24 ${className}`}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {children}
        </motion.div>
      </Container>
    </section>
  );
}

// 'use client';

// import { motion } from 'framer-motion';
// import Button from '../ui/Button';
// import Container from '../ui/Container';

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.18 },
//   },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
// };

// export default function Hero() {
//   return (
//     <section
//       id="top"
//       className="relative min-h-[100vh] overflow-hidden pb-24 pt-28 lg:pt-32"
//     >
//       {/* Background lighting */}
//       <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_30%_0%,rgba(56,189,248,0.85),transparent)] blur-3xl" />
//       <div className="pointer-events-none absolute -right-40 top-32 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_70%_0%,rgba(249,115,22,0.95),transparent)] blur-3xl" />
//       <div className="pointer-events-none absolute inset-x-0 bottom-[-40%] h-[60%] bg-[radial-gradient(circle_at_bottom,rgba(129,140,248,0.85),transparent)] blur-3xl" />

//       {/* Grid Overlay */}
//       <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
//         <div className="bg-grid" />
//       </div>

//       <Container>
//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="show"
//           className="relative grid gap-12 lg:grid-cols-[1.15fr_0.9fr] lg:items-center"
//         >
//           {/* LEFT CONTENT */}
//           <div className="space-y-8">
//             {/* Small Tagline */}
//             <motion.div
//               variants={fadeUp}
//               className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300"
//             >
//               <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
//               Smartphone EMI providers for Bangladesh
//             </motion.div>

//             {/* HEADLINE */}
//             <motion.h1
//               variants={fadeUp}
//               className="text-4xl font-semibold leading-tight md:text-6xl"
//             >
//               Own the smartphone you need.
//               <br />
//               <span className="bg-[linear-gradient(to_right,#22d3ee,#f97316,#ec4899)] bg-clip-text text-transparent">
//                 Pay in easy EMIs.
//               </span>
//             </motion.h1>

//             {/* SUBHEADLINE */}
//             <motion.p
//               variants={fadeUp}
//               className="max-w-xl text-sm text-slate-300 md:text-base"
//             >
//               Get your next smartphone from any SahajMobile partner shop. No
//               credit card, minimal paperwork, and instant approval — built for
//               everyday workers across Bangladesh.
//             </motion.p>

//             {/* CTAs */}
//             <motion.div
//               variants={fadeUp}
//               className="flex flex-wrap items-center gap-4"
//             >
//               <Button className="px-6 py-3 text-sm">Get Phone on EMI</Button>
//               <Button variant="secondary" className="px-6 py-3 text-sm">
//                 Become Partner
//               </Button>

//               <span className="text-[11px] text-slate-400">
//                 17k+ customers · 1,250+ shops · Fair, secure EMI for all
//               </span>
//             </motion.div>
//           </div>

//           {/* RIGHT — FLOATING PHONE UI */}
//           <motion.div
//             variants={fadeUp}
//             className="relative flex items-center justify-center"
//           >
//             {/* Glow bubble */}
//             <motion.div
//               className="absolute -bottom-14 -right-6 h-24 w-24 rounded-full
//               bg-[radial-gradient(circle_at_30%_0%,rgba(56,189,248,0.8),rgba(15,23,42,0.4))]"
//               animate={{ y: [0, 10, 0], opacity: [0.9, 1, 0.9] }}
//               transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
//             />

//             {/* PHONE CARD */}
//             <motion.div
//               className="relative h-[430px] w-[240px] rounded-[30px] border border-slate-600/60
//               bg-[radial-gradient(circle_at_top,#020617,#020617,#000000)] shadow-[0_0_48px_rgba(15,23,42,0.9)]"
//               animate={{ rotate: [-7, -3, -7], y: [0, -6, 0] }}
//               transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
//             >
//               <div className="absolute inset-[6px] rounded-[24px] bg-slate-950/95 p-4">
//                 {/* PHONE UI TITLE */}
//                 <div className="flex items-center justify-between text-[11px] text-slate-400">
//                   <span>SahajMobile EMI</span>
//                   <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">
//                     Live repayments
//                   </span>
//                 </div>

//                 {/* CUSTOMER INFO */}
//                 <div className="mt-4 space-y-1 text-[11px] text-slate-300">
//                   <p>
//                     Customer: <span className="text-slate-50">Julekha</span>
//                   </p>
//                   <p>
//                     Device: <span className="text-slate-50">BDT 20,000</span>
//                   </p>
//                   <p>
//                     Tenor: <span className="text-slate-50">24 weeks</span>
//                   </p>
//                   <p>
//                     Status:{' '}
//                     <span className="font-medium text-emerald-400">
//                       On-time
//                     </span>
//                   </p>
//                 </div>

//                 {/* REPAYMENT WEEKS */}
//                 <div className="mt-6 space-y-3">
//                   {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((label, i) => (
//                     <div
//                       key={label}
//                       className="flex items-center justify-between text-[11px]"
//                     >
//                       <span className="text-slate-500">{label}</span>
//                       <div className="flex items-center gap-2">
//                         <span className="text-slate-100">BDT 1,250</span>
//                         <span
//                           className={`h-4 w-4 rounded-full border ${
//                             i < 3
//                               ? 'border-emerald-400/70 bg-emerald-400/15'
//                               : 'border-amber-400/70 bg-amber-400/10'
//                           }`}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* DATA SCORE */}
//                 <div className="mt-7 rounded-2xl bg-slate-900/80 p-3 text-[11px] text-slate-300">
//                   Alternative data score{' '}
//                   <span className="font-semibold text-sky-300">742</span>
//                   <div className="mt-2 h-1.5 w-full rounded-full bg-slate-800">
//                     <div className="h-1.5 w-[72%] rounded-full bg-[linear-gradient(to_right,#22d3ee,#f97316,#ec4899)]" />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </Container>
//     </section>
//   );
// }
'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import Link from 'next/link';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, composer;
    let particles,
      energyLines = [];
    const mouse = new THREE.Vector2(9999, 9999);
    const particleData = [];

    function init() {
      const canvas = canvasRef.current;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(0, 0, 50);

      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));

      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.0,
        0.8,
        0.1
      );
      composer.addPass(bloomPass);

      createParticles();
      createEnergyLines();

      window.addEventListener('resize', onResize);
      window.addEventListener('mousemove', onMouseMove);

      animate();
    }

    function createParticles() {
      const count = 15000;
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);

      const baseColor = new THREE.Color(0x003d8f);

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const x = (Math.random() - 0.5) * 120;
        const y = (Math.random() - 0.5) * 120;
        const z = (Math.random() - 0.5) * 20;

        particleData.push({
          original: new THREE.Vector3(x, y, z),
          current: new THREE.Vector3(x, y, z),
          velocity: new THREE.Vector3(),
        });

        positions[i3] = x;
        positions[i3 + 1] = y;
        positions[i3 + 2] = z;

        baseColor.toArray(colors, i3);
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 1.8,
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);
    }

    function createEnergyLines() {
      for (let i = 0; i < 30; i++) {
        const geom = new LineGeometry();
        const x = (Math.random() - 0.5) * 150;
        const y = (Math.random() - 0.5) * 150;
        const z = (Math.random() - 0.5) * 100 - 50;
        const len = Math.random() * 10 + 6;

        geom.setPositions([x, y, z, x, y - len, z]);

        const mat = new LineMaterial({
          color: 0x99ccff,
          linewidth: 0.004,
          transparent: true,
          opacity: 0.6,
        });

        mat.resolution.set(window.innerWidth, window.innerHeight);

        const line = new Line2(geom, mat);
        line.userData.speed = Math.random() * 30 + 15;

        energyLines.push(line);
        scene.add(line);
      }
    }

    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    }

    function onMouseMove(e) {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    }

    const clock = new THREE.Clock();

    function animate() {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      const mouseVec = new THREE.Vector3(mouse.x, mouse.y, 0.5);
      mouseVec.unproject(camera);

      const dir = mouseVec.sub(camera.position).normalize();
      const dist = -camera.position.z / dir.z;
      const mouseFinal = camera.position.clone().add(dir.multiplyScalar(dist));

      const pos = particles.geometry.attributes.position.array;
      const col = particles.geometry.attributes.color.array;

      const gold = new THREE.Color(0xffd700);

      for (let i = 0; i < particleData.length; i++) {
        const i3 = i * 3;
        const p = particleData[i];

        const diff = new THREE.Vector3().subVectors(p.current, mouseFinal);
        const d = diff.length();

        if (d < 20) {
          const force = (1 - d / 20) * 0.1;
          diff.normalize();
          p.velocity.add(diff.multiplyScalar(force));
        }

        const spring = new THREE.Vector3()
          .subVectors(p.original, p.current)
          .multiplyScalar(0.01);

        p.velocity.add(spring);
        p.velocity.multiplyScalar(0.92);

        p.current.add(p.velocity);

        pos[i3] = p.current.x;
        pos[i3 + 1] = p.current.y;
        pos[i3 + 2] =
          p.current.z + Math.sin(p.original.x * 0.1 + elapsed) * 5.0;

        const mix = d < 20 ? 1 - d / 20 : 0;

        new THREE.Color(0x003d8f).lerp(gold, mix).toArray(col, i3);
      }

      particles.geometry.attributes.position.needsUpdate = true;
      particles.geometry.attributes.color.needsUpdate = true;

      energyLines.forEach((line) => {
        line.position.z += line.userData.speed * delta;
        if (line.position.z > 50) line.position.z = -150;
      });

      composer.render();
      requestAnimationFrame(animate);
    }

    init();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center px-6">
      {/* THREE.JS BACKGROUND */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10"
      />

      {/* CENTERED CONTENT */}
      <div className="max-w-4xl mx-auto">
        <h1
          className="
    text-5xl md:text-7xl lg:text-8xl 
    font-black 
    glow-text
    text-center
  "
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Get Smartphones on easy EMI.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white  max-w-2xl mx-auto">
          Get your next smartphone from any SahajMobile partner shop. No credit
          card, minimal paperwork, and instant approval — built for everyday
          workers across Bangladesh.
        </p>

        <Link
          href="https://api.whatsapp.com/send?phone=%2B8801901634762&fbclid=IwY2xjawOfgpxleHRuA2FlbQIxMABicmlkETF4WHZMcmRpWnA0VmJMZTlsc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHoU4JYvdbzmQ_FxpFejIbbohTJ4F_txWSpVFjAAlbPg21JDlOFaLhprxGs4-_aem_eBgahTKrRVqF_akYBRpVOQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-10 bg-gradient-to-r from-yellow-500 to-orange-400 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition">
            Become Partner
          </button>
        </Link>
      </div>
    </section>
  );
}

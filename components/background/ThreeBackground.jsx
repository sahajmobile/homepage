// 'use client';

// import { Canvas, useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import { useRef } from 'react';

// function Particles() {
//   const count = 8000;
//   const mesh = useRef();
//   const positions = new Float32Array(count * 3);

//   for (let i = 0; i < count; i++) {
//     const i3 = i * 3;
//     positions[i3] = (Math.random() - 0.5) * 80;
//     positions[i3 + 1] = (Math.random() - 0.5) * 80;
//     positions[i3 + 2] = (Math.random() - 0.5) * 80;
//   }

//   useFrame(() => {
//     mesh.current.rotation.y += 0.0005;
//     mesh.current.rotation.x += 0.0002;
//   });

//   return (
//     <points ref={mesh}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           array={positions}
//           count={count}
//           itemSize={3}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         size={0.08}
//         color="#4cc9f0"
//         transparent
//         opacity={0.55}
//         sizeAttenuation
//       />
//     </points>
//   );
// }

// export default function ThreeBackground({ children }) {
//   return (
//     <div className="relative w-full min-h-screen">
//       {/* 3D Background Layer */}
//       <div className="fixed inset-0 z-[1]">
//         <Canvas camera={{ position: [0, 0, 30], fov: 70 }}>
//           <Particles />
//         </Canvas>
//       </div>

//       {/* Foreground Content */}
//       <div className="relative z-[10]">{children}</div>
//     </div>
//   );
// }

// 'use client';

// import { Canvas, useFrame } from '@react-three/fiber';
// import { useMemo, useRef } from 'react';

// function Particles() {
//   const count = 8000;
//   const mesh = useRef();

//   // Create positions once (not every render)
//   const positions = useMemo(() => {
//     const arr = new Float32Array(count * 3);
//     for (let i = 0; i < count; i++) {
//       const i3 = i * 3;
//       arr[i3] = (Math.random() - 0.5) * 80;
//       arr[i3 + 1] = (Math.random() - 0.5) * 80;
//       arr[i3 + 2] = (Math.random() - 0.5) * 80;
//     }
//     return arr;
//   }, [count]);

//   useFrame(() => {
//     if (!mesh.current) return;
//     mesh.current.rotation.y += 0.0005;
//     mesh.current.rotation.x += 0.0002;
//   });

//   return (
//     <points ref={mesh}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           array={positions}
//           count={count}
//           itemSize={3}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         size={0.08}
//         color="#4cc9f0"
//         transparent
//         opacity={0.55}
//         sizeAttenuation
//       />
//     </points>
//   );
// }

// export default function ThreeBackground({ children }) {
//   return (
//     <div className="relative w-full min-h-screen">
//       {/* 3D Background Layer */}
//       <div className="fixed inset-0 z-[1] pointer-events-none">
//         <Canvas camera={{ position: [0, 0, 30], fov: 70 }}>
//           {/* optional background color */}
//           {/* <color attach="background" args={['#020617']} /> */}
//           <Particles />
//         </Canvas>
//       </div>

//       {/* Foreground Content */}
//       <div className="relative z-[10]">{children}</div>
//     </div>
//   );
// }
'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

// ---------------------------------------------------
// Generate particle positions ONCE at module load
// This is allowed, pure for React, no hydration issues
// ---------------------------------------------------

const COUNT = 8000;
const POSITIONS = new Float32Array(COUNT * 3);

// Run ONCE when this file loads (not during render)
for (let i = 0; i < COUNT; i++) {
  const i3 = i * 3;
  POSITIONS[i3] = (Math.random() - 0.5) * 80;
  POSITIONS[i3 + 1] = (Math.random() - 0.5) * 80;
  POSITIONS[i3 + 2] = (Math.random() - 0.5) * 80;
}
// ---------------------------------------------------

function Particles() {
  const mesh = useRef();

  useFrame(() => {
    if (!mesh.current) return;
    mesh.current.rotation.y += 0.0005;
    mesh.current.rotation.x += 0.0002;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={POSITIONS} // use module-level constant
          count={COUNT}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.08}
        color="#4cc9f0"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

export default function ThreeBackground({ children }) {
  return (
    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <Canvas camera={{ position: [0, 0, 30], fov: 70 }}>
          <Particles />
        </Canvas>
      </div>

      <div className="relative z-[10]">{children}</div>
    </div>
  );
}

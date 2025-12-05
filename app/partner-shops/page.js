import ThreeBackground from '@/components/background/ThreeBackground';
import Navbar from '@/components/Navbar';
export const dynamic = 'force-dynamic';

export default async function PartnerShopsPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  let shops = [];

  try {
    const res = await fetch(`${baseUrl}/api/shops/all`, {
      cache: 'no-store',
    });

    shops = await res.json();
    if (!Array.isArray(shops)) shops = [];
  } catch (err) {
    shops = [];
  }

  return (
    <>
      <Navbar />
      <ThreeBackground>
        <main className="pt-32 pb-20 max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
              SahajMobile Partner Shops
            </h1>
            <p className="text-slate-400 text-sm mt-2">
              Explore our official partner retailers across Bangladesh.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shops.map((shop) => (
              <div
                key={shop.id}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl 
                       hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]
                       hover:-translate-y-1 transition-all duration-300"
              >
                <h2 className="text-lg font-semibold text-white">
                  {shop.shop_name}
                </h2>

                <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                  {shop.address}
                </p>

                <p className="text-slate-300 text-sm mt-2">📞 {shop.mobile}</p>
              </div>
            ))}
          </div>

          {shops.length === 0 && (
            <p className="text-center text-slate-400 mt-10">
              No partner shops found.
            </p>
          )}
        </main>
      </ThreeBackground>
    </>
  );
}

// 'use client';

// import Navbar from '@/components/Navbar';
// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// export default function PartnerShopsPage() {
//   const [shops, setShops] = useState([]);

//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

//   useEffect(() => {
//     async function loadShops() {
//       try {
//         const res = await fetch(`${baseUrl}/api/shops/all`);
//         const data = await res.json();
//         if (Array.isArray(data)) setShops(data);
//       } catch (err) {
//         setShops([]);
//       }
//     }
//     loadShops();
//   }, [baseUrl]);

//   return (
//     <main className="relative min-h-screen">
//       <Navbar />

//       {/* Background Glow */}
//       <div className="pointer-events-none fixed inset-0 z-0">
//         <div
//           className="absolute top-20 left-1/2 -translate-x-1/2 w-[60%] h-[60%]
//         bg-[radial-gradient(circle,rgba(56,189,248,0.25),transparent_70%)] blur-3xl opacity-60"
//         />
//         <div
//           className="absolute bottom-10 left-20 w-[40%] h-[40%]
//         bg-[radial-gradient(circle,rgba(255,106,0,0.25),transparent_70%)] blur-3xl opacity-50"
//         />
//       </div>

//       <div className="relative z-10 pt-32 pb-24 max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-14"
//         >
//           <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-orange-400 to-pink-400 bg-clip-text text-transparent leading-tight">
//             SahajMobile Partner Shops
//           </h1>
//           <p className="text-slate-400 text-sm max-w-xl mx-auto mt-3">
//             Trusted retail partners across Bangladesh enabling smartphone EMI.
//           </p>
//         </motion.div>

//         {/* Search */}
//         <div className="max-w-xl mx-auto mb-10">
//           <input
//             placeholder="Search shops by name, district, or mobile..."
//             className="w-full rounded-xl bg-slate-900/60 border border-slate-700/60
//                        px-4 py-3 text-sm text-slate-300
//                        focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
//           />
//         </div>

//         {/* Shops Grid */}
//         <motion.div
//           initial="hidden"
//           animate="show"
//           variants={{
//             hidden: {},
//             show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
//           }}
//           className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
//         >
//           {shops.map((shop) => (
//             <motion.div
//               key={shop.id}
//               variants={{
//                 hidden: { opacity: 0, y: 30, scale: 0.95 },
//                 show: {
//                   opacity: 1,
//                   y: 0,
//                   scale: 1,
//                   transition: { duration: 0.45, ease: 'easeOut' },
//                 },
//               }}
//               whileHover={{ y: -6, scale: 1.02 }}
//               className="group relative rounded-2xl backdrop-blur-xl border border-slate-800
//                 bg-slate-900/50 p-6 shadow-[0_0_25px_rgba(0,0,0,0.4)]
//                 hover:shadow-[0_0_45px_rgba(56,189,248,0.35)]
//                 transition-all duration-300"
//             >
//               <h2 className="text-lg font-semibold text-white tracking-wide mb-2">
//                 {shop.shop_name}
//               </h2>

//               <p className="text-slate-400 text-sm leading-relaxed mb-3">
//                 {shop.address}
//               </p>

//               <p className="text-slate-300 text-sm">
//                 📞 <span className="text-white">{shop.mobile}</span>
//               </p>

//               <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-60" />

//               <p className="text-[11px] text-slate-500 mt-2">
//                 Active Partner · Updated{' '}
//                 {new Date(shop.created_at).toLocaleDateString()}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {shops.length === 0 && (
//           <p className="text-center text-slate-400 mt-16">Loading...</p>
//         )}
//       </div>
//     </main>
//   );
// }

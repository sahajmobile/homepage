// export const dynamic = 'force-dynamic';

import Navbar from '@/components/Navbar';

// export default async function PartnerShopsPage() {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

//   let shops = [];

//   try {
//     const res = await fetch(`${baseUrl}/api/shops/all`, {
//       cache: 'no-store',
//     });

//     shops = await res.json();
//     if (!Array.isArray(shops)) shops = [];
//   } catch (err) {
//     shops = [];
//   }

//   return (
//     <main className="pt-32 pb-20 max-w-6xl mx-auto px-6">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
//           SahajMobile Partner Shops
//         </h1>
//         <p className="text-slate-400 text-sm mt-2">
//           Explore our official partner retailers across Bangladesh.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {shops.map((shop) => (
//           <div
//             key={shop.id}
//             className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl
//                        hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]
//                        hover:-translate-y-1 transition-all duration-300"
//           >
//             <h2 className="text-lg font-semibold text-white">
//               {shop.shop_name}
//             </h2>

//             <p className="text-slate-400 text-sm mt-1 leading-relaxed">
//               {shop.address}
//             </p>

//             <p className="text-slate-300 text-sm mt-2">📞 {shop.mobile}</p>
//           </div>
//         ))}
//       </div>

//       {shops.length === 0 && (
//         <p className="text-center text-slate-400 mt-10">
//           No partner shops found.
//         </p>
//       )}
//     </main>
//   );
// }
export const dynamic = 'force-dynamic';

export default async function PartnerShopsPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

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
    <main className="pt-32 pb-20 max-w-6xl mx-auto px-6">
      <Navbar />
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
  );
}

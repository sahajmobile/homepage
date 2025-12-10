// import ThreeBackground from '@/components/background/ThreeBackground';
// import Navbar from '@/components/Navbar';
// export const dynamic = 'force-dynamic';

// export default async function PartnerShopsPage() {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

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
//   // console.log(shops);

//   return (
//     <>
//       <Navbar />
//       <ThreeBackground>
//         <main className="pt-32 pb-20 max-w-6xl mx-auto px-6">
//           <div className="text-center mb-12">
//             <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
//               SahajMobile Partner Shops
//             </h1>
//             <p className="text-slate-400 text-sm mt-2">
//               Explore our official partner retailers across Bangladesh.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {shops.map((shop) => (
//               <div
//                 key={shop.id}
//                 className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl
//                        hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]
//                        hover:-translate-y-1 transition-all duration-300"
//               >
//                 <h2 className="text-lg font-semibold text-white">
//                   {shop.shop_name}
//                 </h2>

//                 <p className="text-slate-400 text-sm mt-1 leading-relaxed">
//                   {shop.address}
//                 </p>
//                 {/* <p className="border text-white">{shop.address}</p> */}

//                 <p className="text-slate-300 text-sm mt-2">📞 {shop.mobile}</p>
//               </div>
//             ))}
//           </div>

//           {shops.length === 0 && (
//             <p className="text-center text-slate-400 mt-10">
//               No partner shops found.
//             </p>
//           )}
//         </main>
//       </ThreeBackground>
//     </>
//   );
// }
import fs from 'fs/promises';
import ThreeBackground from '@/components/background/ThreeBackground';
import Navbar from '@/components/Navbar';

export const dynamic = 'force-dynamic';

export default async function PartnerShopsPage() {
  let shops = [];

  try {
    // read file
    const file = await fs.readFile(
      process.cwd() + '/public/shopslist.txt',
      'utf8'
    );

    const lines = file.split('\n').filter((l) => l.trim() !== '');

    // parse each row
    shops = lines.slice(1).map((line, index) => {
      // Remove leading/trailing pipes and spaces
      const clean = line.replace(/^\||\|$/g, '').trim();

      // Split safely
      const columns = clean.split('|').map((c) => c.trim());

      return {
        id: Number(columns[0]), // 196
        category_id: Number(columns[1]), // 1
        subcategory_id: Number(columns[2]), // 1
        shop_name: columns[3], // "Swajan Telecom Center"
        mobile: columns[4], // "01713364779"
        address: columns[5], // "Kalichascho..."
      };
    });

    // console.log(shops);

    // remove header (first row)
    shops = shops.slice(1);
  } catch (err) {
    console.error('Failed to load shoplist:', err);
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
            {shops.map((shop, i) => (
              <div
                key={i}
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

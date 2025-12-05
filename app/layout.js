// import './globals.css';
// import SmoothScroll from '../components/SmoothScroll';

// export const metadata = {
//   title: 'SahajMobile — Credit Infrastructure for South Asia',
//   description:
//     'Digital underwriting and smartphone-based credit rails for unbanked South Asia.',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <SmoothScroll>{children}</SmoothScroll>
//       </body>
//     </html>
//   );
// }

import './globals.css';
import SmoothScroll from '../components/SmoothScroll';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['900'] });
const inter = Inter({ subsets: ['latin'], weight: ['400'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden bg-[#040b19] text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

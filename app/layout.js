import './globals.css';
import SmoothScroll from '../components/SmoothScroll';

export const metadata = {
  title: 'SahajMobile — Credit Infrastructure for South Asia',
  description:
    'Digital underwriting and smartphone-based credit rails for unbanked South Asia.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

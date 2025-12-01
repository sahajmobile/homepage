import Navbar from '../components/Navbar';
import Hero from '../components/sections/Hero';
import Marquee from '../components/sections/Marquee';
import WhatWeDo from '../components/sections/WhatWeDo';
import Technology from '../components/sections/Technology';
import Impact from '../components/sections/Impact';
import Team from '../components/sections/Team';
import Footer from '../components/sections/Footer';

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <WhatWeDo />
      <Technology />
      <Impact />
      <Team />
      <Footer />
    </main>
  );
}

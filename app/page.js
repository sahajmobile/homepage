import Navbar from '../components/Navbar';
import Hero from '../components/sections/Hero';
import Marquee from '../components/sections/Marquee';
import WhatWeDo from '../components/sections/WhatWeDo';
import Technology from '../components/sections/Technology';
import Impact from '../components/sections/Impact';
import HowItWorksPage from './how-it-works/page';
import Team from '../components/sections/Team';
import Footer from '../components/sections/Footer';
import ShowcaseVideo from '@/components/sections/ShowcaseVideo';

export default function HomePage() {
  return (
    // <main className="relative min-h-screen">
    //   <Navbar />
    //   <Hero />
    //   {/* <Marquee /> */}
    //   {/* <WhatWeDo /> */}
    //   <HowItWorksPage />
    //   <Technology />
    //   {/* <Impact /> */}
    //   <Team />
    //   <Footer />
    // </main>
    <main className="relative min-h-screen">
      <div id="bg-master" className="bg-master" />
      <Navbar />
      {/* <HeroGrid /> */}
      <Hero />
      {/* <ShowcaseVideo /> */}
      <HowItWorksPage />
      <Technology />
      {/* <Team /> */}
      <Footer />
    </main>
  );
}

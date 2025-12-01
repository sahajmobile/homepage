import Navbar from '../components/Navbar';
import Hero from '../components/sections/Hero';

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      {/* Next sections: WhatWeDo, Technology, Impact, Team, Footer */}
    </main>
  );
}

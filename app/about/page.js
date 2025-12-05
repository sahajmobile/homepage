import ThreeBackground from '@/components/background/ThreeBackground';
import Navbar from '@/components/Navbar';

export const dynamic = 'force-dynamic';

export default function AboutPage() {
  return (
    <>
      {' '}
      <Navbar />
      <ThreeBackground>
        <main className="pt-32 pb-24 max-w-5xl mx-auto px-6">
          {/* <Navbar /> */}
          {/* Hero */}
          <section className="mb-12 text-center">
            {/* <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-3">
          About
        </p> */}
            <h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-cyan-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
              Empowering Bangladesh through access.
            </h1>
            <p className="mt-4 text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
              Founded in 2023, SahajMobile is a Bangladesh-rooted fintech
              focused on expanding financial inclusion by making smartphone
              ownership simple, transparent, and accessible.
            </p>
          </section>

          {/* Mission */}
          <section className="mb-12 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h2 className="text-lg font-semibold text-white mb-2">
                Our Mission
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                To make the latest mobile technology accessible to everyone in
                Bangladesh – especially the unbanked and underbanked – by using
                EMI financing to create new digital credit histories and unlock
                income opportunities.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h2 className="text-lg font-semibold text-white mb-2">
                How we operate
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                We partner deeply with local shops and global OEMs, rather than
                competing with them. By investing first in rails and
                underwriting, we help retailers sell more devices while building
                long-term customer credit profiles.
              </p>
            </div>
          </section>

          {/* Founding Team */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">
              Founding Team
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300 mb-1">
                  Founder &amp; CEO
                </p>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Rafsun Faiz
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Finance professional with 10+ years in lending, fintech, and
                  structured finance. Previously VP at Guggenheim Partners, with
                  experience at a fintech real estate fund and Macquarie Group.
                  UC Berkeley graduate.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300 mb-1">
                  Co-Founder &amp; MD
                </p>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Abu Al Motalib
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Serial entrepreneur and Owner Director of Tritech Building
                  Services Ltd. Brings a strong track record of building and
                  scaling successful businesses in Bangladesh, with deep
                  on-the-ground relationships.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300 mb-1">
                  Avisor{' '}
                </p>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Feng Wang
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Director at 1Sharpe Capital and 1Sharpe Ventures. Previously
                  founding team at Kiavi, with roles at Cerberus and BlackRock.
                  Brings global capital markets and venture expertise to
                  SahajMobile.
                </p>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: 'Transparency',
                  body: 'Clear EMI terms, no hidden fees, and simple communication for customers and partners.',
                },
                {
                  title: 'Customer-first',
                  body: 'Products designed around real cash flows of riders, workers, students, and micro-entrepreneurs.',
                },
                {
                  title: 'Inclusion',
                  body: 'We build rails that make the financial system work for people who have been invisible to banks.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300"
                >
                  <p className="font-semibold text-slate-100 mb-1">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-400">{item.body}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </ThreeBackground>
    </>
  );
}

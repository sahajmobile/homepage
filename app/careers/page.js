import ThreeBackground from '@/components/background/ThreeBackground';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function CareersPage() {
  return (
    <>
      {' '}
      <Navbar />
      <ThreeBackground>
        <main className="pt-32 pb-24 max-w-5xl mx-auto px-6">
          {/* Hero */}
          <section className="mb-12 text-center">
            {/* <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-3">
          Careers
        </p> */}
            <h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-cyan-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
              Build the rails for digital inclusion.
            </h1>
            <p className="mt-4 text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
              Join SahajMobile to help unbanked and underbanked customers across
              Bangladesh access smartphones, credit, and new income
              opportunities.
            </p>
          </section>

          {/* Why Join Us */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">
              Why join us
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="font-semibold text-slate-100 mb-1">
                  Mission &amp; Impact
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Work on real problems for riders, garment workers, students,
                  and shopkeepers – people who are entering the digital economy
                  for the first time through smartphone financing.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="font-semibold text-slate-100 mb-1">
                  Learning &amp; Growth
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Be part of a fast-growing fintech where you can own outcomes,
                  experiment, and grow with the company as we scale across
                  Bangladesh and beyond.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="font-semibold text-slate-100 mb-1">Innovation</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Work at the intersection of mobile technology, alternative
                  data, and embedded credit – alongside experienced founders and
                  global fintech advisors.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="font-semibold text-slate-100 mb-1">
                  Collaborative culture
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Small, focused teams, open communication, and a culture that
                  values initiative, respect, and continuous improvement.
                </p>
              </div>
            </div>
          </section>

          {/* Open roles placeholder */}
          <section className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 p-6">
            <h2 className="text-lg font-semibold text-white mb-2">
              Open Roles
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-3">
              We&apos;re growing thoughtfully. Formal job postings will appear
              here as we expand the team across operations, partnerships, risk,
              and product.
            </p>
            <p className="text-xs text-slate-400">
              Interested in working with SahajMobile? Send your CV and a short
              note about the kind of problems you want to solve to{' '}
              <span className="text-cyan-300">info@sahajmobile.com</span>.
            </p>
            <Link
              href="https://mail.google.com/mail/?view=cm&to=info@sahajmobile.com"
              target="_blank"
            >
              <button
                type="button"
                className="w-full mt-2 rounded-lg bg-linear-to-r from-cyan-400 to-orange-400 text-slate-950 text-sm font-semibold py-2.5"
              >
                Submit
              </button>
            </Link>
          </section>
        </main>
      </ThreeBackground>
    </>
  );
}

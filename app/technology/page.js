import Navbar from '@/components/Navbar';

export const dynamic = 'force-dynamic';

export default function TechnologyPage() {
  return (
    <main className="pt-32 pb-24 max-w-5xl mx-auto px-6">
      <Navbar />
      {/* Hero */}
      <section className="mb-14 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-3">
          Technology
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-cyan-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
          The rails behind simple smartphone EMI.
        </h1>
        <p className="mt-4 text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
          SahajMobile turns local phone shops into mini credit desks, powered by
          a full-stack underwriting engine built for Bangladesh&apos;s real
          economy.
        </p>
      </section>

      {/* Manager App */}
      <section className="mb-12 space-y-4">
        <h2 className="text-xl font-semibold text-white">
          SahajMobile Manager App
        </h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          The SahajMobile Manager App runs on standard Android smartphones. Shop
          managers can submit applications, upload documents, and track EMIs in
          real time – all in a few taps. Guided, local-language workflows make
          it easy for staff to onboard customers correctly every time.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {[
            'Instant EMI applications at the counter',
            'Status tracking for approvals and overdues',
            'Local language and built-in validation',
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-xs text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Risk Engine */}
      <section className="mb-12 space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Risk & Underwriting Engine
        </h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          Traditional banks rely on payslips, credit cards, and formal
          documents. SahajMobile starts from behavior: each funded handset
          creates a digital repayment trail. Over time, our engine learns from
          thousands of EMIs to score customers whose incomes are informal,
          seasonal, or gig-based.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300">
            <p className="font-semibold text-slate-100 mb-1">
              Alternative data, not just paperwork
            </p>
            <p className="text-xs text-slate-400">
              Repayment history, device behavior, shop performance and other
              real-world signals feed into our risk models.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300">
            <p className="font-semibold text-slate-100 mb-1">
              Designed for small-ticket credit
            </p>
            <p className="text-xs text-slate-400">
              Built to support handset EMIs today and future embedded credit
              products across retail and services.
            </p>
          </div>
        </div>
      </section>

      {/* Device Lock */}
      <section className="mb-12 space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Device Security & Locking Layer
        </h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          To keep EMIs affordable and portfolios healthy, we partner with OEMs
          to enable a secure device-lock feature. If payments are up to date,
          the phone behaves like any normal device. If a customer falls behind,
          some functions may be temporarily blocked until the account is
          regularized.
        </p>
        <ul className="mt-3 space-y-2 text-xs md:text-sm text-slate-400 list-disc list-inside">
          <li>Real-time lock/unlock updates based on payment status</li>
          <li>Cannot be disabled by factory reset or app uninstalls</li>
          <li>Helps keep pricing fair and sustainable for customers</li>
        </ul>
      </section>

      {/* Compliance */}
      <section className="mb-6 space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Compliance & Data Protection
        </h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          SahajMobile is built with data protection in mind. We use
          industry-standard security practices, restrict access to customer
          data, and are developing our formal legal and privacy documentation as
          we scale. Our goal is simple: protect users while unlocking access to
          the digital economy.
        </p>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-xs text-slate-400">
          Full Terms of Service and Privacy Policy will be published as
          SahajMobile continues to expand. In the meantime, we operate with
          clear, simple EMI terms and transparent communication with customers
          and partners.
        </div>
      </section>
    </main>
  );
}

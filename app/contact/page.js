import Navbar from '@/components/Navbar';

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 max-w-5xl mx-auto px-6">
      <Navbar />
      {/* Hero */}
      <section className="mb-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-3">
          Contact
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-cyan-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
          Get in touch with SahajMobile.
        </h1>
        <p className="mt-4 text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
          Whether you&apos;re a customer, shop owner, OEM, or investor,
          we&apos;d love to hear from you.
        </p>
      </section>

      {/* Contact details + form */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* Details */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-300">
            <p className="font-semibold text-slate-100 mb-2">Office Address</p>
            <p>
              Apartments #4C (Building “RUBAIYAT”)
              <br />
              House #15, Road #24 CWN(C), Gulshan-2
              <br />
              Dhaka-1212, Bangladesh
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-300 space-y-1">
            <p className="font-semibold text-slate-100">Phone</p>
            <p>+880 9666 753953 (Customer Service &amp; Sales)</p>

            <p className="font-semibold text-slate-100 mt-3">Email</p>
            <p>info@sahajmobile.com</p>

            <p className="text-xs text-slate-400 mt-3">
              Please mention if you are a customer, retail shop, OEM, or
              investor so we can route your inquiry to the right team.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <form className="space-y-4 text-sm">
            <div>
              <label className="block text-slate-300 mb-1">Name</label>
              <input
                type="text"
                className="w-full rounded-lg bg-slate-950/70 border border-slate-700 px-3 py-2 text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-1">Email Address</label>
              <input
                type="email"
                className="w-full rounded-lg bg-slate-950/70 border border-slate-700 px-3 py-2 text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full rounded-lg bg-slate-950/70 border border-slate-700 px-3 py-2 text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                placeholder="+880..."
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-1">Inquiry Type</label>
              <select className="w-full rounded-lg bg-slate-950/70 border border-slate-700 px-3 py-2 text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/40">
                <option>Customer</option>
                <option>Retail Shop</option>
                <option>OEM / Brand</option>
                <option>Investor</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full rounded-lg bg-slate-950/70 border border-slate-700 px-3 py-2 text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="button"
              className="w-full mt-2 rounded-lg bg-gradient-to-r from-cyan-400 to-orange-400 text-slate-950 text-sm font-semibold py-2.5"
            >
              Submit (placeholder)
            </button>

            <p className="text-[11px] text-slate-500 mt-2">
              This is a visual demo form. In production, it can be wired to your
              preferred CRM or email workflow.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

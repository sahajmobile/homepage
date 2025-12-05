import ThreeBackground from '@/components/background/ThreeBackground';
import Navbar from '@/components/Navbar';

export const dynamic = 'force-dynamic';

const customerFaq = [
  {
    q: 'How do I apply for SahajMobile EMI?',
    a: 'Visit a SahajMobile partner shop, choose your smartphone, and the shop manager will start your EMI application using the SahajMobile Manager App.',
  },
  {
    q: 'What documents do I need?',
    a: 'You typically need your valid NID and basic personal information. In some cases, a reference or guarantor may be requested based on your profile.',
  },
  {
    q: 'Do I need a bank account or credit card?',
    a: 'No credit card is required. EMIs can be paid via mobile wallet or bank transfer, depending on the plan and partner.',
  },
  {
    q: 'How do I pay my instalments?',
    a: 'You can pay your EMIs through supported payment channels such as mobile wallets or bank transfers, following the schedule shared at onboarding.',
  },
  {
    q: 'What happens if I miss a payment?',
    a: 'If you miss a payment, you may receive reminders, and certain phone functions may be temporarily restricted until your account is updated.',
  },
  {
    q: 'Can I pay off my loan early?',
    a: 'In many cases, you can prepay your remaining balance. Specific terms depend on your EMI plan and partner; please check with your shop or SahajMobile support.',
  },
];

const partnerFaq = [
  {
    q: 'How can my shop become a SahajMobile partner?',
    a: 'Any authorized mobile retailer can apply. Contact us via the Partner form or email our partnerships team, and we will guide you through onboarding and training.',
  },
  {
    q: 'What kind of shops do you work with?',
    a: 'We partner with local retailers, dealer networks, and OEM-affiliated outlets that want to offer EMI at the point of sale.',
  },
  {
    q: 'Do you provide training and support?',
    a: 'Yes. SahajMobile provides training, materials, and ongoing support so your staff can confidently use the SahajMobile Manager App and assist customers.',
  },
  {
    q: 'How do settlements work?',
    a: 'Settlement terms are defined in our partnership agreement, ensuring your shop is paid promptly for financed devices while SahajMobile manages the EMI rails.',
  },
  {
    q: 'Who handles collections and follow-up?',
    a: 'SahajMobile and our financial partners manage ongoing repayment monitoring, reminders, and device-lock updates so that shops can focus on sales.',
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <ThreeBackground>
        <main className="pt-32 pb-24 max-w-5xl mx-auto px-6">
          {/* Hero */}
          <section className="mb-10 text-center">
            {/* <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-3">
          FAQ
        </p> */}
            <h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-cyan-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
              Answers for customers and partners about how SahajMobile EMI
              works.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            {/* Customer FAQs */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                For Customers
              </h2>
              <div className="space-y-3">
                {customerFaq.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
                  >
                    <p className="text-sm font-semibold text-slate-100 mb-1">
                      {item.q}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Partner FAQs */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                For Retailers &amp; OEMs
              </h2>
              <div className="space-y-3">
                {partnerFaq.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
                  >
                    <p className="text-sm font-semibold text-slate-100 mb-1">
                      {item.q}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </ThreeBackground>
    </>
  );
}

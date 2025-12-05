import ThreeBackground from '@/components/background/ThreeBackground';
import Navbar from '@/components/Navbar';

export const dynamic = 'force-dynamic';

const placeholderPosts = [
  {
    title: 'How smartphone EMI unlocks income opportunities',
    tag: 'Customer Story',
    status: 'Coming soon',
  },
  {
    title: 'Partner spotlight: Scaling sales with SahajMobile',
    tag: 'Partner Story',
    status: 'Coming soon',
  },
  {
    title: 'Building alternative credit rails in Bangladesh',
    tag: 'Insight',
    status: 'Coming soon',
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <ThreeBackground>
        <main className="pt-32 pb-24 max-w-5xl mx-auto px-6">
          <section className="mb-10 text-center">
            {/* <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-3">
          Blog &amp; News
        </p> */}
            <h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-cyan-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
              Stories from the SahajMobile network.
            </h1>
            <p className="mt-4 text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
              Customer journeys, partner success stories, and updates as we
              build the rails for smartphone-led financial inclusion.
            </p>
          </section>

          <section className="space-y-4">
            {placeholderPosts.map((post, i) => (
              <article
                key={i}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-sky-300">
                    {post.tag}
                  </span>
                  <span className="text-[10px] text-slate-500">
                    {post.status}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-white">
                  {post.title}
                </h2>
              </article>
            ))}
          </section>

          <p className="text-center text-xs text-slate-500 mt-8">
            Full articles coming soon as SahajMobile expands its footprint of
            customers, shops, and partners.
          </p>
        </main>
      </ThreeBackground>
    </>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Review {
  text: string;
  rating: string;
}

export default function Home() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews');
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-16">

      {/* Hero Section */}
      <section className="text-center space-y-12 py-16 md:py-24 fade-in px-4">

        {/* Top Decorative Line */}
        <div className="flex items-center justify-center gap-4 max-w-sm mx-auto">
          <span className="h-px bg-[var(--border-strong)] flex-grow opacity-60"></span>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--ink)]">Bellard Road • Kannur</span>
          <span className="h-px bg-[var(--border-strong)] flex-grow opacity-60"></span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h2 className="text-6xl md:text-8xl font-serif text-[var(--royal)] italic leading-none drop-shadow-sm">
            Pure. Simple.
          </h2>
          <h2 className="text-7xl md:text-9xl font-serif text-[var(--brick)] italic leading-none drop-shadow-sm">
            Honest.
          </h2>
        </div>

        {/* Subtext */}
        <p className="text-xl max-w-xl mx-auto text-[var(--charcoal)] font-sans leading-relaxed opacity-80 pt-4">
          Serving the neighborhood from Railway Station Road since 2014.
          <br />
          <span className="text-[var(--royal)] font-bold mt-2 block">+91 96053 10945</span>
        </p>

        {/* Button */}
        <div className="pt-8 pb-8">
          <Link href="/contact" className="inline-block bg-[var(--brick)] text-[var(--cream)] text-sm tracking-[0.2em] font-mono uppercase px-12 py-4 shadow-[4px_4px_0_var(--ink)] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--ink)] transition-all border border-[var(--ink)]">
            Call for Delivery
          </Link>
        </div>

      </section>

      <div className="separator-dots opacity-40"></div>

      {/* Featured Collection - Grid Layout */}
      <section className="grid md:grid-cols-2 gap-12 items-start fade-in delay-100">
        <div className="space-y-6">
          <h3 className="vintage-title text-3xl mb-6 border-b border-[var(--border-strong)] pb-2 inline-block text-[var(--royal)]">
            Morning Provisions
          </h3>

          <div className="relative h-64 w-full mb-8 border-4 double border-[var(--border-strong)] shadow-lg rotate-1 hover:rotate-0 transition-transform duration-500">
            <Image
              src="/milk-cans.svg"
              alt="Traditional Milk Cans"
              fill
              className="object-cover sepia-[0.3]"
            />
          </div>

          <div className="space-y-8">
            {[
              { name: 'Fresh Milk', desc: 'Chilled and packeted daily.', price: 'Daily' },
              { name: 'Pure Curd', desc: 'Thick, set curd from whole milk.', price: 'Daily' },
              { name: 'Butter & Ghee', desc: 'Golden and aromatic.', price: 'Weekly' },
              { name: 'Sambharam', desc: 'Spiced buttermilk for the heat.', price: 'Daily' },
            ].map((item) => (
              <div key={item.name} className="flex gap-4 items-baseline group cursor-pointer">
                <div className="w-2 h-2 mt-2 rounded-full bg-[var(--saffron)] opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div>
                  <div className="flex items-baseline gap-3">
                    <h4 className="text-xl font-bold font-serif text-[var(--ink)] group-hover:text-[var(--brick)] transition-colors">
                      {item.name}
                    </h4>
                    <span className="flex-grow border-b border-dotted border-[var(--border-strong)] opacity-50 h-1"></span>
                    <span className="font-mono text-sm uppercase tracking-wider text-[var(--sage)]">{item.price}</span>
                  </div>
                  <p className="text-[var(--cocoa)] mt-1 italic">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="vintage-panel md:mt-12 bg-[var(--cream)]">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--paper)] px-4 border border-[var(--border)]">
            <span className="vintage-badge text-[var(--royal)] border-[var(--royal)]">Kannur's Own</span>
          </div>

          <div className="relative h-48 w-full mb-6 border border-[var(--border)] overflow-hidden rounded-sm grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
            <Image
              src="/shop-front.png"
              alt="Prema Dairy Shop Front"
              fill
              className="object-cover"
            />
          </div>

          <ul className="space-y-6 mt-4">
            {[
              { title: 'Local Source', body: 'Located right at 2, Bellard Road (Railway Station Rd).' },
              { title: 'Traditional Taste', body: 'We keep the authentic taste of old Kerala dairy alive.' },
              { title: 'Community Focused', body: 'Serving local families and tea shops with pride.' }
            ].map((feature, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="font-serif text-[var(--brick)] text-2xl italic">{idx + 1}.</span>
                <div>
                  <strong className="block text-[var(--ink)] text-lg mb-1">{feature.title}</strong>
                  <p className="text-[var(--charcoal)] text-sm">{feature.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="separator-dots opacity-40"></div>

      {/* Kannur Heritage & Culture Section */}
      <section className="fade-in delay-150 relative">
        <div className="bg-gradient-to-br from-[var(--parchment)] via-[var(--cream)] to-[var(--paper)] p-8 md:p-16 border-2 border-[var(--royal)] relative overflow-hidden shadow-2xl">

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-[var(--royal)]">
              <circle cx="50" cy="50" r="40" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          {/* Header */}
          <div className="text-center mb-12 relative z-10">
            <div className="inline-block">
              <span className="vintage-badge text-[var(--saffron)] border-[var(--saffron)] text-xs mb-4">പൈതൃകവും പാരമ്പര്യവും</span>
              <h3 className="vintage-title text-4xl md:text-5xl text-[var(--royal)] mt-4 mb-3">
                കണ്ണൂരിന്റെ പാൽ പാരമ്പര്യം
              </h3>
              <p className="text-sm font-mono uppercase tracking-[0.3em] text-[var(--brick)] opacity-80">
                Kannur's Dairy Legacy
              </p>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--saffron)] to-transparent mx-auto mt-6 opacity-60"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left: Story */}
            <div className="space-y-6">
              <div className="bg-white/50 p-6 border-l-4 border-[var(--brick)] shadow-md">
                <h4 className="text-2xl font-serif text-[var(--ink)] mb-4 italic">വീടിന്റെ രുചി</h4>
                <p className="text-[var(--charcoal)] leading-relaxed mb-4">
                  കണ്ണൂരിൽ, പാലുൽപ്പന്നങ്ങൾ വെറും ഭക്ഷണമല്ല—അത് നമ്മുടെ ദൈനംദിന ആചാരങ്ങളിൽ ഇഴചേർന്നിരിക്കുന്നു. വീട്ടിലെ എല്ലാവരെയും ഉണർത്തുന്ന രാവിലത്തെ <strong className="text-[var(--royal)]">പാൽ ചായ</strong> മുതൽ, ഉച്ചവെയിലിനെ ശാന്തമാക്കുന്ന തണുത്ത <strong className="text-[var(--royal)]">സാംബാരം</strong> വരെ, പാലുൽപ്പന്നങ്ങൾ നമ്മുടെ പാചകരീതിയുടെ ഹൃദയമാണ്.
                </p>
                <p className="text-[var(--charcoal)] leading-relaxed">
                  നമ്മുടെ മുത്തശ്ശിമാർക്ക് രഹസ്യം അറിയാമായിരുന്നു: ശുദ്ധവും പുതുമയുള്ളതുമായ പാൽ സാധാരണത്തിനും അസാധാരണത്തിനും ഇടയിലെ വ്യത്യാസം ഉണ്ടാക്കുന്നു. അതേ ജ്ഞാനമാണ് പ്രേമ ഡയറിയെ നയിക്കുന്നത്—വീടിനെ ഓർമ്മിപ്പിക്കുന്ന ആധികാരിക രുചി എത്തിക്കുന്നു.
                </p>
              </div>

              {/* Traditional Uses */}
              <div className="bg-[var(--paper)] p-6 border border-[var(--border)] shadow-sm">
                <h5 className="text-lg font-bold text-[var(--brick)] mb-4 flex items-center gap-2">
                  <span className="text-2xl">🥛</span> കണ്ണൂരിലെ പരമ്പരാഗത രുചികൾ
                </h5>
                <ul className="space-y-3">
                  {[
                    { name: 'പാൽ പായസം', desc: 'ഉത്സവങ്ങളുടെ മധുരം' },
                    { name: 'തൈര് സദം', desc: 'വീടുകളിലെ ആശ്വാസ ഭക്ഷണം' },
                    { name: 'മലബാർ പൊറോട്ടയും കുറുമയും', desc: 'തേങ്ങാപ്പാൽ ചേർത്ത കറി' },
                    { name: 'പനീർ വിഭവങ്ങൾ', desc: 'വീട്ടിലുണ്ടാക്കിയ പനീർ വിഭവങ്ങൾ' }
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="text-[var(--saffron)] text-lg mt-1">•</span>
                      <div>
                        <strong className="text-[var(--ink)]">{item.name}</strong>
                        <p className="text-sm text-[var(--cocoa)] italic">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Visual & Facts */}
            <div className="space-y-6">

              {/* Decorative Image Placeholder */}
              <div className="relative h-64 w-full border-4 double border-[var(--saffron)] shadow-xl bg-gradient-to-br from-[var(--cream)] to-[var(--parchment)] flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <pattern id="heritage-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="2" fill="var(--royal)" />
                      </pattern>
                    </defs>
                    <rect width="200" height="200" fill="url(#heritage-pattern)" />
                  </svg>
                </div>
                <div className="relative z-10 text-center p-8">
                  <div className="text-6xl mb-4">🏺</div>
                  <p className="font-serif text-2xl text-[var(--royal)] italic">പരമ്പരാഗത ഓട്ടുപാത്രങ്ങൾ</p>
                  <p className="text-sm text-[var(--cocoa)] mt-2">പാല ചോമ്പ് • Paala Chombu</p>
                </div>
              </div>

              {/* Cultural Facts */}
              <div className="bg-[var(--royal)] text-white p-6 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                <h5 className="text-xl font-bold mb-4 relative z-10">നിങ്ങൾക്ക് അറിയാമോ?</h5>
                <div className="space-y-3 relative z-10">
                  <p className="text-sm leading-relaxed opacity-90">
                    ✦ കണ്ണൂരിന്റെ കാലാവസ്ഥ പാൽ ഉൽപാദനത്തിന് അനുയോജ്യമാണ്, ഇത് സ്വാഭാവികമായും രുചികരമായ പാൽ നൽകുന്നു.
                  </p>
                  <p className="text-sm leading-relaxed opacity-90">
                    ✦ പോഷകഗുണങ്ങൾ വർദ്ധിപ്പിക്കുന്നതിനായി പരമ്പരാഗതമായി ഓട്ടുപാത്രങ്ങളിലാണ് പാൽ സൂക്ഷിക്കുന്നത്.
                  </p>
                  <p className="text-sm leading-relaxed opacity-90">
                    ✦ രുചികരമായ തൈര് ഉണ്ടാക്കുന്ന രീതി കണ്ണൂരിലെ കുടുംബങ്ങളിൽ തലമുറകളായി കൈമാറ്റം ചെയ്യപ്പെടുന്നു.
                  </p>
                </div>
              </div>

              {/* Connection to Prema */}
              <div className="bg-gradient-to-r from-[var(--brick)] to-[var(--saffron)] text-white p-6 shadow-lg">
                <p className="text-lg font-serif italic leading-relaxed">
                  "പ്രേമ ഡയറിയിൽ, കണ്ണൂരിലെ കുടുംബങ്ങൾ തലമുറകളായി വിശ്വസിച്ചുപോരുന്ന അതേ ഗുണനിലവാരവും പരിശുദ്ധിയും ഞങ്ങൾ ഉറപ്പാക്കുന്നു."
                </p>
                <p className="text-right text-sm mt-3 opacity-90">— 2014 മുതൽ സേവനസജ്ജം</p>
              </div>
            </div>

          </div>

          {/* Bottom Accent */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 text-[var(--cocoa)] text-sm font-mono">
              <span className="w-12 h-px bg-[var(--border-strong)]"></span>
              <span className="uppercase tracking-widest">പാരമ്പര്യം കാത്തുസൂക്ഷിക്കുന്നു, ഓരോ തുള്ളിയിലും</span>
              <span className="w-12 h-px bg-[var(--border-strong)]"></span>
            </div>
          </div>

        </div>
      </section>

      <div className="separator-dots opacity-40"></div>

      {/* Story Section */}
      <section className="bg-[var(--parchment)] p-8 md:p-12 border border-[var(--border)] fade-in delay-200 relative overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[var(--saffron)] opacity-40 m-2"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[var(--saffron)] opacity-40 m-2"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Image Side */}
          <div className="relative h-[300px] w-full border-4 double border-[var(--royal)] shadow-xl -rotate-2 hover:rotate-0 transition-transform duration-500">
            <Image
              src="/delivery.svg"
              alt="Milk Delivery Cycle"
              fill
              className="object-cover sepia-[0.2]"
            />
          </div>

          {/* Text Side */}
          <div className="space-y-4">
            <span className="vintage-badge text-[var(--brick)] border-[var(--brick)]">Since 2014</span>
            <h3 className="vintage-title text-4xl text-[var(--royal)]">The Daily Run</h3>
            <p className="text-lg text-[var(--cocoa)] leading-relaxed">
              Every morning, before the Kannur sun fully rises, our crates are packed and ready. From the bustling Bellard Road to the quiet lanes nearby, we ensure every household gets their fresh packet of goodness.
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <span className="font-bold text-[var(--ink)]">Visit Us:</span>
              <address className="not-italic text-[var(--charcoal)]">
                Prema Dairy<br />
                2, Bellard Road (Railway Station Rd)<br />
                Kannur, Kerala 670001
              </address>
              <a href="tel:+919605310945" className="text-[var(--brick)] font-bold text-lg mt-2 hover:underline">
                📞 +91 96053 10945
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="space-y-8 fade-in delay-300">
        <div className="text-center">
          <h3 className="vintage-title text-3xl">Notes from Neighbors</h3>
          <div className="w-16 h-1 bg-[var(--saffron)] mx-auto mt-4 mb-2 opacity-80"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {loading ? (
            <p className="text-center col-span-3 text-[var(--cocoa)] italic">Consulting the archives...</p>
          ) : reviews.length > 0 ? (
            reviews.slice(0, 3).map((review, index) => (
              <div key={index} className="bg-[var(--paper)] p-6 border-l-4 border-[var(--royal)] shadow-sm">
                <div className="text-[var(--saffron)] text-xl mb-3">{'★'.repeat(parseInt(review.rating) || 5)}</div>
                <p className="text-[var(--ink)] font-serif text-lg leading-snug italic">&quot;{review.text}&quot;</p>
                <div className="mt-4 text-xs font-mono uppercase text-[var(--border-strong)] tracking-wider">
                  — Customer
                </div>
              </div>
            ))
          ) : (
            // Fallback Static Reviews if API fails or is empty for demo
            <>
              {[
                "Best milk in Kannur. Thick and pure.",
                "Have been buying from here since they started. Very reliable.",
                "Good quality curd and excellent service."
              ].map((text, i) => (
                <div key={i} className="bg-[var(--paper)] p-6 border-l-4 border-[var(--royal)] shadow-sm">
                  <div className="text-[var(--saffron)] text-xl mb-3">★★★★★</div>
                  <p className="text-[var(--ink)] font-serif text-lg leading-snug italic">&quot;{text}&quot;</p>
                  <div className="mt-4 text-xs font-mono uppercase text-[var(--border-strong)] tracking-wider">
                    — Kannur Resident
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16">
        <div className="vintage-panel inline-block max-w-2xl w-full bg-[var(--cream)] border-[var(--royal)]">
          <h3 className="vintage-title text-3xl mb-4 text-[var(--royal)]">Taste the Tradition</h3>
          <p className="mb-8 text-[var(--cocoa)]">
            Stop by our shop on Bellard Road or call us to set up a daily drop.
          </p>
          <Link href="/contact" className="vintage-btn">
            Order Now
          </Link>
        </div>
      </section>

    </div>
  );
}

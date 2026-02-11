'use client';

import Link from 'next/link';
import Image from 'next/image';


export default function Home() {
  const googleReviews = [
    {
      name: "Kath Vin",
      role: "Local Guide",
      text: "One of the best dairy shop in kannur. Can get superb Lassi, butter milk. Ghee and other milk products are available. Famous for its Lassi since ages. Located opposite kannur railway station."
    },
    {
      name: "Raish Rafeek",
      role: "Local Guide",
      text: "It Located opposite kannur railway station. One of the best diary shop in kannur. superb butter milk, Lassi, Ghee and other milk products are available."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-16">

      {/* Hero Section - Split Layout with Creative Image */}
      <section className="grid md:grid-cols-2 gap-8 items-center py-12 md:py-20 fade-in px-4">

        {/* Left: Text Content */}
        <div className="space-y-8 text-center md:text-left z-10">
          {/* Top Decorative Line */}
          <div className="flex items-center justify-center md:justify-start gap-4 max-w-sm mx-auto md:mx-0">
            <span className="h-px bg-[var(--border-strong)] w-12 opacity-60"></span>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--ink)]">Bellard Road • Kannur</span>
            <span className="h-px bg-[var(--border-strong)] w-12 opacity-60 md:hidden"></span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif text-[var(--royal)] italic leading-[0.9] drop-shadow-sm">
              Pure. Simple.
            </h2>
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-serif text-[var(--brick)] italic leading-[0.9] drop-shadow-sm ml-0 md:ml-12">
              Honest.
            </h2>
          </div>

          {/* Subtext */}
          <p className="text-xl max-w-md mx-auto md:mx-0 text-[var(--charcoal)] font-sans leading-relaxed opacity-80 pt-4 border-l-4 border-[var(--saffron)] pl-6">
            Serving the neighborhood from Railway Station Road since 2014.
            <br />
            <span className="text-[var(--royal)] font-bold mt-2 block">+91 96053 10945</span>
          </p>

          {/* Button */}
          <div className="pt-4 pb-8">
            <Link href="/contact" className="inline-block bg-[var(--brick)] text-[var(--cream)] text-sm tracking-[0.2em] font-mono uppercase px-12 py-4 shadow-[4px_4px_0_var(--ink)] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--ink)] transition-all border border-[var(--ink)]">
              Call for Delivery
            </Link>
          </div>
        </div>

        {/* Right: Creative Image Display */}
        <div className="relative h-[400px] md:h-[500px] w-full mt-8 md:mt-0">
          {/* Background Decorative Frame */}
          <div className="absolute top-4 right-4 bottom-4 left-4 border-2 border-[var(--royal)] opacity-30 z-0 transform rotate-3"></div>
          <div className="absolute top-0 right-8 bottom-8 left-0 bg-[var(--saffron)] opacity-10 z-0 transform -rotate-2 rounded-full blur-xl"></div>

          {/* Main Image Container */}
          <div className="relative h-full w-full z-10 transform hover:scale-[1.02] transition-transform duration-700 ease-out">
            <div className="absolute inset-0 border-8 border-white shadow-2xl overflow-hidden rounded-t-[100px] rounded-b-[20px]">
              <Image
                src="/hero-pour.png"
                alt="Pouring fresh milk from traditional brass vessel"
                fill
                className="object-cover hover:scale-110 transition-transform duration-[2s]"
                priority
              />
              {/* Overlay Gradient for Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[var(--paper)] p-4 border-2 border-[var(--royal)] shadow-[4px_4px_0_var(--royal)] rounded-full w-32 h-32 flex flex-col items-center justify-center text-center rotate-12 hover:rotate-0 transition-transform duration-300">
              <span className="text-[var(--brick)] font-bold text-3xl font-serif leading-none">100%</span>
              <span className="text-[var(--ink)] text-[10px] uppercase tracking-widest mt-1">Natural</span>
            </div>
          </div>
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
          {googleReviews.map((review, index) => (
            <div key={index} className="bg-[var(--paper)] p-6 border-l-4 border-[var(--royal)] shadow-sm flex flex-col h-full relative group hover:-translate-y-1 transition-transform duration-300">
              {/* Google Logo/Icon decoration */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.545,10.539v3.056h4.845c-0.23,1.385-1.547,3.972-4.845,3.972c-2.909,0-5.263-2.383-5.263-5.292 s2.354-5.292,5.263-5.292c1.3,0,2.379,0.508,3.15,1.189l2.259-2.259C16.489,4.483,14.675,3.694,12.545,3.694 C7.95,3.694,4.212,7.432,4.212,12.027s3.738,8.333,8.333,8.333c4.808,0,8.006-3.383,8.006-8.15c0-0.708-0.076-1.222-0.158-1.671 H12.545z" />
                </svg>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <div className="text-[var(--saffron)] text-lg">★★★★★</div>
                <span className="text-xs font-mono text-[var(--cocoa)] opacity-60">Google Review</span>
              </div>

              <p className="text-[var(--ink)] font-serif text-lg leading-snug italic flex-grow">
                &quot;{review.text}&quot;
              </p>

              <div className="mt-6 pt-4 border-t border-[var(--border)]">
                <div className="font-bold text-[var(--brick)] text-sm">{review.name}</div>
                <div className="text-xs font-mono uppercase text-[var(--border-strong)] tracking-wider">
                  {review.role}
                </div>
              </div>
            </div>
          ))}

          {/* Detailed Rating Summary Card */}
          <div className="bg-[var(--royal)] text-[var(--cream)] p-6 shadow-md flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 100 100">
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative z-10 space-y-2">
              <div className="text-6xl font-serif">4.7</div>
              <div className="flex justify-center gap-1 text-[var(--saffron)] text-2xl">
                ★★★★★
              </div>
              <p className="font-mono uppercase tracking-widest text-sm opacity-80 mt-2">
                Excellent
              </p>
              <p className="text-sm opacity-70">
                Based on 21 Google Reviews
              </p>
              <a
                href="https://www.google.com/maps/place/Prema+Dairy/@11.8718915,75.3678739,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-xs border border-[var(--saffron)] text-[var(--saffron)] px-4 py-2 hover:bg-[var(--saffron)] hover:text-[var(--royal)] transition-colors uppercase tracking-wider"
              >
                Read All Reviews
              </a>
            </div>
          </div>
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

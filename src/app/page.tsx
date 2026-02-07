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

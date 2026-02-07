'use client';

import Link from 'next/link';
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
      <section className="text-center space-y-8 py-8 fade-in">
        <div className="flex justify-center items-center gap-4 text-[var(--brick)] opacity-80 mb-4">
          <span className="h-px w-24 bg-current"></span>
          <span className="font-serif italic text-2xl px-4">Fresh &bull; Pure &bull; Local</span>
          <span className="h-px w-24 bg-current"></span>
        </div>

        <h2 className="text-5xl md:text-6xl font-serif leading-tight text-[var(--ink)] max-w-3xl mx-auto">
          A Vintage Taste of Kannur,<br /> Poured Fresh Every Morning.
        </h2>

        <p className="text-xl max-w-2xl mx-auto text-[var(--charcoal)] leading-relaxed">
          From MK Road, Padanapalam, Prema Dairy brings milk, butter, curd, and yogurt with a slow-crafted touch and honest farmhouse quality.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/products" className="vintage-btn">
            View Our Provisions
          </Link>
          <Link href="/contact" className="vintage-btn vintage-btn-secondary">
            Visit the Dairy
          </Link>
        </div>
      </section>

      <div className="separator-dots"></div>

      {/* Featured Collection - Grid Layout */}
      <section className="grid md:grid-cols-2 gap-12 items-start fade-in delay-100">
        <div className="space-y-6">
          <h3 className="vintage-title text-3xl mb-6 border-b border-[var(--border-strong)] pb-2 inline-block">
            Signature Collection
          </h3>

          <div className="space-y-8">
            {[
              { name: 'Morning Milk', desc: 'Creamy, chilled, and sealed for freshness.', price: 'Daily' },
              { name: 'Golden Butter', desc: 'Slow churned with a silky finish.', price: 'Weekly' },
              { name: 'Farm Curd', desc: 'Thick set, lightly tangy, and smooth.', price: 'Daily' },
              { name: 'Traditional Yogurt', desc: 'Balanced cultures with a mellow taste.', price: 'Daily' },
            ].map((item) => (
              <div key={item.name} className="flex gap-4 items-baseline group cursor-pointer">
                <div className="w-2 h-2 mt-2 rounded-full bg-[var(--brick)] opacity-60 group-hover:opacity-100 transition-opacity"></div>
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

        <div className="vintage-panel md:mt-12">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--cream)] px-4">
            <span className="vintage-badge text-[var(--sage)] border-[var(--sage)]">Our Promise</span>
          </div>

          <ul className="space-y-6 mt-4">
            {[
              { title: 'Dawn to Doorstep', body: 'Fresh batches prepared early and delivered with care.' },
              { title: 'Traditional Craft', body: 'Methods inspired by farmhouse routines and time-honored recipes.' },
              { title: 'Local Community', body: 'Rooted in Kannur with a focus on neighborhood families.' }
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
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[var(--border-strong)] opacity-30 m-2"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[var(--border-strong)] opacity-30 m-2"></div>

        <div className="grid md:grid-cols-3 gap-8 items-center relative z-10">
          <div className="md:col-span-2 space-y-4">
            <span className="vintage-badge text-[var(--brick)] border-[var(--brick)]">Since 2024</span>
            <h3 className="vintage-title text-4xl">Milk with a Memory</h3>
            <p className="text-lg text-[var(--cocoa)] leading-relaxed">
              We bottle the comfort of old dairy traditions with modern hygiene and careful delivery. Expect rich flavor, consistent quality, and friendly service with every order.
            </p>
            <div className="pt-4">
              <Link href="/about" className="text-[var(--brick)] font-serif italic text-lg hover:underline decoration-1 underline-offset-4">
                Read our full story &rarr;
              </Link>
            </div>
          </div>
          <div className="text-center p-6 border-2 border-dashed border-[var(--border-strong)] rounded-lg bg-[var(--paper)] rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="ornament-flourish text-3xl mb-2">&xi;</div>
            <p className="vintage-title text-xl mb-2">Home Delivery</p>
            <p className="font-mono text-sm uppercase tracking-widest mb-4">Kannur City</p>
            <p className="text-xs text-[var(--sage)]">Daily Rounds • Fresh Chilled</p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="space-y-8 fade-in delay-300">
        <div className="text-center">
          <h3 className="vintage-title text-3xl">Community Voices</h3>
          <div className="w-16 h-1 bg-[var(--brick)] mx-auto mt-4 mb-2 opacity-50"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {loading ? (
            <p className="text-center col-span-3 text-[var(--cocoa)] italic">Consulting the archives...</p>
          ) : reviews.length > 0 ? (
            reviews.slice(0, 3).map((review, index) => (
              <div key={index} className="bg-[var(--paper)] p-6 border-l-4 border-[var(--sage)] shadow-sm">
                <div className="text-[var(--brick)] text-xl mb-3">{'★'.repeat(parseInt(review.rating) || 5)}</div>
                <p className="text-[var(--ink)] font-serif text-lg leading-snug italic">"{review.text}"</p>
                <div className="mt-4 text-xs font-mono uppercase text-[var(--border-strong)] tracking-wider">
                  — Neighbor
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center p-8 bg-[var(--paper)] border border-[var(--border)]">
              <p className="text-[var(--cocoa)] italic">No tales to tell yet. Be the first to write one.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16">
        <div className="vintage-panel inline-block max-w-2xl w-full">
          <h3 className="vintage-title text-3xl mb-4">Ready for morning freshness?</h3>
          <p className="mb-8 text-[var(--cocoa)]">
            Contact us for daily subscriptions, event orders, or to visit our store on MK Road.
          </p>
          <Link href="/contact" className="vintage-btn">
            Arrange a Delivery
          </Link>
        </div>
      </section>

    </div>
  );
}

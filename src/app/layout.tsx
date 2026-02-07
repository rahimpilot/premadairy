import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, IM_Fell_English, Pinyon_Script } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const imFell = IM_Fell_English({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-im-fell",
  display: "swap",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prema Dairy | Vintage Farmhouse Goodness",
  description: "Fresh milk, butter, and curd from Bellard Road, Kannur. Est. 2014.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${imFell.variable} ${pinyon.variable}`}>
      <body className="bg-[var(--border)] text-[var(--ink)] antialiased min-h-screen p-2 sm:p-4 md:p-6 flex flex-col justify-center">

        {/* Main Vintage Paper Container */}
        <div className="bg-[var(--paper)] w-full max-w-[var(--spacing-container)] mx-auto min-h-[90vh] relative shadow-2xl kerala-border flex flex-col">

          {/* Header */}
          <header className="px-8 py-6 md:py-8 border-b border-[var(--border)] grid md:grid-cols-2 items-center gap-6">
            <div className="flex flex-col items-start gap-1">
              <h1 className="text-4xl md:text-5xl font-script text-[var(--royal)]">
                Prema Dairy
              </h1>
              <span className="border border-[var(--royal)] px-2 py-px text-[10px] tracking-[0.2em] font-mono uppercase opacity-70 text-[var(--royal)]">Est. 2014</span>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-end gap-6 md:gap-8">
              <Link href="/products" className="uppercase tracking-[0.15em] text-[11px] font-mono text-[var(--border-strong)] hover:text-[var(--royal)] transition-colors font-semibold">Provisions</Link>
              <Link href="/about" className="uppercase tracking-[0.15em] text-[11px] font-mono text-[var(--border-strong)] hover:text-[var(--royal)] transition-colors font-semibold">Our Story</Link>
              <Link href="/contact" className="uppercase tracking-[0.15em] text-[11px] font-mono text-[var(--border-strong)] hover:text-[var(--royal)] transition-colors font-semibold">Neighbors</Link>
              <Link href="/contact" className="uppercase tracking-[0.15em] text-[11px] font-mono text-[var(--border-strong)] hover:text-[var(--royal)] transition-colors font-semibold">Enquire</Link>
            </nav>
          </header>

          {/* Main Content */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Footer */}
          <footer className="py-8 px-6 text-center border-t border-[var(--border)] mt-auto bg-[var(--cream)]/30">
            <p className="font-serif italic text-[var(--border-strong)] text-sm mb-2">2, Bellard Road, Kannur, Kerala 670001</p>
            <div className="text-[10px] text-[var(--border-strong)] uppercase tracking-widest opacity-60">
              &copy; 2024 Prema Dairy.
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}

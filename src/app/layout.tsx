import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, IM_Fell_English } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Prema Dairy | Vintage Farmhouse Goodness",
  description: "Fresh milk, butter, and curd from MK Road, Kannur. Est. 2024.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${imFell.variable}`}>
      <body className="bg-[var(--paper)] text-[var(--ink)] antialiased min-h-screen flex flex-col items-center py-4 px-4 sm:px-8">

        {/* Main Vintage Paper Container */}
        <div className="w-full max-w-[var(--spacing-container)] bg-[var(--paper)] min-h-[95vh] relative shadow-2xl border border-[var(--border)] flex flex-col">

          {/* Inner Border Decoration */}
          <div className="absolute inset-2 border-2 border-double border-[var(--border-strong)] pointer-events-none z-10 hidden sm:block"></div>
          <div className="absolute inset-[10px] border border-[var(--border)] pointer-events-none z-10 hidden sm:block"></div>

          {/* Header */}
          <header className="relative z-20 pt-16 pb-8 px-6 text-center">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center gap-4 text-[var(--brick)] opacity-80">
                <span className="h-px w-12 bg-current"></span>
                <span className="vintage-badge text-xs tracking-[0.3em]">Est. 2024</span>
                <span className="h-px w-12 bg-current"></span>
              </div>

              <h1 className="text-5xl md:text-7xl font-serif text-[var(--ink)] tracking-tight">
                Prema Dairy
              </h1>

              <p className="text-[var(--sage)] italic font-serif text-xl opacity-90">
                Farmhouse Quality &bull; Kannur
              </p>
            </div>

            {/* Navigation */}
            <nav className="mt-10 flex flex-wrap justify-center gap-6 md:gap-12 border-y border-[var(--border)] py-4 max-w-2xl mx-auto">
              <Link href="/" className="uppercase tracking-[0.2em] text-xs md:text-sm text-[var(--ink)] hover:text-[var(--brick)] transition-colors font-semibold px-2">Home</Link>
              <Link href="/products" className="uppercase tracking-[0.2em] text-xs md:text-sm text-[var(--ink)] hover:text-[var(--brick)] transition-colors font-semibold px-2">Provisions</Link>
              <Link href="/contact" className="uppercase tracking-[0.2em] text-xs md:text-sm text-[var(--ink)] hover:text-[var(--brick)] transition-colors font-semibold px-2">Enquire</Link>
            </nav>
          </header>

          {/* Main Content */}
          <main className="flex-grow z-20 px-6 md:px-12 py-8 relative">
            {children}
          </main>

          {/* Footer */}
          <footer className="relative z-20 py-12 px-6 text-center border-t border-[var(--border)] mt-auto bg-[var(--cream)]/30">
            <div className="ornament-flourish mb-6">~ &diams; ~</div>
            <p className="uppercase tracking-widest text-xs font-bold text-[var(--brick)] mb-2">MK Road, Padanapalam</p>
            <p className="font-serif italic text-[var(--cocoa)] text-lg">Kannur, Kerala 670001</p>

            <div className="mt-8 text-xs text-[var(--border-strong)] uppercase tracking-wider opacity-70">
              &copy; 2024 Prema Dairy. Crafted with care.
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}

/**
 * S&S Car Sale — Main Layout with Navigation
 */

import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "CHI SIAMO", href: "/chi-siamo" },
    { label: "VEICOLI", href: "/veicoli" },
    { label: "NOLEGGIO", href: "/noleggio" },
    { label: "CONTATTI", href: "/contatti" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-black text-gray-300 text-sm py-2 px-4">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center gap-2">
            <MapPin size={13} className="text-amber-brand shrink-0" />
            <span>Oppeano (Verona), Italia</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+393292555510"
              className="flex items-center gap-1 hover:text-amber-brand transition-colors"
            >
              <Phone size={13} className="text-amber-brand" />
              <span>(+39) 329 255 5510</span>
            </a>
            <a
              href="mailto:ssujeeva@gmail.com"
              className="flex items-center gap-1 hover:text-amber-brand transition-colors"
            >
              <Mail size={13} className="text-amber-brand" />
              <span>ssujeeva@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#111] shadow-lg shadow-black/40" : "bg-[#1a1a2e]"
        }`}
      >
        <div className="container flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-amber-brand flex items-center justify-center rounded-sm">
              <span
                style={{ fontFamily: "Oswald, sans-serif" }}
                className="text-black font-bold text-lg leading-none"
              >
                S&S
              </span>
            </div>
            <div>
              <div
                style={{ fontFamily: "Oswald, sans-serif" }}
                className="text-white font-bold text-lg leading-tight tracking-wide"
              >
                S&S CAR SALE
              </div>
              <div className="text-amber-brand text-xs tracking-widest uppercase">
                Miles and Miles of Reliability
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="nav-link text-gray-300 hover:text-amber-brand"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white hover:text-amber-brand transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#111] border-t border-gray-800 px-4 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="nav-link text-gray-300 hover:text-amber-brand text-left"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[#111] text-gray-400 pt-12 pb-6">
        <div className="container">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-brand flex items-center justify-center">
                  <span
                    style={{ fontFamily: "Oswald, sans-serif" }}
                    className="text-black font-bold text-sm"
                  >
                    S&S
                  </span>
                </div>
                <div
                  className="text-white font-bold text-base"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  S&S CAR SALE
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "Lato, sans-serif" }}>
                Vendita e noleggio di veicoli usati importati da tutta l'Europa e dal mercato locale italiano. Oppeano (Verona).
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 hover:bg-amber-brand flex items-center justify-center transition-colors"
                >
                  <Facebook size={14} className="text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 hover:bg-amber-brand flex items-center justify-center transition-colors"
                >
                  <Instagram size={14} className="text-white" />
                </a>
                <a
                  href="mailto:ssujeeva@gmail.com"
                  className="w-8 h-8 bg-gray-800 hover:bg-amber-brand flex items-center justify-center transition-colors"
                >
                  <Mail size={14} className="text-white" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="section-heading text-white text-sm mb-4">PAGINE</h4>
              <ul className="space-y-2 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>
                {navLinks.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-amber-brand transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="section-heading text-white text-sm mb-4">ORARI DI LAVORO</h4>
              <div className="space-y-2 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>
                <div className="flex justify-between">
                  <span>Lunedì – Sabato</span>
                  <span className="text-amber-brand">08:30 – 18:30</span>
                </div>
                <div className="flex justify-between">
                  <span>Domenica</span>
                  <span className="text-red-400">Chiuso</span>
                </div>
              </div>
              <div className="mt-6 space-y-2 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>
                <a
                  href="tel:+393292555510"
                  className="flex items-center gap-2 hover:text-amber-brand transition-colors"
                >
                  <Phone size={13} className="text-amber-brand" />
                  (+39) 329 255 5510
                </a>
                <a
                  href="mailto:ssujeeva@gmail.com"
                  className="flex items-center gap-2 hover:text-amber-brand transition-colors"
                >
                  <Mail size={13} className="text-amber-brand" />
                  ssujeeva@gmail.com
                </a>
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-amber-brand" />
                  Oppeano (Verona), Italia
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
            <span style={{ fontFamily: "Lato, sans-serif" }}>
              © {new Date().getFullYear()} S&S Car Sale. Tutti i diritti riservati.
            </span>
            <div className="flex gap-4" style={{ fontFamily: "Lato, sans-serif" }}>
              <a href="#" className="hover:text-amber-brand transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-brand transition-colors">
                Termini di Servizio
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * S&S Car Sale — Home Page
 * Design: Dark Automotive Prestige
 * Theme: Charcoal dark + Amber/Gold accents
 * Fonts: Oswald (headings) + Lato (body)
 * Layout: Full-bleed hero → Welcome → CTA Cards → Features → Testimonial → Contact CTA → Footer
 */

import { useEffect, useRef, useState } from "react";
import {
  Car,
  Truck,
  ShieldCheck,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Facebook,
  Instagram,
  Globe,
} from "lucide-react";

// ─── Image URLs (CDN) ────────────────────────────────────────────────────────
const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663406450022/XgBwBZgNmhjcdAJ5uJq78P/hero-car-AeZD9MSAagaTzHS2PkqthR.webp";
const SHOWROOM_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663406450022/XgBwBZgNmhjcdAJ5uJq78P/car-sale-showroom-hw65qXMQQd3W5j3M3GWV5E.webp";
const HATCHBACK_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663406450022/XgBwBZgNmhjcdAJ5uJq78P/car-hatchback-ArgGjdR6UcSHYd8quDhR87.webp";
const COMMERCIAL_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663406450022/XgBwBZgNmhjcdAJ5uJq78P/car-commercial-8rWE6UjtBgsTFGZbB2x7qE.webp";
const OWNER_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663406450022/XgBwBZgNmhjcdAJ5uJq78P/owner-portrait-bPWm425zYvq94ddVXEetHA.webp";

// ─── Gallery images (Unsplash) ───────────────────────────────────────────────
const GALLERY_IMGS = [
  "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80",
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&q=80",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&q=80",
  "https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&q=80",
];

// ─── Scroll Reveal Hook ──────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Top Bar ─────────────────────────────────────────────────────────────────
function TopBar() {
  return (
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
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "HOME", href: "#home" },
    { label: "CHI SIAMO", href: "#about" },
    { label: "VEICOLI", href: "#vehicles" },
    { label: "SERVIZI", href: "#services" },
    { label: "CONTATTI", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#111] shadow-lg shadow-black/40" : "bg-[#1a1a2e]"
      }`}
    >
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
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
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="nav-link text-gray-300 hover:text-amber-brand"
            >
              {l.label}
            </button>
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
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="nav-link text-gray-300 hover:text-amber-brand text-left"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      {/* Content */}
      <div className="relative z-10 container text-white py-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-0.5 w-12 bg-amber-brand" />
            <span className="text-amber-brand text-sm font-semibold tracking-widest uppercase"
              style={{ fontFamily: "Lato, sans-serif" }}>
              Oppeano, Verona
            </span>
          </div>
          <h1
            className="section-heading text-5xl md:text-7xl text-white leading-tight mb-6"
          >
            Vendita di Berline,{" "}
            <span className="text-amber-brand">Utilitarie</span> e Veicoli
            Commerciali
          </h1>
          <p
            className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-xl"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Veicoli usati importati da tutta l'Europa e dal mercato locale
            italiano. Qualità garantita, prezzi trasparenti.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                document.querySelector("#vehicles")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-amber text-base"
            >
              Scopri i Veicoli
            </button>
            <button
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline-amber text-base"
            >
              Contattaci
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

// ─── About / Welcome Section ──────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="reveal relative">
            <img
              src={SHOWROOM_IMG}
              alt="S&S Car Sale Showroom"
              className="w-full h-80 md:h-[420px] object-cover shadow-2xl"
            />
            {/* Amber accent bar */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-brand opacity-80" />
          </div>

          {/* Text */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-10 bg-amber-brand" />
              <span
                className="text-amber-brand text-sm font-semibold tracking-widest uppercase"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Chi Siamo
              </span>
            </div>
            <h2 className="section-heading text-4xl md:text-5xl text-gray-900 mb-6">
              BENVENUTO{" "}
              <span className="text-amber-brand">S&S Car Sale</span>
            </h2>
            <p
              className="text-gray-600 text-base leading-relaxed mb-4"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Siamo S&S Car Sale, specializzata nella vendita di veicoli usati
              importati da tutta l'Europa e anche dal mercato locale italiano.
            </p>
            <p
              className="text-gray-600 text-base leading-relaxed mb-8"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Siamo situati nel cuore di Oppeano (Verona), e grazie alla nostra
              rete di marketing online attiriamo clienti da tutta Italia.
              Il nostro obiettivo è semplice:{" "}
              <strong className="text-gray-800">
                Miles and Miles of Reliability.
              </strong>
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-8">
              {[
                { value: "100+", label: "Veicoli Venduti" },
                { value: "EU", label: "Importazioni" },
                { value: "100%", label: "Soddisfazione" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="section-heading text-3xl text-amber-brand">
                    {s.value}
                  </div>
                  <div
                    className="text-gray-500 text-xs mt-1 uppercase tracking-wider"
                    style={{ fontFamily: "Lato, sans-serif" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Vehicles / CTA Cards Section ─────────────────────────────────────────────
function Vehicles() {
  const cards = [
    {
      title: "BERLINE",
      desc: "Ampia selezione di berline usate importate dai principali mercati europei. Ogni veicolo viene consegnato completamente registrato.",
      img: HERO_IMG,
      cta: "Scopri le Berline",
      bg: "bg-white",
      textDark: true,
    },
    {
      title: "UTILITARIE",
      desc: "Hatchback compatte e versatili, perfette per la città e per i lunghi viaggi. Qualità europea garantita.",
      img: HATCHBACK_IMG,
      cta: "Scopri le Utilitarie",
      bg: "bg-amber-brand",
      textDark: true,
    },
    {
      title: "VEICOLI COMMERCIALI",
      desc: "Furgoni e veicoli commerciali per le tue esigenze lavorative. Affidabilità e praticità al primo posto.",
      img: COMMERCIAL_IMG,
      cta: "Scopri i Commerciali",
      bg: "bg-[#1a1a2e]",
      textDark: false,
    },
  ];

  return (
    <section id="vehicles" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-14 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-10 bg-amber-brand" />
            <span
              className="text-amber-brand text-sm font-semibold tracking-widest uppercase"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              La Nostra Offerta
            </span>
            <div className="h-0.5 w-10 bg-amber-brand" />
          </div>
          <h2 className="section-heading text-4xl md:text-5xl text-gray-900">
            I NOSTRI VEICOLI
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`feature-card reveal overflow-hidden shadow-lg ${card.bg}`}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Car
                    size={22}
                    className={card.textDark ? "text-gray-700" : "text-amber-brand"}
                  />
                  <h3
                    className={`section-heading text-xl ${
                      card.textDark ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {card.title}
                  </h3>
                </div>
                <p
                  className={`text-sm leading-relaxed mb-5 ${
                    card.textDark ? "text-gray-600" : "text-gray-200"
                  }`}
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  {card.desc}
                </p>
                <button
                  onClick={() => {
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`text-sm font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors ${
                    card.bg === "bg-amber-brand"
                      ? "text-black hover:text-gray-800"
                      : card.textDark
                      ? "text-amber-brand hover:text-amber-600"
                      : "text-amber-brand hover:text-amber-300"
                  }`}
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  {card.cta} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services / Features Section ──────────────────────────────────────────────
function Services() {
  const features = [
    {
      icon: <Globe size={32} className="text-amber-brand" />,
      title: "AMPIA GAMMA DI MARCHI",
      desc: "Con una solida selezione di veicoli europei e locali a portata di mano. BMW, Audi, Volkswagen, Fiat e molti altri.",
    },
    {
      icon: <ShieldCheck size={32} className="text-amber-brand" />,
      title: "FIDUCIA E AFFIDABILITÀ",
      desc: "Ogni veicolo viene consegnato completamente registrato con tutti i requisiti completati. Trasparenza totale.",
    },
    {
      icon: <Car size={32} className="text-amber-brand" />,
      title: "VEICOLI VERIFICATI",
      desc: "Tutti i nostri veicoli sono accuratamente controllati e certificati prima della vendita.",
    },
    {
      icon: <Star size={32} className="text-amber-brand" />,
      title: "SERVIZIO CLIENTI",
      desc: "Siamo qui per guidarti in ogni fase dell'acquisto. La tua soddisfazione è la nostra priorità.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-14 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-10 bg-amber-brand" />
            <span
              className="text-amber-brand text-sm font-semibold tracking-widest uppercase"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Perché Sceglierci
            </span>
            <div className="h-0.5 w-10 bg-amber-brand" />
          </div>
          <h2 className="section-heading text-4xl md:text-5xl text-gray-900">
            I NOSTRI SERVIZI
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="feature-card reveal border border-gray-100 p-6 shadow-sm hover:border-amber-brand/40"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="section-heading text-base text-gray-900 mb-3">
                {f.title}
              </h3>
              <p
                className="text-gray-500 text-sm leading-relaxed"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonial Section ──────────────────────────────────────────────────────
function Testimonial() {
  return (
    <section className="py-24 bg-[#1a1a2e] relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #f5a623 0, #f5a623 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 container">
        <div className="max-w-3xl mx-auto text-center reveal">
          {/* Owner photo */}
          <div className="relative inline-block mb-6">
            <img
              src={OWNER_IMG}
              alt="Sujeewa Kumari"
              className="w-24 h-24 rounded-full object-cover border-4 border-amber-brand mx-auto"
            />
          </div>

          <div className="section-heading text-white text-xl mb-1">
            SUJEEWA KUMARI
          </div>
          <div
            className="text-amber-brand text-sm tracking-wider uppercase mb-8"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Fondatrice & Titolare
          </div>

          {/* Large quote mark */}
          <div className="text-amber-brand text-8xl leading-none mb-2 opacity-40 select-none"
            style={{ fontFamily: "Georgia, serif" }}>
            "
          </div>

          <blockquote
            className="text-gray-200 text-lg md:text-xl leading-relaxed italic max-w-2xl mx-auto"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Ho iniziato questo viaggio con un solo pensiero in mente: quello di
            dare il meglio di me e fornire ai nostri clienti il miglior servizio
            possibile.
          </blockquote>

          <div className="mt-8 flex justify-center">
            <div className="h-0.5 w-16 bg-amber-brand" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact CTA Banner ───────────────────────────────────────────────────────
function ContactBanner() {
  return (
    <section className="bg-amber-brand py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="section-heading text-2xl md:text-3xl text-black">
              HAI DOMANDE?{" "}
              <span className="font-normal">SENTITI LIBERO DI CHIEDERE...</span>
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="tel:+393292555510"
              className="flex items-center gap-2 text-black font-semibold text-lg hover:opacity-80 transition-opacity"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              <Phone size={20} />
              (+39) 329 255 5510
            </a>
            <a
              href="mailto:ssujeeva@gmail.com"
              className="flex items-center gap-2 bg-[#1a1a2e] text-white px-6 py-3 font-semibold uppercase tracking-wider hover:bg-black transition-colors"
              style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.1em" }}
            >
              <Mail size={16} />
              Scrivici
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-14 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-10 bg-amber-brand" />
            <span
              className="text-amber-brand text-sm font-semibold tracking-widest uppercase"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Siamo Qui Per Te
            </span>
            <div className="h-0.5 w-10 bg-amber-brand" />
          </div>
          <h2 className="section-heading text-4xl md:text-5xl text-gray-900">
            CONTATTACI
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="reveal space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-brand flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-black" />
              </div>
              <div>
                <div className="section-heading text-base text-gray-900 mb-1">INDIRIZZO</div>
                <p className="text-gray-600 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>
                  Oppeano (Verona), Italia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-brand flex items-center justify-center shrink-0">
                <Phone size={18} className="text-black" />
              </div>
              <div>
                <div className="section-heading text-base text-gray-900 mb-1">TELEFONO</div>
                <a
                  href="tel:+393292555510"
                  className="text-gray-600 text-sm hover:text-amber-brand transition-colors"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  (+39) 329 255 5510
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-brand flex items-center justify-center shrink-0">
                <Mail size={18} className="text-black" />
              </div>
              <div>
                <div className="section-heading text-base text-gray-900 mb-1">EMAIL</div>
                <a
                  href="mailto:ssujeeva@gmail.com"
                  className="text-gray-600 text-sm hover:text-amber-brand transition-colors"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  ssujeeva@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-brand flex items-center justify-center shrink-0">
                <Clock size={18} className="text-black" />
              </div>
              <div>
                <div className="section-heading text-base text-gray-900 mb-1">ORARI DI LAVORO</div>
                <p className="text-gray-600 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>
                  Lunedì – Sabato: 08:30 – 18:30
                  <br />
                  Domenica: Chiuso
                </p>
              </div>
            </div>

            {/* Gallery strip */}
            <div>
              <div className="section-heading text-base text-gray-900 mb-3">GALLERIA</div>
              <div className="grid grid-cols-4 gap-2">
                {GALLERY_IMGS.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-16 object-cover hover:opacity-80 transition-opacity cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1"
                    style={{ fontFamily: "Oswald, sans-serif" }}
                  >
                    Nome *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-amber-brand transition-colors"
                    style={{ fontFamily: "Lato, sans-serif" }}
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1"
                    style={{ fontFamily: "Oswald, sans-serif" }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-amber-brand transition-colors"
                    style={{ fontFamily: "Lato, sans-serif" }}
                    placeholder="La tua email"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  Telefono
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-amber-brand transition-colors"
                  style={{ fontFamily: "Lato, sans-serif" }}
                  placeholder="Il tuo numero di telefono"
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  Messaggio *
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-amber-brand transition-colors resize-none"
                  style={{ fontFamily: "Lato, sans-serif" }}
                  placeholder="Come possiamo aiutarti?"
                />
              </div>
              <button type="submit" className="btn-amber w-full text-center">
                {sent ? "✓ Messaggio Inviato!" : "Invia Messaggio"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
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
              Vendita di veicoli usati importati da tutta l'Europa e dal mercato
              locale italiano. Oppeano (Verona).
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
              {[
                { label: "Home", href: "#home" },
                { label: "Chi Siamo", href: "#about" },
                { label: "Veicoli", href: "#vehicles" },
                { label: "Servizi", href: "#services" },
                { label: "Contatti", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="hover:text-amber-brand transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="section-heading text-white text-sm mb-4">
              ORARI DI LAVORO
            </h4>
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
  );
}

// ─── Main Home Component ──────────────────────────────────────────────────────
export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Vehicles />
        <Services />
        <Testimonial />
        <ContactBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

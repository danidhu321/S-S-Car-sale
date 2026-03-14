/**
 * S&S Car Sale — Contact Page
 */

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const GALLERY_IMGS = [
  "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80",
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&q=80",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&q=80",
  "https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&q=80",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#1a1a2e] text-white py-16 md:py-24">
        <div className="container">
          <h1 className="section-heading text-5xl md:text-6xl mb-4">Contattaci</h1>
          <p className="text-gray-300 text-lg max-w-2xl" style={{ fontFamily: "Lato, sans-serif" }}>
            Hai domande? Siamo qui per aiutarti. Contattaci via telefono, email o compila il modulo sottostante.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-brand flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-black" />
                </div>
                <div>
                  <h3 className="section-heading text-lg text-gray-900 mb-1">INDIRIZZO</h3>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>
                    Oppeano (Verona), Italia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-brand flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-black" />
                </div>
                <div>
                  <h3 className="section-heading text-lg text-gray-900 mb-1">TELEFONO</h3>
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
                <div className="w-12 h-12 bg-amber-brand flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-black" />
                </div>
                <div>
                  <h3 className="section-heading text-lg text-gray-900 mb-1">EMAIL</h3>
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
                <div className="w-12 h-12 bg-amber-brand flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-black" />
                </div>
                <div>
                  <h3 className="section-heading text-lg text-gray-900 mb-1">ORARI DI LAVORO</h3>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>
                    Lunedì – Sabato: 08:30 – 18:30
                    <br />
                    Domenica: Chiuso
                  </p>
                </div>
              </div>

              {/* Gallery */}
              <div className="pt-4">
                <h3 className="section-heading text-lg text-gray-900 mb-4">GALLERIA</h3>
                <div className="grid grid-cols-4 gap-2">
                  {GALLERY_IMGS.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Gallery ${i + 1}`}
                      className="w-full h-20 object-cover hover:opacity-80 transition-opacity cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
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
                    rows={6}
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
    </div>
  );
}

/**
 * S&S Car Sale — About Page
 * Design: Dark Automotive Prestige
 */

import { MapPin, Phone, Mail, Clock } from "lucide-react";

const SHOWROOM_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663406450022/XgBwBZgNmhjcdAJ5uJq78P/car-sale-showroom-hw65qXMQQd3W5j3M3GWV5E.webp";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#1a1a2e] text-white py-16 md:py-24">
        <div className="container">
          <h1 className="section-heading text-5xl md:text-6xl mb-4">Chi Siamo</h1>
          <p className="text-gray-300 text-lg max-w-2xl" style={{ fontFamily: "Lato, sans-serif" }}>
            Scopri la storia di S&S Car Sale e la nostra missione di fornire veicoli di qualità a clienti in tutta Italia.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src={SHOWROOM_IMG}
                alt="S&S Car Sale Showroom"
                className="w-full h-80 md:h-[420px] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-brand opacity-80" />
            </div>

            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-10 bg-amber-brand" />
                <span className="text-amber-brand text-sm font-semibold tracking-widest uppercase"
                  style={{ fontFamily: "Lato, sans-serif" }}>
                  La Nostra Storia
                </span>
              </div>
              <h2 className="section-heading text-4xl md:text-5xl text-gray-900 mb-6">
                BENVENUTO A <span className="text-amber-brand">S&S CAR SALE</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4" style={{ fontFamily: "Lato, sans-serif" }}>
                Siamo S&S Car Sale, specializzata nella vendita di veicoli usati importati da tutta l'Europa e anche dal mercato locale italiano.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-6" style={{ fontFamily: "Lato, sans-serif" }}>
                Siamo situati nel cuore di Oppeano (Verona), e grazie alla nostra rete di marketing online attiriamo clienti da tutta Italia. Il nostro obiettivo è semplice: <strong className="text-gray-800">Miles and Miles of Reliability.</strong>
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8" style={{ fontFamily: "Lato, sans-serif" }}>
                Ogni veicolo viene consegnato completamente registrato con tutti i requisiti completati. La trasparenza e l'affidabilità sono i pilastri della nostra azienda.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-8">
                {[
                  { value: "100+", label: "Veicoli Venduti" },
                  { value: "EU", label: "Importazioni" },
                  { value: "100%", label: "Soddisfazione" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="section-heading text-3xl text-amber-brand">{s.value}</div>
                    <div className="text-gray-500 text-xs mt-1 uppercase tracking-wider" style={{ fontFamily: "Lato, sans-serif" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-0.5 w-10 bg-amber-brand" />
              <span className="text-amber-brand text-sm font-semibold tracking-widest uppercase" style={{ fontFamily: "Lato, sans-serif" }}>
                Contattaci
              </span>
              <div className="h-0.5 w-10 bg-amber-brand" />
            </div>
            <h2 className="section-heading text-4xl md:text-5xl text-gray-900">COME RAGGIUNGERCI</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <MapPin size={24} className="text-amber-brand" />,
                title: "INDIRIZZO",
                content: "Oppeano (Verona), Italia",
              },
              {
                icon: <Phone size={24} className="text-amber-brand" />,
                title: "TELEFONO",
                content: "(+39) 329 255 5510",
              },
              {
                icon: <Mail size={24} className="text-amber-brand" />,
                title: "EMAIL",
                content: "ssujeeva@gmail.com",
              },
              {
                icon: <Clock size={24} className="text-amber-brand" />,
                title: "ORARI",
                content: "Lun-Sab: 08:30-18:30",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 shadow-sm border border-gray-100 hover:border-amber-brand/40 transition-colors">
                <div className="mb-4">{item.icon}</div>
                <h3 className="section-heading text-base text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

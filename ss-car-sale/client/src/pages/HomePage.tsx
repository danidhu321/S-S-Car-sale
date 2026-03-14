/**
 * S&S Car Sale — Home Page (Landing)
 * Design: Dark Automotive Prestige
 */

import { Link } from "wouter";
import { Car, Truck, ShieldCheck, Star, Phone, Mail, MapPin, Clock } from "lucide-react";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663406450022/XgBwBZgNmhjcdAJ5uJq78P/hero-car-AeZD9MSAagaTzHS2PkqthR.webp";
const SHOWROOM_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663406450022/XgBwBZgNmhjcdAJ5uJq78P/car-sale-showroom-hw65qXMQQd3W5j3M3GWV5E.webp";
const OWNER_IMG = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663406450022/IADouqMYGvwgnMTG.jpg?Expires=1804265343&Signature=Z29NJPWoFYn7O2Py2vzmVqG~EJbpF8wWvXl1osD0wfyGkWQvdCcC6HKdOSR5bfy1kJZhkXDK4g0sYD6chzz7aen4v-0QJviLLYco5zm0dD1nYk9H5wzkDvfudOw0kPKgfZ7UCUd4G13VuYvc5Bo2wtRg0HP898YIQT~iwjbLx2rJjWEX~n28zwFyR~zYt6o89nkGJtIpjUVIJa1YNXdQLEWM6m5OdNFJlBoHxjkVIzhrcU2C67GIwM5uRU3o6Pm99uzg7UCLcYnfZC~5DWl0Hz83l6n2LHGIIlDQY3GS~5gEWoUhJ8ZZPaA8mPwIQmMBapOm57C~qkmuDlgCRhen8Q__&Key-Pair-Id=K2HSFNDJXOU9YS";

export default function HomePage() {

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

        <div className="relative z-10 container text-white py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-12 bg-amber-brand" />
              <span className="text-amber-brand text-sm font-semibold tracking-widest uppercase"
                style={{ fontFamily: "Lato, sans-serif" }}>
                Oppeano, Verona
              </span>
            </div>
            <h1 className="section-heading text-5xl md:text-7xl text-white leading-tight mb-6">
              Vendita e Noleggio di Berline,{" "}
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
              <Link href="/veicoli" className="btn-amber text-base inline-block">
                Scopri i Veicoli
              </Link>
              <Link href="/noleggio" className="btn-outline-amber text-base inline-block">
                Noleggia Ora
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Car size={28} />, title: "VENDITA", desc: "Ampia gamma di veicoli usati selezionati" },
              { icon: <Truck size={28} />, title: "NOLEGGIO", desc: "Noleggia per giorni, settimane o mesi" },
              { icon: <ShieldCheck size={28} />, title: "AFFIDABILITÀ", desc: "Tutti i veicoli verificati e certificati" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="flex justify-center mb-4 text-amber-brand">{item.icon}</div>
                <h3 className="section-heading text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/veicoli" className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow block">
              <div className="flex items-center gap-3 mb-4">
                <Car size={28} className="text-amber-brand" />
                <h3 className="section-heading text-2xl text-gray-900">ACQUISTA UN VEICOLO</h3>
              </div>
              <p className="text-gray-600 mb-6" style={{ fontFamily: "Lato, sans-serif" }}>
                Sfoglia la nostra selezione di veicoli usati importati da tutta l'Europa. Ogni auto è completamente registrata e verificata.
              </p>
              <button className="btn-amber">Scopri i Veicoli →</button>
            </Link>

            <Link href="/noleggio" className="bg-amber-brand p-8 shadow-lg hover:shadow-xl transition-shadow block">
              <div className="flex items-center gap-3 mb-4">
                <Truck size={28} className="text-black" />
                <h3 className="section-heading text-2xl text-black">NOLEGGIA UN VEICOLO</h3>
              </div>
              <p className="text-black mb-6" style={{ fontFamily: "Lato, sans-serif" }}>
                Scegli tra sedan, hatchback e veicoli commerciali. Servizio flessibile con prezzi competitivi per ogni esigenza.
              </p>
              <button className="bg-black text-white px-6 py-3 font-semibold uppercase tracking-wider hover:bg-gray-800 transition-colors"
                style={{ fontFamily: "Oswald, sans-serif" }}>
                Noleggia Ora →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-[#1a1a2e] relative overflow-hidden">
        <div className="relative z-10 container">
          <div className="max-w-3xl mx-auto text-center">
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
    </div>
  );
}

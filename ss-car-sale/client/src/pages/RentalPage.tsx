/**
 * S&S Car Sale — Rental Page
 * Features: Rental services for sedan, hatchback, commercial vehicles
 */

import { Car, Truck, CheckCircle, MapPin, Phone, Mail } from "lucide-react";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663406450022/XgBwBZgNmhjcdAJ5uJq78P/hero-car-AeZD9MSAagaTzHS2PkqthR.webp";
const HATCHBACK_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663406450022/XgBwBZgNmhjcdAJ5uJq78P/car-hatchback-ArgGjdR6UcSHYd8quDhR87.webp";
const COMMERCIAL_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663406450022/XgBwBZgNmhjcdAJ5uJq78P/car-commercial-8rWE6UjtBgsTFGZbB2x7qE.webp";

interface RentalOption {
  title: string;
  type: string;
  description: string;
  pricePerDay: number;
  image: string;
  features: string[];
}

const RENTAL_OPTIONS: RentalOption[] = [
  {
    title: "BERLINE",
    type: "Sedan",
    description: "Veicoli di lusso e comfort per viaggi business e vacanze",
    pricePerDay: 60,
    image: HERO_IMG,
    features: [
      "Climatizzatore automatico",
      "Interni in pelle",
      "Navigatore GPS",
      "Bluetooth integrato",
      "Cruise control",
    ],
  },
  {
    title: "UTILITARIE",
    type: "Hatchback",
    description: "Compatte e versatili, perfette per la città e i viaggi",
    pricePerDay: 45,
    image: HATCHBACK_IMG,
    features: [
      "Motore efficiente",
      "Parcheggio facile",
      "Aria condizionata",
      "Stereo moderno",
      "Consumo ridotto",
    ],
  },
  {
    title: "VEICOLI COMMERCIALI",
    type: "Furgoni",
    description: "Furgoni e veicoli per le tue esigenze lavorative",
    pricePerDay: 80,
    image: COMMERCIAL_IMG,
    features: [
      "Ampio spazio di carico",
      "Motore robusto",
      "Assistenza stradale 24/7",
      "Assicurazione inclusa",
      "Manutenzione gratuita",
    ],
  },
];

export default function RentalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

        <div className="relative z-10 container text-white py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-12 bg-amber-brand" />
              <span className="text-amber-brand text-sm font-semibold tracking-widest uppercase"
                style={{ fontFamily: "Lato, sans-serif" }}>
                Servizio Flessibile
              </span>
            </div>
            <h1 className="section-heading text-5xl md:text-7xl text-white leading-tight mb-6">
              Noleggia il Tuo Veicolo
            </h1>
            <p
              className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-xl"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Scegli tra sedan, hatchback e veicoli commerciali. Prezzi competitivi, servizio affidabile, disponibilità immediata.
            </p>
            <button className="btn-amber text-base">
              Richiedi un Preventivo
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Rental Options */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-0.5 w-10 bg-amber-brand" />
              <span className="text-amber-brand text-sm font-semibold tracking-widest uppercase" style={{ fontFamily: "Lato, sans-serif" }}>
                Le Nostre Opzioni
              </span>
              <div className="h-0.5 w-10 bg-amber-brand" />
            </div>
            <h2 className="section-heading text-4xl md:text-5xl text-gray-900">
              SCEGLI IL TUO VEICOLO
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {RENTAL_OPTIONS.map((option) => (
              <div key={option.type} className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="section-heading text-2xl text-gray-900 mb-1">
                    {option.title}
                  </h3>
                  <p className="text-amber-brand text-sm font-semibold mb-3 uppercase tracking-wider"
                    style={{ fontFamily: "Lato, sans-serif" }}>
                    {option.type}
                  </p>

                  <p className="text-gray-600 text-sm mb-6 leading-relaxed" style={{ fontFamily: "Lato, sans-serif" }}>
                    {option.description}
                  </p>

                  {/* Price */}
                  <div className="bg-amber-brand/10 border-l-4 border-amber-brand px-4 py-3 mb-6">
                    <div className="text-amber-brand font-bold text-2xl" style={{ fontFamily: "Oswald, sans-serif" }}>
                      € {option.pricePerDay}
                    </div>
                    <div className="text-gray-600 text-xs uppercase tracking-wider" style={{ fontFamily: "Lato, sans-serif" }}>
                      al giorno
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6 border-t border-gray-100 pt-4">
                    {option.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-amber-brand mt-0.5 shrink-0" />
                        <span className="text-gray-600 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-amber-brand text-black py-3 font-semibold uppercase tracking-wider hover:bg-amber-600 transition-colors"
                    style={{ fontFamily: "Oswald, sans-serif" }}>
                    Noleggia Ora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-0.5 w-10 bg-amber-brand" />
              <span className="text-amber-brand text-sm font-semibold tracking-widest uppercase" style={{ fontFamily: "Lato, sans-serif" }}>
                Processo Semplice
              </span>
              <div className="h-0.5 w-10 bg-amber-brand" />
            </div>
            <h2 className="section-heading text-4xl md:text-5xl text-gray-900">
              COME FUNZIONA
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Scegli il Veicolo", desc: "Seleziona il tipo di auto che ti serve" },
              { num: "2", title: "Richiedi Preventivo", desc: "Compila il form con le tue date" },
              { num: "3", title: "Conferma Prenotazione", desc: "Ricevi la conferma via email" },
              { num: "4", title: "Ritira e Goditi", desc: "Prendi il veicolo e parti!" },
            ].map((step) => (
              <div key={step.num} className="relative">
                <div className="bg-white p-6 border border-gray-200 hover:border-amber-brand/40 transition-colors">
                  <div className="w-12 h-12 bg-amber-brand text-black flex items-center justify-center rounded-full mb-4"
                    style={{ fontFamily: "Oswald, sans-serif" }}>
                    <span className="font-bold text-lg">{step.num}</span>
                  </div>
                  <h3 className="section-heading text-base text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>
                    {step.desc}
                  </p>
                </div>
                {step.num !== "4" && (
                  <div className="hidden lg:block absolute -right-3 top-8 text-amber-brand text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-amber-brand py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="section-heading text-2xl md:text-3xl text-black">
                Hai Domande sul Noleggio?
              </h3>
              <p className="text-black text-sm mt-2" style={{ fontFamily: "Lato, sans-serif" }}>
                Contattaci per ricevere un preventivo personalizzato
              </p>
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
                className="flex items-center gap-2 bg-black text-white px-6 py-3 font-semibold uppercase tracking-wider hover:bg-gray-800 transition-colors"
                style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.1em" }}
              >
                <Mail size={16} />
                Contattaci
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

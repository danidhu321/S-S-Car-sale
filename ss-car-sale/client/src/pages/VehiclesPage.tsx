/*
 * S&S Car Sale — Vehicles Page (Buy/Sell)
 * Features: Vehicle listings from Facebook Marketplace
 */

import { Car, DollarSign, Gauge, Calendar } from "lucide-react";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663406450022/XgBwBZgNmhjcdAJ5uJq78P/hero-car-AeZD9MSAagaTzHS2PkqthR.webp";
const HATCHBACK_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663406450022/XgBwBZgNmhjcdAJ5uJq78P/car-hatchback-ArgGjdR6UcSHYd8quDhR87.webp";
const COMMERCIAL_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663406450022/XgBwBZgNmhjcdAJ5uJq78P/car-commercial-8rWE6UjtBgsTFGZbB2x7qE.webp";

interface Listing {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  km: number;
  type: "sedan" | "hatchback" | "commercial";
  description: string;
  image: string;
  transmission: string;
  fuel: string;
}

const REAL_LISTINGS: Listing[] = [
  {
    id: "1",
    brand: "Mercedes-Benz",
    model: "A170 1.7",
    year: 2004,
    price: 3200,
    km: 180000,
    type: "sedan",
    description: "Mercedes Benz A170 1.7 Benzina, Cambio Manuale, Climatizzatore Automatico, Cerchi In Lega",
    image: HERO_IMG,
    transmission: "Manuale",
    fuel: "Benzina",
  },
  {
    id: "2",
    brand: "Tesla",
    model: "Model X 100D",
    year: 2017,
    price: 39900,
    km: 173000,
    type: "sedan",
    description: "Tesla Model X 100D Long Range, Autonomia 565 Km, Enhanced Auto-Pilot 3.0 with FSD",
    image: HERO_IMG,
    transmission: "Automatico",
    fuel: "Elettrico",
  },
  {
    id: "3",
    brand: "Iveco",
    model: "Daily 35C15 Frigo",
    year: 2015,
    price: 21500,
    km: 0,
    type: "commercial",
    description: "Iveco Daily 35C15, Euro 5B, Portata 650 KG, Frigo Thermo King V300 con ATP",
    image: COMMERCIAL_IMG,
    transmission: "Manuale",
    fuel: "Diesel",
  },
  {
    id: "4",
    brand: "Iveco",
    model: "Daily 35C13 Frigo",
    year: 2016,
    price: 27000,
    km: 0,
    type: "commercial",
    description: "Iveco Daily 35C13, Euro 5B, Doppia Camera / Temperatura, Frigo Carrier Pulsor 350 con ATP",
    image: COMMERCIAL_IMG,
    transmission: "Manuale",
    fuel: "Diesel",
  },
  {
    id: "5",
    brand: "Iveco",
    model: "Daily 35C14 Frigo",
    year: 2017,
    price: 27000,
    km: 0,
    type: "commercial",
    description: "Iveco Daily 35C14, Euro 6B, Portata 784 KG, Frigo Carrier Pulsor 350 con ATP",
    image: COMMERCIAL_IMG,
    transmission: "Manuale",
    fuel: "Diesel",
  },
  {
    id: "6",
    brand: "Iveco",
    model: "Daily 35C16 Frigo",
    year: 2018,
    price: 28500,
    km: 0,
    type: "commercial",
    description: "Iveco Daily 35C16, Euro 6, Frigo Carrier Pulsor 350 FRCX con ATP Scadenza Marzo/2026, Sponda",
    image: COMMERCIAL_IMG,
    transmission: "Manuale",
    fuel: "Diesel",
  },
  {
    id: "7",
    brand: "Fiat",
    model: "Ducato Frigo",
    year: 2014,
    price: 20500,
    km: 229000,
    type: "commercial",
    description: "Fiat Ducato, Euro 5B, Frigo Thermo King -20 C, Portata 1050 KG, ATP Valido Fino al 2031/04, 5 Bancali",
    image: COMMERCIAL_IMG,
    transmission: "Manuale",
    fuel: "Diesel",
  },
  {
    id: "8",
    brand: "Fiat",
    model: "Grande Punto Evo 1.2",
    year: 2011,
    price: 4500,
    km: 153000,
    type: "hatchback",
    description: "Fiat Grande Punto EVO 1.2 Benzina, Cambio Manuale, Clima, Volante Multifunzione, 4 Airbags",
    image: HATCHBACK_IMG,
    transmission: "Manuale",
    fuel: "Benzina",
  },
  {
    id: "9",
    brand: "Opel",
    model: "Movano Frigo",
    year: 2017,
    price: 18500,
    km: 0,
    type: "commercial",
    description: "Opel Movano, Euro 6B, Frigo Carrier Pulsor 300, Portata 1200 KG, Veicolo Professionale",
    image: COMMERCIAL_IMG,
    transmission: "Manuale",
    fuel: "Diesel",
  },
  {
    id: "10",
    brand: "Iveco",
    model: "Daily 35C13 Sponda",
    year: 2016,
    price: 26000,
    km: 0,
    type: "commercial",
    description: "Iveco Daily 35C13, Euro 5B+, Sponda Battente, Cambio Manuale, Portata 620 KG, Importato",
    image: COMMERCIAL_IMG,
    transmission: "Manuale",
    fuel: "Diesel",
  },
  {
    id: "11",
    brand: "Iveco",
    model: "Daily 35C14 Sponda",
    year: 2017,
    price: 27000,
    km: 0,
    type: "commercial",
    description: "Iveco Daily 35C14, Euro 6B, Frigo Carrier Pulsor 350 FRCX con ATP Scadenza 2026 Novembre, Sponda",
    image: COMMERCIAL_IMG,
    transmission: "Manuale",
    fuel: "Diesel",
  },
  {
    id: "12",
    brand: "Iveco",
    model: "Daily 35C13 Doppia Camera",
    year: 2015,
    price: 25000,
    km: 0,
    type: "commercial",
    description: "Iveco Daily 35C13, Euro 5, Frigo Carrier -20 C con Doppia Camera, ATP Valido fino a 2031",
    image: COMMERCIAL_IMG,
    transmission: "Manuale",
    fuel: "Diesel",
  },
  {
    id: "13",
    brand: "Iveco",
    model: "Daily 35C16 Sponda",
    year: 2019,
    price: 29500,
    km: 0,
    type: "commercial",
    description: "Iveco Daily 35C16, Euro 6B, Frigo Carrier Pulsor 350 FRCX con ATP Scadenza 2027 Novembre, Sponda",
    image: COMMERCIAL_IMG,
    transmission: "Manuale",
    fuel: "Diesel",
  },
  {
    id: "14",
    brand: "Fiat",
    model: "Grande Punto 1.2 GPL",
    year: 2007,
    price: 3500,
    km: 193000,
    type: "hatchback",
    description: "Fiat Grande Punto 1.2 Benzina / GPL, Cambio Manuale, Cerchi in Lega, Clima, Volante Multifunzione",
    image: HATCHBACK_IMG,
    transmission: "Manuale",
    fuel: "Benzina/GPL",
  },
  {
    id: "15",
    brand: "Mercedes-Benz",
    model: "B200 Executive",
    year: 2011,
    price: 8300,
    km: 110000,
    type: "sedan",
    description: "Mercedes Benz B200 Executive 2.0 Benzina, Cambio Manuale, Cerchi in Lega 16\", Bi-zona Clima",
    image: HERO_IMG,
    transmission: "Manuale",
    fuel: "Benzina",
  },
  {
    id: "16",
    brand: "Mercedes-Benz",
    model: "B200 CDI Premium",
    year: 2013,
    price: 8600,
    km: 241000,
    type: "sedan",
    description: "Mercedes Benz B200 CDI Premium 1.8 Diesel, Cambio Automatico con Paddle-Shift, Reverse Camera",
    image: HERO_IMG,
    transmission: "Automatico",
    fuel: "Diesel",
  },
  {
    id: "17",
    brand: "Mercedes-Benz",
    model: "C220 AMG",
    year: 2008,
    price: 8800,
    km: 215000,
    type: "sedan",
    description: "Mercedes Benz C220 AMG Avantgarde 2.2 Diesel, Cambio Automatico, Sensori di Retromarcia",
    image: HERO_IMG,
    transmission: "Automatico",
    fuel: "Diesel",
  },
  {
    id: "18",
    brand: "Ford",
    model: "Puma EcoBoost",
    year: 2021,
    price: 13900,
    km: 192000,
    type: "hatchback",
    description: "Ford Puma 1.0 EcoBoost Hybrid, Cambio Manuale, Sensori di Parcheggio, Cerchi in Lega 17\"",
    image: HATCHBACK_IMG,
    transmission: "Manuale",
    fuel: "Benzina Hybrid",
  },
  {
    id: "19",
    brand: "Toyota",
    model: "Yaris 1.3",
    year: 2009,
    price: 4500,
    km: 189000,
    type: "hatchback",
    description: "Toyota Yaris 1.3 Benzina, Cambio Manuale, Volante Multifunzione, 8-Airbags, Winker Mirror",
    image: HATCHBACK_IMG,
    transmission: "Manuale",
    fuel: "Benzina",
  },
];

export default function VehiclesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#1a1a2e] text-white py-16 md:py-24">
        <div className="container">
          <h1 className="section-heading text-5xl md:text-6xl mb-4">Veicoli in Vendita</h1>
          <p className="text-gray-300 text-lg max-w-2xl" style={{ fontFamily: "Lato, sans-serif" }}>
            Sfoglia la nostra selezione di berline, utilitarie e veicoli commerciali. Tutti completamente registrati e verificati.
          </p>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-0.5 w-10 bg-amber-brand" />
              <span className="text-amber-brand text-sm font-semibold tracking-widest uppercase" style={{ fontFamily: "Lato, sans-serif" }}>
                Annunci Disponibili
              </span>
              <div className="h-0.5 w-10 bg-amber-brand" />
            </div>
            <h2 className="section-heading text-4xl md:text-5xl text-gray-900">
              {REAL_LISTINGS.length} VEICOLI IN VENDITA
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REAL_LISTINGS.map((listing) => (
              <div key={listing.id} className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={listing.image}
                    alt={`${listing.brand} ${listing.model}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-amber-brand text-black px-3 py-1 text-sm font-semibold"
                    style={{ fontFamily: "Oswald, sans-serif" }}>
                    € {listing.price.toLocaleString("it-IT")}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="section-heading text-lg text-gray-900 mb-1">
                    {listing.brand} {listing.model}
                  </h3>
                  <p className="text-gray-500 text-xs mb-4" style={{ fontFamily: "Lato, sans-serif" }}>
                    {listing.year}
                  </p>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2" style={{ fontFamily: "Lato, sans-serif" }}>
                    {listing.description}
                  </p>

                  {/* Specs */}
                  <div className="space-y-2 mb-4 border-t border-gray-100 pt-3">
                    {listing.km > 0 && (
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Gauge size={14} className="text-amber-brand" />
                        <span style={{ fontFamily: "Lato, sans-serif" }}>{listing.km.toLocaleString("it-IT")} km</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Calendar size={14} className="text-amber-brand" />
                      <span style={{ fontFamily: "Lato, sans-serif" }}>Anno {listing.year}</span>
                    </div>
                    <div className="text-gray-600 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>
                      {listing.transmission} • {listing.fuel}
                    </div>
                  </div>

                  {/* Actions */}
                  <button className="w-full bg-amber-brand text-black py-2 font-semibold uppercase tracking-wider hover:bg-amber-600 transition-colors text-sm"
                    style={{ fontFamily: "Oswald, sans-serif" }}>
                    Contattaci
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

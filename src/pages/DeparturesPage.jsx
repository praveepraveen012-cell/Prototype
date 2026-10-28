import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Moon, Clock, Compass, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import DepartureSelector from '../components/DepartureSelector';
import { DEPARTURES } from '../data/yatraData';

export default function DeparturesPage() {
  return (
    <div className="min-h-screen bg-ivory text-forest pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
            PILGRIMAGE CALENDAR 2027
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-light leading-tight">
            Approved 2027 Departures
          </h1>
          <p className="text-stone text-sm sm:text-base font-light mt-4 leading-relaxed">
            Eight exclusive batches scheduled across May, June, July, and August 2027. Aligned with auspicious Purnima (Full Moon) lunar syzygies and optimal Himalayan weather windows.
          </p>
          <div className="w-16 h-px bg-gold/50 mx-auto mt-6" />
        </div>

        {/* Departure Selector Component */}
        <div className="mb-20">
          <DepartureSelector />
        </div>

        {/* Season & Climate Overview Grid */}
        <div className="bg-white rounded-2xl border border-gold-subtle p-8 sm:p-12 shadow-luxury-sm mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold block mb-1">
              CLIMATIC CONDITIONS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-forest font-medium">
              Seasonal Character of Western Tibet
            </h2>
            <p className="text-xs text-stone mt-1">
              What to anticipate across the months of the 2027 expedition calendar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-stone">
            <div className="p-5 rounded-lg bg-ivory border border-gold-subtle">
              <h3 className="font-serif text-lg text-forest font-semibold mb-2">May (Opening Season)</h3>
              <p className="leading-relaxed font-light mb-2">
                Crisp blue skies, snow-covered ridges, and brisk night temperatures. High visibility for photography and powerful Vaishakh Purnima energy.
              </p>
              <span className="text-gold-dark font-medium block">Avg: 5°C to 14°C (Day)</span>
            </div>

            <div className="p-5 rounded-lg bg-ivory border border-gold-subtle">
              <h3 className="font-serif text-lg text-forest font-semibold mb-2">June (Saga Dawa)</h3>
              <p className="leading-relaxed font-light mb-2">
                Warmest daylight hours, long trekking daylight, and the sacred Saga Dawa festival at Tarboche. Ideal walking conditions for all ages.
              </p>
              <span className="text-gold-dark font-medium block">Avg: 10°C to 18°C (Day)</span>
            </div>

            <div className="p-5 rounded-lg bg-ivory border border-gold-subtle">
              <h3 className="font-serif text-lg text-forest font-semibold mb-2">July (Guru Purnima)</h3>
              <p className="leading-relaxed font-light mb-2">
                The high plateau remains in the rain-shadow of the Himalayas. Guru Purnima ceremonies under moonlight on the shores of Lake Manasarovar.
              </p>
              <span className="text-gold-dark font-medium block">Avg: 12°C to 20°C (Day)</span>
            </div>

            <div className="p-5 rounded-lg bg-ivory border border-gold-subtle">
              <h3 className="font-serif text-lg text-forest font-semibold mb-2">August (Shravana Purnima)</h3>
              <p className="leading-relaxed font-light mb-2">
                Vibrant alpine plateau pastures, blooming high-altitude flora, and holy Shravana month rituals dedicated directly to Lord Shiva.
              </p>
              <span className="text-gold-dark font-medium block">Avg: 8°C to 16°C (Day)</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/book"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold to-gold-light text-evergreen font-semibold text-xs uppercase tracking-[0.16em] px-8 py-4 rounded shadow-gold-glow hover:shadow-luxury transition-all"
          >
            <span>Reserve Your Departure Date (₹25,000 Deposit)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}


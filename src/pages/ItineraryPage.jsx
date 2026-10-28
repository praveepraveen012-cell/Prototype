import React from 'react';
import { Link } from 'react-router-dom';
import ItineraryTimeline from '../components/ItineraryTimeline';
import { ArrowRight, Mountain, ShieldCheck } from 'lucide-react';

export default function ItineraryPage() {
  return (
    <div className="min-h-screen bg-ivory text-forest pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
            DETAILED EXPEDITION DOSSIER
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-light leading-tight">
            Journey Itinerary & Route Profiles
          </h1>
          <p className="text-stone text-sm sm:text-base font-light mt-4 leading-relaxed">
            Detailed day-by-day stages for all three approved route options. Calibrated for gradual altitude acclimatisation, spiritual rituals, and safety.
          </p>
          <div className="w-16 h-px bg-gold/50 mx-auto mt-6" />
        </div>

        {/* Timeline Component with switcher */}
        <div className="mb-20">
          <ItineraryTimeline />
        </div>

        {/* Bottom Booking Ribbon */}
        <div className="max-w-4xl mx-auto bg-forest text-ivory rounded-2xl p-8 sm:p-10 border border-gold shadow-luxury text-center">
          <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-light mb-3">
            Ready to Walk the Sacred Circuit?
          </h3>
          <p className="text-xs text-sage-light max-w-md mx-auto mb-6 font-light">
            Each batch is strictly limited to 25 pilgrims. Secure your departure date and package today.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold to-gold-light text-evergreen font-semibold text-xs uppercase tracking-[0.16em] px-8 py-3.5 rounded shadow-gold-glow"
          >
            <span>Proceed to Reservation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}


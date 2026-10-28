import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Phone, Mail, MapPin, ShieldCheck, Heart, Award, ArrowUp } from 'lucide-react';
import { BRAND } from '../data/yatraData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-evergreen text-ivory border-t border-gold/30 relative overflow-hidden">
      {/* Decorative top gold hairline */}
      <div className="gold-divider" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Column (2 cols wide on large screens) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center bg-forest">
                <svg className="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M12 2L2 22h20L12 2z" strokeLinejoin="round" />
                  <path d="M12 8v10" />
                  <circle cx="12" cy="18" r="1" fill="#B99A5B" />
                </svg>
              </div>
              <div>
                <span className="font-display tracking-[0.2em] text-lg font-semibold text-ivory block">
                  SHLLOKA YATRA
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-gold-light">
                  Kailash Mansarovar Parikrama 2027
                </span>
              </div>
            </div>

            <p className="text-sm text-sage-light/80 leading-relaxed max-w-md font-light">
              Crafted as a premier Himalayan editorial experience. Dedicated to the sacred circumambulation of Mount Kailash and holy rituals on the shores of Lake Manasarovar. Uncompromising medical safety, veteran Sherpa leadership, and bespoke pilgrimage hospitality.
            </p>

            <div className="pt-2 flex items-center space-x-4 text-xs text-gold-light/90">
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>Govt. Permitted Route</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gold/50" />
              <div className="flex items-center space-x-1.5">
                <Award className="w-4 h-4 text-gold" />
                <span>Pure Veg Kitchen</span>
              </div>
            </div>
          </div>

          {/* Pilgrimage Links */}
          <div className="space-y-4">
            <h4 className="font-display text-xs uppercase tracking-[0.2em] text-gold font-semibold">
              The Pilgrimage
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase text-ivory/80">
              <li>
                <Link to="/the-journey" className="hover:text-gold transition-colors">
                  The Sacred Journey
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-gold transition-colors">
                  Three Route Packages
                </Link>
              </li>
              <li>
                <Link to="/departures" className="hover:text-gold transition-colors">
                  2027 Departures
                </Link>
              </li>
              <li>
                <Link to="/itinerary" className="hover:text-gold transition-colors">
                  Day-by-Day Timeline
                </Link>
              </li>
              <li>
                <Link to="/kailash-mansarovar-yatra-2027" className="text-gold-light hover:text-gold transition-colors flex items-center space-x-1">
                  <span>Campaign 2027</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Editorial & Preparation */}
          <div className="space-y-4">
            <h4 className="font-display text-xs uppercase tracking-[0.2em] text-gold font-semibold">
              Editorial & Prep
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase text-ivory/80">
              <li>
                <Link to="/blog" className="hover:text-gold transition-colors">
                  Kailash Chronicle (Blog)
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">
                  About Shlloka Yatra
                </Link>
              </li>
              <li>
                <Link to="/the-journey#acclimatisation" className="hover:text-gold transition-colors">
                  High-Altitude Safety
                </Link>
              </li>
              <li>
                <Link to="/the-journey#preparation" className="hover:text-gold transition-colors">
                  Packing Masterclass
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors">
                  Ground Concierge Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-display text-xs uppercase tracking-[0.2em] text-gold font-semibold">
              Ground Command
            </h4>
            <div className="space-y-3 text-xs text-sage-light/80">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Kathmandu Valley Base & New Delhi Operations Hub</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:${BRAND.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-gold transition-colors">
                  {BRAND.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-gold transition-colors">
                  {BRAND.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/book"
                className="inline-block text-[11px] uppercase tracking-[0.16em] bg-forest text-gold border border-gold/40 hover:bg-gold hover:text-evergreen px-4 py-2 rounded transition-all"
              >
                Book 2027 Yatra
              </Link>
            </div>
          </div>
        </div>

        {/* Cancellation Policy Strip (Brochure Approved) */}
        <div className="bg-forest/60 border border-gold/20 rounded-lg p-4 mb-8">
          <div className="text-[11px] uppercase tracking-[0.18em] text-gold font-semibold mb-1.5 flex items-center space-x-2">
            <span>Approved Cancellation Policy</span>
            <span className="text-[10px] text-sage/70">(Page 5/7 of Official Yatra Brochure)</span>
          </div>
          <p className="text-xs text-sage-light/80 leading-relaxed font-light">
            Initial deposit: INR 25,000 non-refundable registration fee. Cancellations received 75+ days prior to departure incur a 25% cancellation charge (75% refund). Cancellations 60–74 days prior incur a 50% cancellation charge (50% refund). No refund within 30 days of departure due to non-refundable Tibet permit, flight sector, and government allocation fees.
          </p>
        </div>

        {/* Bottom Attribution and Back to Top */}
        <div className="pt-6 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-light gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-center sm:text-left">
            <span>© 2027 {BRAND.legalEntity}. All rights reserved.</span>
            <span className="text-gold font-medium">{BRAND.poweredBy}</span>
            <span className="text-stone-light/70">Prototype 2 · Luxury Himalayan Editorial</span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center space-x-1.5 text-gold hover:text-ivory transition-colors text-xs uppercase tracking-wider"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}


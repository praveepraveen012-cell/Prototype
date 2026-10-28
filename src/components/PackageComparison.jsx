import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, Plane, Bus, Shield, Sparkles, ChevronRight, ArrowRight } from 'lucide-react';
import { PACKAGES } from '../data/yatraData';

export default function PackageComparison({ onSelectPackage, title, subtitle }) {
  const [passportType, setPassportType] = useState('INDIAN'); // 'INDIAN' | 'FOREIGN'
  const navigate = useNavigate();

  const handleChoose = (pkg) => {
    if (onSelectPackage) {
      onSelectPackage(pkg, passportType);
    } else {
      navigate(`/book?package=${pkg.id}&passport=${passportType}`);
    }
  };

  return (
    <div className="w-full">
      {/* Section Header */}
      {(title || subtitle) && (
        <div className="text-center max-w-3xl mx-auto mb-10">
          {subtitle && (
            <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest font-light leading-tight">
              {title}
            </h2>
          )}
          <div className="w-16 h-px bg-gold/50 mx-auto mt-4" />
        </div>
      )}

      {/* Currency / Passport Toggle */}
      <div className="flex items-center justify-center mb-10">
        <div className="bg-ivory-dark p-1 rounded-lg border border-gold-subtle flex items-center shadow-inner">
          <button
            onClick={() => setPassportType('INDIAN')}
            className={`px-5 py-2 rounded text-xs uppercase tracking-wider font-semibold transition-all ${
              passportType === 'INDIAN'
                ? 'bg-forest text-ivory shadow-sm'
                : 'text-stone hover:text-forest'
            }`}
          >
            Indian Passport (INR)
          </button>
          <button
            onClick={() => setPassportType('FOREIGN')}
            className={`px-5 py-2 rounded text-xs uppercase tracking-wider font-semibold transition-all ${
              passportType === 'FOREIGN'
                ? 'bg-forest text-ivory shadow-sm'
                : 'text-stone hover:text-forest'
            }`}
          >
            Foreign / NRI Passport (USD Supplement)
          </button>
        </div>
      </div>

      {/* Editorial Packages Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PACKAGES.map((pkg) => {
          const isPremier = pkg.id === 3;
          const isLhasa = pkg.id === 2;

          let displayPrice = '';
          let pricingNote = '';

          if (passportType === 'INDIAN') {
            displayPrice = `₹${pkg.pricingTiers.indian.basePrice.toLocaleString('en-IN')}`;
            pricingNote = '+ 5% GST · Twin/Triple sharing';
          } else {
            if (pkg.id === 1) {
              displayPrice = `₹4,25,000`;
              pricingNote = 'Base price for Foreign/NRI nationals';
            } else if (pkg.id === 2) {
              displayPrice = `₹4,25,000 + $600`;
              pricingNote = 'Base ₹4,25,000 + US$ 600 Lhasa air supplement';
            } else {
              displayPrice = `₹4,25,000 + $1,200`;
              pricingNote = 'Base ₹4,25,000 + US$ 1,200 dual air sectors';
            }
          }

          return (
            <div
              key={pkg.id}
              className={`rounded-xl flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                isPremier
                  ? 'bg-forest text-ivory shadow-luxury border-2 border-gold ring-1 ring-gold/40'
                  : 'bg-white text-forest shadow-luxury-sm border border-gold-subtle hover:border-gold'
              }`}
            >
              {/* Badge */}
              <div
                className={`py-2 px-4 text-[10px] uppercase tracking-[0.2em] font-semibold text-center ${
                  isPremier
                    ? 'bg-gold text-evergreen'
                    : 'bg-ivory-dark text-stone'
                }`}
              >
                {pkg.badge}
              </div>

              <div className="p-6 sm:p-8">
                {/* Header info */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="uppercase tracking-widest text-gold font-medium">
                      {pkg.titleTag}
                    </span>
                    <span
                      className={`font-semibold ${
                        isPremier ? 'text-sage-light' : 'text-stone'
                      }`}
                    >
                      {pkg.durationText}
                    </span>
                  </div>

                  <h3
                    className={`font-serif text-2xl sm:text-3xl font-medium leading-snug ${
                      isPremier ? 'text-ivory' : 'text-forest'
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`text-xs mt-1 font-light ${
                      isPremier ? 'text-sage-light/80' : 'text-stone'
                    }`}
                  >
                    {pkg.subtitle}
                  </p>
                </div>

                {/* Price Display */}
                <div
                  className={`p-4 rounded-lg mb-6 ${
                    isPremier
                      ? 'bg-evergreen/80 border border-gold/30'
                      : 'bg-ivory border border-gold-subtle'
                  }`}
                >
                  <span
                    className={`text-[10px] uppercase tracking-wider block ${
                      isPremier ? 'text-gold' : 'text-stone'
                    }`}
                  >
                    Brochure Tariff
                  </span>
                  <div className="flex items-baseline space-x-2">
                    <span
                      className={`font-serif text-3xl sm:text-4xl font-semibold tracking-tight ${
                        isPremier ? 'text-gold-light' : 'text-forest'
                      }`}
                    >
                      {displayPrice}
                    </span>
                    <span className="text-[11px] opacity-75">/ person</span>
                  </div>
                  <span
                    className={`text-[11px] block mt-1 ${
                      isPremier ? 'text-sage/80' : 'text-stone'
                    }`}
                  >
                    {pricingNote}
                  </span>
                </div>

                {/* Editorial Description */}
                <p
                  className={`text-xs leading-relaxed font-light mb-6 ${
                    isPremier ? 'text-sage-light/90' : 'text-stone'
                  }`}
                >
                  {pkg.shortSummary}
                </p>

                {/* Key Inclusions Highlights */}
                <div className="space-y-3 mb-8">
                  <span
                    className={`text-[10px] uppercase tracking-widest font-semibold block ${
                      isPremier ? 'text-gold' : 'text-stone'
                    }`}
                  >
                    Key Inclusions & Character
                  </span>
                  {pkg.highlights.slice(0, 5).map((hl, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isPremier ? 'bg-gold/20 text-gold' : 'bg-forest/10 text-forest'
                        }`}
                      >
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span
                        className={`leading-snug ${
                          isPremier ? 'text-ivory/90' : 'text-forest/90'
                        }`}
                      >
                        {hl}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Operational Details */}
                <div
                  className={`pt-4 border-t text-[11px] space-y-1.5 ${
                    isPremier
                      ? 'border-gold/25 text-sage-light/75'
                      : 'border-forest-subtle text-stone'
                  }`}
                >
                  <div>
                    <strong className={isPremier ? 'text-ivory' : 'text-forest'}>
                      Transport:
                    </strong>{' '}
                    {pkg.transport}
                  </div>
                  <div>
                    <strong className={isPremier ? 'text-ivory' : 'text-forest'}>
                      Acclimatisation:
                    </strong>{' '}
                    {pkg.acclimatisationRating}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div
                className={`p-6 pt-0 flex flex-col gap-2.5 ${
                  isPremier ? '' : 'bg-white'
                }`}
              >
                <button
                  onClick={() => handleChoose(pkg)}
                  className={`w-full py-3 px-4 rounded text-xs uppercase tracking-[0.16em] font-semibold flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5 ${
                    isPremier
                      ? 'bg-gradient-to-r from-gold to-gold-light text-evergreen shadow-gold-glow'
                      : 'bg-forest text-ivory hover:bg-forest-light'
                  }`}
                >
                  <span>Choose This Package</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <Link
                  to={`/packages/${pkg.id}`}
                  className={`w-full py-2.5 text-center text-[11px] uppercase tracking-wider transition-colors ${
                    isPremier
                      ? 'text-sage-light hover:text-gold'
                      : 'text-stone hover:text-forest'
                  }`}
                >
                  View Full Package Dossier
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Booking terms reminder */}
      <div className="mt-8 p-4 bg-ivory-dark rounded-lg border border-gold-subtle text-center text-xs text-stone">
        <span className="font-semibold text-forest">Reservation Term:</span> Registration requires a non-refundable deposit of ₹25,000 per person. 50% seat confirmation fee due upon batch reservation, with the remainder payable 30 days prior to departure.
      </div>
    </div>
  );
}


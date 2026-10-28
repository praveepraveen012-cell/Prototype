import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, Plane, Bus, ShieldCheck, Heart, Sparkles, ChevronRight, ArrowRight, Clock, MapPin } from 'lucide-react';
import PackageComparison from '../components/PackageComparison';
import { PACKAGES, ITINERARY_DATA } from '../data/yatraData';

export default function PackagesPage() {
  const { id } = useParams();
  const selectedPkg = id ? PACKAGES.find((p) => p.id === parseInt(id, 10)) : null;

  return (
    <div className="min-h-screen bg-ivory text-forest pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
            THREE DISTINCT TRAVEL EXPERIENCES
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-light leading-tight">
            Pilgrimage Packages 2027
          </h1>
          <p className="text-stone text-sm sm:text-base font-light mt-4 leading-relaxed">
            From the traditional overland ascent through Nepal's emerald gorges to luxury twin-flight options cutting out thousands of road kilometres. All backed by full brochure guarantees.
          </p>
          <div className="w-16 h-px bg-gold/50 mx-auto mt-6" />
        </div>

        {/* Detailed Dossier if specific package is selected, else full comparison */}
        {selectedPkg ? (
          <div className="bg-white rounded-2xl border border-gold-subtle p-8 sm:p-12 shadow-luxury mb-16 animate-fade-in">
            <div className="flex items-center justify-between pb-6 border-b border-forest-subtle mb-8">
              <div>
                <span className="text-[10px] uppercase tracking-luxury text-gold font-semibold block">
                  {selectedPkg.titleTag}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-forest font-medium mt-1">
                  {selectedPkg.name}
                </h2>
                <p className="text-xs text-stone mt-1">{selectedPkg.subtitle}</p>
              </div>

              <Link
                to="/packages"
                className="text-xs uppercase tracking-wider text-stone hover:text-forest underline"
              >
                View All Packages
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-forest font-medium mb-3">
                    Expedition Dossier
                  </h3>
                  <p className="text-stone text-xs sm:text-sm font-light leading-relaxed">
                    {selectedPkg.editorialDescription}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-forest">
                    Included Highlights & Services
                  </h4>
                  {selectedPkg.highlights.map((h, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs text-stone">
                      <Check className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-forest-subtle text-xs text-stone">
                  <div>
                    <strong className="text-forest block">Transport Fleet:</strong>
                    <span>{selectedPkg.transport}</span>
                  </div>
                  <div>
                    <strong className="text-forest block">Acclimatisation Index:</strong>
                    <span>{selectedPkg.acclimatisationRating}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-forest text-ivory rounded-xl p-6 sm:p-8 border border-gold shadow-luxury flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gold font-semibold block mb-2">
                      Official Brochure Pricing
                    </span>
                    <div className="mb-6">
                      <span className="text-xs text-sage-light block">Indian Nationals (INR)</span>
                      <span className="font-serif text-3xl text-gold-shimmer font-bold">
                        ₹{selectedPkg.pricingTiers.indian.basePrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[11px] text-sage/70 block">+ 5% GST · Twin/Triple Sharing</span>
                    </div>

                    <div className="mb-6 pt-4 border-t border-gold/30">
                      <span className="text-xs text-sage-light block">Foreign / NRI Nationals</span>
                      <span className="font-serif text-xl text-ivory font-semibold">
                        ₹{selectedPkg.pricingTiers.foreign.basePrice.toLocaleString('en-IN')}
                        {selectedPkg.pricingTiers.foreign.supplementUsd ? ` + $${selectedPkg.pricingTiers.foreign.supplementUsd} USD` : ''}
                      </span>
                      <span className="text-[11px] text-sage/70 block">
                        {selectedPkg.pricingTiers.foreign.notes}
                      </span>
                    </div>

                    <div className="p-3 bg-evergreen/80 rounded border border-gold/30 text-xs text-sage-light">
                      <span className="text-gold font-semibold block">Deposit Required:</span>
                      <span>₹25,000 non-refundable booking deposit to secure seat.</span>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gold/20">
                    <Link
                      to={`/book?package=${selectedPkg.id}`}
                      className="w-full py-3.5 bg-gradient-to-r from-gold to-gold-light text-evergreen font-semibold rounded text-xs uppercase tracking-[0.16em] flex items-center justify-center space-x-2 shadow-gold-glow"
                    >
                      <span>Reserve {selectedPkg.name.split('—')[0]}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Global Packages Comparison Matrix */}
        <PackageComparison />

      </div>
    </div>
  );
}


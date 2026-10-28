import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Moon, Users, Clock, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { DEPARTURES } from '../data/yatraData';

export default function DepartureSelector({ onSelectDeparture, title, subtitle }) {
  const [filter, setFilter] = useState('ALL');
  const navigate = useNavigate();

  const filteredDepartures = DEPARTURES.filter((dep) => {
    if (filter === 'ALL') return true;
    if (filter === 'FULL_MOON') return dep.isFullMoon;
    if (filter === 'MAY') return dep.name.includes('May');
    if (filter === 'JUNE') return dep.name.includes('June');
    if (filter === 'JULY') return dep.name.includes('July');
    if (filter === 'AUG') return dep.name.includes('Aug');
    return true;
  });

  const handleBookingJump = (departure) => {
    if (onSelectDeparture) {
      onSelectDeparture(departure);
    } else {
      navigate(`/book?batch=${departure.batchNumber}`);
    }
  };

  return (
    <div className="w-full">
      {/* Editorial Header */}
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

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {[
          { key: 'ALL', label: 'All Batches (8)' },
          { key: 'FULL_MOON', label: 'Full Moon Purnima (4)' },
          { key: 'MAY', label: 'May' },
          { key: 'JUNE', label: 'June' },
          { key: 'JULY', label: 'July' },
          { key: 'AUG', label: 'August' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-4 py-2 rounded text-xs uppercase tracking-wider transition-all ${
              filter === tab.key
                ? 'bg-forest text-ivory shadow-luxury-sm font-semibold'
                : 'bg-ivory-dark text-forest hover:bg-sage/40'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Departures Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredDepartures.map((dep) => {
          const isFilling = dep.status === 'FAST_FILLING';
          return (
            <div
              key={dep.batchNumber}
              className="bg-white rounded-lg border border-gold-subtle hover:border-gold p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-luxury group relative overflow-hidden"
            >
              {/* Top Accent Ribbon */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 ${
                  dep.isFullMoon ? 'bg-gold' : 'bg-forest'
                }`}
              />

              <div>
                {/* Batch Header & Full Moon Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-luxury text-stone block">
                      Batch #{dep.batchNumber}
                    </span>
                    <h3 className="font-serif text-xl text-forest font-medium group-hover:text-gold-dark transition-colors">
                      {dep.name}
                    </h3>
                  </div>

                  {dep.isFullMoon && (
                    <span
                      className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-gold/15 text-gold-dark text-[10px] uppercase tracking-wider font-semibold"
                      title={dep.moonEvent}
                    >
                      <Moon className="w-3 h-3 text-gold" />
                      <span>Purnima</span>
                    </span>
                  )}
                </div>

                {/* Dates & Duration */}
                <div className="space-y-2.5 pb-4 border-b border-forest-subtle">
                  <div className="flex items-center space-x-2 text-xs text-forest/90">
                    <Calendar className="w-4 h-4 text-gold shrink-0" />
                    <span className="font-medium">{dep.displayDates}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-stone">
                    <Clock className="w-4 h-4 text-stone shrink-0" />
                    <span>Duration: {dep.totalDays} Days in Himalaya</span>
                  </div>
                </div>

                {/* Moon event note if applicable */}
                {dep.moonEvent && (
                  <div className="mt-3 p-2.5 bg-ivory/80 rounded border border-gold/20 text-[11px] text-forest/80">
                    <span className="font-medium text-gold-dark block">Auspicious Conjunction:</span>
                    <span>{dep.moonEvent}</span>
                  </div>
                )}

                <p className="mt-3 text-xs text-stone leading-relaxed font-light">
                  {dep.description}
                </p>
              </div>

              {/* Status and Action */}
              <div className="pt-5 mt-4 border-t border-forest-subtle flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone block">
                    Availability
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      isFilling ? 'text-amber-800' : 'text-forest'
                    }`}
                  >
                    {isFilling ? 'Fast Filling' : 'Available'}
                  </span>
                </div>

                <button
                  onClick={() => handleBookingJump(dep)}
                  className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider font-semibold text-forest group-hover:text-gold transition-colors"
                >
                  <span>Select</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center text-xs text-stone font-light">
        * Air-route departures (Options 2 & 3) may vary by approximately one day subject to Tibet flight schedules and sector permit clearances.
      </div>
    </div>
  );
}


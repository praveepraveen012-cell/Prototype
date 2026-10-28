import React, { useState } from 'react';
import { MapPin, Mountain, Sun, Compass, Sparkles, ChevronDown } from 'lucide-react';
import { ITINERARY_DATA, PACKAGES } from '../data/yatraData';

export default function ItineraryTimeline({ initialRoute = 1, title, subtitle }) {
  const [selectedRoute, setSelectedRoute] = useState(initialRoute);
  const days = ITINERARY_DATA[selectedRoute] || ITINERARY_DATA[1];
  const currentPackage = PACKAGES.find((p) => p.routeNumber === selectedRoute);

  return (
    <div className="w-full">
      {/* Header */}
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

      {/* Route Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {PACKAGES.map((pkg) => (
          <button
            key={pkg.id}
            onClick={() => setSelectedRoute(pkg.routeNumber)}
            className={`px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all border ${
              selectedRoute === pkg.routeNumber
                ? 'bg-forest text-ivory border-forest shadow-luxury-sm'
                : 'bg-white text-stone border-gold-subtle hover:border-gold hover:text-forest'
            }`}
          >
            <span>{pkg.name.split('—')[0].trim()}</span>
            <span className="ml-2 opacity-70">({pkg.durationText})</span>
          </button>
        ))}
      </div>

      {/* Route Overview Callout */}
      {currentPackage && (
        <div className="max-w-4xl mx-auto mb-10 p-5 rounded-lg bg-white border border-gold-subtle shadow-luxury-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">
              Selected Route Profile
            </span>
            <h3 className="font-serif text-xl text-forest font-medium">
              {currentPackage.name}
            </h3>
            <p className="text-xs text-stone mt-1">
              {currentPackage.editorialDescription.slice(0, 160)}...
            </p>
          </div>
          <div className="shrink-0 flex items-center space-x-3 text-xs text-forest">
            <span className="px-3 py-1 rounded bg-ivory font-medium border border-gold/30">
              {currentPackage.durationText}
            </span>
            <span className="px-3 py-1 rounded bg-ivory font-medium border border-gold/30">
              Peak: 5,650 m
            </span>
          </div>
        </div>
      )}

      {/* Vertical Timeline */}
      <div className="max-w-4xl mx-auto relative pl-6 sm:pl-10 border-l-2 border-gold/40 space-y-8 my-8">
        {days.map((item, index) => {
          const isHighPass = item.altitude === '5,650 m';
          const isLake = item.title.includes('Manasarovar');
          const isKailashFace = item.title.includes('Diraphuk') || item.title.includes('Parikrama');

          return (
            <div key={item.day} className="relative group">
              {/* Timeline Marker Node */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-serif font-bold transition-all duration-300 ${
                  isHighPass
                    ? 'bg-gold text-evergreen ring-4 ring-gold/20 scale-110'
                    : isLake || isKailashFace
                    ? 'bg-forest text-ivory ring-2 ring-gold'
                    : 'bg-ivory border-2 border-forest text-forest group-hover:border-gold'
                }`}
              >
                {item.day}
              </div>

              {/* Timeline Card */}
              <div
                className={`rounded-xl p-5 sm:p-6 transition-all duration-300 ${
                  isHighPass
                    ? 'bg-forest text-ivory shadow-luxury border border-gold'
                    : 'bg-white text-forest shadow-luxury-sm border border-gold-subtle hover:border-gold'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-[10px] uppercase tracking-luxury font-semibold ${
                        isHighPass ? 'text-gold' : 'text-gold-dark'
                      }`}
                    >
                      DAY {item.day} · STAGE
                    </span>
                    {isHighPass && (
                      <span className="px-2 py-0.5 rounded bg-gold/20 text-gold text-[10px] uppercase font-semibold">
                        Pinnacle Pass
                      </span>
                    )}
                    {isLake && (
                      <span className="px-2 py-0.5 rounded bg-forest/10 text-forest text-[10px] uppercase font-semibold">
                        Sacred Waters
                      </span>
                    )}
                  </div>

                  {/* Altitude Marker */}
                  <div
                    className={`inline-flex items-center space-x-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                      isHighPass
                        ? 'bg-evergreen text-gold-light border border-gold/30'
                        : 'bg-ivory text-stone border border-forest-subtle'
                    }`}
                  >
                    <Mountain className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>{item.altitude}</span>
                  </div>
                </div>

                <h4
                  className={`font-serif text-xl sm:text-2xl font-medium mb-2 ${
                    isHighPass ? 'text-ivory' : 'text-forest'
                  }`}
                >
                  {item.title}
                </h4>

                <p
                  className={`text-xs sm:text-sm leading-relaxed font-light ${
                    isHighPass ? 'text-sage-light/90' : 'text-stone'
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


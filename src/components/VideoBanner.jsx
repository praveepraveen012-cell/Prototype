import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Calendar, Mountain, Sparkles, ShieldCheck } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';

export default function VideoBanner() {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay handled by browser policies
      });
    }
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-evergreen">
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          src={assetUrl('/videos/kailash-cinematic.mp4')}
          poster={assetUrl('/images/hero-poster.jpg')}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover object-center transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-85' : 'opacity-70'
          }`}
        />

        {/* Editorial Luxury Vignette Overlay (Deep Forest & Evergreen) */}
        <div className="absolute inset-0 bg-gradient-to-t from-evergreen via-evergreen/40 to-evergreen/70 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette opacity-50 pointer-events-none" />
      </div>

      {/* Hero Editorial Composition */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-16">
        
        {/* Eyebrow Label with decorative gold lines */}
        <div className="inline-flex items-center space-x-3 mb-6 animate-fade-in">
          <span className="w-8 sm:w-12 h-px bg-gold" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-gold-light font-medium bg-evergreen/60 backdrop-blur-sm px-4 py-1.5 border border-gold/30 rounded-full">
            THE SACRED JOURNEY · 2027
          </span>
          <span className="w-8 sm:w-12 h-px bg-gold" />
        </div>

        {/* Principal Heading in Cormorant Garamond / Editorial Serif */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory font-light tracking-tight leading-[1.08] mb-6">
          A Journey Beyond <br className="hidden sm:inline" />
          <span className="italic font-normal text-gold-shimmer">the Ordinary</span>
        </h1>

        {/* Refined Pilgrimage Subtitle */}
        <p className="max-w-2xl mx-auto text-sage-light text-base sm:text-lg md:text-xl font-light leading-relaxed mb-10 text-shadow-sm">
          Circumambulate the sacred diamond-face of Mount Kailash and offer prayers upon the tranquil waters of Lake Manasarovar. An immersive, high-altitude pilgrimage curated with unhurried spiritual reverence and bespoke Himalayan hospitality.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
          <button
            onClick={() => scrollToSection('journey-significance')}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-evergreen font-bold text-xs uppercase tracking-[0.18em] px-8 py-4 rounded shadow-gold-glow hover:shadow-luxury transition-all transform hover:-translate-y-0.5"
          >
            <Compass className="w-4 h-4 text-evergreen" />
            <span>Explore the Journey</span>
          </button>

          <Link
            to="/departures"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-forest/80 hover:bg-forest text-ivory hover:text-gold border border-gold/40 hover:border-gold text-xs uppercase tracking-[0.18em] px-8 py-4 rounded backdrop-blur-sm transition-all transform hover:-translate-y-0.5 font-medium"
          >
            <Calendar className="w-4 h-4 text-gold" />
            <span>View 2027 Departures</span>
          </Link>
        </div>

        {/* Redesigned 4 Editorial Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl sm:max-w-5xl mx-auto pt-6 border-t border-gold/25 text-left">
          
          {/* Card 1: Elevation */}
          <div className="bg-gradient-to-b from-evergreen/80 to-forest/85 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-gold/30 hover:border-gold/70 transition-all duration-300 shadow-luxury group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent group-hover:via-gold transition-all" />
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-gold font-semibold">
                Elevation
              </span>
              <Mountain className="w-3.5 h-3.5 text-gold/70" />
            </div>
            <span className="font-serif text-2xl sm:text-3xl text-ivory font-medium group-hover:text-gold-shimmer transition-colors block">
              5,650 m
            </span>
            <span className="text-xs text-sage-light/80 font-light block mt-0.5 truncate">
              Dolma La Pass
            </span>
          </div>

          {/* Card 2: Parikrama (Fixed width & clean label) */}
          <div className="bg-gradient-to-b from-evergreen/80 to-forest/85 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-gold/30 hover:border-gold/70 transition-all duration-300 shadow-luxury group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent group-hover:via-gold transition-all" />
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-gold font-semibold">
                Parikrama
              </span>
              <Compass className="w-3.5 h-3.5 text-gold/70" />
            </div>
            <span className="font-serif text-2xl sm:text-3xl text-ivory font-medium group-hover:text-gold-shimmer transition-colors block">
              52 km
            </span>
            <span className="text-xs text-sage-light/80 font-light block mt-0.5 truncate">
              Sacred 3-Day Circuit
            </span>
          </div>

          {/* Card 3: Sacred Lake */}
          <div className="bg-gradient-to-b from-evergreen/80 to-forest/85 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-gold/30 hover:border-gold/70 transition-all duration-300 shadow-luxury group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent group-hover:via-gold transition-all" />
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-gold font-semibold">
                Sacred Lake
              </span>
              <Sparkles className="w-3.5 h-3.5 text-gold/70" />
            </div>
            <span className="font-serif text-2xl sm:text-3xl text-ivory font-medium group-hover:text-gold-shimmer transition-colors block">
              4,590 m
            </span>
            <span className="text-xs text-sage-light/80 font-light block mt-0.5 truncate">
              Manasarovar Puja
            </span>
          </div>

          {/* Card 4: Care Ratio */}
          <div className="bg-gradient-to-b from-evergreen/80 to-forest/85 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-gold/30 hover:border-gold/70 transition-all duration-300 shadow-luxury group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent group-hover:via-gold transition-all" />
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-gold font-semibold">
                Care Ratio
              </span>
              <ShieldCheck className="w-3.5 h-3.5 text-gold/70" />
            </div>
            <span className="font-serif text-2xl sm:text-3xl text-ivory font-medium group-hover:text-gold-shimmer transition-colors block">
              1 : 4
            </span>
            <span className="text-xs text-sage-light/80 font-light block mt-0.5 truncate">
              Sherpas & Medics
            </span>
          </div>

        </div>
      </div>

      {/* Vertical 'SCROLL TO DISCOVER' Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none hidden md:flex">
        <span className="text-[9px] uppercase tracking-[0.3em] text-gold-light/80 mb-2 font-medium">
          SCROLL TO DISCOVER
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-gold via-gold/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

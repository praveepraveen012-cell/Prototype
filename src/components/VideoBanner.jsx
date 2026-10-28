import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Volume2, VolumeX, Play, Pause, ChevronDown, Compass, Calendar, Sparkles } from 'lucide-react';

export default function VideoBanner() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted by browser until interaction
        setIsPlaying(false);
      });
    }
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

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
          src="/videos/kailash-cinematic.mp4"
          poster="/images/hero-poster.jpg"
          autoPlay
          muted={isMuted}
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

      {/* Floating Video Controls in Bottom Right */}
      <div className="absolute bottom-10 right-6 sm:right-10 z-20 flex items-center space-x-2 bg-evergreen/70 backdrop-blur-md border border-gold/30 rounded-full px-3 py-1.5 shadow-luxury">
        <button
          onClick={togglePlay}
          className="text-gold hover:text-ivory p-1.5 transition-colors focus:outline-none"
          title={isPlaying ? 'Pause video' : 'Play video'}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
        <span className="w-px h-3 bg-gold/30" />
        <button
          onClick={toggleSound}
          className="text-gold hover:text-ivory p-1.5 transition-colors focus:outline-none"
          title={isMuted ? 'Unmute video' : 'Mute video'}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Hero Editorial Composition */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        
        {/* Eyebrow Label with decorative gold lines */}
        <div className="inline-flex items-center space-x-3 mb-6 animate-fade-in">
          <span className="w-8 sm:w-12 h-px bg-gold" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-gold-light font-medium bg-evergreen/60 backdrop-blur-sm px-3.5 py-1 border border-gold/30 rounded-full">
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
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-evergreen font-semibold text-xs uppercase tracking-[0.18em] px-8 py-4 rounded shadow-gold-glow hover:shadow-luxury transition-all transform hover:-translate-y-0.5"
          >
            <Compass className="w-4 h-4 text-evergreen" />
            <span>Explore the Journey</span>
          </button>

          <Link
            to="/departures"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-forest/80 hover:bg-forest text-ivory hover:text-gold border border-gold/40 hover:border-gold text-xs uppercase tracking-[0.18em] px-8 py-4 rounded backdrop-blur-sm transition-all transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4 text-gold" />
            <span>View 2027 Departures</span>
          </Link>
        </div>

        {/* Editorial Feature Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto pt-6 border-t border-gold/25 text-left">
          <div className="bg-evergreen/60 backdrop-blur-sm p-3 rounded border border-gold/20">
            <span className="block text-[10px] uppercase tracking-luxury text-gold">Elevation</span>
            <span className="font-serif text-lg sm:text-xl text-ivory font-medium">5,650 m</span>
            <span className="block text-[10px] text-sage/70">Dolma La Pass</span>
          </div>

          <div className="bg-evergreen/60 backdrop-blur-sm p-3 rounded border border-gold/20">
            <span className="block text-[10px] uppercase tracking-luxury text-gold">Circumambulation</span>
            <span className="font-serif text-lg sm:text-xl text-ivory font-medium">52 km</span>
            <span className="block text-[10px] text-sage/70">Sacred 3-Day Parikrama</span>
          </div>

          <div className="bg-evergreen/60 backdrop-blur-sm p-3 rounded border border-gold/20">
            <span className="block text-[10px] uppercase tracking-luxury text-gold">Sacred Lake</span>
            <span className="font-serif text-lg sm:text-xl text-ivory font-medium">4,590 m</span>
            <span className="block text-[10px] text-sage/70">Manasarovar Puja</span>
          </div>

          <div className="bg-evergreen/60 backdrop-blur-sm p-3 rounded border border-gold/20">
            <span className="block text-[10px] uppercase tracking-luxury text-gold">Care Ratio</span>
            <span className="font-serif text-lg sm:text-xl text-ivory font-medium">1 : 4</span>
            <span className="block text-[10px] text-sage/70">Sherpas & Medics</span>
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


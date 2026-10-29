import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Compass, Calendar, Sparkles, ChevronRight, MessageSquare } from 'lucide-react';
import { BRAND } from '../data/yatraData';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/' || location.pathname === '/kailash-mansarovar-yatra-2027';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Departures', path: '/departures' },
    { name: 'The Journey', path: '/the-journey' },
    { name: 'Packages', path: '/packages' },
    { name: 'Itinerary', path: '/itinerary' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-evergreen/95 backdrop-blur-md shadow-luxury py-3 border-b border-gold/20'
            : isHome
            ? 'bg-gradient-to-b from-evergreen/80 via-evergreen/40 to-transparent py-5'
            : 'bg-evergreen py-4 border-b border-gold/20'
        }`}
      >
        <div className="w-full px-4 sm:px-8 lg:px-10 xl:px-14 2xl:px-16">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Wordmark */}
            <Link to="/" className="flex items-center space-x-3.5 group text-left shrink-0">
              <div className="w-11 h-11 rounded-full border border-gold/60 flex items-center justify-center bg-forest/80 group-hover:border-gold transition-colors shadow-inner">
                <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M12 2L2 22h20L12 2z" strokeLinejoin="round" />
                  <path d="M12 8v10" />
                  <circle cx="12" cy="18" r="1" fill="#B99A5B" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display tracking-[0.22em] text-base md:text-lg font-semibold text-ivory group-hover:text-gold transition-colors">
                  SHLLOKA YATRA
                </span>
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.26em] text-gold-light font-medium">
                  Kailash 2027 · Editorial
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-9 2xl:space-x-11">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-xs xl:text-[13px] uppercase tracking-[0.2em] font-medium transition-colors relative py-1.5 ${
                      isActive
                        ? 'text-gold font-semibold'
                        : 'text-ivory/85 hover:text-ivory'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Controls */}
            <div className="hidden sm:flex items-center space-x-4 shrink-0">
              <button
                onClick={onOpenEnquiry}
                className="hidden md:inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-ivory hover:text-gold hover:border-gold hover:bg-forest/60 transition-all py-2.5 px-4 rounded border border-gold/30"
                title="Bespoke Enquiry Concierge"
              >
                <MessageSquare className="w-3.5 h-3.5 text-gold" />
                <span className="font-medium">Enquire</span>
              </button>

              <Link
                to="/book"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-evergreen font-bold text-xs uppercase tracking-[0.18em] px-6 py-2.5 xl:py-3 rounded shadow-gold-glow hover:shadow-luxury transition-all transform hover:-translate-y-0.5"
              >
                <span>Reserve Your Place</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center sm:hidden space-x-2">
              <Link
                to="/book"
                className="text-[11px] uppercase tracking-wider bg-gold text-evergreen font-semibold px-3 py-1.5 rounded"
              >
                Reserve
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="p-2 text-ivory hover:text-gold focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer Navigation */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-evergreen border-l border-gold/30 p-6 flex flex-col justify-between shadow-2xl transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-gold/20">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center bg-forest">
                  <Sparkles className="w-4 h-4 text-gold" />
                </div>
                <span className="font-display tracking-[0.18em] text-sm font-semibold text-ivory">
                  SHLLOKA YATRA
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-stone-light hover:text-ivory"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-1">
              <div className="text-[10px] tracking-[0.25em] uppercase text-gold/70 px-3 pb-2">
                Navigation
              </div>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center justify-between px-3 py-3 rounded text-sm uppercase tracking-[0.16em] transition-colors ${
                      isActive
                        ? 'bg-forest text-gold font-medium border-l-2 border-gold'
                        : 'text-ivory/80 hover:bg-forest/50 hover:text-ivory'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-gold/50" />
                  </Link>
                );
              })}

              <Link
                to="/kailash-mansarovar-yatra-2027"
                className="flex items-center justify-between px-3 py-3 mt-2 rounded bg-forest/40 border border-gold/20 text-gold text-xs uppercase tracking-[0.16em]"
              >
                <span>2027 Campaign Page</span>
                <Sparkles className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-gold/20 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenEnquiry) onOpenEnquiry();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 border border-gold/40 text-gold rounded text-xs uppercase tracking-wider hover:bg-forest/50 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Bespoke Concierge Enquiry</span>
            </button>

            <Link
              to="/book"
              className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-gold to-gold-light text-evergreen font-semibold rounded text-xs uppercase tracking-[0.16em] shadow-luxury"
            >
              <span>Reserve Your Place</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            <div className="text-center pt-2">
              <a
                href={`tel:${BRAND.phone.replace(/[^0-9+]/g, '')}`}
                className="text-[11px] text-stone-light flex items-center justify-center space-x-1.5 hover:text-ivory"
              >
                <Phone className="w-3 h-3 text-gold" />
                <span>{BRAND.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


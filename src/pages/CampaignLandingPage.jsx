import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Calendar, Sparkles, Check, ArrowRight, Phone, Mail, Award, Clock, MapPin, Users, HeartHandshake, Send, CheckCircle2 } from 'lucide-react';
import { DEPARTURES, PACKAGES, INCLUSIONS_EXCLUSIONS, FAQS, BRAND } from '../data/yatraData';
import { assetUrl } from '../utils/assetUrl';

export default function CampaignLandingPage() {
  const [selectedBatch, setSelectedBatch] = useState('1');
  const [selectedRoute, setSelectedRoute] = useState('1');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    passport: 'Indian',
    travellers: '2',
    notes: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full bg-ivory text-forest">
      
      {/* 1. DEDICATED CAMPAIGN HERO */}
      <section className="relative min-h-[85vh] flex items-center bg-evergreen text-ivory overflow-hidden pt-24 pb-16">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <img
            src={assetUrl('/images/kedarnath-sacred-peak.jpg')}
            alt="Kailash Mansarovar Parikrama 2027"
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-evergreen via-evergreen/85 to-evergreen/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gold/15 border border-gold/40 px-3.5 py-1.5 rounded-full text-gold-light text-xs uppercase tracking-wider font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>OFFICIAL 2027 PILGRIMAGE EXPEDITION</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory font-light leading-tight">
                Kailash Mansarovar <br />
                <span className="italic text-gold-shimmer font-normal">Parikrama Yatra 2027</span>
              </h1>

              <p className="text-sage-light text-base sm:text-lg font-light leading-relaxed max-w-xl">
                The most revered pilgrimage of a lifetime. Experience the sacred circumambulation of Mount Kailash and twilight Hawan at Lake Manasarovar with vetted medical safety, high-comfort coaches, and authentic Nepali Sherpa leadership.
              </p>

              {/* Conversion Trust Points */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center space-x-2 text-xs text-ivory">
                  <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                  <span>Govt. Regulated Permits</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-ivory">
                  <Award className="w-4 h-4 text-gold shrink-0" />
                  <span>100% Pure Veg & Jain</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-ivory">
                  <Users className="w-4 h-4 text-gold shrink-0" />
                  <span>Max 25 Yatris / Batch</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#campaign-booking"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-gold to-gold-light text-evergreen font-semibold text-xs uppercase tracking-[0.16em] px-8 py-4 rounded shadow-gold-glow hover:shadow-luxury transition-all text-center"
                >
                  <span>Reserve Seat (₹25,000 Deposit)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${BRAND.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center justify-center space-x-2 bg-forest/80 text-ivory border border-gold/30 hover:border-gold text-xs uppercase tracking-wider px-6 py-4 rounded transition-colors text-center"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>Speak with Concierge</span>
                </a>
              </div>
            </div>

            {/* Right Fast-Action Card / Campaign Lead Box */}
            <div id="campaign-booking" className="lg:col-span-5">
              <div className="bg-ivory text-forest rounded-2xl p-6 sm:p-8 shadow-2xl border-2 border-gold relative">
                <div className="text-center pb-4 border-b border-gold-subtle mb-5">
                  <span className="text-[10px] uppercase tracking-widest text-gold-dark font-bold block mb-1">
                    PRIORITY 2027 ENROLMENT
                  </span>
                  <h3 className="font-serif text-2xl text-forest font-medium">
                    Reserve or Enquire Now
                  </h3>
                  <p className="text-[11px] text-stone font-light">
                    Guaranteed batch allotment with brochure deposit terms.
                  </p>
                </div>

                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-medium text-forest mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 rounded bg-white border border-gold-subtle text-xs text-forest focus:outline-none focus:border-gold"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-medium text-forest mb-1">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 Mobile #"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3 py-2 rounded bg-white border border-gold-subtle text-xs text-forest focus:outline-none focus:border-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-medium text-forest mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="Email address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3 py-2 rounded bg-white border border-gold-subtle text-xs text-forest focus:outline-none focus:border-gold"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-medium text-forest mb-1">
                          Select Batch
                        </label>
                        <select
                          value={selectedBatch}
                          onChange={(e) => setSelectedBatch(e.target.value)}
                          className="w-full px-2.5 py-2 rounded bg-white border border-gold-subtle text-xs text-forest focus:outline-none focus:border-gold"
                        >
                          {DEPARTURES.map((b) => (
                            <option key={b.batchNumber} value={b.batchNumber}>
                              {b.name} ({b.totalDays}D) {b.isFullMoon ? '★' : ''}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-medium text-forest mb-1">
                          Select Route
                        </label>
                        <select
                          value={selectedRoute}
                          onChange={(e) => setSelectedRoute(e.target.value)}
                          className="w-full px-2.5 py-2 rounded bg-white border border-gold-subtle text-xs text-forest focus:outline-none focus:border-gold"
                        >
                          <option value="1">Option 1: Overland</option>
                          <option value="2">Option 2: Flight Lhasa</option>
                          <option value="3">Option 3: Flight Ali/Pulan</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-forest hover:bg-forest-light text-ivory rounded font-semibold text-xs uppercase tracking-[0.16em] shadow-luxury transition-all mt-2 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-3.5 h-3.5 text-gold" />
                      <span>Request Immediate Call & Quotation</span>
                    </button>

                    <div className="text-center pt-1">
                      <Link
                        to={`/book?batch=${selectedBatch}&package=${selectedRoute}`}
                        className="text-[11px] text-gold-dark hover:text-forest underline underline-offset-2"
                      >
                        Or proceed directly to step-by-step booking →
                      </Link>
                    </div>
                  </form>
                ) : (
                  <div className="py-8 text-center space-y-3 animate-fade-in">
                    <CheckCircle2 className="w-12 h-12 text-forest mx-auto" />
                    <h4 className="font-serif text-xl text-forest font-medium">Request Logged</h4>
                    <p className="text-xs text-stone">
                      Thank you, <strong className="text-forest">{formData.name}</strong>. A dedicated yatra officer is reviewing your batch inquiry and will contact you directly.
                    </p>
                    <Link
                      to={`/book?batch=${selectedBatch}&package=${selectedRoute}`}
                      className="inline-block mt-3 px-5 py-2 bg-forest text-gold rounded text-xs uppercase tracking-wider font-semibold"
                    >
                      Continue To Booking Form
                    </Link>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MAIN JOURNEY PROPOSITION */}
      <section className="py-20 bg-ivory text-forest border-b border-gold-subtle">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
            WHY PILGRIMS ENTRUST SHLLOKA YATRA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-forest font-light mb-6">
            Purity of Spirit, Mastery of Mountain Logistics
          </h2>
          <p className="text-stone text-sm sm:text-base leading-relaxed font-light max-w-3xl mx-auto">
            A pilgrimage to Mount Kailash is not an ordinary vacation; it is a sacred vow. We ensure that our yatris are unburdened by administrative hurdles, logistics friction, or nutritional anxiety, enabling them to direct their full consciousness toward the holy darshan of Mahadev.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
            <div className="p-6 bg-white rounded-xl border border-gold-subtle shadow-luxury-sm">
              <span className="w-10 h-10 rounded-full bg-forest text-gold flex items-center justify-center font-serif text-lg font-bold mb-4">
                1
              </span>
              <h3 className="font-serif text-xl text-forest font-medium mb-2">
                Certified High-Altitude Protocol
              </h3>
              <p className="text-xs text-stone leading-relaxed font-light">
                Oxygen concentrators, Gamow hyperbaric pressure bags, daily SpO2 vitals checks, and experienced Nepali Sherpas accompanying every group.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gold-subtle shadow-luxury-sm">
              <span className="w-10 h-10 rounded-full bg-forest text-gold flex items-center justify-center font-serif text-lg font-bold mb-4">
                2
              </span>
              <h3 className="font-serif text-xl text-forest font-medium mb-2">
                Pure Vegetarian & Jain Kitchen
              </h3>
              <p className="text-xs text-stone leading-relaxed font-light">
                Nutritious, freshly prepared vegetarian food with dedicated Jain dietary provisions cooked by our own accompanying staff.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gold-subtle shadow-luxury-sm">
              <span className="w-10 h-10 rounded-full bg-forest text-gold flex items-center justify-center font-serif text-lg font-bold mb-4">
                3
              </span>
              <h3 className="font-serif text-xl text-forest font-medium mb-2">
                End-to-End TAR Permits
              </h3>
              <p className="text-xs text-stone leading-relaxed font-light">
                Complete processing of the Tibet Travel Permit, Foreign Affairs clearances, and China group visas without third-party confusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY JOURNEY DETAILS STRIP */}
      <section className="bg-forest text-ivory py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 border-r border-gold/20 last:border-r-0">
              <span className="font-serif text-3xl sm:text-4xl text-gold-light block font-light">15–16</span>
              <span className="text-xs uppercase tracking-wider text-ivory font-semibold block mt-1">Expedition Days</span>
              <span className="text-[11px] text-sage/70 font-light">Nepal & Western Tibet</span>
            </div>
            <div className="p-4 border-r border-gold/20 last:border-r-0">
              <span className="font-serif text-3xl sm:text-4xl text-gold-light block font-light">5,650 m</span>
              <span className="text-xs uppercase tracking-wider text-ivory font-semibold block mt-1">Dolma La Pass</span>
              <span className="text-[11px] text-sage/70 font-light">Highest Trekking Point</span>
            </div>
            <div className="p-4 border-r border-gold/20 last:border-r-0">
              <span className="font-serif text-3xl sm:text-4xl text-gold-light block font-light">4 Auspicious</span>
              <span className="text-xs uppercase tracking-wider text-ivory font-semibold block mt-1">Full Moon Batches</span>
              <span className="text-[11px] text-sage/70 font-light">Vaishakh, Saga Dawa, Guru Purnima</span>
            </div>
            <div className="p-4">
              <span className="font-serif text-3xl sm:text-4xl text-gold-light block font-light">₹25,000</span>
              <span className="text-xs uppercase tracking-wider text-ivory font-semibold block mt-1">Initial Deposit</span>
              <span className="text-[11px] text-sage/70 font-light">Locks In 2027 Price</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PACKAGE COMPARISON */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
              THREE CAREFULLY STRUCTURED OPTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest font-light">
              Select Your Travel Approach
            </h2>
            <div className="w-16 h-px bg-gold/50 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-xl border border-gold-subtle p-6 flex flex-col justify-between shadow-luxury-sm hover:border-gold transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone mb-2">
                    <span className="text-gold font-semibold uppercase tracking-wider">{pkg.titleTag}</span>
                    <span>{pkg.durationText}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-forest font-medium mb-3">
                    {pkg.name}
                  </h3>
                  <div className="p-3 rounded bg-ivory mb-4 border border-gold-subtle">
                    <span className="text-[10px] uppercase text-stone block">Starting From</span>
                    <span className="font-serif text-2xl text-forest font-semibold">
                      ₹{pkg.pricingTiers.indian.basePrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[11px] text-stone block">+ 5% GST (Indian Nationals)</span>
                  </div>
                  <ul className="space-y-2 text-xs text-stone mb-6">
                    {pkg.highlights.slice(0, 4).map((h, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/book?package=${pkg.id}`}
                  className="w-full py-2.5 bg-forest hover:bg-forest-light text-ivory rounded text-xs uppercase tracking-wider font-semibold text-center transition-colors"
                >
                  Select {pkg.name.split('—')[0]}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DEPARTURE SELECTOR */}
      <section className="py-20 bg-white border-y border-gold-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
              2027 EXPEDITION CALENDAR
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest font-light">
              Choose Your Sacred Departure Date
            </h2>
            <div className="w-16 h-px bg-gold/50 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DEPARTURES.map((b) => (
              <div
                key={b.batchNumber}
                className="p-5 rounded-lg border border-gold-subtle bg-ivory flex flex-col justify-between hover:border-gold transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-forest">Batch {b.batchNumber}</span>
                    {b.isFullMoon && (
                      <span className="px-2 py-0.5 rounded-full bg-gold/20 text-gold-dark text-[10px] font-semibold">
                        Full Moon
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif text-lg text-forest font-medium">{b.name}</h4>
                  <div className="text-xs text-stone mt-2 space-y-1">
                    <div>{b.displayDates}</div>
                    <div>{b.totalDays} Days Duration</div>
                  </div>
                  {b.moonEvent && (
                    <div className="mt-2 text-[11px] text-gold-dark font-medium">
                      {b.moonEvent}
                    </div>
                  )}
                </div>

                <Link
                  to={`/book?batch=${b.batchNumber}`}
                  className="mt-4 inline-block text-center py-2 bg-forest text-ivory hover:text-gold rounded text-[11px] uppercase tracking-wider font-semibold"
                >
                  Book This Batch
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INCLUSIONS SUMMARY & POLICY */}
      <section className="py-20 bg-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gold-subtle p-8 shadow-luxury-sm">
            <h3 className="font-serif text-2xl text-forest font-medium mb-4 text-center">
              Official Brochure Inclusions Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone">
              <div className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                <span>5-Star Kathmandu hotel lodging + boutique Tibetan hotels</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                <span>Tibet Travel Permit, military pass, & China group tourist visa</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                <span>All pure vegetarian meals (including Jain) prepared by Nepali cooks</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                <span>Medical oxygen cylinders, gamow chamber & oximeters on board</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                <span>Rudra Homam at Pashupatinath & Hawan on Lake Manasarovar shore</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                <span>Returnable heavy down jacket & yatra duffle bag provided</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gold-subtle text-center text-xs text-stone">
              Approved Cancellation Terms: ₹25,000 non-refundable deposit. 75+ days prior: 25% charge (75% refund). 60–74 days prior: 50% charge (50% refund). Within 30 days: Non-refundable.
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CAMPAIGN CALL TO ACTION */}
      <section className="py-20 bg-evergreen text-ivory text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
            A SACRED BLESSING AWAITS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-light mb-6">
            Begin Your 2027 Pilgrimage
          </h2>
          <p className="text-sage-light text-sm sm:text-base font-light mb-8 leading-relaxed">
            Take the definitive step toward the sacred mandala of Mount Kailash. Early registration guarantees permit queue prioritization and choice of full moon departures.
          </p>

          <Link
            to="/book"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold to-gold-light text-evergreen font-semibold text-xs uppercase tracking-[0.16em] px-8 py-4 rounded shadow-gold-glow hover:shadow-luxury transition-all"
          >
            <span>Proceed to Seat Reservation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}


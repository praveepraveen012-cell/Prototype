import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND, DEPARTURES } from '../data/yatraData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    batchInterest: 'May Batch (09 May – 23 May)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-ivory text-forest pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
            DIRECT EXPEDITION CONCIERGE
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-light leading-tight">
            Connect with Shlloka Yatra
          </h1>
          <p className="text-stone text-sm sm:text-base font-light mt-4 leading-relaxed">
            Our Himalayan expedition officers in Kathmandu and New Delhi are available for personalized batch guidance, corporate registrations, and medical clarifications.
          </p>
          <div className="w-16 h-px bg-gold/50 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Contact Details & Offices */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-gold-subtle p-8 shadow-luxury-sm space-y-6">
              <h3 className="font-serif text-2xl text-forest font-medium pb-3 border-b border-forest-subtle">
                Expedition Command Hubs
              </h3>

              <div className="space-y-5 text-xs text-stone">
                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-forest block font-semibold text-sm">Kathmandu Operational Base</strong>
                    <span className="leading-relaxed block">
                      Thamel Heritage Enclave, Kathmandu Valley, Nepal
                    </span>
                    <span className="text-[11px] text-stone/80">Liaison for Tibet permits, group visas & mountain flights</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-forest block font-semibold text-sm">New Delhi Liaison Bureau</strong>
                    <span className="leading-relaxed block">
                      Connaught Place Executive Suites, New Delhi 110001, India
                    </span>
                    <span className="text-[11px] text-stone/80">Pilgrim document collection & physical briefing center</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5">
                  <Phone className="w-5 h-5 text-gold shrink-0" />
                  <div>
                    <strong className="text-forest block font-semibold text-sm">VIP Hotline / WhatsApp</strong>
                    <a href={`tel:${BRAND.phone.replace(/[^0-9+]/g, '')}`} className="text-forest hover:text-gold font-medium">
                      {BRAND.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5">
                  <Mail className="w-5 h-5 text-gold shrink-0" />
                  <div>
                    <strong className="text-forest block font-semibold text-sm">Direct Pilgrimage Email</strong>
                    <a href={`mailto:${BRAND.email}`} className="text-forest hover:text-gold font-medium">
                      {BRAND.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5">
                  <Clock className="w-5 h-5 text-gold shrink-0" />
                  <div>
                    <strong className="text-forest block font-semibold text-sm">Operational Hours</strong>
                    <span>Monday through Saturday: 09:00 AM – 08:00 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-forest text-ivory border border-gold">
              <span className="text-[10px] uppercase tracking-wider text-gold font-semibold block mb-1">
                EXECUTIVE ASSISTANCE
              </span>
              <h4 className="font-serif text-lg text-ivory font-medium mb-2">
                NRI & Corporate Delegations
              </h4>
              <p className="text-xs text-sage-light font-light leading-relaxed">
                For groups larger than 10 yatris or bespoke chartered flights to Lhasa / Ali, reach our Senior Director at <strong className="text-ivory">{BRAND.corporateEmail}</strong>.
              </p>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-gold-subtle p-8 sm:p-10 shadow-luxury-sm">
              <div className="mb-6 pb-4 border-b border-forest-subtle">
                <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block mb-1">
                  SECURE COMMUNICATION
                </span>
                <h3 className="font-serif text-2xl text-forest font-medium">
                  Dispatch an Inquiry to Ground Command
                </h3>
                <p className="text-xs text-stone font-light mt-1">
                  We reply within 24 business hours with certified brochure details and flight parameters.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-forest font-medium mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Meera Raman"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 rounded bg-ivory/50 border border-gold-subtle text-xs text-forest focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-forest font-medium mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 Mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 rounded bg-ivory/50 border border-gold-subtle text-xs text-forest focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-forest font-medium mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="meera@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 rounded bg-ivory/50 border border-gold-subtle text-xs text-forest focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-forest font-medium mb-1">
                        Preferred 2027 Batch
                      </label>
                      <select
                        value={formData.batchInterest}
                        onChange={(e) => setFormData({ ...formData, batchInterest: e.target.value })}
                        className="w-full px-3 py-2 rounded bg-ivory/50 border border-gold-subtle text-xs text-forest focus:outline-none focus:border-gold"
                      >
                        {DEPARTURES.map((d) => (
                          <option key={d.batchNumber} value={d.name}>
                            {d.name} ({d.displayDates})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-forest font-medium mb-1">
                      Your Message or Questions
                    </label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Please mention any specific questions about flight options, medical fitness clearance, or dietary preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 rounded bg-ivory/50 border border-gold-subtle text-xs text-forest focus:outline-none focus:border-gold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-forest hover:bg-forest-light text-ivory rounded font-semibold text-xs uppercase tracking-[0.16em] shadow-luxury transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4 text-gold" />
                    <span>Send Message to Operations</span>
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-14 h-14 bg-forest rounded-full flex items-center justify-center mx-auto text-gold">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl text-forest font-medium">Message Received</h4>
                  <p className="text-xs text-stone max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-forest">{formData.name}</strong>. Our senior expedition officer will connect with you via WhatsApp or phone call at <strong className="text-forest">{formData.phone}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 bg-ivory rounded text-xs uppercase tracking-wider font-semibold border border-gold-subtle text-forest hover:border-gold"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}


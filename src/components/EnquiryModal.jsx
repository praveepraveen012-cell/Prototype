import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, User, Compass, Calendar } from 'lucide-react';
import { DEPARTURES, PACKAGES, BRAND } from '../data/yatraData';

export default function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    citizenship: 'Indian',
    preferredBatch: 'May Batch (09 May – 23 May)',
    preferredPackage: 'Option 1 — Classic Overland',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-xl bg-ivory rounded-2xl border border-gold/40 shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold via-gold-shimmer to-gold" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close enquiry modal"
          className="absolute top-5 right-5 text-stone hover:text-forest p-1 rounded-full hover:bg-sage/30 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block mb-1">
                BESPOKE YATRA CONCIERGE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-forest font-medium">
                Enquire About the 2027 Journey
              </h3>
              <p className="text-xs text-stone mt-1 font-light">
                Connect directly with our Kathmandu expedition leadership for customized consultations, corporate batches, or NRI assistance.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-forest font-medium mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Iyer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-white rounded border border-gold-subtle text-xs text-forest placeholder:text-stone/50 focus:border-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-forest font-medium mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-white rounded border border-gold-subtle text-xs text-forest placeholder:text-stone/50 focus:border-gold focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-forest font-medium mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      placeholder="ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-white rounded border border-gold-subtle text-xs text-forest placeholder:text-stone/50 focus:border-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-forest font-medium mb-1">
                    Passport / Nationality
                  </label>
                  <select
                    value={formData.citizenship}
                    onChange={(e) => setFormData({ ...formData, citizenship: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded border border-gold-subtle text-xs text-forest focus:border-gold focus:outline-none"
                  >
                    <option value="Indian">Indian Passport Holder</option>
                    <option value="NRI/PIO">NRI / OCI Card Holder</option>
                    <option value="Foreign">Foreign Passport Holder (USA, UK, etc.)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-forest font-medium mb-1">
                    Preferred Batch
                  </label>
                  <select
                    value={formData.preferredBatch}
                    onChange={(e) => setFormData({ ...formData, preferredBatch: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded border border-gold-subtle text-xs text-forest focus:border-gold focus:outline-none"
                  >
                    {DEPARTURES.map((d) => (
                      <option key={d.batchNumber} value={d.name}>
                        {d.name} ({d.displayDates})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-forest font-medium mb-1">
                    Preferred Route
                  </label>
                  <select
                    value={formData.preferredPackage}
                    onChange={(e) => setFormData({ ...formData, preferredPackage: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded border border-gold-subtle text-xs text-forest focus:border-gold focus:outline-none"
                  >
                    {PACKAGES.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name.split('—')[0]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-forest font-medium mb-1">
                  Specific Questions or Group Size
                </label>
                <textarea
                  rows="3"
                  placeholder="Share details on number of travellers, age brackets, or special medical inquiries..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 bg-white rounded border border-gold-subtle text-xs text-forest placeholder:text-stone/50 focus:border-gold focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-forest hover:bg-forest-light text-ivory rounded font-semibold text-xs uppercase tracking-[0.18em] flex items-center justify-center space-x-2 shadow-luxury transition-all"
                >
                  <Send className="w-3.5 h-3.5 text-gold" />
                  <span>{submitting ? 'Transmitting Enquiry...' : 'Submit Dedicated Enquiry'}</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <div className="w-14 h-14 bg-forest rounded-full flex items-center justify-center mx-auto text-gold">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-forest font-medium">
              Enquiry Received with Reverence
            </h3>
            <p className="text-xs text-stone max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-forest">{formData.name}</strong>. Our senior Himalayan expedition concierge has logged your inquiry for <strong className="text-forest">{formData.preferredBatch}</strong> and will connect via WhatsApp/Phone within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-forest text-gold rounded text-xs uppercase tracking-wider font-semibold hover:bg-forest-light transition-colors"
              >
                Close & Return
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


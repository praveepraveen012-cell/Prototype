import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Award, Users, Compass, ArrowRight, Sparkles } from 'lucide-react';
import { BRAND } from '../data/yatraData';
import { assetUrl } from '../utils/assetUrl';

export default function AboutPage({ onOpenEnquiry }) {
  const pillars = [
    {
      title: 'Spiritual Authenticity',
      desc: 'We treat the Kailash Mansarovar Yatra not as commercial adventure tourism, but as a sacred ritual of self-realization. Priests, Vedic pandits, and spiritual scholars accompany our Yatris for Hawans and Rudra Homams.',
      icon: Sparkles,
    },
    {
      title: 'Himalayan Safety Protocol',
      desc: 'Every convoy carries certified medical oxygen cylinders, gamow pressure chambers, and pulse oximeters. Veteran Sherpa sirdars monitor SpO2 vitals twice daily to prevent high-altitude illness.',
      icon: ShieldCheck,
    },
    {
      title: 'Pure Vegetarian & Jain Heritage',
      desc: 'Our accompanying mobile kitchen fleet serves wholesome, freshly prepared vegetarian meals designed specifically for high-altitude digestion. Strict Jain options without onion, garlic, or root vegetables are honored.',
      icon: Award,
    },
    {
      title: '1:4 Sherpa-to-Pilgrim Care',
      desc: 'With one dedicated support staff member for every four yatris, our pilgrims enjoy personalized care, luggage handling, hydration management, and attentive assistance across the demanding Dolma La Pass.',
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-ivory text-forest pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
            OUR HERITAGE & MISSION
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-light leading-tight">
            The Spirit of Shlloka Yatra
          </h1>
          <p className="text-stone text-sm sm:text-base font-light mt-4 leading-relaxed">
            Bridging timeless Vedic devotion with uncompromising Himalayan safety, luxury expedition logistics, and mindful mountain hospitality.
          </p>
          <div className="w-16 h-px bg-gold/50 mx-auto mt-6" />
        </div>

        {/* Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 bg-white rounded-2xl border border-gold-subtle p-8 sm:p-12 shadow-luxury-sm">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-[10px] uppercase tracking-luxury text-gold font-semibold block">
              FOUNDED ON DEVOTION & MASTERY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest font-medium">
              Curating Sacred Journeys for Over a Decade
            </h2>
            <p className="text-xs sm:text-sm text-stone font-light leading-relaxed">
              Shlloka Yatra was established with a singular, unyielding vision: to conduct the sacred Kailash Mansarovar Parikrama with the dignity, reverence, and meticulous safety standards that so profound a pilgrimage deserves.
            </p>
            <p className="text-xs sm:text-sm text-stone font-light leading-relaxed">
              Operating out of our Kathmandu command base and New Delhi liaisons, our team manages the complex web of Tibet Autonomous Region permits, Chinese consular visas, mountain flight bookings, and high-plateau transport fleets with quiet, reliable precision.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold text-forest hover:text-gold transition-colors pb-1 border-b border-forest hover:border-gold"
              >
                <span>Speak with our Operations Directorate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden shadow-luxury border border-gold-subtle img-zoom-container">
              <img
                src={assetUrl('/images/badrinath-himalaya.jpg')}
                alt="Sacred Himalayan Shrines and Pilgrim Path"
                className="w-full h-[360px] object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Four Core Pillars */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold block mb-1">
              THE FOUR FOUNDATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest font-light">
              Our Commitments to Every Yatri
            </h2>
            <div className="w-12 h-px bg-gold/50 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-gold-subtle p-6 shadow-luxury-sm hover:border-gold transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-forest text-gold flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl text-forest font-medium mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-stone font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership Callout */}
        <div className="p-8 sm:p-12 rounded-2xl bg-forest text-ivory border border-gold shadow-luxury text-center">
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
            TRUSTED EXPEDITION COMMAND
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ivory font-light mb-4">
            Guiding You to the Throne of Shiva
          </h2>
          <p className="text-xs sm:text-sm text-sage-light max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Experience the 2027 Kailash Mansarovar Parikrama with the security of vetted leadership, genuine Vedic rituals, and luxury editorial hospitality.
          </p>

          <Link
            to="/book"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold to-gold-light text-evergreen font-semibold text-xs uppercase tracking-[0.16em] px-8 py-3.5 rounded shadow-gold-glow hover:shadow-luxury transition-all"
          >
            <span>Reserve Your 2027 Place</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}


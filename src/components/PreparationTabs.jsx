import React, { useState } from 'react';
import { ShieldCheck, HeartPulse, Sparkles, CheckCircle2, XCircle, FileText, Utensils, Backpack } from 'lucide-react';
import { INCLUSIONS_EXCLUSIONS } from '../data/yatraData';

export default function PreparationTabs() {
  const [activeTab, setActiveTab] = useState('inclusions');

  return (
    <section id="preparation-section" className="py-20 bg-ivory text-forest relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
            EXPEDITION PROTOCOL & COMFORT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest font-light">
            Preparation & Important Information
          </h2>
          <div className="w-16 h-px bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'inclusions', label: 'Inclusions & Exclusions', icon: ShieldCheck },
            { id: 'fitness', label: 'Physical Conditioning', icon: HeartPulse },
            { id: 'gear', label: 'Mandatory Gear Checklist', icon: Backpack },
            { id: 'permits', label: 'Permits & Documentation', icon: FileText },
            { id: 'dining', label: 'Sacred Nutrition & Rituals', icon: Utensils },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all ${
                  isActive
                    ? 'bg-forest text-ivory shadow-luxury-sm'
                    : 'bg-white text-stone border border-gold-subtle hover:border-gold hover:text-forest'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-gold' : 'text-stone'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panes */}
        <div className="max-w-5xl mx-auto bg-white rounded-xl border border-gold-subtle p-6 sm:p-10 shadow-luxury-sm">
          
          {/* TAB 1: Inclusions & Exclusions */}
          {activeTab === 'inclusions' && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="font-serif text-2xl text-forest font-medium mb-1">
                  Brochure-Verified Inclusions & Exclusions
                </h3>
                <p className="text-xs text-stone font-light">
                  Strict adherence to the official Shlloka Yatra 2027 parameters. Transparent, comprehensive, and devoid of hidden surcharges.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Inclusions */}
                <div className="p-6 rounded-lg bg-sage/20 border border-sage/40">
                  <div className="flex items-center space-x-2 text-forest font-semibold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-sage/40">
                    <CheckCircle2 className="w-5 h-5 text-forest" />
                    <span>Included in Your Pilgrimage Fee</span>
                  </div>
                  <ul className="space-y-4">
                    {INCLUSIONS_EXCLUSIONS.inclusions.map((item, i) => (
                      <li key={i} className="text-xs leading-relaxed">
                        <strong className="text-forest block font-semibold">{item.title}</strong>
                        <span className="text-stone">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="p-6 rounded-lg bg-ivory border border-gold-subtle">
                  <div className="flex items-center space-x-2 text-stone-dark font-semibold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-gold-subtle">
                    <XCircle className="w-5 h-5 text-gold-dark" />
                    <span>Personal & Optional Exclusions</span>
                  </div>
                  <ul className="space-y-4">
                    {INCLUSIONS_EXCLUSIONS.exclusions.map((item, i) => (
                      <li key={i} className="text-xs leading-relaxed">
                        <strong className="text-forest block font-semibold">{item.title}</strong>
                        <span className="text-stone">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Physical Fitness */}
          {activeTab === 'fitness' && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="font-serif text-2xl text-forest font-medium">
                Physical Fitness & High-Altitude Acclimatisation
              </h3>
              <p className="text-xs sm:text-sm text-stone font-light leading-relaxed">
                The Kailash Parikrama takes you to a maximum altitude of 5,650 metres (18,536 ft) at Dolma La Pass. While non-technical, the elevation requires consistent aerobic foundation and disciplined daily hydration.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="p-5 rounded-lg bg-ivory border border-gold-subtle">
                  <span className="text-gold font-serif text-2xl font-bold block mb-1">01</span>
                  <h4 className="font-serif text-base text-forest font-medium mb-1">Aerobic Baseline</h4>
                  <p className="text-xs text-stone font-light leading-relaxed">
                    Begin walking 5–7 kilometres briskly 4 times weekly 60 to 90 days before travel. Include stairs or gentle incline treadmill walking.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-ivory border border-gold-subtle">
                  <span className="text-gold font-serif text-2xl font-bold block mb-1">02</span>
                  <h4 className="font-serif text-base text-forest font-medium mb-1">Medical Clearance</h4>
                  <p className="text-xs text-stone font-light leading-relaxed">
                    A standard ECG, blood sugar test, and physician fitness certificate are required for all yatris. We review these prior to final group visa filing.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-ivory border border-gold-subtle">
                  <span className="text-gold font-serif text-2xl font-bold block mb-1">03</span>
                  <h4 className="font-serif text-base text-forest font-medium mb-1">Sherpa Vitals Protocol</h4>
                  <p className="text-xs text-stone font-light leading-relaxed">
                    Our medical guides perform pulse oximetry and vitals screening every morning and evening. Oxygen concentrators travel with each convoy.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Gear Checklist */}
          {activeTab === 'gear' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gold-subtle gap-2">
                <div>
                  <h3 className="font-serif text-2xl text-forest font-medium">
                    What to Pack for the Trans-Himalayas
                  </h3>
                  <p className="text-xs text-stone">
                    Complimentary heavy down jacket & duffle bag supplied on returnable basis.
                  </p>
                </div>
                <span className="px-3 py-1 rounded bg-gold/15 text-gold-dark text-xs uppercase font-semibold">
                  Returnable Gear Provided
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-stone">
                <div className="space-y-3">
                  <h4 className="font-semibold text-forest uppercase tracking-wider text-[11px]">
                    Essential Clothing & Footwear
                  </h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Sturdy, well-broken-in waterproof trekking boots with ankle support</li>
                    <li>3–4 sets of high-grade Merino wool thermal tops and bottoms</li>
                    <li>Waterproof/windproof Gore-Tex outer jacket and trekking trousers</li>
                    <li>Fleece sweater or ultralight down inner jacket</li>
                    <li>Warm thermal balaclava, wind-resistant beanie, and sun hat</li>
                    <li>Insulated windproof gloves plus lightweight liner gloves</li>
                    <li>5 pairs of cushioned wool trekking socks and anti-blister liners</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-forest uppercase tracking-wider text-[11px]">
                    Personal Care & Gear Essentials
                  </h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>UV400 Category 3/4 polarized glacier sunglasses</li>
                    <li>SPF 50+ broad-spectrum sunscreen and zinc lip balm</li>
                    <li>1-litre insulated stainless steel vacuum hot water flask</li>
                    <li>Collapsible trekking poles with rubber terrain tips</li>
                    <li>High-capacity power bank (20,000 mAh) for cold-weather battery retention</li>
                    <li>Personal first-aid kit with Diamox (upon doctor advice), ORS, throat lozenges</li>
                    <li>Biodegradable wet wipes, hand sanitizer, and compact microfiber towel</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Permits */}
          {activeTab === 'permits' && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="font-serif text-2xl text-forest font-medium">
                Tibet Group Visa & Travel Permit Formalities
              </h3>
              <p className="text-xs sm:text-sm text-stone font-light leading-relaxed">
                Travel in the Tibet Autonomous Region (TAR) is subject to strict governmental regulations. Individual tourist visas cannot be used; all pilgrims travel on a collective Group Tourist Visa issued through the Chinese Embassy in Kathmandu.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-lg bg-ivory border border-gold-subtle flex items-start space-x-3 text-xs">
                  <span className="w-6 h-6 rounded-full bg-forest text-gold flex items-center justify-center shrink-0 font-serif font-bold">
                    1
                  </span>
                  <div>
                    <strong className="text-forest block">Passport Validity & Scans:</strong>
                    <span className="text-stone">
                      Original passport must have minimum 6 months validity from the departure date with at least 2 blank visa pages. Clear color scans are collected 45 days prior.
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-ivory border border-gold-subtle flex items-start space-x-3 text-xs">
                  <span className="w-6 h-6 rounded-full bg-forest text-gold flex items-center justify-center shrink-0 font-serif font-bold">
                    2
                  </span>
                  <div>
                    <strong className="text-forest block">Physical Biometrics in Kathmandu:</strong>
                    <span className="text-stone">
                      Indian and foreign nationals must arrive in Kathmandu on Day 1 to submit physical passports for final group visa endorsement by the Chinese consular division.
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-ivory border border-gold-subtle flex items-start space-x-3 text-xs">
                  <span className="w-6 h-6 rounded-full bg-forest text-gold flex items-center justify-center shrink-0 font-serif font-bold">
                    3
                  </span>
                  <div>
                    <strong className="text-forest block">Tibet Travel Permit (TTP):</strong>
                    <span className="text-stone">
                      Shlloka Yatra procures the official TTP from the Tibet Tourism Bureau (TTB), military clearance, and foreign affairs permits seamlessly.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: Dining & Sacred Rituals */}
          {activeTab === 'dining' && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="font-serif text-2xl text-forest font-medium">
                Pure Vegetarian Dining & Vedic Rituals
              </h3>
              <p className="text-xs sm:text-sm text-stone font-light leading-relaxed">
                Spiritual sanctity and nutritional balance go hand in hand. Our dedicated culinary team accompanies the group across Tibet to serve hot, fresh, Sattvic meals tailored for high-altitude digestion.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-lg bg-sage/20 border border-sage/40">
                  <h4 className="font-serif text-base text-forest font-semibold mb-2">
                    Culinary Care & Jain Meals
                  </h4>
                  <ul className="text-xs text-stone space-y-2 list-disc list-inside">
                    <li>100% pure vegetarian cuisine prepared by our Brahmin / Nepali cooks</li>
                    <li>Strict Jain food (without onion, garlic, or root vegetables) on request</li>
                    <li>Hot ginger-lemon water, herbal tea, and nutritious vegetable broths throughout</li>
                    <li>Freshly packed wholesome trail snacks for the 3-day Parikrama</li>
                  </ul>
                </div>

                <div className="p-5 rounded-lg bg-ivory border border-gold-subtle">
                  <h4 className="font-serif text-base text-forest font-semibold mb-2">
                    Sacred Rituals Conducted
                  </h4>
                  <ul className="text-xs text-stone space-y-2 list-disc list-inside">
                    <li>Rudra Homam & special darshan at Pashupatinath Temple, Kathmandu</li>
                    <li>Holy dip / sprinkling and Vedic Hawan on the shores of Lake Manasarovar</li>
                    <li>Complimentary sacred brass Kalash provided for holy Manasarovar Jal</li>
                    <li>Offerings of silk Khatas (ceremonial scarves) at Yamdwar and Dolma La</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


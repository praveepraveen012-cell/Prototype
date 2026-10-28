import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Compass, Sun, Moon, Shield, Sparkles, ChevronRight, ArrowRight } from 'lucide-react';
import { BRAND, HIGHLIGHTS_METRICS } from '../data/yatraData';

export default function TheJourneyPage() {
  const sacredLandmarks = [
    {
      title: 'Mount Kailash (Gang Rinpoche)',
      elevation: '6,638 m',
      category: 'The Holy Monolith',
      desc: 'Known as Kang Rinpoche ("Precious Jewel of Snow") in Tibet, Mount Kailash is universally revered as Mount Meru—the cosmic axis of the universe. Its distinctive four-sided pyramidal symmetry aligns with the cardinal directions.',
      image: '/images/img_6.jpg',
    },
    {
      title: 'Lake Manasarovar (Mapam Yumtso)',
      elevation: '4,590 m',
      category: 'Lake of Supreme Consciousness',
      desc: 'Formed in the cosmic mind of Lord Brahma, Manasarovar is the highest freshwater lake on earth. Pilgrims perform holy ablutions, Vedic Hawan, and water collection on its shores facing the reflection of Kailash.',
      image: '/images/img_7.jpg',
    },
    {
      title: 'Dolma La Pass',
      elevation: '5,650 m (18,536 ft)',
      category: 'The Physical & Spiritual Pinnacle',
      desc: 'The supreme test of endurance on Day 2 of the Parikrama. Pilgrims leave an old piece of clothing or hair strand here to symbolize the shed of past karma and spiritual rebirth under the blessing of Goddess Tara.',
      image: '/images/img_8.jpg',
    },
    {
      title: 'Gauri Kund (Lake of Compassion)',
      elevation: '5,608 m',
      category: 'The Turquoise Emerald Pool',
      desc: 'Resting just beneath the crest of Dolma La Pass lies the emerald-green water body associated with Goddess Parvati. According to ancient lore, this is where Lord Ganesha was created.',
      image: '/images/img_1.jpg',
    },
    {
      title: 'Yamdwar (The Gate of Salvation)',
      elevation: '4,730 m',
      category: 'The Sacred Threshold',
      desc: 'Also called Tarboche, this ceremonial gateway marks the physical start of the foot Parikrama. Walking through Yamdwar signifies leaving the judgment of the Lord of Death behind to enter Shiva’s holy abode.',
      image: '/images/img_9.jpg',
    },
    {
      title: 'Diraphuk & Zutulphuk Monasteries',
      elevation: '5,080 m & 4,790 m',
      category: 'Centres of Contemplation',
      desc: 'Diraphuk provides a direct, close-up darshan of the sheer North Face of Mount Kailash. Zutulphuk shelters the miracle meditation cave of the 11th-century Tibetan yogi and poet Milarepa.',
      image: '/images/img_10.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-ivory text-forest pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
            SACRED TOPOGRAPHY & COSMOLOGY
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-light leading-tight">
            The Sacred Mandala of Kailash
          </h1>
          <p className="text-stone text-sm sm:text-base font-light mt-4 leading-relaxed">
            A comprehensive guide to the metaphysical geography, sacred lakes, high passes, and spiritual milestones of the Kailash Mansarovar Parikrama.
          </p>
          <div className="w-16 h-px bg-gold/50 mx-auto mt-6" />
        </div>

        {/* Hero Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 bg-white rounded-2xl border border-gold-subtle p-8 sm:p-12 shadow-luxury-sm">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-[10px] uppercase tracking-luxury text-gold font-semibold block">
              THE CELESTIAL AXIS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest font-medium leading-snug">
              Why Kailash Transcends Human Geography
            </h2>
            <p className="text-xs sm:text-sm text-stone font-light leading-relaxed">
              In the sacred geography of Asia, Mount Kailash is not just a peak in the Gangdise range; it is the physical focal point where four of the world’s major spiritual traditions converge in veneration. For Hindus, it is the eternal abode of Lord Shiva; for Buddhists, Kang Rinpoche, home of Demchok; for Jains, Ashtapad where the first Tirthankara achieved liberation; and for followers of Bön, the 9-story swastika mountain where Shenrab Miwoche descended from heaven.
            </p>
            <p className="text-xs sm:text-sm text-stone font-light leading-relaxed">
              Every step along the 52-kilometre circumambulation carries philosophical weight. The journey strips away external worldly distractions, demanding presence, breath control, and inward humility.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden shadow-luxury border border-gold-subtle img-zoom-container">
              <img
                src="/images/img_12.jpg"
                alt="Mount Kailash Panoramic Ridge"
                className="w-full h-[360px] object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Sacred Stations Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold block mb-1">
              THE SACRED STATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest font-light">
              Key Milestones of the Parikrama
            </h2>
            <div className="w-12 h-px bg-gold/50 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sacredLandmarks.map((lm, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gold-subtle overflow-hidden shadow-luxury-sm hover:border-gold hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden relative img-zoom-container">
                    <img
                      src={lm.image}
                      alt={lm.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-forest text-gold text-[10px] font-semibold px-2.5 py-1 rounded border border-gold/30">
                      {lm.elevation}
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] uppercase tracking-wider text-gold font-semibold block mb-1">
                      {lm.category}
                    </span>
                    <h3 className="font-serif text-xl text-forest font-medium mb-3">
                      {lm.title}
                    </h3>
                    <p className="text-xs text-stone font-light leading-relaxed">
                      {lm.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-forest-subtle/40 mt-4 flex items-center justify-between text-xs text-gold">
                  <span className="text-[11px] text-stone">Circumambulation Route</span>
                  <Sparkles className="w-4 h-4 text-gold" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="p-10 rounded-2xl bg-forest text-ivory text-center border border-gold shadow-luxury">
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
            JOIN THE 2027 SEASON
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ivory font-light mb-4">
            Experience the Sacred Presence of Kailash
          </h2>
          <p className="text-xs sm:text-sm text-sage-light max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Browse our 3 travel options and 8 approved departure dates to begin planning your pilgrimage.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/packages"
              className="px-6 py-3 bg-gradient-to-r from-gold to-gold-light text-evergreen font-semibold rounded text-xs uppercase tracking-wider shadow-gold-glow"
            >
              Compare Route Packages
            </Link>
            <Link
              to="/departures"
              className="px-6 py-3 bg-evergreen border border-gold/40 text-ivory hover:text-gold rounded text-xs uppercase tracking-wider"
            >
              View 2027 Departures
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}


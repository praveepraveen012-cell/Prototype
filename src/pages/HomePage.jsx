import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Calendar, Mountain, ArrowRight, ShieldCheck, Heart, Sparkles, BookOpen, ChevronRight, Check } from 'lucide-react';
import VideoBanner from '../components/VideoBanner';
import DepartureSelector from '../components/DepartureSelector';
import PackageComparison from '../components/PackageComparison';
import ItineraryTimeline from '../components/ItineraryTimeline';
import EditorialCollage from '../components/EditorialCollage';
import PreparationTabs from '../components/PreparationTabs';
import FaqAccordion from '../components/FaqAccordion';
import { HIGHLIGHTS_METRICS, PACKAGES, BRAND } from '../data/yatraData';
import { BLOG_POSTS } from '../data/blogData';
import { assetUrl } from '../utils/assetUrl';

export default function HomePage({ onOpenEnquiry }) {
  return (
    <div className="w-full bg-ivory">
      {/* SECTION 1: Cinematic Hero with Video Banner & Advanced Animations */}
      <VideoBanner />

      {/* SECTION 2: A Journey of Significance (Split Editorial Layout) */}
      <section id="journey-significance" className="py-24 bg-ivory text-forest relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Large Himalayan Photograph with editorial frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-luxury border border-gold-subtle img-zoom-container">
                <img
                  src={assetUrl('/images/img_1.jpg')}
                  alt="Sacred Mount Kailash Darshan"
                  className="w-full h-[460px] sm:h-[540px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-evergreen/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-ivory">
                  <span className="text-[10px] uppercase tracking-luxury text-gold font-semibold block mb-1">
                    WESTERN TIBET · 6,638 M
                  </span>
                  <p className="font-serif text-xl sm:text-2xl font-light italic">
                    "The throne of Mahadev, where heaven and earth converge in unbroken stillness."
                  </p>
                </div>
              </div>

              {/* Decorative gold badge element */}
              <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center space-x-3 bg-forest text-ivory p-5 rounded-xl border border-gold shadow-luxury max-w-xs">
                <div className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center text-gold shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gold font-semibold block">
                    Authentic Pilgrimage
                  </span>
                  <span className="text-xs text-sage-light/90 font-light">
                    Guided by veteran Sherpa sirdars with 10+ seasons of Kailash experience.
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Editorial Description */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.24em] text-gold font-semibold">
                <span className="w-6 h-px bg-gold" />
                <span>SACRED SIGNIFICANCE</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest font-light leading-[1.15]">
                The Spiritual Epicentre of the Ancient World
              </h2>

              <p className="text-stone leading-relaxed text-sm sm:text-base font-light">
                For millennia, Mount Kailash has stood not merely as a pinnacle of geographic majesty, but as the supreme energetic vortex venerated by over a billion souls. In Hindu cosmology, it is the physical residence of Lord Shiva and Goddess Parvati; in Buddhism, the mandala of Demchok; in Jainism, the sacred site of Ashtapad where Lord Rishabhdev attained Moksha.
              </p>

              <p className="text-stone leading-relaxed text-sm sm:text-base font-light">
                Circumambulating the sacred 52-kilometre trail around Mount Kailash—the timeless Parikrama—is believed to cleanse the karmic impressions of a lifetime. Coupled with the purifying dawn rituals upon the celestial waters of Lake Manasarovar, this expedition is an inner transformation disguised as an arduous Himalayan trek.
              </p>

              {/* Sacred Trail Preview Inset */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="rounded-lg overflow-hidden border border-gold-subtle relative aspect-[16/10] group">
                  <img src={assetUrl('/images/kedarnath-sacred-peak.jpg')} alt="Kedarnath & Himalayan Shrines" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-evergreen/85 via-transparent to-transparent flex items-end p-2.5">
                    <span className="text-[10px] text-ivory font-serif">Kedarnath & Himalayan Shiva Trail</span>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden border border-gold-subtle relative aspect-[16/10] group">
                  <img src={assetUrl('/images/trans-himalayan-stupa.jpg')} alt="Trans-Himalayan Stupas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-evergreen/85 via-transparent to-transparent flex items-end p-2.5">
                    <span className="text-[10px] text-ivory font-serif">Trans-Himalayan Ridge Stupas</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6">
                <Link
                  to="/the-journey"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] font-semibold text-forest hover:text-gold-dark transition-colors pb-1 border-b border-forest hover:border-gold"
                >
                  <span>Read The Sacred Narrative</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={onOpenEnquiry}
                  className="text-xs uppercase tracking-[0.18em] text-stone hover:text-forest transition-colors"
                >
                  Request Private Yatra Consultation
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: The Journey at a Glance (Refined Editorial Information Strip) */}
      <section className="bg-forest text-ivory py-14 border-y border-gold/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gold/20">
            {HIGHLIGHTS_METRICS.map((metric, i) => (
              <div key={i} className={`pt-4 sm:pt-0 ${i !== 0 ? 'sm:pl-8' : ''}`}>
                <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold-light font-light block mb-1">
                  {metric.value}
                </span>
                <span className="text-xs uppercase tracking-[0.18em] text-ivory font-semibold block mb-1">
                  {metric.label}
                </span>
                <span className="text-xs text-sage-light/75 font-light leading-relaxed block">
                  {metric.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Discover the Journey (Asymmetrical Editorial Collage) */}
      <EditorialCollage />

      {/* SECTION 5: Choose Your Experience (Three Package Options Comparison) */}
      <section id="packages-section" className="py-24 bg-ivory text-forest relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PackageComparison
            title="Choose Your Experience"
            subtitle="CURATED HIMALAYAN ROUTES · 2027"
          />
        </div>
      </section>

      {/* SECTION 6: Departure Calendar (Distinctive ivory & forest selector) */}
      <section id="departures-section" className="py-24 bg-white text-forest border-y border-gold-subtle relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DepartureSelector
            title="2027 Pilgrimage Departures"
            subtitle="EIGHT APPROVED EXPEDITION BATCHES"
          />
        </div>
      </section>

      {/* SECTION 7: Journey Itinerary (Vertical Timeline with Route Switcher) */}
      <section id="itinerary-section" className="py-24 bg-ivory text-forest relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ItineraryTimeline
            title="The Sacred Itinerary"
            subtitle="DAY-BY-DAY EXPEDITION DOSSIER"
          />
        </div>
      </section>

      {/* SECTION 8: Preparation & Important Information */}
      <PreparationTabs />

      {/* SPECIAL REQUEST: The Kailash Chronicle (Editorial Blog Feature) */}
      <section className="py-24 bg-forest text-ivory relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-gold/30">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
                THE SACRED CHRONICLE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-light">
                Essays & Himalayan Insights
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] text-gold hover:text-ivory transition-colors mt-4 md:mt-0 font-medium"
            >
              <span>Explore All Editorial Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-evergreen/60 rounded-xl border border-gold/25 overflow-hidden hover:border-gold transition-all duration-300 flex flex-col justify-between hover:shadow-luxury"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={assetUrl(post.coverImage)}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-evergreen/80 backdrop-blur-sm text-gold px-2.5 py-1 rounded text-[10px] uppercase tracking-wider font-semibold border border-gold/30">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-[10px] uppercase tracking-wider text-sage-light/70 mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-serif text-xl text-ivory font-medium group-hover:text-gold-shimmer transition-colors leading-snug mb-3">
                      {post.title}
                    </h3>

                    <p className="text-xs text-sage-light/80 font-light leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between text-xs text-gold">
                  <span className="uppercase tracking-wider text-[11px] font-medium">Read Essay</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: Frequently Asked Questions (Accordions) */}
      <FaqAccordion
        title="Essential Questions & Answers"
        subtitle="CLARITY ON PERMITS, HEALTH & BOOKING"
      />

      {/* SECTION 10: Final Booking Invitation ("Your Journey Begins Here") */}
      <section className="relative py-28 bg-evergreen text-ivory overflow-hidden">
        {/* Full-width landscape backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src={assetUrl('/images/img_11.jpg')}
            alt="Mount Kailash at Twilight"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-evergreen via-evergreen/80 to-evergreen/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-3 mb-6">
            <span className="w-8 h-px bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">
              KAILASH MANSAROVAR PARIKRAMA 2027
            </span>
            <span className="w-8 h-px bg-gold" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory font-light leading-tight mb-6">
            Your Journey Begins Here
          </h2>

          <p className="text-sm sm:text-base text-sage-light max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Seats across the eight approved 2027 departures are strictly limited to 25 pilgrims per convoy to ensure personalized medical care and unhurried spiritual contemplation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-evergreen font-semibold text-xs uppercase tracking-[0.18em] px-8 py-4 rounded shadow-gold-glow hover:shadow-luxury transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-evergreen" />
              <span>Explore Departures & Reserve</span>
            </Link>

            <button
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-forest/80 hover:bg-forest text-ivory hover:text-gold border border-gold/40 text-xs uppercase tracking-[0.18em] px-8 py-4 rounded transition-all transform hover:-translate-y-0.5"
            >
              <span>Enquire About the Journey</span>
            </button>
          </div>

          <div className="mt-12 text-xs text-sage/70 font-light flex items-center justify-center space-x-4">
            <span>Direct Concierge: {BRAND.phone}</span>
            <span>•</span>
            <span>{BRAND.email}</span>
          </div>
        </div>
      </section>
    </div>
  );
}


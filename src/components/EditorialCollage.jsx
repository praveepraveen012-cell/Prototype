import React from 'react';
import { Sparkles, Compass, MapPin } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';

export default function EditorialCollage() {
  const galleryItems = [
    {
      src: '/images/img_6.jpg',
      title: 'North Face of Mount Kailash',
      location: 'Diraphuk · 5,080 m',
      caption: 'The sheer, glacial monolith rising perpendicularly into the Tibetan sky, venerated as the cosmic Mt. Meru.',
      span: 'md:col-span-8 md:row-span-2',
      aspect: 'aspect-[16/10]',
    },
    {
      src: '/images/trans-himalayan-stupa.jpg',
      title: 'Trans-Himalayan Stupa & Prayer Flags',
      location: 'High Plateau Pass · 4,200 m',
      caption: 'Ancient Buddhist chortens and fluttering wind-horse prayer flags blessing pilgrims crossing into Western Tibet.',
      span: 'md:col-span-4 md:row-span-1',
      aspect: 'aspect-[4/3]',
    },
    {
      src: '/images/kedarnath-sacred-peak.jpg',
      title: 'Kedarnath Dham & The Himalayan Shiva Trail',
      location: 'Garhwal Himalaya · 3,583 m',
      caption: 'Venerating Mahadev in the great Himalayan sanctuary, philosophically linked with the supreme Kailash Parikrama.',
      span: 'md:col-span-4 md:row-span-1',
      aspect: 'aspect-[4/3]',
    },
    {
      src: '/images/badrinath-himalaya.jpg',
      title: 'Badrinath & Nilkantha Ridge',
      location: 'Alaknanda Valley · 3,133 m',
      caption: 'Sacred Himalayan architecture beneath towering snow peaks where ancient rishis meditated upon cosmic order.',
      span: 'md:col-span-6 md:row-span-1',
      aspect: 'aspect-[16/9]',
    },
    {
      src: '/images/himalayan-heritage-temple.jpg',
      title: 'Kathmandu Valley & Dhulikhel Sanctuaries',
      location: 'Nepal Hills · 1,550 m',
      caption: 'Multi-tiered pagoda shrines nestled in lush mountain orchards where pilgrims acclimatise and receive pre-yatra blessings.',
      span: 'md:col-span-6 md:row-span-1',
      aspect: 'aspect-[16/9]',
    },
  ];

  return (
    <section className="py-20 bg-ivory text-forest relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-gold-subtle">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
              IMPRESSIONS OF THE SACRED MANDALA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest font-light">
              Discover the Journey
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-stone mt-4 md:mt-0 font-light leading-relaxed">
            Asymmetrical vistas from the roof of the world. Ancient shrines, stupas, and glacial peaks marking stations of contemplation, prayer, and inner renewal.
          </p>
        </div>

        {/* Asymmetrical Masonry / Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-xl bg-forest ${item.span} shadow-luxury-sm hover:shadow-luxury transition-all duration-500`}
            >
              <div className={`w-full h-full min-h-[260px] img-zoom-container ${item.aspect}`}>
                <img
                  src={assetUrl(item.src)}
                  alt={item.title}
                  className="w-full h-full object-cover object-center brightness-90 group-hover:brightness-100 transition-all duration-700"
                />
              </div>

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-evergreen/95 via-evergreen/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col justify-end text-ivory">
                <div className="flex items-center space-x-2 text-[10px] uppercase tracking-luxury text-gold mb-1">
                  <MapPin className="w-3 h-3 text-gold shrink-0" />
                  <span>{item.location}</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-ivory mb-2 group-hover:text-gold-shimmer transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-sage-light/80 font-light max-w-xl leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

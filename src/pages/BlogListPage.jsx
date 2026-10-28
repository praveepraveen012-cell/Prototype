import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Clock, User, ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';

export default function BlogListPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = [
    'ALL',
    'Spiritual Geography',
    'High Altitude Science',
    'Sacred Lore',
    'Expedition Readiness',
    'Cosmic Calendars',
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (selectedCategory === 'ALL') return true;
    return post.category === selectedCategory;
  });

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="min-h-screen bg-ivory text-forest pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Journal Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
            THE KAILASH CHRONICLE · EDITORIAL ESSAYS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-light leading-tight">
            Sacred Lore & Expedition Insights
          </h1>
          <p className="text-stone text-sm sm:text-base font-light mt-4 leading-relaxed">
            Scholarly perspectives, high-altitude physiological wisdom, and ancient Vedic lore curated by the Shlloka Yatra expedition leadership.
          </p>
          <div className="w-16 h-px bg-gold/50 mx-auto mt-6" />
        </div>

        {/* Featured Cover Story */}
        <div className="mb-16">
          <Link
            to={`/blog/${featuredPost.slug}`}
            className="group block bg-white rounded-2xl border border-gold-subtle overflow-hidden shadow-luxury hover:border-gold transition-all duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto min-h-[340px] relative overflow-hidden img-zoom-container">
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-forest text-gold px-3 py-1 rounded text-xs uppercase tracking-wider font-semibold border border-gold/30">
                  Featured Cover Story
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 text-xs text-stone mb-3">
                    <span className="text-gold-dark font-medium uppercase tracking-wider">
                      {featuredPost.category}
                    </span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl text-forest font-medium leading-snug group-hover:text-gold-dark transition-colors mb-4">
                    {featuredPost.title}
                  </h2>

                  <p className="text-stone text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-forest-subtle flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-forest">
                    <User className="w-4 h-4 text-gold" />
                    <span>{featuredPost.author.name}</span>
                  </div>

                  <span className="inline-flex items-center space-x-1 text-xs uppercase tracking-wider font-semibold text-gold-dark group-hover:text-forest">
                    <span>Read Essay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-forest text-ivory shadow-luxury-sm'
                  : 'bg-white text-stone border border-gold-subtle hover:border-gold hover:text-forest'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-white rounded-xl border border-gold-subtle overflow-hidden shadow-luxury-sm hover:border-gold hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden relative img-zoom-container">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-forest px-2.5 py-1 rounded text-[10px] uppercase tracking-wider font-semibold border border-gold/30">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 text-[10px] uppercase tracking-wider text-stone mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl text-forest font-medium group-hover:text-gold-dark transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs text-stone font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-forest-subtle/50 mt-4 flex items-center justify-between text-xs text-stone">
                <span className="text-[11px] font-light">{post.author.name}</span>
                <span className="text-gold-dark font-semibold uppercase tracking-wider text-[11px] flex items-center space-x-1 group-hover:text-forest">
                  <span>Read</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}


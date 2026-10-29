import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Share2, Compass, Sparkles, ChevronRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';
import { assetUrl } from '../utils/assetUrl';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="min-h-screen bg-ivory text-forest pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-stone hover:text-forest transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to The Kailash Chronicle</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-10 text-center">
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold block mb-3">
            {post.category} · ESSAY
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest font-light leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center justify-center space-x-4 text-xs text-stone pb-6 border-b border-gold-subtle">
            <span className="flex items-center space-x-1.5 font-medium text-forest">
              <User className="w-3.5 h-3.5 text-gold" />
              <span>{post.author.name}</span>
            </span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Cover Image */}
        <div className="rounded-2xl overflow-hidden shadow-luxury border border-gold-subtle mb-12 aspect-[16/10]">
          <img
            src={assetUrl(post.coverImage)}
            alt={post.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Lead Excerpt */}
        <div className="text-lg sm:text-xl font-serif italic text-forest/90 leading-relaxed mb-10 pl-4 border-l-2 border-gold">
          {post.excerpt}
        </div>

        {/* Structured Article Body */}
        <div className="space-y-6 text-stone text-sm sm:text-base leading-relaxed font-light mb-16">
          {post.content.map((block, i) => {
            if (block.type === 'paragraph') {
              return (
                <p key={i} className="leading-relaxed">
                  {block.text}
                </p>
              );
            }
            if (block.type === 'heading') {
              return (
                <h2
                  key={i}
                  className="font-serif text-2xl sm:text-3xl text-forest font-medium pt-6 pb-1 border-b border-forest-subtle"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'quote') {
              return (
                <blockquote
                  key={i}
                  className="my-8 p-6 rounded-xl bg-sage/20 border-l-4 border-gold text-forest font-serif italic text-lg sm:text-xl"
                >
                  <p>"{block.text}"</p>
                  {block.source && (
                    <footer className="text-xs uppercase tracking-widest text-gold-dark font-sans not-italic mt-2">
                      — {block.source}
                    </footer>
                  )}
                </blockquote>
              );
            }
            if (block.type === 'list') {
              return (
                <ul key={i} className="space-y-2.5 my-4 pl-4 list-disc list-outside text-stone">
                  {block.items.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </div>

        {/* Author Bio Box */}
        <div className="p-6 sm:p-8 rounded-xl bg-white border border-gold-subtle shadow-luxury-sm mb-16 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold shrink-0">
            <img
              src={assetUrl(post.author.avatar)}
              alt={post.author.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-wider text-gold font-semibold block">
              Essay Contributor
            </span>
            <h3 className="font-serif text-xl text-forest font-medium">
              {post.author.name}
            </h3>
            <p className="text-xs text-gold-dark mb-2">{post.author.role}</p>
            <p className="text-xs text-stone font-light leading-relaxed">
              Serving the Kailash pilgrimage fraternity with rigorous scholarship in Vedic cosmology, high-altitude trail logistics, and trans-Himalayan heritage.
            </p>
          </div>
        </div>

        {/* Related Articles Strip */}
        <div className="pt-10 border-t border-gold-subtle mb-16">
          <h3 className="font-serif text-2xl text-forest font-medium mb-6">
            Continue Reading
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                to={`/blog/${rp.slug}`}
                className="group p-5 rounded-lg bg-white border border-gold-subtle hover:border-gold shadow-luxury-sm transition-all"
              >
                <span className="text-[10px] uppercase tracking-wider text-gold block mb-1">
                  {rp.category}
                </span>
                <h4 className="font-serif text-lg text-forest font-medium group-hover:text-gold-dark transition-colors mb-2">
                  {rp.title}
                </h4>
                <span className="text-xs text-stone flex items-center space-x-1">
                  <span>Read Article</span>
                  <ChevronRight className="w-3.5 h-3.5 text-gold" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Final CTA Strip */}
        <div className="p-8 rounded-2xl bg-forest text-ivory text-center border border-gold shadow-luxury">
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
            2027 EXPEDITION REGISTRATIONS
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-light mb-3">
            Walk the Sacred Trail Around Kailash
          </h3>
          <p className="text-xs text-sage-light max-w-md mx-auto mb-6 font-light">
            8 approved departures for the 2027 season. Early batch registration is required for China visa allocation.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold to-gold-light text-evergreen font-semibold text-xs uppercase tracking-[0.16em] px-7 py-3 rounded shadow-gold-glow hover:shadow-luxury transition-all"
          >
            <span>Reserve Your 2027 Place</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </article>
  );
}


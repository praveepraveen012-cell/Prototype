import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/yatraData';

export default function FaqAccordion({ title, subtitle }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-20 bg-ivory text-forest relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          {subtitle && (
            <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
              {subtitle}
            </span>
          )}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest font-light">
            {title || 'Frequently Asked Questions'}
          </h2>
          <div className="w-16 h-px bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-lg border border-gold-subtle bg-white transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-[10px] uppercase tracking-wider text-gold-dark font-medium bg-ivory px-2 py-0.5 rounded border border-gold/25 hidden sm:inline-block">
                      {faq.category}
                    </span>
                    <span className="font-serif text-lg sm:text-xl text-forest font-medium leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-forest text-gold rotate-180' : 'bg-ivory text-forest'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone leading-relaxed font-light border-t border-ivory-dark animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional help footer */}
        <div className="mt-10 text-center text-xs text-stone">
          Have an unlisted question regarding permits, dietary requirements, or international travel?{' '}
          <a href="#contact" className="text-gold-dark font-semibold underline underline-offset-4 hover:text-forest">
            Speak with our Ground Concierge Team
          </a>
        </div>
      </div>
    </section>
  );
}


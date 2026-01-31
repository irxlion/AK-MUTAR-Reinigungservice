
import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';
import { FadeIn, StaggerContainer } from './FadeIn';

const Testimonials: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleTestimonials = isExpanded ? TESTIMONIALS : TESTIMONIALS.slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-20 opacity-5">
        <Quote size={200} />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Kundenfeedback</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900">Was unsere Kunden sagen</h2>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {visibleTestimonials.map((t) => (
            <FadeIn key={t.id} className="h-full">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all h-full flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 italic text-lg leading-relaxed mb-8 flex-grow">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-slate-400 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </StaggerContainer>

        {TESTIMONIALS.length > 3 && (
          <FadeIn delay={0.2} className="flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-900 hover:text-blue-600 px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2"
            >
              {isExpanded ? 'Weniger anzeigen' : 'Mehr Rezensionen anzeigen'}
            </button>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default Testimonials;

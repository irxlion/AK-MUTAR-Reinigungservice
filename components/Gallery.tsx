
import React, { useState } from 'react';
import { GALLERY } from '../constants';
import { FadeIn, StaggerContainer } from './FadeIn';

const Gallery: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 mb-16 text-center">
        <FadeIn>
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Ergebnisse</span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Vorher & Nachher</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Bilder sagen mehr als tausend Worte. Überzeugen Sie sich von unserer Arbeitsqualität in Projekten aus ganz Ludwigshafen.
          </p>
        </FadeIn>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {GALLERY.map((item, index) => (
            <FadeIn key={item.id}>
              <div
                className="group relative h-[400px] rounded-3xl overflow-hidden cursor-crosshair shadow-2xl"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* After Image (Background) */}
                <img
                  src={item.after}
                  alt={`${item.label} nachher`}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Before Image (Revealed via clipping) */}
                <div
                  className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-500 ease-in-out border-r-4 border-white z-10"
                  style={{ clipPath: hoveredIndex === index ? 'inset(0 100% 0 0)' : 'inset(0 50% 0 0)' }}
                >
                  <img
                    src={item.before}
                    alt={`${item.label} vorher`}
                    className="w-full h-full object-cover brightness-75"
                  />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded text-sm font-bold">Vorher</div>
                </div>

                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded text-sm font-bold z-20">Nachher</div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-xl z-20 transition-transform duration-300 transform group-hover:scale-105">
                  <span className="font-bold text-slate-900">{item.label}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Gallery;

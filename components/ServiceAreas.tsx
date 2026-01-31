
import React from 'react';
import { MapPin } from 'lucide-react';
import { FadeIn, StaggerContainer } from './FadeIn';

const ServiceAreas: React.FC = () => {
  const areas = [
    "Ludwigshafen Mitte",
    "Friesenheim",
    "Oggersheim",
    "Oppau / Edigheim",
    "Mundenheim",
    "Rheingönheim",
    "Mannheim & Umland",
    "Mutterstadt",
    "Frankenthal",
    "Speyer"
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn>
          <div className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 text-white overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
              <img src="/service_map.png" className="w-full h-full object-cover" />
            </div>

            <div className="relative z-10 max-w-2xl">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8">Wir sind vor Ort in Ihrer Nähe</h2>
              <p className="text-slate-300 text-lg mb-12">
                Unser Einsatzradius umfasst das gesamte Stadtgebiet Mannheim, Ludwigshafen sowie umliegende Gemeinden in der Metropolregion Rhein-Neckar.
              </p>

              <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {areas.map((area, idx) => (
                  <FadeIn key={idx} direction="up" delay={0.1 * idx}>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></div>
                      <span className="text-slate-200 font-medium hover:text-white transition-colors cursor-default">{area}</span>
                    </div>
                  </FadeIn>
                ))}
              </StaggerContainer>

              <FadeIn delay={0.5}>
                <div className="mt-16 flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl w-fit backdrop-blur-sm">
                  <MapPin className="text-blue-500" />
                  <p className="text-sm">Zentrale: S6 10, 68161 Mannheim</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ServiceAreas;

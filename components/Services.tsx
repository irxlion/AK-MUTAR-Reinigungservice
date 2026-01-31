
import React from 'react';
import { SERVICES, ICON_MAP } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn, StaggerContainer } from './FadeIn';

interface ServicesProps {
  onServiceClick?: (id: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const visibleServices = isExpanded ? SERVICES : SERVICES.slice(0, 6);

  return (
    <section id="services" className="py-16 lg:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-20 gap-8">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Portfolio</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Professionelle Lösungen für <span className="text-gradient">jeden Anspruch.</span></h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-slate-500 text-xl font-medium max-w-2xl leading-relaxed">
                Vom hochglanzpolierten Büro bis zur hygienisch reinen Klinik – unser breites Spektrum an Dienstleistungen deckt alle Ihre Bedürfnisse ab.
              </p>
            </FadeIn>
          </div>
          <FadeIn direction="left" delay={0.3}>
            <a href="#contact" className="group flex items-center gap-4 text-slate-900 font-bold text-lg hover:text-blue-600 transition-all">
              Alle Leistungen ansehen
              <div className="bg-slate-900 text-white p-3 rounded-full group-hover:bg-blue-600 transition-all">
                <ArrowUpRight size={24} />
              </div>
            </a>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleServices.map((service, idx) => (
            <FadeIn key={service.id} className="h-full">
              <div
                className="group relative bg-slate-50 p-6 sm:p-10 rounded-[2.5rem] border border-transparent hover:border-blue-100 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5 overflow-hidden h-full flex flex-col"
              >
                {/* Decorative Number */}
                <span className="absolute -top-4 -right-4 text-8xl font-black text-slate-900/[0.03] pointer-events-none group-hover:text-blue-600/5 transition-colors">
                  0{idx + 1}
                </span>

                <div className="w-20 h-20 bg-white shadow-sm text-blue-600 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 transform-gpu">
                  {ICON_MAP[service.iconName]}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity flex-grow">
                  {service.description}
                </p>

                <button
                  onClick={() => onServiceClick?.(service.id)}
                  className="flex items-center gap-3 text-slate-900 font-bold group-hover:gap-5 transition-all w-full text-left mt-auto"
                >
                  <span className="text-sm uppercase tracking-widest">Details entdecken</span>
                  <div className="h-px flex-1 bg-slate-200 group-hover:bg-blue-200 transition-colors"></div>
                </button>
              </div>
            </FadeIn>
          ))}
        </StaggerContainer>

        {SERVICES.length > 6 && (
          <FadeIn delay={0.2} className="flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-900 hover:text-blue-600 px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2"
            >
              {isExpanded ? 'Weniger Leistungen anzeigen' : 'Mehr Leistungen anzeigen'}
            </button>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default Services;

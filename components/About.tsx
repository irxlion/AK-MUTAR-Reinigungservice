
import React from 'react';
import { CheckCircle2, Award, Smile } from 'lucide-react';
import { FadeIn, StaggerContainer } from './FadeIn';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <FadeIn direction="right">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-3xl">
                <img
                  src="/about_team.png"
                  alt="MrIBO Professional Cleaning"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </FadeIn>

            {/* Stats Overlay */}
            <FadeIn delay={0.3} className="absolute -bottom-10 right-0 sm:-right-6 md:-right-12 z-20 w-full sm:w-auto px-4 sm:px-0">
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl border border-slate-100 max-w-full">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="bg-blue-600 text-white p-2.5 sm:p-3 rounded-2xl">
                    <Award size={24} className="sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">10+</div>
                    <div className="text-slate-500 font-semibold uppercase text-[10px] sm:text-xs tracking-widest">Jahre Expertise</div>
                  </div>
                </div>
                <div className="w-full h-px bg-slate-100 my-3 sm:my-4"></div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="bg-emerald-500 text-white p-2.5 sm:p-3 rounded-2xl">
                    <Smile size={24} className="sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">100%</div>
                    <div className="text-slate-500 font-semibold uppercase text-[10px] sm:text-xs tracking-widest">Zufriedenheit</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Background Accent */}
            <FadeIn delay={0.2} className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 z-0" fullWidth={false}><div /></FadeIn>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 mt-16 lg:mt-0">
            <FadeIn direction="left">
              <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-lg font-bold text-sm tracking-wider uppercase mb-6">
                Unsere Geschichte
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
                Wir setzen neue <span className="text-blue-600">Standards</span> für Reinheit.
              </h2>
              <p className="text-slate-600 text-xl mb-10 leading-relaxed font-medium opacity-80">
                Bei AK MUTAR verstehen wir, dass Sauberkeit die Grundlage für Wohlbefinden und geschäftlichen Erfolg ist. Seit über einem Jahrzehnt sind wir der vertrauenswürdige Partner für Unternehmen und Privathaushalte in der Region Mannheim.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mb-12">
              {[
                "Modernste ECO-Technologien",
                "Individuelle Reinigungspläne",
                "IHK-Geprüftes Fachpersonal",
                "Diskretion & Sicherheit",
                "24/7 Support-Hotline",
                "Faire & transparente Preise"
              ].map((item, idx) => (
                <FadeIn key={idx} direction="up">
                  <div className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <CheckCircle2 className="text-blue-600 group-hover:text-white w-4 h-4" />
                    </div>
                    <span className="text-slate-800 font-bold group-hover:text-blue-600 transition-colors">{item}</span>
                  </div>
                </FadeIn>
              ))}
            </StaggerContainer>

            <FadeIn direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl hover:-translate-y-1 w-full sm:w-auto"
                >
                  Beratungstermin vereinbaren
                </button>
                <div className="hidden sm:flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => <img key={i} src={`https://i.pravatar.cc/150?u=${i + 20}`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="Client" />)}
                  </div>
                  <p className="text-sm font-bold text-slate-500">
                    <span className="text-slate-900">500+</span> Kunden vertrauen uns
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

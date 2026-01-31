
import React from 'react';
import { ShieldCheck, Zap, Heart, Award } from 'lucide-react';
import { FadeIn, StaggerContainer } from './FadeIn';

const USPs: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-10 h-10" />,
      title: "Top 10 Auszeichnung",
      desc: "Zertifiziert als einer der besten Reinigungsdienstleister der Stadt."
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Voll Versichert",
      desc: "Sorgenfreiheit durch umfassenden Versicherungsschutz bei jedem Einsatz."
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Schnelle Reaktion",
      desc: "Notfallreinigung und Express-Angebote innerhalb von 24 Stunden."
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Umweltbewusst",
      desc: "Wir nutzen ökologisch abbaubare Reiniger für eine gesunde Umwelt."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-blue-600 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {features.map((f, i) => (
            <FadeIn key={i}>
              <div className="flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                <div className="mb-6 bg-white/10 p-4 rounded-full backdrop-blur-sm border border-white/20 shadow-lg">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-blue-100 leading-relaxed font-light">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default USPs;

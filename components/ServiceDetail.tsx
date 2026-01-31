
import React, { useEffect } from 'react';
import { Service } from '../types';
import { ArrowLeft, CheckCircle2, Phone } from 'lucide-react';
import Contact from './Contact';
import { FadeIn } from './FadeIn';

interface ServiceDetailProps {
    service: Service;
    onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [service]);

    return (
        <div className="pt-24 bg-white min-h-screen">
            <div className="container mx-auto px-4 md:px-8">
                <button
                    onClick={onBack}
                    className="group flex items-center gap-2 text-slate-600 font-bold mb-8 hover:text-blue-600 transition-colors"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Zurück zur Übersicht
                </button>

                <FadeIn>
                    <div className="relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-12 shadow-2xl">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 md:p-16">
                            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">{service.title}</h1>
                            <p className="text-xl md:text-2xl text-blue-100 font-medium max-w-2xl drop-shadow-md">{service.description}</p>
                        </div>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
                    <div className="lg:col-span-2">
                        <FadeIn delay={0.2}>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Service Beschreibung</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-12">
                                {service.longDescription || service.description}
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Unsere Leistungen im Detail</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.features?.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                                            <CheckCircle2 size={20} />
                                        </div>
                                        <span className="font-bold text-slate-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    <div className="lg:col-span-1">
                        <FadeIn delay={0.4} direction="left">
                            <div className="bg-slate-900 text-white p-8 rounded-[2rem] sticky top-32">
                                <h3 className="text-2xl font-bold mb-6">Jetzt Angebot anfordern</h3>
                                <p className="text-slate-300 mb-8">
                                    Interessiert an {service.title}? Kontaktieren Sie uns für ein unverbindliches Angebot.
                                </p>
                                <a
                                    href="tel:+4915234646201"
                                    className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all mb-4"
                                >
                                    <Phone size={20} />
                                    01523 4646201
                                </a>
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-xl transition-all border border-white/20"
                                >
                                    Schriftliche Anfrage
                                </button>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>

            {/* Re-use the main Contact component but maybe customize it or just show it */}
            <div className="bg-slate-50">
                <Contact />
            </div>
        </div>
    );
};

export default ServiceDetail;

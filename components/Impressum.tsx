
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface ImpressumProps {
    onBack: () => void;
}

const Impressum: React.FC<ImpressumProps> = ({ onBack }) => {
    return (
        <div className="pt-24 pb-16 bg-white min-h-screen">
            <div className="container mx-auto px-4 md:px-8">
                <button
                    onClick={onBack}
                    className="group flex items-center gap-2 text-slate-600 font-bold mb-8 hover:text-blue-600 transition-colors"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Zurück zur Startseite
                </button>

                <FadeIn>
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-8">Impressum</h1>

                        <div className="prose prose-lg text-slate-600">
                            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
                            <p className="mb-4">
                                AK MUTAR Reinigungsservice<br />
                                S6 10<br />
                                68161 Mannheim
                            </p>

                            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Kontakt</h2>
                            <p className="mb-4">
                                Telefon: 0176 80299982<br />
                                E-Mail: info@akmutar.de
                            </p>

                            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Umsatzsteuer-ID</h2>
                            <p className="mb-4">
                                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                                Nach Anfrage
                            </p>

                            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Redaktionell verantwortlich</h2>
                            <p className="mb-4">
                                AK MUTAR<br />
                                S6 10<br />
                                68161 Mannheim
                            </p>

                            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">EU-Streitschlichtung</h2>
                            <p className="mb-4">
                                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> https://ec.europa.eu/consumers/odr/</a>.<br />
                                Unsere E-Mail-Adresse finden Sie oben im Impressum.
                            </p>

                            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
                            <p className="mb-4">
                                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Impressum;

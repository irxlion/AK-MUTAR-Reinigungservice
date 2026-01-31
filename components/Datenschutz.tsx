
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface DatenschutzProps {
    onBack: () => void;
}

const Datenschutz: React.FC<DatenschutzProps> = ({ onBack }) => {
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
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-8">Datenschutzerklärung</h1>

                        <div className="prose prose-lg text-slate-600">
                            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
                            <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">Allgemeine Hinweise</h3>
                            <p className="mb-4">
                                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                            </p>

                            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Hosting</h2>
                            <p className="mb-4">
                                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:<br />
                                IONOS<br />
                            </p>

                            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                            <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">Datenschutz</h3>
                            <p className="mb-4">
                                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                            </p>

                            <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">Hinweis zur verantwortlichen Stelle</h3>
                            <p className="mb-4">
                                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                                AK MUTAR Reinigungsservice<br />
                                S6 10<br />
                                68161 Mannheim<br /><br />
                                Telefon: 0176 80299982<br />
                                E-Mail: info@akmutar.de
                            </p>

                            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Datenerfassung auf dieser Website</h2>
                            <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">Kontaktformular</h3>
                            <p className="mb-4">
                                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Datenschutz;

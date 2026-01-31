
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface AGBProps {
    onBack: () => void;
}

const AGB: React.FC<AGBProps> = ({ onBack }) => {
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
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>

                        <div className="prose prose-lg text-slate-600">
                            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Geltungsbereich</h2>
                            <p className="mb-4">
                                Für alle Rechtsgeschäfte mit dem AK MUTAR Reinigungsservice gelten ausschließlich diese Allgemeinen Geschäftsbedingungen. Maßgeblich ist jeweils die zum Zeitpunkt des Vertragsschlusses gültige Fassung.
                            </p>

                            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Vertragsabschluss</h2>
                            <p className="mb-4">
                                Angebote des Auftragnehmers sind freibleibend. Ein Vertrag kommt erst durch schriftliche Auftragsbestätigung oder durch Ausführung der Dienstleistung zustande.
                            </p>

                            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Leistungsumfang</h2>
                            <p className="mb-4">
                                Der Umfang der vertraglichen Leistungen ergibt sich aus dem jeweiligen Angebot bzw. der Auftragsbestätigung. Der Auftragnehmer verpflichtet sich, die vereinbarten Leistungen sach- und fachgerecht auszuführen.
                            </p>

                            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Preise und Zahlungsbedingungen</h2>
                            <p className="mb-4">
                                Alle Preise verstehen sich, sofern nicht anders angegeben, als Nettopreise zuzüglich der gesetzlichen Mehrwertsteuer. Rechnungen sind sofort nach Rechnungserhalt ohne Abzug zahlbar.
                            </p>

                            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Gewährleistung und Haftung</h2>
                            <p className="mb-4">
                                Mängel sind unverzüglich nach Beendigung der Reinigungsarbeiten zu rügen. Der Auftragnehmer haftet für Personen- und Sachschäden, die nachweislich durch ihn oder seine Mitarbeiter verursacht wurden, im Rahmen der abgeschlossenen Betriebshaftpflichtversicherung.
                            </p>

                            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Gerichtsstand</h2>
                            <p className="mb-4">
                                Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz des Auftragnehmers in Mannheim.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default AGB;

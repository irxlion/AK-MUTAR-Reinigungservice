
import React from 'react';
// Added Send to the list of imported icons
import { Facebook, Instagram, Linkedin, ArrowUp, Send } from 'lucide-react';

interface FooterProps {
  onNavigateHome?: () => void;
  onNavigateLegal?: (view: 'impressum' | 'datenschutz' | 'agb') => void;
  onServiceClick?: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateHome, onNavigateLegal, onServiceClick }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-white border-t border-slate-100 pt-12 lg:pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/akmutar_logo.png" alt="AK MUTAR Logo" className="h-12 w-auto object-contain" />
              <span className="text-2xl font-bold tracking-tight text-blue-900">AK MUTAR</span>
            </div>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Ihr zertifizierter Reinigungspartner für Mannheim. Qualität, der man vertrauen kann. Seit über 10 Jahren Ihr Partner für Sauberkeit.
            </p>
            <div className="flex gap-4">
              {/* Social Media Logos removed as requested */}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-lg">Links</h4>
            <ul className="space-y-4 text-slate-500">
              <li><button onClick={onNavigateHome} className="hover:text-blue-600 transition-colors text-left">Über uns</button></li>
              <li><button onClick={onNavigateHome} className="hover:text-blue-600 transition-colors text-left">Dienstleistungen</button></li>
              <li><button onClick={onNavigateHome} className="hover:text-blue-600 transition-colors text-left">Galerie</button></li>
              <li><button onClick={onNavigateHome} className="hover:text-blue-600 transition-colors text-left">Angebot anfordern</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-lg">Leistungen</h4>
            <ul className="space-y-4 text-slate-500">
              <li><button onClick={() => onServiceClick?.('1')} className="hover:text-blue-600 transition-colors text-left">Büroreinigung</button></li>
              <li><button onClick={() => onServiceClick?.('3')} className="hover:text-blue-600 transition-colors text-left">Fensterreinigung</button></li>
              <li><button onClick={() => onServiceClick?.('4')} className="hover:text-blue-600 transition-colors text-left">Grundreinigung</button></li>
              <li><button onClick={() => onServiceClick?.('6')} className="hover:text-blue-600 transition-colors text-left">Klinikreinigung</button></li>
              <li><button onClick={() => onServiceClick?.('7')} className="hover:text-blue-600 transition-colors text-left">Baureinigung</button></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="font-bold text-slate-900 mb-6 text-lg">Newsletter</h4>
            <p className="text-slate-500 mb-4 text-sm leading-relaxed">Erhalten Sie nützliche Reinigungstipps und exklusive Angebote.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="E-Mail..." className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 flex-1 outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="bg-blue-600 text-white p-3 rounded-xl shadow-lg">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} AK MUTAR Reinigungsservice. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <button onClick={() => onNavigateLegal?.('impressum')} className="hover:text-slate-600 transition-colors">Impressum</button>
            <button onClick={() => onNavigateLegal?.('datenschutz')} className="hover:text-slate-600 transition-colors">Datenschutz</button>
            <button onClick={() => onNavigateLegal?.('agb')} className="hover:text-slate-600 transition-colors">AGB</button>
          </div>
          <button
            onClick={scrollToTop}
            className="bg-slate-900 text-white p-4 rounded-full shadow-2xl hover:bg-blue-600 transition-all transform hover:-translate-y-1"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

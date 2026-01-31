
import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { FadeIn, StaggerContainer } from './FadeIn';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns in Kürze!");
  };

  return (
    <section id="contact" className="py-16 lg:py-32 bg-slate-900 relative overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -ml-64 -mb-64"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <StaggerContainer>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
            <div className="lg:w-2/5 flex flex-col justify-center">
              <FadeIn>
                <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Kostenlose Beratung</span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.1]">Bereit für echte <span className="text-blue-400">Brillanz?</span></h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-slate-400 text-xl font-medium leading-relaxed mb-12 opacity-80">
                  Lassen Sie uns gemeinsam die perfekte Reinigungslösung für Ihre Anforderungen finden. Wir beraten Sie unverbindlich und erstellen Ihnen ein maßgeschneidertes Angebot.
                </p>
              </FadeIn>

              <div className="space-y-6">
                {[
                  "Antwort innerhalb von 24 Stunden",
                  "Individuelle Objektbegehung",
                  "Unverbindliche Kostenschätzung"
                ].map((item, i) => (
                  <FadeIn key={i} delay={0.3 + (i * 0.1)}>
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-500/20 p-1.5 rounded-full">
                        <CheckCircle2 className="text-blue-400 w-5 h-5" />
                      </div>
                      <span className="text-white font-bold tracking-wide">{item}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={0.6}>
                <div className="mt-16 pt-16 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="group">
                    <div className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-3">Zentrale Mannheim</div>
                    <div className="text-white text-lg font-bold flex items-center gap-3">
                      <MapPin className="text-blue-500 w-5 h-5" />
                      <a href="https://maps.google.com/?q=S6+10,68161+Mannheim" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                        S6 10, 68161 Mannheim
                      </a>
                    </div>
                  </div>
                  <div className="group">
                    <div className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-3">Direktkontakt</div>
                    <div className="text-white text-lg font-bold flex items-center gap-3">
                      <Phone className="text-blue-500 w-5 h-5" />
                      <a href="tel:017680299982" className="hover:text-blue-400 transition-colors">
                        0176 80299982
                      </a>
                    </div>
                  </div>
                </div>
                <div className="group mt-8">
                  <div className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-3">Öffnungszeiten</div>
                  <ul className="text-white text-base font-medium space-y-1">
                    <li className="flex justify-between max-w-xs"><span className="opacity-70">Mo - Fr:</span> <span>08:00 – 20:00 Uhr</span></li>
                    <li className="flex justify-between max-w-xs"><span className="opacity-70">Samstag:</span> <span>08:00 – 20:00 Uhr</span></li>
                    <li className="flex justify-between max-w-xs"><span className="opacity-70">Sonntag:</span> <span>08:00 – 20:00 Uhr</span></li>
                  </ul>
                </div>
              </FadeIn>
            </div>

            <div className="lg:w-3/5">
              <FadeIn direction="left" delay={0.4}>
                <div className="bg-white p-6 sm:p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] shadow-3xl">
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div className="space-y-2">
                        <label className="text-slate-900 font-extrabold text-sm uppercase tracking-widest ml-1">Name / Firma</label>
                        <input
                          type="text"
                          required
                          className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all font-bold"
                          placeholder="Ihr Name"
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-900 font-extrabold text-sm uppercase tracking-widest ml-1">E-Mail Adresse</label>
                        <input
                          type="email"
                          required
                          className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all font-bold"
                          placeholder="mail@beispiel.de"
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-900 font-extrabold text-sm uppercase tracking-widest ml-1">Telefonnummer</label>
                        <input
                          type="tel"
                          className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all font-bold"
                          placeholder="0123 / 456 78 90"
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-900 font-extrabold text-sm uppercase tracking-widest ml-1">Ihre Anforderung</label>
                        <select
                          className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all font-bold appearance-none cursor-pointer"
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        >
                          <option value="">Wählen Sie einen Service</option>
                          <option value="buero">Büroreinigung</option>
                          <option value="gebaeude">Gebäudereinigung</option>
                          <option value="fenster">Fenster- & Glasreinigung</option>
                          <option value="klinik">Klinikreinigung</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2 mb-10">
                      <label className="text-slate-900 font-extrabold text-sm uppercase tracking-widest ml-1">Nachricht</label>
                      <textarea
                        rows={4}
                        required
                        className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all font-bold resize-none"
                        placeholder="Erzählen Sie uns kurz von Ihrem Projekt..."
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-slate-900 text-white font-black py-6 rounded-2xl shadow-2xl shadow-blue-600/30 transition-all flex items-center justify-center gap-4 text-xl transform hover:-translate-y-1"
                    >
                      Anfrage absenden
                      <Send size={24} />
                    </button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </StaggerContainer >
      </div >
    </section >
  );
};

export default Contact;

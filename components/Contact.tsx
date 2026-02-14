
import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import { FadeIn, StaggerContainer } from './FadeIn';

const WEB3FORMS_ACCESS_KEY = "147d4b53-adb7-4bf0-a198-ca5439812a46";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const submissionData = new FormData();
      submissionData.append("access_key", WEB3FORMS_ACCESS_KEY);
      submissionData.append("subject", `Neue Anfrage von ${formData.name} – AK MUTAR Reinigungsservice`);
      submissionData.append("from_name", "AK MUTAR Webseite");
      submissionData.append("name", formData.name);
      submissionData.append("email", formData.email);
      if (formData.phone) submissionData.append("phone", formData.phone);
      if (formData.service) submissionData.append("service", formData.service);
      submissionData.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
                  {submitStatus === 'success' ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="bg-green-100 p-4 rounded-full mb-6">
                        <CheckCircle2 className="text-green-600 w-12 h-12" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Vielen Dank!</h3>
                      <p className="text-slate-500 text-lg font-medium max-w-md">
                        Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns innerhalb von 24 Stunden bei Ihnen!
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-2">
                          <label className="text-slate-900 font-extrabold text-sm uppercase tracking-widest ml-1">Name / Firma</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all font-bold"
                            placeholder="Ihr Name"
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-slate-900 font-extrabold text-sm uppercase tracking-widest ml-1">E-Mail Adresse</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all font-bold"
                            placeholder="mail@beispiel.de"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-slate-900 font-extrabold text-sm uppercase tracking-widest ml-1">Telefonnummer</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all font-bold"
                            placeholder="0123 / 456 78 90"
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-slate-900 font-extrabold text-sm uppercase tracking-widest ml-1">Ihre Anforderung</label>
                          <select
                            name="service"
                            value={formData.service}
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
                          name="message"
                          required
                          value={formData.message}
                          className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all font-bold resize-none"
                          placeholder="Erzählen Sie uns kurz von Ihrem Projekt..."
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                      </div>

                      {submitStatus === 'error' && (
                        <div className="mb-6 bg-red-50 border-2 border-red-200 text-red-700 p-4 rounded-2xl text-center font-bold">
                          Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-slate-900 text-white font-black py-6 rounded-2xl shadow-2xl shadow-blue-600/30 transition-all flex items-center justify-center gap-4 text-xl transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        {isSubmitting ? (
                          <>
                            Wird gesendet...
                            <Loader2 size={24} className="animate-spin" />
                          </>
                        ) : (
                          <>
                            Anfrage absenden
                            <Send size={24} />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Contact;



import React from 'react';
import { ChevronRight, Star, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100dvh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* ... overlays ... */}
        <div className="absolute inset-0 bg-slate-900/40 z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900/90 z-[2]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.4)_100%)] z-[3]"></div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 flex flex-col items-center pt-20 sm:pt-0">
        {/* Enhanced Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 text-blue-100 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full mb-6 sm:mb-8 shadow-xl shadow-black/20"
        >
          <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
          <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest uppercase text-center">Top 10 Reinigungsfirma Mannheim</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 sm:mb-8 leading-[1.1] sm:leading-[1.05] max-w-5xl text-center drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        >
          Brillante Reinheit für <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-200 block sm:inline mt-2 sm:mt-0">Ihre Immobilien.</span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-sm sm:text-lg md:text-xl lg:text-2xl text-slate-100 mb-8 md:mb-12 max-w-3xl mx-auto font-semibold leading-relaxed text-center drop-shadow-lg opacity-95 px-2 sm:px-0"
        >
          AK MUTAR steht für exzellente Sauberkeit, Zuverlässigkeit und Werterhalt. Wir bringen Glanz in jedes Detail – professionell, diskret und effizient.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto px-4 sm:px-0"
        >
          <a href="#contact" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 sm:px-12 sm:py-5 rounded-2xl font-black text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(37,99,235,0.4)]">
            <span>Jetzt Angebot anfordern</span>
            <ChevronRight size={18} className="sm:w-[22px] sm:h-[22px] group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-2 transition-all hover:border-white/50">
            Unsere Services
          </a>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-8 sm:mt-12 md:mt-20 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-10 pb-20 sm:pb-0"
        >
          <div className="flex items-center gap-2 sm:gap-3 text-white/90 drop-shadow-md bg-slate-900/30 sm:bg-transparent px-3 py-1.5 sm:p-0 rounded-full sm:rounded-none backdrop-blur-sm sm:backdrop-blur-none border border-white/10 sm:border-none">
            <div className="bg-yellow-400/20 p-1.5 sm:p-2 rounded-lg backdrop-blur-sm border border-yellow-400/30">
              <Star className="fill-yellow-400 text-yellow-400 w-3.5 h-3.5 sm:w-5 sm:h-5" />
            </div>
            <span className="text-xs sm:text-base font-extrabold tracking-tight">4.9/5 Google Bewertung</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/20"></div>
          <div className="flex items-center gap-2 sm:gap-3 text-white/90 drop-shadow-md bg-slate-900/30 sm:bg-transparent px-3 py-1.5 sm:p-0 rounded-full sm:rounded-none backdrop-blur-sm sm:backdrop-blur-none border border-white/10 sm:border-none">
            <div className="bg-blue-400/20 p-1.5 sm:p-2 rounded-lg backdrop-blur-sm border border-blue-400/30">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-blue-400" />
            </div>
            <span className="text-xs sm:text-base font-extrabold tracking-tight">Meistergeführter Fachbetrieb</span>
          </div>
        </motion.div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        {/* ... svg ... */}
        <svg className="relative block w-[calc(100%+1.3px)] h-[40px] sm:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120 " preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#f8fafc"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

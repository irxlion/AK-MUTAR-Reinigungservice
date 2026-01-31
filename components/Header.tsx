
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Shield } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
  onNavigateHome?: () => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, onNavigateHome }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    onNavigateHome?.();
    setIsOpen(false);
    // Small timeout to allow state update and DOM mount before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };


  const navLinks = [
    { name: 'Über Uns', href: '#about' },
    { name: 'Dienstleistungen', href: '#services' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'glass-nav py-4 shadow-xl shadow-slate-900/5' : 'bg-transparent py-6 md:py-8'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <button
          onClick={() => { onNavigateHome?.(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 group"
        >
          <div className="group-hover:scale-110 transition-transform">
            <img src="/akmutar_logo.png" alt="AK MUTAR Logo" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className={`text-2xl font-black tracking-tighter text-left ${isScrolled ? 'text-slate-900' : 'text-white'}`}>AK MUTAR</span>
            <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${isScrolled ? 'text-blue-600' : 'text-blue-300'}`}>Premium Services</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-blue-500 relative group ${isScrolled ? 'text-slate-700' : 'text-white'}`}
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-blue-600 rounded-full group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
          <a
            href="tel:017680299982"
            className="flex items-center gap-3 bg-blue-600 text-white px-7 py-3.5 rounded-2xl font-bold text-sm tracking-wide hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/25 active:scale-95"
          >
            <Phone size={16} />
            <span>0176 80299982</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden bg-blue-600 text-white p-3 rounded-2xl shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden fixed inset-0 bg-white z-[90] transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-slate-900 bg-slate-100 p-4 rounded-full">
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-3xl font-black text-slate-900 tracking-tight hover:text-blue-600 transition-colors"
            >
              {link.name}
            </button>
          ))}
          <a
            href="tel:017680299982"
            className="flex items-center gap-4 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-blue-600/40"
          >
            <Phone size={24} />
            Jetzt anrufen
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

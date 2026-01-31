
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import USPs from './components/USPs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ServiceAreas from './components/ServiceAreas';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import AGB from './components/AGB';
import { SERVICES } from './constants';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'service' | 'impressum' | 'datenschutz' | 'agb'>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServiceClick = (id: string) => {
    setSelectedServiceId(id);
    setCurrentView('service');
    window.scrollTo(0, 0);
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    setSelectedServiceId(null);
    window.scrollTo(0, 0);
  };

  const handleNavigateLegal = (view: 'impressum' | 'datenschutz' | 'agb') => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  // Find the selected service object
  const selectedService = selectedServiceId
    ? SERVICES.find(s => s.id === selectedServiceId)
    : null;

  return (
    <div className="flex flex-col min-h-screen">
      <Header isScrolled={isScrolled} onNavigateHome={handleNavigateHome} />
      <main>
        {currentView === 'service' && selectedService && (
          <ServiceDetail service={selectedService} onBack={handleNavigateHome} />
        )}

        {currentView === 'impressum' && (
          <Impressum onBack={handleNavigateHome} />
        )}

        {currentView === 'datenschutz' && (
          <Datenschutz onBack={handleNavigateHome} />
        )}

        {currentView === 'agb' && (
          <AGB onBack={handleNavigateHome} />
        )}

        {currentView === 'home' && (
          <>
            <Hero />
            <About />
            <Services onServiceClick={handleServiceClick} />
            <USPs />
            <Gallery />
            <Testimonials />
            <ServiceAreas />
            <Contact />
          </>
        )}
      </main>
      <Footer
        onNavigateHome={handleNavigateHome}
        onNavigateLegal={handleNavigateLegal}
        onServiceClick={handleServiceClick}
      />
    </div>
  );
};

export default App;

import { useState } from 'react';
import { useScrollSpy } from './hooks/useScrollSpy';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { LightboxProvider } from './context/LightboxContext';
import { Lightbox } from './components/ui/Lightbox';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { ElevationProfile } from './components/ElevationProfile';
import { Footer } from './components/Footer';
import { ThursdaySection } from './components/sections/ThursdaySection';
import { FridaySection } from './components/sections/FridaySection';
import { SaturdaySection } from './components/sections/SaturdaySection';
import { SundaySection } from './components/sections/SundaySection';
import { GearSection } from './components/sections/GearSection';
import { BasinSection } from './components/sections/BasinSection';
import { WelcomeModal } from './components/WelcomeModal';
import type { Lang } from './context/LanguageContext';

const SECTION_IDS = ['thu', 'fri', 'sat', 'sun', 'gear', 'basin'];

function AppContent() {
  const currentSection = useScrollSpy(SECTION_IDS);
  const { setLang } = useLanguage();
  const [langChosen, setLangChosen] = useState(false);

  function handleLangSelect(lang: Lang) {
    setLang(lang);
    setLangChosen(true);
  }

  return (
    <>
      <div className="topo-bg">
        <Hero />
        <Nav currentSection={currentSection} />
        <ElevationProfile currentSection={currentSection} />
        <main style={{ position: 'relative', zIndex: 1 }}>
          <ThursdaySection />
          <FridaySection />
          <SaturdaySection />
          <SundaySection />
          <GearSection />
          <BasinSection />
        </main>
        <Footer />
      </div>
      <Lightbox />
      {!langChosen && <WelcomeModal onSelect={handleLangSelect} />}
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
    <LightboxProvider>
      <AppContent />
    </LightboxProvider>
    </LanguageProvider>
  );
}

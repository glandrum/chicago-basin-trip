import { useScrollSpy } from './hooks/useScrollSpy';
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

const SECTION_IDS = ['thu', 'fri', 'sat', 'sun', 'gear', 'basin'];

export default function App() {
  const currentSection = useScrollSpy(SECTION_IDS);

  return (
    <LightboxProvider>
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
    </LightboxProvider>
  );
}

import { useState, useMemo } from 'react';
import { EolusContext } from './context/EolusContext';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { ElevationProfile } from './components/ElevationProfile';
import { Footer } from './components/Footer';
import { ThursdaySection } from './components/sections/ThursdaySection';
import { FridaySection } from './components/sections/FridaySection';
import { SaturdaySection } from './components/sections/SaturdaySection';
import { EolusSection } from './components/sections/EolusSection';
import { SundaySection } from './components/sections/SundaySection';
import { RoutesSection } from './components/sections/RoutesSection';
import { GearSection } from './components/sections/GearSection';
import { BasinSection } from './components/sections/BasinSection';

const BASE_SECTIONS = ['thu', 'fri', 'sat', 'sun', 'routes', 'gear', 'basin'];

export default function App() {
  const [withEolus, setWithEolus] = useState(false);

  const sectionIds = useMemo(
    () =>
      withEolus
        ? ['thu', 'fri', 'sat', 'eolus-day', 'sun', 'routes', 'gear', 'basin']
        : BASE_SECTIONS,
    [withEolus],
  );

  const currentSection = useScrollSpy(sectionIds);

  return (
    <EolusContext.Provider value={{ withEolus, setWithEolus }}>
      <div className="topo-bg">
        <Hero withEolus={withEolus} />
        <Nav currentSection={currentSection} withEolus={withEolus} />
        <ElevationProfile currentSection={currentSection} withEolus={withEolus} />

        <main style={{ position: 'relative', zIndex: 1 }}>
          <ThursdaySection />
          <FridaySection />
          <SaturdaySection />
          {withEolus && <EolusSection />}
          <SundaySection />
          <RoutesSection />
          <GearSection />
          <BasinSection />
        </main>

        <Footer />
      </div>
    </EolusContext.Provider>
  );
}

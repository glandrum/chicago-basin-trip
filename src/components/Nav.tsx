import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface NavLink { id: string; en: string; es: string; }

const NAV_LINKS: NavLink[] = [
  { id: 'thu',   en: 'Thu · Fly',          es: 'Jue · Vuelo' },
  { id: 'fri',   en: 'Fri · Train & hike', es: 'Vie · Tren y caminata' },
  { id: 'sat',   en: 'Sat · Summits',      es: 'Sáb · Cumbres' },
  { id: 'sun',   en: 'Out · Train home',   es: 'Sal · Tren de vuelta' },
  { id: 'gear',  en: 'Gear',               es: 'Equipo' },
  { id: 'basin', en: 'Altitude & weather', es: 'Altitud y clima' },
];

interface NavProps { currentSection: string; }

export function Nav({ currentSection }: NavProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const { lang, toggle } = useLanguage();

  useEffect(() => {
    const list = listRef.current;
    if (!list || window.matchMedia('(min-width: 800px)').matches) return;
    const active = list.querySelector<HTMLElement>('.is-active')?.parentElement;
    if (active) {
      list.scrollTo({ left: Math.max(0, active.offsetLeft - 16), behavior: 'smooth' });
    }
  }, [currentSection]);

  return (
    <nav
      className="sticky top-0 z-20 border-b border-mt-600"
      style={{
        background: 'rgba(11,21,32,.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
      aria-label="Sections"
    >
      <div className="wrap relative">
        <ul
          ref={listRef}
          className="list-none m-0 p-0 flex overflow-x-auto items-stretch"
          style={{
            scrollbarWidth: 'none',
            height: 'var(--nav-h)',
            WebkitOverflowScrolling: 'touch',
            scrollSnapType: 'x proximity',
          }}
        >
          {/* Brand */}
          <li className="flex-shrink-0">
            <a
              href="#top"
              className="flex items-center h-full px-3 font-cond text-[17px] font-bold no-underline text-mt-50 whitespace-nowrap"
              style={{ minHeight: '44px' }}
            >
              Chicago Basin{' '}
              <small className="hidden sm:inline ml-2 font-medium text-contour text-[14px]">
                Windom · Sunlight
              </small>
            </a>
          </li>

          {NAV_LINKS.map((link) => (
            <li key={link.id} className="flex-shrink-0" style={{ scrollSnapAlign: 'start' }}>
              <a
                href={`#${link.id}`}
                data-spy={link.id}
                className={[
                  'flex items-center h-full px-3 font-cond text-[16px] font-semibold no-underline whitespace-nowrap border-b-[3px] transition-colors duration-150',
                  currentSection === link.id
                    ? 'is-active text-mt-50 border-rail'
                    : 'text-mt-300 border-transparent hover:text-mt-100',
                ].join(' ')}
                style={{ minHeight: '44px' }}
              >
                {lang === 'en' ? link.en : link.es}
              </a>
            </li>
          ))}
        </ul>

        {/* Language toggle — pinned to right, sits above mobile fade */}
        <div
          className="absolute right-0 top-0 h-full flex items-center pr-3 z-10"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(11,21,32,.92) 28%)' }}
        >
          <button
            onClick={toggle}
            className="font-cond font-semibold text-[13px] uppercase tracking-widest border px-3 transition-colors duration-150"
            style={{
              minHeight: '30px',
              borderColor: 'rgba(212,147,58,.45)',
              color: '#D4933A',
              background: 'rgba(11,21,32,.85)',
            }}
            aria-label={lang === 'en' ? 'Switch to Spanish' : 'Switch to English'}
          >
            {lang === 'en' ? 'Español' : 'English'}
          </button>
        </div>
      </div>

      <style>{`.nav ul::-webkit-scrollbar { display: none; }`}</style>
    </nav>
  );
}

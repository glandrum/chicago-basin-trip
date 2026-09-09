import { useEffect, useRef } from 'react';

interface NavLink {
  id: string;
  label: string;
  eolus?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { id: 'thu',       label: 'Thu · Fly' },
  { id: 'fri',       label: 'Fri · Train & hike' },
  { id: 'sat',       label: 'Sat · Summits' },
  { id: 'eolus-day', label: 'Sun · Eolus', eolus: true },
  { id: 'sun',       label: 'Out · Train home' },
  { id: 'routes',    label: 'Routes' },
  { id: 'gear',      label: 'Gear' },
  { id: 'basin',     label: 'Altitude & weather' },
];

interface NavProps {
  currentSection: string;
  withEolus: boolean;
}

export function Nav({ currentSection, withEolus }: NavProps) {
  const listRef = useRef<HTMLUListElement>(null);

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

          {NAV_LINKS.filter((l) => !l.eolus || withEolus).map((link) => (
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
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-10 pointer-events-none sm:hidden"
          style={{ background: 'linear-gradient(90deg, rgba(11,21,32,0), rgba(11,21,32,.92))' }}
        />
      </div>

      <style>{`.nav ul::-webkit-scrollbar { display: none; }`}</style>
    </nav>
  );
}

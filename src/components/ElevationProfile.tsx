import { useCallback, useEffect, useRef } from 'react';
import { STATIONS, SECTION_FOR, STATION_BY_SECTION } from '../data/stations';
import type { Station } from '../data/stations';

interface ElevationProfileProps {
  currentSection: string;
  withEolus: boolean;
}

const MIN_FT = 0;
const MAX_FT = 15000;
const yOf = (ft: number, bottom: number, top: number) =>
  bottom - ((ft - MIN_FT) / (MAX_FT - MIN_FT)) * (bottom - top);

export function ElevationProfile({ currentSection, withEolus }: ElevationProfileProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const fillRef = useRef<SVGPathElement>(null);
  const segsRef = useRef<SVGGElement>(null);
  const stnsRef = useRef<SVGGElement>(null);
  const markRef = useRef<SVGCircleElement>(null);
  const gridRef = useRef<SVGGElement>(null);
  const capNameRef = useRef<HTMLSpanElement>(null);
  const capElevRef = useRef<HTMLSpanElement>(null);

  const activeStations = useCallback(
    (): Station[] => STATIONS.filter((s) => !s.eolus || withEolus),
    [withEolus],
  );

  const isMobile = () => window.matchMedia('(max-width: 640px)').matches;

  const build = useCallback(() => {
    const mob = isMobile();
    const W = mob ? 430 : 1000;
    const H = mob ? 170 : 150;
    const top = 18;
    const bottom = mob ? 140 : 128;
    const svg = svgRef.current;
    if (!svg) return { W, H, top, bottom };

    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const st = activeStations();
    const maxX = st[st.length - 1].x;
    const positioned = st.map((s) => ({ ...s, px: (s.x / maxX) * W }));

    const pts = positioned.map((s) => `${s.px.toFixed(1)},${yOf(s.ft, bottom, top).toFixed(1)}`);
    lineRef.current?.setAttribute('d', 'M' + pts.join(' L'));
    fillRef.current?.setAttribute(
      'd',
      'M' + pts.join(' L') + ` L${W},${bottom} L0,${bottom} Z`,
    );

    if (gridRef.current) {
      gridRef.current.innerHTML = [5000, 10000, 14000]
        .map(
          (ft) =>
            `<line class="p-grid" x1="0" x2="${W}" y1="${yOf(ft, bottom, top)}" y2="${yOf(ft, bottom, top)}"/>` +
            `<text class="p-gl" x="3" y="${yOf(ft, bottom, top) - 3}">${ft.toLocaleString()}'</text>`,
        )
        .join('');
    }

    if (segsRef.current) {
      segsRef.current.innerHTML = positioned
        .slice(1)
        .map((s, i) => {
          const a = positioned[i];
          return `<path class="p-seg" data-seg="${s.id}" d="M${a.px},${yOf(a.ft, bottom, top)} L${s.px},${yOf(s.ft, bottom, top)}"/>`;
        })
        .join('');
    }

    if (stnsRef.current) {
      stnsRef.current.innerHTML = positioned
        .map((s) => {
          const y = yOf(s.ft, bottom, top);
          const above = s.ft > 9000;
          const ty = above ? y - 11 : y + 18;
          const anchor = s.px < 40 ? 'start' : s.px > W - 40 ? 'end' : 'middle';
          const hide = s.opt || (mob && s.mobileHide);
          return (
            `<g class="p-stn" data-stn="${s.id}" tabindex="0" role="button" aria-label="${s.name}, ${s.ft.toLocaleString()} feet">` +
            `<circle cx="${s.px}" cy="${y}" r="${mob ? 5 : 4.5}"/>` +
            `<text class="${hide ? 'opt' : ''}" x="${s.px}" y="${ty}" text-anchor="${anchor}">${s.name}</text>` +
            `</g>`
          );
        })
        .join('');

      stnsRef.current.addEventListener('click', (e) => {
        const g = (e.target as Element).closest<HTMLElement>('.p-stn');
        if (!g) return;
        const secId = SECTION_FOR[g.dataset.stn ?? ''];
        if (secId) {
          document.getElementById(secId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
      stnsRef.current.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          const g = (e.target as Element).closest<HTMLElement>('.p-stn');
          if (g) { e.preventDefault(); g.click(); }
        }
      });
    }

    return { W, H, top, bottom, positioned };
  }, [activeStations]);

  const setStation = useCallback(
    (id: string) => {
      const st = activeStations();
      const mob = isMobile();
      const W = mob ? 430 : 1000;
      const bottom = mob ? 140 : 128;
      const top = 18;
      const maxX = st[st.length - 1].x;
      const positioned = st.map((s) => ({ ...s, px: (s.x / maxX) * W }));

      const s = positioned.find((x) => x.id === id);
      if (!s || !markRef.current) return;

      markRef.current.setAttribute('transform', `translate(${s.px},${yOf(s.ft, bottom, top)})`);
      if (capNameRef.current) capNameRef.current.textContent = s.name;
      if (capElevRef.current) capElevRef.current.textContent = `${s.ft.toLocaleString()}'`;

      svgRef.current?.querySelectorAll('.p-stn').forEach((g) => {
        g.classList.toggle('is-on', (g as HTMLElement).dataset.stn === id);
      });
      svgRef.current?.querySelectorAll('.p-seg').forEach((p) => p.classList.remove('is-on'));

      const sec = SECTION_FOR[id];
      positioned.slice(1).forEach((x) => {
        if (SECTION_FOR[x.id] === sec) {
          svgRef.current?.querySelector(`.p-seg[data-seg="${x.id}"]`)?.classList.add('is-on');
        }
      });
    },
    [activeStations],
  );

  useEffect(() => {
    build();
    setStation('dfw');

    let lastMob = isMobile();
    const onResize = () => {
      if (isMobile() !== lastMob) {
        lastMob = isMobile();
        build();
        setStation('dfw');
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [build, setStation, withEolus]);

  useEffect(() => {
    if (!currentSection) { setStation('dfw'); return; }
    const stationId = STATION_BY_SECTION[currentSection] ?? 'camp';
    setStation(stationId);
  }, [currentSection, setStation]);

  return (
    <div
      className="elevation-profile border-b border-mt-600"
      style={{ background: '#0F1C26' }}
    >
      <div className="wrap py-2">
        <svg
          ref={svgRef}
          viewBox="0 0 1000 150"
          role="img"
          aria-labelledby="profTitle"
          className="w-full h-auto block overflow-visible"
        >
          <title id="profTitle">
            Elevation profile from Dallas at 430 feet to Windom Peak at 14,089 feet and back to Durango
          </title>
          <defs>
            <linearGradient id="pf" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#A06848" stopOpacity="0.28" />
              <stop offset="1" stopColor="#A06848" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <g ref={gridRef} />
          <path ref={fillRef} className="p-fill" d="" />
          <path ref={lineRef} className="p-line" d="" />
          <g ref={segsRef} />
          <g ref={stnsRef} />
          <circle ref={markRef} className="p-mark" r="6" cx="0" cy="0" />
        </svg>
        <div className="flex justify-between gap-3 text-[12.5px] text-mt-300 mt-1 flex-wrap">
          <span>
            <b ref={capNameRef} className="font-cond text-[17px] font-semibold text-mt-50">Dallas</b>{' '}
            <span ref={capElevRef}>430'</span>
          </span>
          <span className="hidden md:inline text-mt-400">
            Scroll the itinerary and the marker rides along the profile. Click a station to jump.
          </span>
        </div>
      </div>
    </div>
  );
}

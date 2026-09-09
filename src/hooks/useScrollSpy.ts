import { useEffect, useState } from 'react';

export function useScrollSpy(ids: string[]): string {
  const [current, setCurrent] = useState('');

  useEffect(() => {
    const navH = 52;
    const profileEl = document.querySelector('.elevation-profile');

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).map((e) => e.target);
        if (!visible.length) return;

        const profileH = profileEl ? profileEl.getBoundingClientRect().height : 0;
        const offset = navH + (window.matchMedia('(min-width:800px)').matches ? profileH : 0);

        visible.sort(
          (a, b) =>
            Math.abs(a.getBoundingClientRect().top - offset) -
            Math.abs(b.getBoundingClientRect().top - offset),
        );

        const id = (visible[0] as HTMLElement).dataset.section ?? '';
        setCurrent(id);
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0, 0.05, 0.2, 0.5] },
    );

    const els = ids
      .map((id) => document.querySelector(`[data-section="${id}"]`))
      .filter(Boolean) as Element[];

    els.forEach((el) => io.observe(el));

    const onScroll = () => {
      if (window.scrollY < 200) setCurrent('');
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [ids.join(',')]);

  return current;
}

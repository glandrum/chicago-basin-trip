import type { ReactNode } from 'react';

interface RouteCardProps {
  title: ReactNode;
  meta: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function RouteCard({ title, meta, children, defaultOpen = false }: RouteCardProps) {
  return (
    <details className="route-card" open={defaultOpen}>
      <summary className="route-summary">
        <div>
          <h3 className="font-cond text-[clamp(20px,4.5vw,24px)] font-semibold text-mt-50">
            {title}
          </h3>
          <div className="text-[13px] text-mt-300 mt-1">{meta}</div>
        </div>
        <span className="route-chev" aria-hidden="true">+</span>
      </summary>
      <div className="px-4 pb-4 pt-0 border-t border-mt-600">
        {children}
      </div>
    </details>
  );
}

import type { ReactNode } from 'react';

interface NoteProps {
  title?: string;
  variant?: 'default' | 'water' | 'forest';
  children: ReactNode;
}

const CONFIG = {
  default: { border: '#D4933A', bg: 'rgba(212,147,58,.10)' },
  water:   { border: '#2F7090', bg: 'rgba(47,112,144,.10)' },
  forest:  { border: '#4A6E42', bg: 'rgba(74,110,66,.10)' },
} as const;

export function Note({ title, variant = 'default', children }: NoteProps) {
  const { border, bg } = CONFIG[variant];
  return (
    <div
      style={{ borderLeftColor: border, background: bg }}
      className="border-l-4 p-4 mt-5 text-[15px] text-mt-100"
    >
      {title && (
        <h4 className="font-cond text-[18px] font-semibold mb-2 text-mt-50">{title}</h4>
      )}
      {children}
    </div>
  );
}

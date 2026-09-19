import { useEffect, useRef } from 'react';
import type { Lang } from '../context/LanguageContext';

interface WelcomeModalProps {
  onSelect: (lang: Lang) => void;
}

export function WelcomeModal({ onSelect }: WelcomeModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="bg-transparent p-0 max-w-none w-full h-full m-0 outline-none"
      style={{ maxWidth: '100vw', maxHeight: '100vh' }}
      onKeyDown={(e) => { if (e.key === 'Escape') e.preventDefault(); }}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 flex items-center justify-center p-4"
        style={{ background: 'rgba(5,11,18,.88)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
      >
        {/* Card */}
        <div
          className="relative w-full max-w-[480px] border border-mt-600"
          style={{ background: '#0D1B2A' }}
        >
          {/* Gold top bar */}
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #D4933A, #a06028)' }} />

          <div className="p-8 sm:p-10">
            {/* Mountain icon */}
            <svg
              viewBox="0 0 48 28"
              className="mb-6"
              style={{ width: 56, height: 33, display: 'block' }}
              aria-hidden="true"
            >
              <path d="M2 27 L18 4 L34 27Z" fill="#A06848" />
              <path d="M15 14 L18 4 L21 14Z" fill="#EDE0CC" />
              <path d="M22 27 L36 8 L46 27Z" fill="rgba(160,104,72,.55)" />
            </svg>

            <p
              className="font-cond font-semibold mb-1"
              style={{ fontSize: 13, letterSpacing: '0.12em', color: '#D4933A', textTransform: 'uppercase' }}
            >
              Chicago Basin · Weminuche Wilderness
            </p>

            <h1
              className="font-cond font-bold text-mt-50 mb-2"
              style={{ fontSize: 'clamp(26px,6vw,36px)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
            >
              Choose your language
              <span className="block" style={{ color: 'rgba(230,237,232,.45)', fontSize: '0.72em', fontWeight: 500 }}>
                Elige tu idioma
              </span>
            </h1>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => onSelect('en')}
                className="flex-1 font-cond font-bold transition-colors duration-150"
                style={{
                  minHeight: 52,
                  fontSize: 18,
                  background: '#D4933A',
                  color: '#0D1B2A',
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '0.02em',
                }}
                autoFocus
              >
                English
              </button>
              <button
                onClick={() => onSelect('es')}
                className="flex-1 font-cond font-bold transition-colors duration-150"
                style={{
                  minHeight: 52,
                  fontSize: 18,
                  background: 'transparent',
                  color: '#D4933A',
                  border: '2px solid rgba(212,147,58,.5)',
                  cursor: 'pointer',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#D4933A'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(212,147,58,.5)'; }}
              >
                Español
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}

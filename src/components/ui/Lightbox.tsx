import { useEffect, useCallback } from 'react';
import { useLightbox } from '../../context/LightboxContext';

export function Lightbox() {
  const { state, close, go } = useLightbox();

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    },
    [close, go],
  );

  useEffect(() => {
    if (!state) return;
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [state, handleKey]);

  if (!state) return null;

  const { images, index } = state;
  const src = images[index];
  const multi = images.length > 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
    >
      {/* backdrop */}
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.93)' }} />

      {/* image */}
      <div
        className="relative z-10 flex flex-col items-center"
        style={{ padding: multi ? '0 64px' : '0 48px' }}
        onClick={e => e.stopPropagation()}
      >
        <img
          key={src}
          src={src}
          alt=""
          style={{ maxWidth: '90vw', maxHeight: '84vh', objectFit: 'contain', display: 'block' }}
        />
        {multi && (
          <div className="mt-3 text-zinc-500 text-[13px] select-none">
            {index + 1} / {images.length}
          </div>
        )}
      </div>

      {/* prev */}
      {multi && (
        <button
          className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border border-zinc-700 text-zinc-200 hover:bg-zinc-700 transition-colors z-20"
          style={{ width: 44, height: 44, background: 'rgba(24,24,27,0.85)', fontSize: 26 }}
          onClick={e => { e.stopPropagation(); go(-1); }}
          aria-label="Previous"
        >
          ‹
        </button>
      )}

      {/* next */}
      {multi && (
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border border-zinc-700 text-zinc-200 hover:bg-zinc-700 transition-colors z-20"
          style={{ width: 44, height: 44, background: 'rgba(24,24,27,0.85)', fontSize: 26 }}
          onClick={e => { e.stopPropagation(); go(1); }}
          aria-label="Next"
        >
          ›
        </button>
      )}

      {/* close */}
      <button
        className="absolute top-4 right-4 flex items-center justify-center rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-700 transition-colors z-20"
        style={{ width: 40, height: 40, background: 'rgba(24,24,27,0.85)', fontSize: 18 }}
        onClick={close}
        aria-label="Close"
      >
        ✕
      </button>
    </div>
  );
}

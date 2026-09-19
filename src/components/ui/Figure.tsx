import { useCallback, useState } from 'react';
import type { ReactNode } from 'react';
import { usePhotoGroup } from '../../context/PhotoGroupContext';
import { useLightbox } from '../../context/LightboxContext';

interface FigureProps {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  caption?: ReactNode;
  credit?: string;
  aspectRatio?: string;
  loading?: 'lazy' | 'eager';
}

export function Figure({
  src,
  srcSet,
  sizes,
  alt,
  caption,
  credit,
  aspectRatio = '4/3',
  loading = 'lazy',
}: FigureProps) {
  const [hidden, setHidden] = useState(false);
  const group = usePhotoGroup();
  const { open } = useLightbox();

  const handleClick = useCallback(() => {
    if (group) {
      const idx = group.images.indexOf(src);
      if (idx >= 0) { group.openAt(idx); return; }
    }
    open([src], 0);
  }, [src, group, open]);

  if (hidden) return null;

  return (
    <figure className="m-0 group" onClick={handleClick} style={{ cursor: 'zoom-in' }}>
      <div className="overflow-hidden" style={{ aspectRatio }}>
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          loading={loading}
          onError={() => setHidden(true)}
          className="w-full h-full object-cover border border-mt-600 transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      {(caption || credit) && (
        <figcaption className="text-[13px] text-mt-300 mt-2 leading-[1.4]">
          {caption}{' '}
          {credit && <span className="text-mt-400">{credit}</span>}
        </figcaption>
      )}
    </figure>
  );
}

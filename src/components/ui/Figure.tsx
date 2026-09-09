import { useState } from 'react';
import type { ReactNode } from 'react';

interface FigureProps {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  caption?: ReactNode;
  credit?: string;
  aspectRatio?: '4/3' | '16/10' | '21/9';
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

  if (hidden) return null;

  return (
    <figure className="m-0 group">
      <div
        className="overflow-hidden"
        style={{ aspectRatio }}
      >
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

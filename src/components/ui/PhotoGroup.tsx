import { useCallback, type ReactNode } from 'react';
import { PhotoGroupContext } from '../../context/PhotoGroupContext';
import { useLightbox } from '../../context/LightboxContext';

interface PhotoGroupProps {
  images: string[];
  children: ReactNode;
}

export function PhotoGroup({ images, children }: PhotoGroupProps) {
  const { open } = useLightbox();
  const openAt = useCallback((i: number) => open(images, i), [images, open]);

  return (
    <PhotoGroupContext.Provider value={{ images, openAt }}>
      {children}
    </PhotoGroupContext.Provider>
  );
}

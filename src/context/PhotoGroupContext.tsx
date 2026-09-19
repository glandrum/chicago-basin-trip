import { createContext, useContext } from 'react';

export interface PhotoGroupContextType {
  images: string[];
  openAt: (index: number) => void;
}

export const PhotoGroupContext = createContext<PhotoGroupContextType | null>(null);
export const usePhotoGroup = () => useContext(PhotoGroupContext);

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';

interface LightboxState {
  images: string[];
  index: number;
}

interface LightboxContextType {
  open: (images: string[], index: number) => void;
  close: () => void;
  go: (delta: number) => void;
  state: LightboxState | null;
}

const LightboxContext = createContext<LightboxContextType | null>(null);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LightboxState | null>(null);

  const open = useCallback((images: string[], index: number) => {
    setState({ images, index });
  }, []);

  const close = useCallback(() => setState(null), []);

  const go = useCallback((delta: number) => {
    setState(prev =>
      prev
        ? { ...prev, index: (prev.index + delta + prev.images.length) % prev.images.length }
        : null,
    );
  }, []);

  return (
    <LightboxContext.Provider value={{ open, close, go, state }}>
      {children}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error('useLightbox must be used within LightboxProvider');
  return ctx;
}

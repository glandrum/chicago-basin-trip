import { createContext, useContext } from 'react';

interface EolusContextValue {
  withEolus: boolean;
  setWithEolus: (v: boolean) => void;
}

export const EolusContext = createContext<EolusContextValue>({
  withEolus: false,
  setWithEolus: () => {},
});

export const useEolus = () => useContext(EolusContext);

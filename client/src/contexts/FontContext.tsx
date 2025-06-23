import { createContext, useContext, useState, ReactNode } from 'react';

type FontType = 'playfair' | 'rigot';

interface FontContextType {
  logoFont: FontType;
  setLogoFont: (font: FontType) => void;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

interface FontProviderProps {
  children: ReactNode;
}

export function FontProvider({ children }: FontProviderProps) {
  const [logoFont, setLogoFont] = useState<FontType>('playfair');

  return (
    <FontContext.Provider value={{ logoFont, setLogoFont }}>
      {children}
    </FontContext.Provider>
  );
}

export function useFont() {
  const context = useContext(FontContext);
  if (context === undefined) {
    throw new Error('useFont must be used within a FontProvider');
  }
  return context;
}
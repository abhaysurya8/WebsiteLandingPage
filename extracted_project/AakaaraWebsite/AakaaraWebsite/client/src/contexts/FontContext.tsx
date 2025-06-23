import { createContext, useContext, useState, ReactNode } from 'react';

type FontContextType = {
  logoFont: 'playfair' | 'rigot';
  setLogoFont: (font: 'playfair' | 'rigot') => void;
};

const FontContext = createContext<FontContextType | undefined>(undefined);

export const FontProvider = ({ children }: { children: ReactNode }) => {
  const [logoFont, setLogoFont] = useState<'playfair' | 'rigot'>('playfair');

  return (
    <FontContext.Provider value={{ logoFont, setLogoFont }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = () => {
  const context = useContext(FontContext);
  if (context === undefined) {
    throw new Error('useFont must be used within a FontProvider');
  }
  return context;
};
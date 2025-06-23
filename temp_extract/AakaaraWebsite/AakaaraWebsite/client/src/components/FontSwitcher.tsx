import { useFont } from "@/contexts/FontContext";
import { Type } from "lucide-react";

const FontSwitcher = () => {
  const { logoFont, setLogoFont } = useFont();

  return (
    <button
      onClick={() => setLogoFont(logoFont === 'playfair' ? 'rigot' : 'playfair')}
      className="fixed bottom-20 right-6 z-50 bg-aakaara-brown text-white p-3 rounded-full shadow-lg hover:bg-aakaara-dark-brown transition-all duration-300 transform hover:scale-110"
      title={`Switch to ${logoFont === 'playfair' ? 'Rigot Bold' : 'Playfair Display'} font`}
      aria-label="Toggle font style"
    >
      <Type className="w-5 h-5" />
    </button>
  );
};

export default FontSwitcher;
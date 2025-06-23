import { useFont } from "@/contexts/FontContext";

export default function FontSwitcher() {
  const { logoFont, setLogoFont } = useFont();

  return (
    <div className="flex items-center space-x-2">
      <span className="text-xs text-aakaara-text">Font:</span>
      <button
        onClick={() => setLogoFont(logoFont === 'playfair' ? 'rigot' : 'playfair')}
        className="text-xs text-aakaara-brown hover:text-aakaara-dark-brown transition-colors border border-aakaara-brown/30 px-2 py-1 rounded"
      >
        {logoFont === 'playfair' ? 'Playfair' : 'Rigot'}
      </button>
    </div>
  );
}
import { useFont } from "@/contexts/FontContext";

const Home = () => {
  const { logoFont, setLogoFont } = useFont();
  
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="flex w-full">
        {/* Main Content */}
        <div className="flex-1 px-6 md:px-12 py-12 md:py-20 animate-fade-in min-w-0">
          <h1 className="text-aakaara-text text-[24px] md:text-[28px] leading-[32px] md:leading-[38px] font-normal mb-4 animate-slide-up">
            Redefining Spaces with Expertise in Architecture, Interiors, and Landscape Design.
          </h1>
          <p className="text-aakaara-text text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal mb-6 max-w-[600px] animate-slide-up animation-delay-200">
            Crafting bespoke solutions that seamlessly blend functionality, aesthetics, and sustainability — across scales, climates, and cultures.
          </p>
          <div className="text-aakaara-text text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal max-w-[600px] animate-slide-up animation-delay-400">
            <p className="mb-1">Our Services</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <span className="font-semibold">Architectural Planning</span><br />
                Shaping spaces with purpose and vision.
              </li>
              <li>
                <span className="font-semibold">Interior Design</span><br />
                Creating interiors that seamlessly blend aesthetics and practicality.
              </li>
              <li>
                <span className="font-semibold">Landscape Design</span><br />
                Crafting sustainable landscapes that celebrate the natural context.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Sidebar - Brown strip extending full height, no overflow */}
        <div className="bg-aakaara-dark-brown w-[200px] md:w-[220px] min-h-screen flex-shrink-0 flex items-center justify-center animate-slide-in-right">
          <div className="flex items-center space-x-3">
            <div className="text-aakaara-light-brown text-[14px] space-y-4">
              <p>Architecture</p>
              <p>Interior</p>
              <p>Landscape</p>
            </div>
            
            {/* Aakaara text - ONLY Rigot Bold, centered together */}
            <div className="font-rigot font-bold text-[80px] vertical-text leading-[80px] select-none text-aakaara-light-brown">
              aakaara
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Regular footer outside the brown strip */}
      <footer className="bg-aakaara-dark-brown text-aakaara-light-brown">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-8">
          <h2 className="font-playfair text-[28px] md:text-[32px] leading-[38px] font-normal border-b border-aakaara-light-brown/30 pb-4 mb-6">
            Ar. Shivangi Shivakumar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal">
            <div>+91 99726 81819</div>
            <div>contact@aakaarastudio.in</div>
            <div>
              Nagasandra,<br />
              Bangalore- 560073.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
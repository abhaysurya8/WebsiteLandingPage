import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="flex flex-col md:flex-row w-full">
        {/* Main Content */}
        <div className="flex-1 px-4 md:px-12 py-8 md:py-20 min-w-0 mt-16 md:mt-0">
          <h1 className="text-3xl md:text-4xl font-medium text-aakaara-brown mb-6" style={{ lineHeight: '1.2' }}>
            Redefining Spaces with Expertise in Architecture, Interiors,&nbsp;and Landscape Design.
          </h1>
          <p className="text-aakaara-text text-[15px] md:text-[17px] leading-[22px] md:leading-[25px] font-normal mb-6 max-w-[600px] animate-slide-up animation-delay-200">
            Crafting bespoke solutions that seamlessly blend functionality, aesthetics, and sustainability — across scales, climates, and cultures.
          </p>
          <div className="mb-8">
            <h2 className="text-aakaara-brown text-[17px] md:text-[19px] font-semibold mb-2">Our Services</h2>
            <ul className="space-y-4">
              <li>
                <span className="font-bold text-aakaara-brown">Architectural Planning</span>
                <div className="text-aakaara-text text-[15px] md:text-[16px]">Shaping spaces with purpose and vision.</div>
              </li>
              <li>
                <span className="font-bold text-aakaara-brown">Interior Design</span>
                <div className="text-aakaara-text text-[15px] md:text-[16px]">Creating interiors that seamlessly blend aesthetics and practicality.</div>
              </li>
              <li>
                <span className="font-bold text-aakaara-brown">Landscape Design</span>
                <div className="text-aakaara-text text-[15px] md:text-[16px]">Crafting sustainable landscapes that celebrate the natural context.</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Sidebar - Responsive */}
        <div className="bg-aakaara-dark-brown w-full md:w-[220px] min-h-[60px] max-h-[120px] md:min-h-screen md:max-h-none flex items-center justify-center">
          <div className="relative flex flex-col items-center justify-center h-full w-full">
            {/* Vertical branding only on md+ */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-row items-center justify-center">

              <div className="relative z-10 flex flex-col items-start justify-center text-aakaara-light-brown text-[15px] font-normal space-y-4 ml-4"
                style={{
                  position: 'absolute',
                  right: '47%'
                }}
              >
                <p className="text-left">Architecture</p>
                <p className="text-left">Interior</p>
                <p className="text-left">Landscape</p>
              </div>

              <div className="font-rigot font-bold text-[100px] text-aakaara-light-brown select-none pointer-events-none" style={{ transform: 'rotate(-90deg)', whiteSpace: 'nowrap', lineHeight: 1, zIndex: 0 }}>
                aakaara
              </div>

            </div>
            {/* Horizontal branding on mobile */}
            <div className="flex md:hidden flex-col items-center justify-center w-full py-2">
              <span className="font-rigot font-bold text-xl text-aakaara-light-brown">aakaara</span>
              <div className="flex space-x-2 text-aakaara-light-brown text-xs mt-1">
                <span>Architecture</span>
                <span>•</span>
                <span>Interior</span>
                <span>•</span>
                <span>Landscape</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
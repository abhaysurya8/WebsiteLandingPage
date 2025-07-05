import Footer from "@/components/Footer";

const Home = () => {

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="flex w-full">
        {/* Main Content */}
        <div className="flex-1 px-6 md:px-12 py-12 md:py-20 animate-fade-in min-w-0">
          <h1 className="text-3xl md:text-4xl font-medium text-aakaara-brown mb-6" style={{lineHeight: '1.2'}}>
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

        {/* Right Sidebar - Brown strip extending full height */}
        <div className="bg-aakaara-dark-brown w-[200px] md:w-[220px] min-h-screen flex-shrink-0 flex items-center justify-center animate-slide-in-right">
          <div className="relative flex flex-col items-center justify-center h-full w-full">
            {/* aakaara rotated vertically, not letter-stacked, and labels next to it */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row items-center justify-center">
              <div className="font-rigot font-bold text-[72px] text-aakaara-light-brown select-none pointer-events-none" style={{ transform: 'rotate(-90deg)', whiteSpace: 'nowrap', lineHeight: 1, zIndex: 0 }}>
                aakaara
              </div>
              <div className="relative z-10 flex flex-col items-start justify-center text-aakaara-light-brown text-[15px] font-normal space-y-4 ml-4">
                <p className="text-left">Architecture</p>
                <p className="text-left">Interior</p>
                <p className="text-left">Landscape</p>
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

export default function ServicesSection() {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start px-6 md:px-12 py-12 md:py-20">
      <div className="flex-1 pr-0 md:pr-20">
        <h1 className="text-[#7f6a4d] font-quicksand text-[24px] md:text-[28px] leading-[32px] md:leading-[38px] font-normal mb-4">
          Redefining Spaces with Expertise in Architecture, Interiors, and Landscape Design.
        </h1>
        
        <p className="text-[#7f6a4d] font-quicksand text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal mb-6 max-w-[600px]">
          <span className="font-medium">Crafting</span> bespoke solutions that seamlessly blend functionality, aesthetics, and sustainability — across scales, climates, and cultures.
        </p>
        
        <div className="text-[#7f6a4d] font-quicksand text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal max-w-[600px]">
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
      
      <aside className="bg-[#5a3a22] w-[220px] mt-12 md:mt-0 flex flex-col justify-center items-center relative min-h-[400px]">
        <div className="absolute top-6 left-4 text-[#d9c4b0] font-quicksand text-[14px] font-normal space-y-4">
          <p>Architecture</p>
          <p>Interior</p>
          <p>Landscape</p>
        </div>
        <div className="absolute bottom-6 right-4 font-rigot text-[48px] font-bold leading-[48px] select-none text-[#d9c4b0] transform rotate-180" style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}}>
          aakaara
        </div>
      </aside>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <div className="flex flex-row w-full min-h-[600px]">
      <div className="flex-1 pr-0 md:pr-20">
        <h1 className="text-[#7f6a4d] font-quicksand text-[28px] md:text-[32px] leading-[36px] md:leading-[42px] font-normal mb-4">
          Redefining Spaces with Expertise in Architecture, Interiors, and Landscape Design.
        </h1>
        
        <p className="text-[#7f6a4d] font-quicksand text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] font-normal mb-6 max-w-[600px]">
          <span className="font-medium">Crafting</span> bespoke solutions that seamlessly blend functionality, aesthetics, and sustainability — across scales, climates, and cultures.
        </p>
        
        <div className="text-[#7f6a4d] font-quicksand text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] font-normal max-w-[600px]">
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
      <aside className="hidden md:flex flex-col items-center justify-center bg-[#5a3a22] w-[220px] min-h-screen flex-shrink-0">
        <div className="flex flex-col items-center justify-center gap-6 h-full">
          <span className="font-rigot text-[48px] font-bold leading-[48px] select-none text-[#d9c4b0] vertical-text">
            aakaara
          </span>
          <div className="flex flex-col gap-3 text-[#d9c4b0] font-quicksand text-[18px] font-normal text-center">
            <p>Architecture</p>
            <p>Interior</p>
            <p>Landscape</p>
          </div>
        </div>
      </aside>
    </div>
  );
}

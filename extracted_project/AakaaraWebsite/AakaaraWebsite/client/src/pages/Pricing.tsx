const Pricing = () => {
  const pricingData = [
    {
      service: "2D Floor Plans",
      elegance: { included: true, note: "Limited" },
      elite: { included: true, note: "Limited" },
    },
    {
      service: "3D Elevation Renderings",
      elegance: { included: true, note: "Professional drafting" },
      elite: { included: true, note: "Enhanced quality" },
    },
    {
      service: "Architectural & Structural Drawings",
      elegance: { included: true, note: "Extra detailed" },
      elite: { included: true, note: "Extra detailed" },
    },
    {
      service: "Kitchen, Bath, Plumbing, Interiors",
      elegance: { included: true, note: "" },
      elite: { included: true, note: "Premium materials" },
    },
    {
      service: "Doors, Windows, Painting, Flooring",
      elegance: { included: true, note: "" },
      elite: { included: true, note: "Upgraded finishes" },
    },
    {
      service: "Premium Steel & Aggregates",
      elegance: { included: false, note: "" },
      elite: { included: true, note: "Top-end brand grade" },
    },
    {
      service: "Consultation & Design Customization",
      elegance: { included: false, note: "" },
      elite: { included: true, note: "1 Week rollover period" },
    },
    {
      service: "High-Res 3D Visuals",
      elegance: { included: false, note: "" },
      elite: { included: true, note: "Online preview for decision making" },
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-aakaara-text font-playfair text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-normal mb-4">
            Pricing Plans
          </h1>
          <p className="text-aakaara-text text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] font-normal max-w-[700px] mx-auto">
            Choose the perfect package for your architectural and design needs. We offer
            comprehensive solutions tailored to your requirements.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 animate-slide-up animation-delay-200">
          {/* Header */}
          <div className="bg-aakaara-dark-brown text-aakaara-light-brown">
            <div className="grid grid-cols-3 gap-0">
              <div className="p-6 font-medium text-[16px]">Deliverables</div>
              <div className="p-6 text-center border-l border-aakaara-light-brown/20">
                <div className="font-medium text-[16px]">Elegance</div>
                <div className="text-[14px] opacity-80">(₹1,779)</div>
              </div>
              <div className="p-6 text-center border-l border-aakaara-light-brown/20">
                <div className="font-medium text-[16px]">Elite</div>
                <div className="text-[14px] opacity-80">(₹2,249)</div>
              </div>
            </div>
          </div>

          {/* Pricing Rows */}
          <div className="divide-y divide-gray-200">
            {pricingData.map((item, index) => (
              <div key={index} className="grid grid-cols-3 gap-0 hover:bg-gray-50 transition-colors duration-200">
                <div className="p-4 text-[14px] font-normal text-aakaara-text">
                  {item.service}
                </div>
                <div className="p-4 text-center border-l border-gray-200">
                  {item.elegance.included ? (
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-green-500 rounded-full mb-1"></div>
                      {item.elegance.note && (
                        <div className="text-[12px] text-gray-500">({item.elegance.note})</div>
                      )}
                    </div>
                  ) : (
                    <div className="w-4 h-4 bg-gray-300 rounded-full mx-auto"></div>
                  )}
                </div>
                <div className="p-4 text-center border-l border-gray-200">
                  {item.elite.included ? (
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-green-500 rounded-full mb-1"></div>
                      {item.elite.note && (
                        <div className="text-[12px] text-gray-500">({item.elite.note})</div>
                      )}
                    </div>
                  ) : (
                    <div className="w-4 h-4 bg-gray-300 rounded-full mx-auto"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-400">
          <p className="text-aakaara-text text-[16px] font-normal mb-8">
            Ready to start your project? Contact us for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-aakaara-dark-brown text-aakaara-light-brown px-8 py-3 rounded-md font-medium hover:bg-aakaara-brown transition-colors duration-200 hover-scale">
              Get Started
            </button>
            <button className="border border-aakaara-brown text-aakaara-brown px-8 py-3 rounded-md font-medium hover:bg-aakaara-brown hover:text-white transition-colors duration-200 hover-scale">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-aakaara-dark-brown text-aakaara-light-brown mt-16">
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

export default Pricing;

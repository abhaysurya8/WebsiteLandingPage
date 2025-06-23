import { Check } from "lucide-react";

const Pricing = () => {
  const features = [
    { name: "2D Floor Plans", elegant: true, elite: true },
    { name: "3D Elevation Designing", elegant: true, elite: true },
    { name: "Architectural & Structural Drawings", elegant: true, elite: true },
    { name: "Ghar 360 (AR/VR) Planning & Interior", elegant: false, elite: true },
    { name: "Door, Windows, Railings Planning", elegant: true, elite: true },
    { name: "Premium Soil & Supervision", elegant: false, elite: true },
    { name: "Compliance & Design Coordination", elegant: false, elite: true },
    { name: "High Res 3D Render", elegant: false, elite: true }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-aakaara-text font-playfair text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-normal mb-6">
            Pricing Plans
          </h1>
          <p className="text-aakaara-text text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] font-normal max-w-3xl mx-auto">
            Choose the perfect package for your architectural and design needs. We offer comprehensive solutions tailored to your requirements.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-3">
              <div className="bg-aakaara-brown text-white p-6 text-center">
                <h3 className="text-lg font-medium">Deliverables</h3>
              </div>
              <div className="bg-aakaara-brown text-white p-6 text-center border-l border-aakaara-dark-brown">
                <h3 className="text-lg font-medium">Elegance</h3>
                <p className="text-sm mt-1 text-aakaara-light-brown">(₹1,779)</p>
              </div>
              <div className="bg-aakaara-brown text-white p-6 text-center border-l border-aakaara-dark-brown">
                <h3 className="text-lg font-medium">Elite</h3>
                <p className="text-sm mt-1 text-aakaara-light-brown">(₹2,249)</p>
              </div>
            </div>

            {/* Feature Rows */}
            {features.map((feature, index) => (
              <div key={feature.name} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="p-4 border-b border-gray-200">
                  <span className="text-aakaara-text font-medium">{feature.name}</span>
                </div>
                <div className="p-4 border-b border-l border-gray-200 text-center">
                  {feature.elegant ? (
                    <Check size={20} className="text-green-600 mx-auto" />
                  ) : (
                    <span className="text-gray-400">×</span>
                  )}
                </div>
                <div className="p-4 border-b border-l border-gray-200 text-center">
                  {feature.elite ? (
                    <Check size={20} className="text-green-600 mx-auto" />
                  ) : (
                    <span className="text-gray-400">×</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="text-center max-w-4xl mx-auto mt-16 animate-fade-in animation-delay-400">
          <h2 className="text-aakaara-text font-playfair text-[24px] md:text-[28px] font-normal mb-6">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <h4 className="text-aakaara-brown font-medium mb-3">Expert Design</h4>
              <p className="text-aakaara-text/80 text-sm">
                Professional architectural and interior design services by certified experts
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-aakaara-brown font-medium mb-3">Quality Assurance</h4>
              <p className="text-aakaara-text/80 text-sm">
                High-quality deliverables with attention to detail and client satisfaction
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-aakaara-brown font-medium mb-3">Timely Delivery</h4>
              <p className="text-aakaara-text/80 text-sm">
                Project completion within agreed timelines with regular updates
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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

export default Pricing;
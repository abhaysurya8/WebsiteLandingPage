import { Check } from "lucide-react";
import Footer from "@/components/Footer";

const Pricing = () => {
  const features = [
    { name: "2D Floor Plans", elegant: true, elite: true },
    { name: "3D Elevation Designing", elegant: true, elite: true },
    { name: "Architectural & Structural Drawings", elegant: true, elite: true },
    { name: "MANE 360 (AR/VR) Planning & Interior", elegant: false, elite: true },
    { name: "Door, Windows, Railings Planning", elegant: true, elite: true },
    { name: "Premium Soil & Supervision", elegant: false, elite: true },
    { name: "Compliance & Design Coordination", elegant: false, elite: true },
    { name: "High Res 3D Render", elegant: false, elite: true }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:pl-20 py-12 md:py-20">
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
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="bg-aakaara-brown text-white p-4 md:p-6 text-center">
                <h3 className="text-base md:text-lg font-medium text-aakaara-brown bg-white px-3 md:px-4 py-2 rounded">Deliverables</h3>
              </div>
              <div className="bg-aakaara-brown text-white p-4 md:p-6 text-center border-t md:border-t-0 md:border-l border-aakaara-dark-brown">
                <h3 className="text-base md:text-lg font-medium text-aakaara-brown bg-white px-3 md:px-4 py-2 rounded">Elegance</h3>
                <p className="text-xs md:text-sm mt-2 md:mt-3 text-aakaara-brown bg-white px-2 md:px-3 py-1 rounded font-semibold">(₹1,779)</p>
              </div>
              <div className="bg-aakaara-brown text-white p-4 md:p-6 text-center border-t md:border-t-0 md:border-l border-aakaara-dark-brown">
                <h3 className="text-base md:text-lg font-medium text-aakaara-brown bg-white px-3 md:px-4 py-2 rounded">Elite</h3>
                <p className="text-xs md:text-sm mt-2 md:mt-3 text-aakaara-brown bg-white px-2 md:px-3 py-1 rounded font-semibold">(₹2,249)</p>
              </div>
            </div>

            {/* Feature Rows */}
            {features.map((feature, index) => (
              <div key={feature.name} className={`grid grid-cols-1 md:grid-cols-3 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="p-3 md:p-4 border-b md:border-b-0 md:border-r border-gray-200">
                  <span className="text-aakaara-text font-medium text-sm md:text-base leading-tight">{feature.name}</span>
                </div>
                <div className="p-3 md:p-4 border-b md:border-b-0 md:border-l border-gray-200 text-center">
                  {feature.elegant ? (
                    <Check size={18} className="text-green-600 mx-auto md:w-5 md:h-5" />
                  ) : (
                    <span className="text-gray-400 text-lg">×</span>
                  )}
                </div>
                <div className="p-3 md:p-4 border-b md:border-b-0 md:border-l border-gray-200 text-center">
                  {feature.elite ? (
                    <Check size={18} className="text-green-600 mx-auto md:w-5 md:h-5" />
                  ) : (
                    <span className="text-gray-400 text-lg">×</span>
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
      <Footer />
    </div>
  );
};

export default Pricing;
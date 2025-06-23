import { Check } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Consultation",
      price: "₹5,000",
      period: "per session",
      description: "Initial design consultation and concept development",
      features: [
        "1-hour design consultation",
        "Space analysis and assessment",
        "Initial concept sketches",
        "Design recommendations",
        "Follow-up consultation"
      ],
      popular: false
    },
    {
      name: "Architectural Design",
      price: "₹150",
      period: "per sq ft",
      description: "Complete architectural design services",
      features: [
        "Site analysis and planning",
        "Architectural drawings (2D & 3D)",
        "Structural coordination",
        "Statutory approvals assistance",
        "Construction supervision",
        "Interior design consultation"
      ],
      popular: true
    },
    {
      name: "Interior Design",
      price: "₹75",
      period: "per sq ft",
      description: "Comprehensive interior design solutions",
      features: [
        "Space planning and layout",
        "3D visualization and renders",
        "Material and finish selection",
        "Furniture and lighting design",
        "Project management",
        "Styling and accessories"
      ],
      popular: false
    },
    {
      name: "Landscape Design",
      price: "₹50",
      period: "per sq ft",
      description: "Beautiful landscape and garden design",
      features: [
        "Site survey and analysis",
        "Landscape master plan",
        "Plant selection and design",
        "Hardscape design",
        "Irrigation planning",
        "Maintenance guidelines"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-aakaara-text font-playfair text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-normal mb-6">
            Our Services & Pricing
          </h1>
          <p className="text-aakaara-text text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] font-normal max-w-3xl mx-auto">
            Transparent pricing for our comprehensive design services. Every project is unique, and we provide customized solutions tailored to your specific needs and budget.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-lg p-6 animate-slide-up hover-scale ${
                plan.popular
                  ? "bg-aakaara-brown text-white shadow-xl scale-105"
                  : "bg-white border border-aakaara-brown/20 shadow-lg"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-aakaara-dark-brown text-white px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-xl font-medium mb-2 ${plan.popular ? "text-white" : "text-aakaara-text"}`}>
                  {plan.name}
                </h3>
                <div className={`text-3xl font-bold mb-1 ${plan.popular ? "text-white" : "text-aakaara-brown"}`}>
                  {plan.price}
                </div>
                <div className={`text-sm ${plan.popular ? "text-aakaara-light-brown" : "text-aakaara-text/60"}`}>
                  {plan.period}
                </div>
                <p className={`text-sm mt-4 ${plan.popular ? "text-aakaara-light-brown" : "text-aakaara-text/80"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check 
                      size={16} 
                      className={`mr-2 mt-0.5 flex-shrink-0 ${
                        plan.popular ? "text-aakaara-light-brown" : "text-aakaara-brown"
                      }`} 
                    />
                    <span className={`text-sm ${plan.popular ? "text-white" : "text-aakaara-text"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? "bg-white text-aakaara-brown hover:bg-aakaara-light-brown hover:text-aakaara-dark-brown"
                    : "bg-aakaara-brown text-white hover:bg-aakaara-dark-brown"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="text-center max-w-4xl mx-auto animate-fade-in animation-delay-400">
          <h2 className="text-aakaara-text font-playfair text-[24px] md:text-[28px] font-normal mb-6">
            Custom Solutions Available
          </h2>
          <p className="text-aakaara-text text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] font-normal mb-8">
            Every project is unique, and our pricing reflects the specific requirements, complexity, and scope of work. 
            We offer flexible payment plans and can customize our services to fit your budget and timeline.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <h4 className="text-aakaara-brown font-medium mb-2">Free Consultation</h4>
              <p className="text-aakaara-text/80 text-sm">
                Initial 30-minute consultation to discuss your project requirements
              </p>
            </div>
            <div className="p-4">
              <h4 className="text-aakaara-brown font-medium mb-2">Flexible Payments</h4>
              <p className="text-aakaara-text/80 text-sm">
                Payment plans tailored to your project timeline and budget
              </p>
            </div>
            <div className="p-4">
              <h4 className="text-aakaara-brown font-medium mb-2">Warranty</h4>
              <p className="text-aakaara-text/80 text-sm">
                1-year warranty on all design deliverables and documentation
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
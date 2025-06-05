import { Zap, CheckCircle, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising on quality"
  },
  {
    icon: CheckCircle,
    title: "Quality Assured",
    description: "Rigorous testing and quality control processes"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced professionals dedicated to your success"
  }
];

export default function FeaturesSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-quicksand text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="font-quicksand text-xl text-gray-600 max-w-3xl mx-auto">
            We combine creativity with strategy to deliver results that exceed expectations
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-quicksand text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="font-quicksand text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

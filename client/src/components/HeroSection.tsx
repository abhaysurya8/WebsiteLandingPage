export default function HeroSection() {
  const handleGetStarted = () => {
    // Handle get started action
    console.log("Get Started clicked");
  };

  const handleLearnMore = () => {
    // Handle learn more action
    console.log("Learn More clicked");
  };

  return (
    <section id="home" className="bg-gradient-to-br from-gray-50 to-white py-12 md:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="order-2 lg:order-1">
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              {/* Brand Name with Custom Font */}
              <h2 className="font-rigot text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 font-bold">
                aakaara
              </h2>
              
              {/* Main Heading */}
              <h1 className="font-quicksand text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Vision Into Reality
              </h1>
              
              {/* Description */}
              <p className="font-quicksand text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                We create exceptional digital experiences that connect brands with their audiences. Discover the power of innovative design and strategic thinking.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleGetStarted}
                  className="font-quicksand bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                >
                  Get Started
                </button>
                <button
                  onClick={handleLearnMore}
                  className="font-quicksand border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
          {/* Image Column */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Hero Image */}
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800"
                alt="Modern workspace showing creative design process"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-100 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

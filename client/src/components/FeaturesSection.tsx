export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Main Content */}
          <div className="lg:pr-8">
            <h1 className="font-quicksand text-4xl md:text-5xl lg:text-6xl font-normal text-gray-800 mb-8 leading-tight">
              Redefining Spaces with Expertise in Architecture, Interiors, and Landscape Design.
            </h1>
            
            <p className="font-quicksand text-lg text-gray-600 mb-8 leading-relaxed">
              <span className="text-brown-600 font-medium">Crafting</span> bespoke solutions that seamlessly blend functionality, aesthetics, and sustainability — across scales, climates, and cultures.
            </p>
            
            <div className="space-y-6">
              <h2 className="font-quicksand text-xl font-medium text-gray-800 mb-4">Our Services</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-quicksand font-medium text-gray-800 mb-2">• Architectural Planning</h3>
                  <p className="font-quicksand text-gray-600 ml-4">Shaping spaces with purpose and vision.</p>
                </div>
                
                <div>
                  <h3 className="font-quicksand font-medium text-gray-800 mb-2">• Interior Design</h3>
                  <p className="font-quicksand text-gray-600 ml-4">Creating interiors that seamlessly blend aesthetics and practicality.</p>
                </div>
                
                <div>
                  <h3 className="font-quicksand font-medium text-gray-800 mb-2">• Landscape Design</h3>
                  <p className="font-quicksand text-gray-600 ml-4">Crafting sustainable landscapes that celebrate the natural context.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:pl-8">
            <div className="bg-amber-900 text-white p-8 rounded-lg">
              <div className="space-y-8">
                <div className="text-right">
                  <h3 className="font-rigot text-6xl md:text-7xl lg:text-8xl font-bold transform rotate-90 origin-center mb-4 text-amber-100">
                    aakaara
                  </h3>
                </div>
                
                <div className="space-y-4 text-center">
                  <div className="text-amber-100 font-quicksand text-lg font-medium">Architecture</div>
                  <div className="text-amber-100 font-quicksand text-lg font-medium">Interior</div>
                  <div className="text-amber-100 font-quicksand text-lg font-medium">Landscape</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

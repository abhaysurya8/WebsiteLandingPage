import { Link } from "wouter";

const Projects = () => {
  const projects = [
    {
      id: 1,
      slug: "modern-residential-villa",
      title: "Modern Residential Villa",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "A contemporary villa design that seamlessly blends indoor and outdoor living spaces."
    },
    {
      id: 2,
      slug: "urban-apartment-interior",
      title: "Urban Apartment Interior",
      category: "Interior Design",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Sophisticated interior design for a modern urban apartment with maximized space efficiency."
    },
    {
      id: 3,
      slug: "sustainable-office-complex",
      title: "Sustainable Office Complex",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "An eco-friendly office complex design incorporating green building principles."
    },
    {
      id: 4,
      slug: "rooftop-garden-design",
      title: "Rooftop Garden Design",
      category: "Landscape",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "A beautifully designed rooftop garden that creates an urban oasis."
    },
    {
      id: 5,
      slug: "luxury-hotel-lobby",
      title: "Luxury Hotel Lobby",
      category: "Interior Design",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "An elegant hotel lobby design that creates a memorable first impression."
    },
    {
      id: 6,
      slug: "contemporary-house",
      title: "Contemporary House",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "A sleek contemporary house design with clean lines and modern aesthetics."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-aakaara-text font-playfair text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-normal mb-6">
            Our Projects
          </h1>
          <p className="text-aakaara-text text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] font-normal max-w-3xl mx-auto">
            Explore our portfolio of carefully crafted architectural, interior, and landscape design projects that showcase our commitment to excellence and innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group block animate-slide-up hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-aakaara-brown text-sm font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-aakaara-text text-lg font-medium mb-3 group-hover:text-aakaara-brown transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-aakaara-text/80 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
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

export default Projects;
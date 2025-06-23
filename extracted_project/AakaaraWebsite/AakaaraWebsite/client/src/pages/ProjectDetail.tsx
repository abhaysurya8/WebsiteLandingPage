import { useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const ProjectDetail = () => {
  const [match, params] = useRoute("/projects/:slug");
  
  const projects = {
    "residence-sarjapur": {
      title: "Residence at Sarjapur",
      location: "Sarjapur, Bangalore",
      type: "Architecture",
      year: "2023",
      area: "3,200 sq.ft",
      description: "A contemporary residential design featuring clean lines and sustainable materials in East Bangalore. This project exemplifies our commitment to modern architecture while respecting the local context and climate.",
      fullDescription: "This residence in Sarjapur represents a perfect blend of contemporary design principles and sustainable living. The project features an open-plan layout that maximizes natural light and ventilation, reducing the need for artificial lighting and air conditioning. The use of locally sourced materials not only supports the regional economy but also ensures that the building harmonizes with its surroundings. The design incorporates traditional Indian architectural elements such as courtyards and verandas, reimagined for modern living. Solar panels and rainwater harvesting systems make this residence a model of sustainable architecture.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "Open-plan living spaces",
        "Sustainable material usage",
        "Solar energy integration",
        "Rainwater harvesting system",
        "Natural ventilation design",
        "Local stone and timber finishes"
      ]
    },
    "villa-whitefield": {
      title: "Villa at Whitefield",
      location: "Whitefield, Bangalore",
      type: "Architecture",
      year: "2022",
      area: "4,500 sq.ft",
      description: "Modern villa design with traditional elements creating a perfect blend of contemporary and classic architecture.",
      fullDescription: "Located in the prestigious Whitefield area, this villa showcases our ability to merge traditional Indian architectural elements with contemporary design sensibilities. The project features expansive spaces that flow seamlessly from indoor to outdoor areas, creating a sense of continuity with nature. Traditional jali work is reinterpreted in modern materials, providing privacy while maintaining ventilation. The villa's layout is designed around a central courtyard, a nod to traditional Indian homes, while incorporating modern amenities and smart home technology.",
      images: [
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "Central courtyard design",
        "Modern jali work interpretation",
        "Smart home integration",
        "Seamless indoor-outdoor flow",
        "Traditional material palette",
        "Climate-responsive design"
      ]
    },
    "apartment-interior": {
      title: "Apartment Interior Design",
      location: "Koramangala, Bangalore",
      type: "Interior Design",
      year: "2023",
      area: "1,800 sq.ft",
      description: "Sophisticated apartment interiors featuring modern furnishing and optimal space utilization.",
      fullDescription: "This apartment interior project in Koramangala demonstrates our expertise in maximizing small urban spaces without compromising on style or functionality. The design employs a neutral color palette with carefully chosen accent pieces to create visual interest. Custom-built storage solutions are seamlessly integrated into the design, maintaining clean lines while providing ample space for belongings. The use of mirrors and strategic lighting creates an illusion of spaciousness, while the selection of multi-functional furniture ensures every square foot serves a purpose.",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1586023492474-9a8d8c2d72e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1586023492438-48b45e2075b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "Space optimization techniques",
        "Custom storage solutions",
        "Multi-functional furniture",
        "Strategic lighting design",
        "Neutral color palette",
        "Urban living solutions"
      ]
    },
    "corporate-office": {
      title: "Corporate Office Space",
      location: "Electronic City, Bangalore",
      type: "Interior Design",
      year: "2023",
      area: "12,000 sq.ft",
      description: "Professional office design promoting productivity and collaboration in a technology workspace.",
      fullDescription: "This corporate office in Electronic City was designed to foster innovation and collaboration while maintaining professional aesthetics. The open-plan workspace is punctuated by private meeting rooms and quiet zones, creating a balanced environment for different work styles. Biophilic design elements, including living walls and natural materials, improve air quality and employee well-being. The color scheme and lighting are designed to reduce eye strain and maintain energy levels throughout the day. Flexible furniture arrangements allow for easy reconfiguration as team sizes and project needs change.",
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "Open-plan collaborative spaces",
        "Biophilic design elements",
        "Flexible furniture systems",
        "Natural lighting optimization",
        "Sound management solutions",
        "Technology integration"
      ]
    },
    "landscape-garden": {
      title: "Landscape Garden Design",
      location: "Hebbal, Bangalore",
      type: "Landscape Design",
      year: "2022",
      area: "8,000 sq.ft",
      description: "Sustainable garden design integrating native plants with modern landscape architecture principles.",
      fullDescription: "This landscape project in Hebbal showcases our commitment to sustainable and ecologically responsible design. The garden features a carefully curated selection of native plants that require minimal water and maintenance while providing year-round visual interest. Rain gardens and bioswales manage stormwater runoff naturally, while creating beautiful water features. The design includes both formal and informal areas, providing spaces for entertaining as well as quiet contemplation. Permeable paving materials and composting areas further enhance the garden's environmental credentials.",
      images: [
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1416879959584-a4c529d30b6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1416879995920-e5bb6e0b9b30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "Native plant selection",
        "Water management systems",
        "Seasonal interest planning",
        "Low maintenance design",
        "Wildlife habitat creation",
        "Sustainable materials"
      ]
    },
    "residential-complex": {
      title: "Residential Complex",
      location: "Hennur, Bangalore",
      type: "Architecture",
      year: "2023",
      area: "45,000 sq.ft",
      description: "Multi-unit residential development featuring sustainable design and community-focused spaces.",
      fullDescription: "This residential complex in Hennur represents our approach to community-centered design and sustainable development. The project includes 24 residential units arranged around shared courtyards and community spaces that encourage interaction among residents. Each unit is designed to maximize natural light and cross-ventilation, reducing energy consumption. The complex features shared amenities including a community garden, children's play area, and rainwater harvesting system. The architectural language is contemporary yet rooted in local building traditions, using local materials and construction techniques wherever possible.",
      images: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1545324418-1c7abffb60ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1545324418-25e5a4b96e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "Community-centered design",
        "Shared amenity spaces",
        "Energy-efficient units",
        "Local material usage",
        "Rainwater harvesting",
        "Children's play areas"
      ]
    }
  };

  const project = params?.slug ? projects[params.slug as keyof typeof projects] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-playfair text-aakaara-text mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-aakaara-brown hover:underline">
            Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Back Button */}
        <Link href="/projects" className="inline-flex items-center text-aakaara-brown hover:text-aakaara-dark-brown mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-aakaara-text font-playfair text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] font-normal mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-aakaara-text/80 text-[16px] mb-6">
            <span>{project.location}</span>
            <span>•</span>
            <span>{project.type}</span>
            <span>•</span>
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.area}</span>
          </div>
          <p className="text-aakaara-text text-[18px] leading-[28px] max-w-4xl">
            {project.description}
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-12 animate-slide-up">
          <img 
            src={project.images[0]}
            alt={project.title}
            className="w-full h-[60vh] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-2 animate-slide-in-left">
            <h2 className="text-aakaara-text font-playfair text-[28px] font-medium mb-6">
              Project Overview
            </h2>
            <p className="text-aakaara-text text-[16px] leading-[28px] mb-8">
              {project.fullDescription}
            </p>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="text-aakaara-text font-playfair text-[24px] font-medium mb-6">
              Key Features
            </h3>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="text-aakaara-text text-[16px] leading-[24px] flex items-start">
                  <span className="w-2 h-2 bg-aakaara-brown rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.images.slice(1).map((image, index) => (
            <div key={index} className={`animate-slide-up animation-delay-${(index + 1) * 200}`}>
              <img 
                src={image}
                alt={`${project.title} - View ${index + 2}`}
                className="w-full h-80 object-cover rounded-lg shadow-lg hover-scale"
              />
            </div>
          ))}
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

export default ProjectDetail;
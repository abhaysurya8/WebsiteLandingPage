import { useState } from "react";
import { Link } from "wouter";
import { projectList, getAllCategories } from "@/data/projects";

// PROJECTS PAGE
// =============
// This page displays all projects in a masonry layout
// TO ADD MORE PROJECTS: Edit /src/data/projects.ts

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", ...getAllCategories()];
  
  const filteredProjects = selectedCategory === "All" 
    ? projectList 
    : projectList.filter(project => project.category === selectedCategory);

  // Random height generator for varied masonry layout
  const getRandomHeight = (index: number) => {
    const heights = ['h-64', 'h-72', 'h-80', 'h-56', 'h-68'];
    return heights[index % heights.length];
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:pl-20 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-aakaara-text font-playfair text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-normal mb-6">
            Our Projects
          </h1>
          <p className="text-aakaara-text text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] font-normal max-w-3xl mx-auto mb-8">
            Explore our portfolio of carefully crafted architectural, interior, and landscape design projects that showcase our commitment to excellence and innovation.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up animation-delay-200">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-aakaara-brown text-white shadow-lg transform scale-105"
                    : "bg-white text-aakaara-brown border border-aakaara-brown/20 hover:border-aakaara-brown hover:text-aakaara-brown"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Masonry Layout for Projects */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="break-inside-avoid mb-6 md:mb-8">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* Project Count Display */}
        <div className="text-center mt-16 animate-fade-in animation-delay-600">
          <p className="text-aakaara-text/60 text-sm">
            Showing {filteredProjects.length} of {projectList.length} projects
          </p>
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

// PROJECT CARD COMPONENT
// ======================
interface ProjectCardProps {
  project: {
    id: number;
    slug: string;
    title: string;
    category: string;
    image: string;
    description: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block animate-slide-up"
      style={{ animationDelay: `${(index % 12) * 0.05}s` }}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100/60 hover:border-aakaara-brown/20">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="text-white text-xs font-medium bg-aakaara-brown/90 px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
              {project.category}
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-aakaara-text text-lg font-semibold mb-3 group-hover:text-aakaara-brown transition-colors duration-300 line-clamp-2 leading-tight">
            {project.title}
          </h3>
          <p className="text-aakaara-text/75 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Projects;
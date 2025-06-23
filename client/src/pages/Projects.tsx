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

  // Masonry layout helper - distributes projects into columns
  const getColumnProjects = (columnIndex: number, totalColumns: number) => {
    return filteredProjects.filter((_, index) => index % totalColumns === columnIndex);
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
                    : "bg-white text-aakaara-text border border-aakaara-brown/20 hover:border-aakaara-brown hover:text-aakaara-brown"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Layout for Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Column 1 */}
          <div className="space-y-6">
            {getColumnProjects(0, 4).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index * 4} />
            ))}
          </div>
          
          {/* Column 2 */}
          <div className="space-y-6 hidden md:block">
            {getColumnProjects(1, 4).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index * 4 + 1} />
            ))}
          </div>
          
          {/* Column 3 */}
          <div className="space-y-6 hidden lg:block">
            {getColumnProjects(2, 4).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index * 4 + 2} />
            ))}
          </div>
          
          {/* Column 4 */}
          <div className="space-y-6 hidden xl:block">
            {getColumnProjects(3, 4).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index * 4 + 3} />
            ))}
          </div>
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
  // Vary card heights for masonry effect
  const heights = ["h-64", "h-80", "h-72", "h-96", "h-60", "h-88"];
  const height = heights[index % heights.length];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block animate-slide-up hover-scale"
      style={{ animationDelay: `${(index % 8) * 0.1}s` }}
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        <div className={`${height} overflow-hidden relative`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
            <div className="text-white text-xs font-medium bg-aakaara-brown/80 px-2 py-1 rounded-full inline-block">
              {project.category}
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-aakaara-text text-lg font-medium mb-3 group-hover:text-aakaara-brown transition-colors line-clamp-2">
            {project.title}
          </h3>
          <p className="text-aakaara-text/80 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Projects;
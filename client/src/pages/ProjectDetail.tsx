import { useRoute, Link } from "wouter";
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react";
import { getProjectBySlug } from "@/data/projects";

// PROJECT DETAIL PAGE
// ===================
// This page shows detailed information about a specific project
// TO ADD PROJECT DETAILS: Edit /src/data/projects.ts

const ProjectDetail = () => {
  const [, params] = useRoute("/projects/:slug");
  const slug = params?.slug;

  const project = slug ? getProjectBySlug(slug) : null;


  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-aakaara-text mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-aakaara-brown hover:text-aakaara-dark-brown">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button - Added more top padding to distance from hamburger menu */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:pl-20 pt-20">
        <Link 
          href="/projects" 
          className="inline-flex items-center text-aakaara-brown hover:text-aakaara-dark-brown transition-colors mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Projects
        </Link>
      </div>

      {/* Hero Image */}
      <div className="mb-12">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-96 md:h-[500px] object-cover"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 pb-20">
        {/* Project Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="text-aakaara-brown text-sm font-medium mb-2">
              {project.category}
            </div>
            <h1 className="text-aakaara-text font-playfair text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-normal mb-6">
              {project.title}
            </h1>
            <p className="text-aakaara-text text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] font-normal">
              {project.description}
            </p>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div className="flex items-center text-aakaara-text">
              <MapPin size={18} className="mr-3 text-aakaara-brown" />
              <div>
                <div className="text-sm text-aakaara-text/60">Location</div>
                <div className="font-medium">{project.location}</div>
              </div>
            </div>
            <div className="flex items-center text-aakaara-text">
              <Calendar size={18} className="mr-3 text-aakaara-brown" />
              <div>
                <div className="text-sm text-aakaara-text/60">Year</div>
                <div className="font-medium">{project.year}</div>
              </div>
            </div>
            <div className="flex items-center text-aakaara-text">
              <Users size={18} className="mr-3 text-aakaara-brown" />
              <div>
                <div className="text-sm text-aakaara-text/60">Client</div>
                <div className="font-medium">{project.client}</div>
              </div>
            </div>
            <div className="pt-2 border-t border-aakaara-brown/20">
              <div className="text-sm text-aakaara-text/60">Area</div>
              <div className="font-medium text-aakaara-text">{project.area}</div>
            </div>
          </div>
        </div>

        {/* Additional Images */}
        {project.images.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {project.images.slice(1).map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} - Image ${index + 2}`}
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            ))}
          </div>
        )}

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-aakaara-text font-playfair text-[24px] font-medium mb-4">
              The Challenge
            </h3>
            <p className="text-aakaara-text text-[16px] leading-[24px] font-normal">
              {project.challenge}
            </p>
          </div>
          <div>
            <h3 className="text-aakaara-text font-playfair text-[24px] font-medium mb-4">
              Our Solution
            </h3>
            <p className="text-aakaara-text text-[16px] leading-[24px] font-normal">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="text-aakaara-text font-playfair text-[24px] font-medium mb-6">
            Key Features
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-start text-aakaara-text">
                <span className="text-aakaara-brown mr-3">•</span>
                {feature}
              </li>
            ))}
          </ul>
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

export default ProjectDetail;
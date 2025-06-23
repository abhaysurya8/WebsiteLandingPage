// PROJECT MANAGEMENT FILE
// =====================
// This file contains all project data for easy management
// TO ADD NEW PROJECTS: Add entries to both projectList and projectDetails arrays

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: "Architecture" | "Interior Design" | "Landscape";
  image: string;
  description: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  client: string;
  area: string;
  images: string[];
  description: string;
  challenge: string;
  solution: string;
  features: string[];
}

// MAIN PROJECTS LIST - Add new projects here
// ==========================================
export const projectList: Project[] = [
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
  },
  {
    id: 7,
    slug: "boutique-restaurant",
    title: "Boutique Restaurant",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Intimate restaurant design with warm lighting and curated furnishings."
  },
  {
    id: 8,
    slug: "minimalist-studio",
    title: "Minimalist Studio",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "A clean, minimalist studio space designed for creative professionals."
  },
  {
    id: 9,
    slug: "heritage-restoration",
    title: "Heritage Restoration",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Careful restoration of a historic building preserving its cultural significance."
  },
  {
    id: 10,
    slug: "zen-garden-retreat",
    title: "Zen Garden Retreat",
    category: "Landscape",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Tranquil landscape design inspired by Japanese zen principles."
  },
  {
    id: 11,
    slug: "smart-home-automation",
    title: "Smart Home Automation",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1558618047-3c8c5d5c2a8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Integration of smart technology with elegant interior design."
  },
  {
    id: 12,
    slug: "eco-friendly-farmhouse",
    title: "Eco-Friendly Farmhouse",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Sustainable farmhouse design using local materials and passive cooling."
  },
  {
    id: 13,
    slug: "corporate-headquarters",
    title: "Corporate Headquarters",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Modern corporate building with emphasis on employee wellness and productivity."
  },
  {
    id: 14,
    slug: "luxury-penthouse",
    title: "Luxury Penthouse",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Opulent penthouse interior with panoramic city views and premium finishes."
  },
  {
    id: 15,
    slug: "community-park",
    title: "Community Park",
    category: "Landscape",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Public park design fostering community interaction and recreation."
  },
  {
    id: 16,
    slug: "boutique-hotel",
    title: "Boutique Hotel",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Intimate hotel design with local cultural influences and modern amenities."
  },
  {
    id: 17,
    slug: "art-gallery-space",
    title: "Art Gallery Space",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Gallery interior optimized for art display with controlled lighting and flow."
  },
  {
    id: 18,
    slug: "residential-complex",
    title: "Residential Complex",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Multi-family residential complex with shared amenities and green spaces."
  },
  {
    id: 19,
    slug: "meditation-pavilion",
    title: "Meditation Pavilion",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Serene pavilion design for meditation and spiritual practices."
  },
  {
    id: 20,
    slug: "urban-courtyard",
    title: "Urban Courtyard",
    category: "Landscape",
    image: "https://images.unsplash.com/photo-1558618047-3c8c5d5c2a8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Private urban courtyard with water features and native plantings."
  }
];

// DETAILED PROJECT INFORMATION - Add detailed data here
// =====================================================
export const projectDetails: { [key: string]: ProjectDetail } = {
  "modern-residential-villa": {
    slug: "modern-residential-villa",
    title: "Modern Residential Villa",
    category: "Architecture",
    location: "Bangalore, Karnataka",
    year: "2023",
    client: "Private Residence",
    area: "3,500 sq ft",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    description: "A contemporary villa design that seamlessly blends indoor and outdoor living spaces, featuring clean lines, natural materials, and sustainable design principles.",
    challenge: "The primary challenge was to create a modern family home that maintains privacy while maximizing natural light and creating seamless indoor-outdoor flow.",
    solution: "We designed a series of interconnected pavilions around a central courtyard, using large sliding glass doors, natural stone, and wooden elements to create harmony with the landscape.",
    features: [
      "Open-plan living spaces with double-height ceilings",
      "Central courtyard with water feature",
      "Sustainable materials and energy-efficient systems",
      "Private garden with outdoor entertainment area",
      "Smart home automation system"
    ]
  },
  "urban-apartment-interior": {
    slug: "urban-apartment-interior",
    title: "Urban Apartment Interior",
    category: "Interior Design",
    location: "Mumbai, Maharashtra",
    year: "2023",
    client: "Young Professional",
    area: "1,200 sq ft",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    description: "Sophisticated interior design for a modern urban apartment with maximized space efficiency and contemporary aesthetics.",
    challenge: "Transform a compact apartment into a functional and stylish home that accommodates work, rest, and entertainment needs.",
    solution: "We employed smart storage solutions, multi-functional furniture, and a neutral color palette with accent colors to create the illusion of space while maintaining style.",
    features: [
      "Custom-built storage solutions",
      "Multi-functional furniture pieces",
      "Modern kitchen with breakfast bar",
      "Home office integration",
      "Artistic lighting design"
    ]
  }
  // TO ADD MORE DETAILED PROJECT INFO:
  // Copy the structure above and add new entries with the same slug as in projectList
};

// HELPER FUNCTIONS
// ================
export const getProjectBySlug = (slug: string): ProjectDetail | null => {
  return projectDetails[slug] || null;
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projectList.filter(project => project.category === category);
};

export const getAllCategories = (): string[] => {
  return Array.from(new Set(projectList.map(project => project.category)));
};
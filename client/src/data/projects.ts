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

// MAIN PROJECTS LIST - Your actual projects from word documents
// ==============================================================
export const projectList: Project[] = [
  // Architecture & Interior Projects
  {
    id: 1,
    slug: "ujjwal-residence",
    title: "Mr. Ujjwal's Residence",
    category: "Architecture",
    image: "/deets/arch & interiors - ujjwal residence/32.jpg",
    description: "Featuring warm, natural materials and bold, dynamic accents with modular furniture and biophilic design elements."
  },
  {
    id: 2,
    slug: "sirigere-mane",
    title: "Sirigere Mane",
    category: "Architecture",
    image: "/deets/arch & interiors - sirigere mane/625226810543813.jpg",
    description: "Modern urban apartment in Bangalore's heart, redefining contemporary living with elegance and sustainability."
  },
  {
    id: 3,
    slug: "prajwal-residence",
    title: "Mr. Prajwal's Residence",
    category: "Architecture",
    image: "/deets/arch & interiors - prajwal mane/9.jpg",
    description: "Luxury residential project blending sophisticated design with unparalleled comfort and contemporary architecture."
  },
  {
    id: 4,
    slug: "shivakumar-residence",
    title: "Mr. Shivakumar's Residence",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Luxury residential project showcasing harmonious balance of contemporary architecture and timeless elegance."
  },
  {
    id: 5,
    slug: "kumar-residence",
    title: "Mr. Kumar's Residence",
    category: "Architecture",
    image: "/deets/arch & interiors - kumar mane/9.jpg",
    description: "Modern elegance combined with functional design, creating serene living space integrated with natural surroundings."
  },
  {
    id: 6,
    slug: "coworking-space",
    title: "Co-Working Space",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Bangalore coworking space fostering creativity and collaboration with modular furniture and biophilic design."
  },
  
  // Landscape Projects
  {
    id: 7,
    slug: "terrace-garden",
    title: "Terrace Garden",
    category: "Landscape",
    image: "/deets/landscape - terrace garden/629454899040197.jpg",
    description: "Landscaped planting areas with ornamental plants, seating zones, and infinity pool creating serene urban escape."
  },
  {
    id: 8,
    slug: "mvj-college-office",
    title: "MVJ College Office",
    category: "Landscape",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Seamless integration of built structures with rural landscape using natural materials and native vegetation."
  },
  {
    id: 9,
    slug: "high-rise-apartment",
    title: "High Rise Apartment",
    category: "Landscape",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Efficient vertical space utilization with focus on sustainability, accessibility, and modern amenities integration."
  },
  {
    id: 10,
    slug: "girish-backyard",
    title: "Girish's Backyard",
    category: "Landscape",
    image: "https://images.unsplash.com/photo-1574691250077-03a929faece5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Farmhouse landscape design enhancing functionality and aesthetic appeal with natural materials and native plants."
  },
  {
    id: 11,
    slug: "anil-farmhouse",
    title: "Anil's Farmhouse",
    category: "Landscape",
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Harmonious blend between built environment and rural landscape maintaining rustic charm and sustainable living."
  }
  
  // TO ADD MORE PROJECTS: Follow the same structure above
  // {
  //   id: 12,
  //   slug: "your-project-slug",
  //   title: "Your Project Title",
  //   category: "Architecture" | "Interior Design" | "Landscape",
  //   image: "your-image-url",
  //   description: "Your project description"
  // }
];

// DETAILED PROJECT INFORMATION - Your actual project details
// ==========================================================
export const projectDetails: { [key: string]: ProjectDetail } = {
  "ujjwal-residence": {
    slug: "ujjwal-residence",
    title: "Mr. Ujjwal's Residence",
    category: "Architecture",
    location: "Bangalore, Karnataka",
    year: "2024",
    client: "Private Residence",
    area: "3,200 sq ft",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    description: "The interiors feature a mix of warm, natural materials and bold, dynamic accents. Modular furniture, biophilic design elements, and varied work zones create an inspiring and adaptable environment.",
    challenge: "Creating an inspiring and adaptable living environment that accommodates both individual and family needs.",
    solution: "We implemented modular furniture solutions and biophilic design elements with varied zones for different activities.",
    features: [
      "Gourmet kitchen with state-of-the-art appliances",
      "Tranquil master suite with private balcony",
      "Landscaped backyard with pool and fire pit",
      "Solar panels and rainwater harvesting",
      "Modular furniture and biophilic design"
    ]
  },
  "sirigere-mane": {
    slug: "sirigere-mane",
    title: "Sirigere Mane",
    category: "Architecture",
    location: "Bangalore, Karnataka",
    year: "2024",
    client: "Urban Professionals",
    area: "1,800 sq ft",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    description: "Located in the bustling heart of Bangalore, this residential apartment project redefines modern urban living with a focus on elegance, functionality, and sustainability.",
    challenge: "Designing modern urban apartments that cater to professionals and families while maintaining elegance and sustainability.",
    solution: "Contemporary design with sleek façade of glass and concrete, complemented by green terraces, prioritizing natural light and ventilation.",
    features: [
      "Contemporary glass and concrete façade",
      "Green terraces for sustainability",
      "Strategic natural light and ventilation",
      "Modern amenities for urban living",
      "Harmonious blend of style and practicality"
    ]
  },
  "coworking-space": {
    slug: "coworking-space",
    title: "Co-Working Space",
    category: "Interior Design",
    location: "Bangalore, Karnataka",
    year: "2024",
    client: "Commercial",
    area: "5,000 sq ft",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    description: "Located in the heart of Bangalore, this coworking space is designed to foster creativity, collaboration, and productivity for professionals and businesses alike.",
    challenge: "Creating a flexible workspace that adapts to the dynamic needs of today's workforce while promoting creativity and collaboration.",
    solution: "Mixed warm, natural materials with bold, dynamic accents, modular furniture, and biophilic design elements creating varied work zones.",
    features: [
      "Modular furniture for flexibility",
      "Biophilic design elements",
      "Varied work zones for different needs",
      "Mix of warm, natural materials",
      "Bold, dynamic accent features"
    ]
  },
  "terrace-garden": {
    slug: "terrace-garden",
    title: "Terrace Garden",
    category: "Landscape",
    location: "Bangalore, Karnataka",
    year: "2024",
    client: "Private Residence",
    area: "1,200 sq ft",
    images: ["/deets/landscape - terrace garden/629454899040197.jpg"],
    description: "Landscaped planting areas with ornamental plants, seating zones, and infinity pool creating serene urban escape.",
    challenge: "Maximizing green space on a terrace.",
    solution: "Used planters and seating zones for a relaxing environment.",
    features: [
      "Infinity pool",
      "Ornamental plants",
      "Seating zones"
    ]
  },
  "mvj-college-office": {
    slug: "mvj-college-office",
    title: "MVJ College Office",
    category: "Landscape",
    location: "Bangalore, Karnataka",
    year: "2024",
    client: "Educational Institution",
    area: "8,000 sq ft",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    description: "The design aims to seamlessly integrate the built structures with the rural landscape by using natural materials, native vegetation, and open, flowing layouts that preserve rustic charm and promote sustainable living.",
    challenge: "Integrating modern office requirements while maintaining harmony with the rural landscape setting.",
    solution: "Used natural materials and native vegetation with open, flowing layouts to preserve the rustic charm.",
    features: [
      "Natural materials integration",
      "Native vegetation selection",
      "Open, flowing layout design",
      "Rustic charm preservation",
      "Sustainable living promotion"
    ]
  },
  "high-rise-apartment": {
    slug: "high-rise-apartment",
    title: "High Rise Apartment",
    category: "Landscape",
    location: "Bangalore, Karnataka",
    year: "2024",
    client: "Residential Complex",
    area: "15,000 sq ft",
    images: [
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1558618047-3c8c5d5c2a8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    description: "The project focuses on efficient vertical space utilization, structural integrity, accessibility, and integration of modern amenities such as elevators, parking, security, and communal areas.",
    challenge: "Efficiently utilizing vertical space while ensuring structural integrity and accessibility for high-rise living.",
    solution: "Strategic planning for modern amenities integration with focus on sustainability, fire safety, and local building code compliance.",
    features: [
      "Efficient vertical space utilization",
      "Modern amenities integration",
      "Elevator and parking systems",
      "Security and communal areas",
      "Fire safety compliance"
    ]
  },
  "girish-backyard": {
    slug: "girish-backyard",
    title: "Girish's Backyard",
    category: "Landscape",
    location: "Bangalore, Karnataka",
    year: "2024",
    client: "Private Farmhouse",
    area: "4,200 sq ft",
    images: [
      "https://images.unsplash.com/photo-1558618047-3c8c5d5c2a8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    description: "The landscape farmhouse project involves designing the outdoor spaces around a farmhouse to enhance its functionality, aesthetic appeal, and connection to nature. The design emphasizes a harmonious blend between the built environment and the rural landscape, often using natural materials, native plants, and open layouts to maintain the rustic charm and support sustainable living.",
    challenge: "Enhancing farmhouse outdoor functionality while maintaining connection to nature and rustic appeal.",
    solution: "Harmonious blend of built environment with rural landscape using natural materials, native plants, and open layouts.",
    features: [
      "Enhanced functionality and aesthetic appeal",
      "Natural materials and native plants",
      "Open layout design",
      "Rustic charm maintenance",
      "Sustainable living support"
    ]
  },
  "anil-farmhouse": {
    slug: "anil-farmhouse",
    title: "Anil's Farmhouse",
    category: "Landscape",
    location: "Bangalore, Karnataka",
    year: "2024",
    client: "Private Farmhouse",
    area: "3,800 sq ft",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1558618047-3c8c5d5c2a8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    description: "The landscape farmhouse project involves designing the outdoor spaces around a farmhouse to enhance its functionality, aesthetic appeal, and connection to nature. The design emphasizes a harmonious blend between the built environment and the rural landscape, often using natural materials, native plants, and open layouts to maintain the rustic charm and support sustainable living.",
    challenge: "Creating functional outdoor spaces that enhance aesthetic appeal while maintaining natural harmony.",
    solution: "Harmonious blend of built environment with rural landscape using natural materials, native plants, and open layouts.",
    features: [
      "Enhanced functionality and aesthetic appeal",
      "Natural materials and native plants",
      "Open layout design",
      "Rustic charm maintenance",
      "Sustainable living support"
    ]
  },
  "prajwal-residence": {
    slug: "prajwal-residence",
    title: "Mr. Prajwal's Residence",
    category: "Architecture",
    location: "Bangalore, Karnataka",
    year: "2024",
    client: "Private Residence",
    area: "2,500 sq ft",
    images: ["/deets/arch & interiors - prajwal mane/9.jpg"],
    description: "Luxury residential project blending sophisticated design with unparalleled comfort and contemporary architecture.",
    challenge: "Designing a luxury residence that balances comfort and sophistication.",
    solution: "Used high-end materials and modern design principles for a unique living experience.",
    features: [
      "Spacious living areas",
      "Modern kitchen",
      "Private garden",
      "Energy-efficient lighting"
    ]
  },
  "shivakumar-residence": {
    slug: "shivakumar-residence",
    title: "Mr. Shivakumar's Residence",
    category: "Architecture",
    location: "Bangalore, Karnataka",
    year: "2024",
    client: "Private Residence",
    area: "3,000 sq ft",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"],
    description: "Luxury residential project showcasing harmonious balance of contemporary architecture and timeless elegance.",
    challenge: "Blending contemporary and timeless design elements.",
    solution: "Integrated classic and modern features for a harmonious look.",
    features: [
      "Elegant interiors",
      "Spacious bedrooms",
      "Landscaped outdoor area"
    ]
  },
  "kumar-residence": {
    slug: "kumar-residence",
    title: "Mr. Kumar's Residence",
    category: "Architecture",
    location: "Bangalore, Karnataka",
    year: "2024",
    client: "Private Residence",
    area: "2,800 sq ft",
    images: ["/deets/arch & interiors - kumar mane/9.jpg"],
    description: "Modern elegance combined with functional design, creating serene living space integrated with natural surroundings.",
    challenge: "Creating a serene and functional living space.",
    solution: "Used open layouts and natural materials for tranquility.",
    features: [
      "Open-plan living",
      "Natural materials",
      "Large windows"
    ]
  }
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
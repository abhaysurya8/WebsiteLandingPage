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
    image: "/Images/sirigere 1.jpg",
    description: "Modern urban apartment in Bangalore's heart, redefining contemporary living with elegance and sustainability."
  },
  {
    id: 3,
    slug: "prajwal-residence",
    title: "Mr. Prajwal's Residence",
    category: "Architecture",
    image: "/Images/prajwal 1.png",
    description: "Luxury residential project blending sophisticated design with unparalleled comfort and contemporary architecture."
  },
  {
    id: 4,
    slug: "shivakumar-residence",
    title: "Mr. Shivakumar's Residence",
    category: "Architecture",
    image: "/Images/shivakumar 2.jpg",
    description: "Luxury residential project showcasing harmonious balance of contemporary architecture and timeless elegance."
  },
  {
    id: 5,
    slug: "kumar-residence",
    title: "Mr. Kumar's Residence",
    category: "Architecture",
    image: "/Images/kumar 2.jpg",
    description: "Modern elegance combined with functional design, creating serene living space integrated with natural surroundings."
  },
  {
    id: 6,
    slug: "coworking-space",
    title: "Co-Working Space",
    category: "Interior Design",
    image: "/Images/coworkingspace1.jpg",
    description: "Bangalore coworking space fostering creativity and collaboration with modular furniture and biophilic design."
  },
  
  // Landscape Projects
  {
    id: 7,
    slug: "terrace-garden",
    title: "Terrace Garden",
    category: "Landscape",
    image: "/Images/terrace 1.jpg",
    description: "Landscaped planting areas with ornamental plants, seating zones, and infinity pool creating serene urban escape."
  },
  {
    id: 8,
    slug: "mvj-college-office",
    title: "MVJ College Office",
    category: "Landscape",
    image: "/Images/mvj 1.png",
    description: "Seamless integration of built structures with rural landscape using natural materials and native vegetation."
  },
  {
    id: 10,
    slug: "girish-backyard",
    title: "Girish's Backyard",
    category: "Landscape",
    image: "/Images/girish 1.png",
    description: "Farmhouse landscape design enhancing functionality and aesthetic appeal with natural materials and native plants."
  },
  {
    id: 11,
    slug: "anil-farmhouse",
    title: "Anil's Farmhouse",
    category: "Landscape",
    image: "/Images/anil 1.jpg",
    description: "Harmonious blend between built environment and rural landscape maintaining rustic charm and sustainable living."
  },
  {
    id: 12,
    slug: "sumitha-residence",
    title: "Sumitha Residence",
    category: "Architecture",
    image: "/Images/sumitha 1.jpg",
    description: "This residential project in Bangalore embodies modern elegance combined with functional design. The goal was to create a serene and inviting living space that seamlessly integrates with its natural surroundings while prioritizing comfort and sustainability. The architecture emphasizes clean lines and open spaces, featuring a minimalist façade of natural stone and glass. Large windows invite ample natural light, creating a strong indoor-outdoor connection. The result is a home that not only meets the practical needs of modern living but also serves as a sanctuary where the family can create lasting memories."
  },
  
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
      "/Images/ujjwal 1.jpg",
      "/Images/ujjwal 2.jpg",
      "/Images/ujjwal 3.jpg",
      "/Images/ujjwal 4.jpg",
      "/Images/ujjwal 5.jpg"
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
      "/Images/sirigere 1.jpg",
      "/Images/sirigere 2.jpg",
      "/Images/sirigere 3.jpg",
      "/Images/sirigere 4.jpg"
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
      "/Images/coworkingspace1.jpg",
      "/Images/coworkingspace2.jpg",
      "/Images/coworkingspace3.jpg"
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
    images: [
      "/Images/terrace 1.jpg",
      "/Images/terrace 2.jpg"
    ],
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
      "/Images/mvj 1.png",
      "/Images/mvj 2.png",
      "/Images/mvj 3.png",
      "/Images/mvj 4.png"
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
  "girish-backyard": {
    slug: "girish-backyard",
    title: "Girish's Backyard",
    category: "Landscape",
    location: "Bangalore, Karnataka",
    year: "2024",
    client: "Private Farmhouse",
    area: "4,200 sq ft",
    images: [
      "/Images/girish 1.png",
      "/Images/girish 2.png"
    ],
    description: "Farmhouse landscape design enhancing functionality and aesthetic appeal with natural materials and native plants.",
    challenge: "Designing a functional and beautiful backyard for a farmhouse.",
    solution: "Used natural materials and native plants to enhance both functionality and aesthetics.",
    features: [
      "Functional backyard layout",
      "Use of natural materials",
      "Native plant selection"
    ]
  },
  "anil-farmhouse": {
    slug: "anil-farmhouse",
    title: "Anil's Farmhouse",
    category: "Landscape",
    location: "Bangalore, Karnataka",
    year: "2024",
    client: "Private Farmhouse",
    area: "6,000 sq ft",
    images: [
      "/Images/anil 1.jpg",
      "/Images/anil 2.jpg",
      "/Images/anil 3.jpg",
      "/Images/anil 4.jpg",
      "/Images/anil 5.jpg"
    ],
    description: "Harmonious blend between built environment and rural landscape maintaining rustic charm and sustainable living.",
    challenge: "Blending built environment with rural landscape while maintaining rustic charm.",
    solution: "Used natural materials and open layouts to create a harmonious and sustainable farmhouse.",
    features: [
      "Rustic charm",
      "Sustainable living",
      "Natural materials",
      "Open layouts",
      "Harmonious design"
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
    images: [
      "/Images/prajwal 1.png",
      "/Images/prajwal 2.png",
      "/Images/prajwal 3.png",
      "/Images/prajwal 4.png",
      "/Images/prajwal 5.png"
    ],
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
    images: [
      "/Images/shivakumar 2.jpg",
      "/Images/shivakumar 3.jpg",
      "/Images/shivakumar 4.jpg",
      "/Images/shivakumar's 1.jpg"
    ],
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
    images: [
      "/Images/kumar 2.jpg",
      "/Images/kumar 3.jpg",
      "/Images/kumar 4.jpg",
      "/Images/kumar 5.jpg",
      "/Images/kumar's 1.jpg"
    ],
    description: "Modern elegance combined with functional design, creating serene living space integrated with natural surroundings.",
    challenge: "Creating a serene and functional living space.",
    solution: "Used open layouts and natural materials for tranquility.",
    features: [
      "Open-plan living",
      "Natural materials",
      "Large windows"
    ]
  },
  "sumitha-residence": {
    slug: "sumitha-residence",
    title: "Sumitha Residence",
    category: "Architecture",
    location: "Bangalore, Karnataka",
    year: "2024",
    client: "Private Residence",
    area: "2,200 sq ft",
    images: [
      "/Images/sumitha 1.jpg",
      "/Images/sumitha 2.png",
      "/Images/sumitha 3.png",
      "/Images/sumitha 4.png",
      "/Images/sumitha 5.png"
    ],
    description: "This residential project in Bangalore embodies modern elegance combined with functional design. The goal was to create a serene and inviting living space that seamlessly integrates with its natural surroundings while prioritizing comfort and sustainability. The architecture emphasizes clean lines and open spaces, featuring a minimalist façade of natural stone and glass. Large windows invite ample natural light, creating a strong indoor-outdoor connection. The result is a home that not only meets the practical needs of modern living but also serves as a sanctuary where the family can create lasting memories.",
    challenge: "Designing a home that balances modern elegance with comfort and sustainability.",
    solution: "Emphasized open layouts, natural materials, and large windows for light and connection to nature.",
    features: [
      "Minimalist façade of natural stone and glass",
      "Open-plan living spaces",
      "Large windows for natural light",
      "Indoor-outdoor connection",
      "Sustainable design elements"
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
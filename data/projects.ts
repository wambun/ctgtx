export interface Project {
  slug: string;
  title: string;
  client: string;
  description: string;
  image: string;
  services: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'sager-electronics',
    title: 'Sager Electronics',
    client: 'Sager Electronics',
    description: 'Comprehensive AV and technology installation for Sager Electronics facility.',
    image: '/images/projects/sager-electronics.jpg',
    services: ['audio-visual'],
    featured: true,
  },
  {
    slug: 'lightbeam-health-solutions',
    title: 'Lightbeam Health Solutions',
    client: 'Lightbeam Health Solutions',
    description: 'Modern AV solution implementation for healthcare technology company.',
    image: '/images/projects/lightbeam.jpg',
    services: ['audio-visual'],
    featured: true,
  },
  {
    slug: 'alphabroder',
    title: 'Alphabroder',
    client: 'Alphabroder',
    description: 'Full technology integration for one of the nation\'s leading suppliers.',
    image: '/images/projects/alphabroder.jpg',
    services: ['audio-visual', 'cabling'],
    featured: true,
  },
  {
    slug: 'city-of-carrollton-city-hall',
    title: 'City of Carrollton, City Hall',
    client: 'City of Carrollton',
    description: 'Complete technology overhaul for city hall including AV and networking infrastructure.',
    image: '/images/projects/carrollton-city-hall.jpg',
    services: ['audio-visual', 'cabling', 'security'],
    featured: false,
  },
  {
    slug: 'micron',
    title: 'Micron',
    client: 'Micron Technology',
    description: 'Data center cabling and infrastructure project.',
    image: '/images/projects/micron.jpg',
    services: ['cabling'],
    featured: false,
  },
  {
    slug: 'equipment-depot',
    title: 'Equipment Depot',
    client: 'Equipment Depot',
    description: 'Electrical and technology installation for equipment facility.',
    image: '/images/projects/equipment-depot.jpg',
    services: ['electrical'],
    featured: false,
  },
  {
    slug: 'car-parts',
    title: 'Car Parts',
    client: 'Car Parts',
    description: 'Comprehensive technology solution for automotive parts facility.',
    image: '/images/projects/car-parts.jpg',
    services: ['cabling', 'electrical'],
    featured: false,
  },
  {
    slug: 'the-city-of-carrollton',
    title: 'The City of Carrollton',
    client: 'City of Carrollton',
    description: 'Municipal security and technology infrastructure project.',
    image: '/images/projects/city-of-carrollton.jpg',
    services: ['security', 'cabling'],
    featured: false,
  },
  {
    slug: 'fairway-mortgage',
    title: 'Fairway Mortgage',
    client: 'Fairway Mortgage',
    description: 'Office technology installation for mortgage company.',
    image: '/images/projects/fairway-mortgage.jpg',
    services: ['audio-visual', 'cabling'],
    featured: false,
  },
  {
    slug: 'fort-worth-zoo',
    title: 'Fort Worth Zoo',
    client: 'Fort Worth Zoo',
    description: 'Security and AV installation for major zoo facility.',
    image: '/images/projects/fort-worth-zoo.jpg',
    services: ['security', 'audio-visual'],
    featured: false,
  },
  {
    slug: 'goosehead-insurance',
    title: 'Goosehead Insurance',
    client: 'Goosehead Insurance',
    description: 'Comprehensive technology installation for insurance headquarters.',
    image: '/images/projects/goosehead-insurance.jpg',
    services: ['electrical', 'cabling', 'audio-visual'],
    featured: false,
  },
  {
    slug: 'bio-pappell',
    title: 'Bio Pappell',
    client: 'Bio Pappell',
    description: 'Industrial AV and technology installation.',
    image: '/images/projects/bio-pappell.jpg',
    services: ['audio-visual'],
    featured: false,
  },
  {
    slug: 'trinity-private-equity',
    title: 'Trinity Private Equity',
    client: 'Trinity Private Equity',
    description: 'Executive conference room and AV installation.',
    image: '/images/projects/trinity-private-equity.jpg',
    services: ['audio-visual'],
    featured: false,
  },
  {
    slug: 'crowne-plaza',
    title: 'Crowne Plaza',
    client: 'Crowne Plaza',
    description: 'Interior and exterior audio visual installation for hotel facility in Arlington, TX. Installed 20 new exterior speakers and interior lobby sound system.',
    image: '/images/projects/crowne-plaza.jpg',
    services: ['audio-visual'],
    featured: true,
  },
  {
    slug: 'nuvodesk',
    title: 'Nuvodesk',
    client: 'Nuvodesk',
    description: 'Modern coworking space technology integration.',
    image: '/images/projects/nuvodesk.jpg',
    services: ['audio-visual', 'cabling'],
    featured: false,
  },
  {
    slug: 'medsynergies',
    title: 'Medsynergies',
    client: 'Medsynergies',
    description: 'Healthcare facility cabling and infrastructure.',
    image: '/images/projects/medsynergies.jpg',
    services: ['cabling'],
    featured: false,
  },
  {
    slug: 'huawei',
    title: 'Huawei',
    client: 'Huawei',
    description: 'Data center and networking infrastructure project.',
    image: '/images/projects/huawei.jpg',
    services: ['cabling'],
    featured: false,
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getProjectsByService = (serviceSlug: string): Project[] => {
  return projects.filter((project) => project.services.includes(serviceSlug));
};

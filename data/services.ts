export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  shortDescription: string;
  image: string;
  icon?: string;
  features: string[];
  relatedProjects?: string[];
}

export const services: Service[] = [
  {
    slug: 'audio-visual',
    title: 'Audio / Visual',
    shortTitle: 'Audio/Visual',
    description: 'Whatever your communication needs, whatever the size or geographic distribution of your enterprise, CTG can deliver scalable, easy-to-use, advanced AV solutions that meet your exact requirements. We\'ll work with you to seamlessly integrate all the capabilities you\'d like to incorporate – from office and meeting room systems to video walls, control center technology, training facility tools and more.',
    shortDescription: 'Connect Technology Group can provide simple, scalable, and advanced AV to any company. We will work with you to discuss your exact needs, integrate all of the systems you\'d like to work together and deliver a modern and clean AV solution to any room or building.',
    image: '/images/services/audio-visual.jpg',
    features: [
      'Video Distribution & Digital Signage',
      'Video Walls & DvLED Displays',
      'Video Conferencing & Zoom Rooms',
      'Huddle Spaces & Conference Rooms',
      'Audio DSP Installation & Configuration',
      'White Noise & Sound Masking',
      'Live Events & Productions',
    ],
    relatedProjects: ['sager-electronics', 'lightbeam-health-solutions', 'alphabroder', 'city-of-carrollton-city-hall'],
  },
  {
    slug: 'electrical',
    title: 'Electrical',
    shortTitle: 'Electrical',
    description: 'Connect Technology Group is your one source provider of a complete suite of electrical services. Our certified team of electrical technicians can provide facilities with repair, maintenance, optimization and/or renovation. CTG is a trusted company that has full design capabilities as well as key partnership manufactures to aid in implementing the right electrical solution for your facility.',
    shortDescription: 'Connect Technology Group is your one source provider of a complete suite of electrical services. Our certified team of electrical technicians can provide facilities with repair, maintenance, optimization and/or renovation.',
    image: '/images/services/electrical.jpg',
    features: [
      'Electrical Repair & Maintenance',
      'Facility Optimization',
      'Renovation Projects',
      'Commercial Electrical Projects',
      'EV Charging Stations',
      'Generator Installation',
      'Lighting Systems',
    ],
    relatedProjects: ['equipment-depot', 'goosehead-insurance'],
  },
  {
    slug: 'security',
    title: 'Security',
    shortTitle: 'Security',
    description: 'Security within and surrounding a facility is vital to a company. From a simple installation of one camera to a scaled security project, CTG can help provide a company with top of the line access control and security. With our local presence and dedicated team of professionals, CTG is capable of providing 24/7 demand emergency response to all its clients.',
    shortDescription: 'Security within and surrounding a facility is vital to a company. From a simple installation of one camera to a scaled security project, CTG can help provide a company with top of the line access control and security.',
    image: '/images/services/security.jpg',
    features: [
      'Access Control Systems',
      'Security Camera Installation',
      'Video Surveillance',
      'Automated Security Gates',
      '24/7 Emergency Response',
      'Cloud-Based Security Systems',
      'Intrusion Detection',
    ],
    relatedProjects: ['fort-worth-zoo', 'the-city-of-carrollton'],
  },
  {
    slug: 'cabling',
    title: 'Cabling',
    shortTitle: 'Cabling',
    description: 'As your single-source, full-service structured cabling company, CTG uses the highest quality components from leading manufacturers to deliver the latest structured cabling and network technologies to meet virtually any client need. Our experienced team of structured cabling technicians, design engineers, and project managers are why our loyal clients depend on us.',
    shortDescription: 'As your single-source, full-service structured cabling company, CTG uses the highest quality components from leading manufacturers to deliver the latest structured cabling and network technologies.',
    image: '/images/services/cabling.jpg',
    features: [
      'Structured Cabling Design',
      'Network Infrastructure',
      'Fiber Optic Installation',
      'Data Center Cabling',
      'Cable Management',
      'Testing & Certification',
      'Network Upgrades',
    ],
    relatedProjects: ['medsynergies', 'micron', 'huawei'],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug);
};

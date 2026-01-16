export const footerLinks: Array<{
  columnName: string;
  links: Array<{
    href: string;
    title: string;
  }>;
}> = [
  {
    columnName: 'Company',
    links: [
      { href: '/about', title: 'About Us' },
      { href: '/about/why-ctg', title: 'Why CTG' },
      { href: '/about/leadership', title: 'Leadership' },
      { href: '/testimonials', title: 'Testimonials' },
    ],
  },
  {
    columnName: 'Services',
    links: [
      { href: '/services/audio-visual', title: 'Audio/Visual' },
      { href: '/services/electrical', title: 'Electrical' },
      { href: '/services/security', title: 'Security' },
      { href: '/services/cabling', title: 'Cabling' },
    ],
  },
  {
    columnName: 'Resources',
    links: [
      { href: '/projects', title: 'Projects' },
      { href: '/partners', title: 'Partners' },
      { href: '/blog', title: 'Blog' },
      { href: '/resources', title: 'Resources' },
    ],
  },
  {
    columnName: 'Contact',
    links: [
      { href: '/contact', title: 'Contact Us' },
      { href: '/free-consultation', title: 'Free Consultation' },
    ],
  },
];

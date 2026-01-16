export const headerNavLinks: Array<{
  href: string;
  title: string;
  children?: Array<{
    href: string;
    title: string;
  }>;
}> = [
  {
    href: '/about',
    title: 'About Us',
    children: [
      { href: '/about/why-ctg', title: 'Why CTG' },
      { href: '/about/leadership', title: 'Leadership' },
    ],
  },
  {
    href: '/services',
    title: 'Services',
    children: [
      { href: '/services/audio-visual', title: 'Audio/Visual' },
      { href: '/services/electrical', title: 'Electrical' },
      { href: '/services/security', title: 'Security' },
      { href: '/services/cabling', title: 'Cabling' },
    ],
  },
  { href: '/projects', title: 'Projects' },
  { href: '/partners', title: 'Partners' },
  { href: '/blog', title: 'Blog' },
];

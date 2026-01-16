export interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string[];
  phone: string;
  email: string;
  about?: string[];
}

export const team: TeamMember[] = [
  {
    name: 'Sean Flynn',
    title: 'President',
    image: '/images/team/sean-flynn.jpg',
    bio: [
      "Connect Technology Group is headed by Founder Sean Flynn. He leads a strong management team that is focused on keeping CTG's mission of Service One Step and Beyond relevant to every client.",
      "He's responsible for CTG's growth opportunities and driving process optimization across all parts of Connect Technology Group.",
    ],
    phone: '972-695-5062',
    email: 'seanf@ctgtx.com',
    about: [
      'Went to the University of Nebraska',
      'Loves the outdoors',
      'Family Man',
      'Veteran',
    ],
  },
  {
    name: 'John Dermody',
    title: 'VP of Operations',
    image: '/images/team/john-dermody.jpg',
    bio: [
      'John Dermody is a 24 year operations professional in the information and communications technology (ICT) community.',
      "John's primary responsibility is as a telecommunications designer for Northrup Grumman mission critical data centers.",
    ],
    phone: '972-695-5064',
    email: 'johnd@ctgtx.com',
    about: [
      'Graduated from Campbell University in North Carolina',
      'Veteran',
    ],
  },
  {
    name: 'Denis Weers',
    title: 'VP of Operations – RCDD',
    image: '/images/team/denis-weers.jpg',
    bio: [
      'Denis Weers is the Vice President of Operations and one of the principle owners of Connect Technology Group.',
      'He has been in the Telecommunication and Electrical industry since 1997. He is an active member of BICSI and has been a Registered Communications Distribution Designer (RCDD) since 2003.',
      "Denis oversees all operational aspects of CTG along with maintaining great relations with CTG's clients and partners.",
    ],
    phone: '972-695-5063',
    email: 'denisw@ctgtx.com',
    about: [
      'Licensed Security Manager',
      'Loves to bowl!',
    ],
  },
  {
    name: 'Brad Heebsh',
    title: 'VP of Sales',
    image: '/images/team/brad-heebsh.jpg',
    bio: [
      'Brad Heebsh is a partner of Connect Technology Group, the Carrollton, Texas based company.',
      'Responsibilities include business development, strategic accounts growth, commitment to service and focus on client solutions.',
      'Brad has been involved with project build-outs from the design phase to contract negotiation to project completion sign-off.',
    ],
    phone: '972-695-5056',
    email: 'bradh@ctgtx.com',
    about: [
      'Graduated from the University of North Texas',
      '30 years of business development experience',
    ],
  },
];

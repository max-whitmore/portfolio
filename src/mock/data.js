import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Max Whitmore - Front End Developer',
  lang: 'en',
  description: 'Welcome!',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Max Whitmore',
  subtitle:
    'I am currently working at Pearson College London to improve and modernise their website.',
  cta: 'About me',
  img: 'hero-image-small.png',
};

// ABOUT DATA
export const aboutData = {
  img: 'hero-image-small.png',
  paragraphOne:
    'My name is Max Whitmore, I am a Front End Developer, based in Kent, England. I have a passion for web development.',
  paragraphTwo: 'In my spare time I enjoy playing football, running, and drinking beer and gin!',
  paragraphThree: 'Add some more',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Pearson College London',
    dates: '2019 - present',
    info:
      'Overhaul of the Pearson College London website and Adobe Experience Manager system, to provide a responsive and accessible website to inform users about Pearson College London.',
    info2: 'HTML, CSS, LESS, JavaScript & Adobe Experience Manager.',
    projectinfo: '/work/pearson-college-london',
    url: 'https://www.pearsoncollegelondon.ac.uk/',
    externallink: 'external-link-alt',
    github: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pwgen.PNG',
    title: 'Password generator',
    dates: '',
    info: 'Small password generator app with a simple copy button.',
    subheading: 'Goal',
    subheading2: 'Technology',
    info2: 'HTML, CSS, LESS, JavaScript',
    projectinfo: '',
    url: 'https://github.com/max-whitmore/PasswordGenerator',
    externallink: 'external-link-alt',
    github: 'github',
    repo: 'https://max-whitmore.github.io/PasswordGenerator',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Have a project that you would like to discuss with me?',
  btn: 'Get in touch!',
  email: 'maxcwhitmore@gmail.com',
};

// HEADER DATA

export const headerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/maxw',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/max-whitmore',
    },
  ],
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/maxw',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/max-whitmore',
    },
  ],
};

// Pearson College London data
export const pclData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Pearson College London',
    dates: '2019 - present',
    info:
      'Overhaul of the Pearson College London website and Adobe Experience Manager system, to provide a responsive and accessible website to inform users about Pearson College London.',
    subheading: 'Goal',
    subheading2: 'Technology',
    info2: 'HTML, CSS, JavaScript, LESS & Adobe Experience Manager.',
    url: 'https://www.pearsoncollegelondon.ac.uk/',
    repo: '', // if no repo, the button will not show up
  },
];

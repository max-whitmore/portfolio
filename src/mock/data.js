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
  name: 'Max Whitmore,',
  subtitle: ' a Front End Developer, based in Kent, England.',
  cta: 'About me',
  img: 'hero-image-small.png'
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'Para one',
  paragraphTwo: 'Para two',
  paragraphThree: 'Para three',
}; 

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Pearson College London',
    info: 'Info 2',
    info2: 'Info 3',
    url: 'https://www.pearsoncollegelondon.ac.uk/',
    repo: '', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: 'Have a project that you would like to discuss with me?',
  btn: 'Get in touch!',
  email: 'maxcwhitmore@gmail.com',
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
      url: 'https://github.com/maaxw',
    },
  ],
};

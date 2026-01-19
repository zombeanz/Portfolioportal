import editorialSpreadImg from 'figma:asset/78f3040bade654f3eccc52782a3bc4c5c949e455.png';
import editorialGallery1 from 'figma:asset/38cfb6a1141d43c668588d77af7c498223a61bc5.png';
import editorialGallery2 from 'figma:asset/9f511e824c1bbb673bba708feee14fa3afa42cb8.png';
import editorialGallery3 from 'figma:asset/78f3040bade654f3eccc52782a3bc4c5c949e455.png';
import packageDesignImg from 'figma:asset/b0c2c91e7b7af25838a18f322e630c7691780225.png';
import packageGallery1 from 'figma:asset/b0c2c91e7b7af25838a18f322e630c7691780225.png';
import packageGallery2 from 'figma:asset/0179dc54851371ea7a6a36ff77bdfb35e889efde.png';
import packageGallery3 from 'figma:asset/3f10c351e3271f87e6d7b0865d024c82e044ab0a.png';
import illustrationImg from 'figma:asset/5ea4e266f5f258504ad2252b481e6dc670126cf7.png';
import illustrationGallery1 from 'figma:asset/5ea4e266f5f258504ad2252b481e6dc670126cf7.png';
import illustrationGallery2 from 'figma:asset/39714e7546018e669b0c5e17d133fd596244534c.png';
import illustrationGallery3 from 'figma:asset/3b0a0fabae811aa18db7c40c18abb49c47fd58e9.png';
import socialMediaImg from 'figma:asset/6e5861bc07dab387fd281181da5c32df5399844a.png';
import socialMediaGallery1 from 'figma:asset/3577f678f6f48a673bceed330924801549ae49a1.png';
import socialMediaGallery2 from 'figma:asset/e85f75762d96ca5392bbba623b64ca12b897395f.png';
import socialMediaGallery3 from 'figma:asset/bd05aceb0fd9f44c040850c844937a9d4f29aac2.png';
import socialMediaGallery4 from 'figma:asset/7041475595b7ac05bd566528cec013317ef1a2c0.png';
import socialMediaGallery5 from 'figma:asset/6e5861bc07dab387fd281181da5c32df5399844a.png';
import posterDesignImg from 'figma:asset/e7d85348c4de4980013f47d8eae56c15a327366a.png';
import posterGallery1 from 'figma:asset/e7d85348c4de4980013f47d8eae56c15a327366a.png';
import posterGallery2 from 'figma:asset/46118831645aea062d319d9f904d323e212e128d.png';
import posterGallery3 from 'figma:asset/43fe4e628bcf7dc9798655f4afbc2c1b0702a700.png';
import digitalArtImg from 'figma:asset/9bfff9fb3fac72baf2edc91d6f8e9f104f3af7d0.png';
import digitalArtGallery1 from 'figma:asset/9bfff9fb3fac72baf2edc91d6f8e9f104f3af7d0.png';
import digitalArtGallery2 from 'figma:asset/8a9aef93c1efc7079913f6d0e3874945c48fd0f6.png';
import digitalArtGallery3 from 'figma:asset/3f82297970a0304650a029bd137d7360cc444076.png';

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  role: string;
  description: string;
  challenge: string;
  solution: string;
  image: string;
  galleryImages: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'mother-jones-editorial-spread',
    title: 'Mother Jones Editorial Spread',
    category: 'Editorial',
    year: '2025',
    role: 'Designer (STUDENT)',
    description: 'A bold and gritty yet carefully crafted visual exploration of a true crime article for the Mother Jones publication.',
    challenge: 'Creating two double-page feature spreads that explored an article of choice in a conceptually sound and tonally appropriate manner.',
    solution: 'Developed a semi-surreal set of illustrations combining ideas of injustice, unfair legal systems, and emotional dispair to accompany the featured article.',
    image: editorialSpreadImg,
    galleryImages: [
      editorialGallery1,
      editorialGallery2,
      editorialGallery3,
    ],
  },
  {
    id: 2,
    slug: 'mothman-playing-cards',
    title: 'Mothman Playing Cards',
    category: 'Illustration',
    year: '2024',
    role: 'Illustrator (STUDENT)',
    description: 'A sample design for a hypothetical deck of cryptid themed playing cards, complete with unique suits and style direction.',
    challenge: 'Developing a solid theme for a deck that could be fleshed out into suits, while developing a distinctive illustration style appropriate for the theme.',
    solution: 'Developed a style language heavily inspired by grunge posters, junk journal collage, and traditional printmaking techniques. This highlights the numerous tales surrounding Mothman, all making his visage. ',
    image: illustrationImg,
    galleryImages: [
      illustrationGallery1,
      illustrationGallery2,
      illustrationGallery3,
    ],
  },
  {
    id: 3,
    slug: 'find-mr-b-social-campaign',
    title: 'Find Mr.B Social Campaign',
    category: 'Social Media',
    year: '2025',
    role: 'Designer',
    description: 'A vibrant, ongoing social media campaign promoting the new mascot for a local antique store.',
    challenge: 'Crafting scroll-stopping content that develops a recognizable identity for the shop and their mascot, designing also for the intention of branching these designs out further into merchandise.',
    solution: 'Combined the friendly geometry of Illustrator-heavy graphics and a 70s-inspired color palette to create an online identity that feels modern, but evokes vintage charm in an unconventional manner.',
    image: socialMediaGallery1,
    galleryImages: [
      socialMediaGallery1,
      socialMediaGallery2,
      socialMediaGallery3,
      socialMediaGallery4,
      socialMediaGallery5,
    ],
  },
  {
    id: 4,
    slug: 'almost-right-word-posters',
    title: 'Almost Right Word Posters',
    category: 'Print Design',
    year: '2025',
    role: 'Designer (STUDENT)',
    description: 'A set of exhibit posters featuring a quote by silent film icon Clara Bow, hypothetically for the Library of Congress.',
    challenge: 'Creating impactful posters that capture attention while exploring the quote conceptually while primarily relying on typography for design direction. .',
    solution: 'Utilized large-scale typography and aggressive cropping to evoke the geometry of the art deco movement. Display fonts with dramatic proportions are used to emphasize the quote.',
    image: posterDesignImg,
    galleryImages: [
      posterGallery1,
      posterGallery2,
      posterGallery3,
    ],
  },
  {
    id: 5,
    slug: 'popadelics-package-redesign',
    title: 'Popadelics Package Redesign',
    category: 'Packaging Design',
    year: '2025',
    role: 'Designer (STUDENT)',
    description: 'Fun reimagining of the logotype and package design for a small brand specializing in mushroom snacks.',
    challenge: 'Redesigning a vibrant, recognizable logotype and package design for a small snack business, while incorporating engravings into the design.',
    solution: 'Explored funky, collage-style graphics to act as a visual representation of the snack flavor. The logotype incorporates 60s-style typography in a contemporary manner, incorporating the mushroom within the letterforms. ',
    image: packageDesignImg,
    galleryImages: [
      packageGallery1,
      packageGallery2,
      packageGallery3,
    ],
  },
  {
    id: 6,
    slug: 'blue-note-album-cover',
    title: 'Blue Note Album Cover',
    category: 'Packaging Design',
    year: '2024',
    role: 'Designer (STUDENT)',
    description: 'A Blue-Note inspired album cover and record design for jazz artist Vivien Garry.',
    challenge: 'Creating an abstract, geometrically-based album cover typical of Blue-Note covers of the past, while also maintaining a limited color scheme and effectively utilizing a photo of the album artist.',
    solution: 'Created a composition using reductive photo strategies and selective cropping to gradually deconstruct the original photo of Vivien Garry, representing her journey as a musician from West Coast swing to bebop jazz. The high contrast color scheme keeps the spot color limited, but bold.',
    image: digitalArtImg,
    galleryImages: [
      digitalArtGallery1,
      digitalArtGallery2,
      digitalArtGallery3,
    ],
  },
];
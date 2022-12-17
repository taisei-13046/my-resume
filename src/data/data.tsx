import {AcademicCapIcon, CalendarIcon, FlagIcon, MapIcon, OfficeBuildingIcon} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/geekten.jpg';
import porfolioImage2 from '../images/portfolio/github.png';
import porfolioImage3 from '../images/portfolio/shinonome_advent.png';
import porfolioImage4 from '../images/portfolio/zenn.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Resume',
  description: 'My Resume',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Taisei.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Tokyo based <strong className="text-stone-100">Software Engineer</strong>, currently working at{' '}
        <strong className="text-stone-100">HRBrain</strong>{' '}
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I have a goal of becoming a <strong className="text-stone-100">full stack engineer</strong>. In the past, I
        workded at Yahoo!, Chatwork, Shinonome etc.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I started programming in April 2021 and turned into an engineer!
  I usually work as a front-end engineer.
  But, in the future, I'll be a full stack engineer.
  So, I'm studying hard every day to achieve this goal.
  `,
  aboutItems: [
    {label: 'Location', text: 'Tokyo/Shinjuku', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Japan', Icon: FlagIcon},
    {label: 'Study', text: 'University of Waseda', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'HRBrain, inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Japanese',
        level: 10,
      },
      {
        name: 'English',
        level: 1,
      },
      {
        name: 'Spanish',
        level: 0,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 10,
      },
      {
        name: 'Typescript',
        level: 8,
      },
      {
        name: 'React Query',
        level: 7,
      },
      {
        name: 'Apollo Client',
        level: 4,
      },
      {
        name: 'Redux',
        level: 4,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Golang',
        level: 2,
      },
      {
        name: 'Django',
        level: 2,
      },
    ],
  },
  {
    name: 'Team development',
    skills: [
      {
        name: 'Scrum',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Award of Excellence',
    description: 'I create "ぺあぷろ！" and it was award of Excellence',
    url: 'https://talent.supporterz.jp/geekten/2022/exhibition.html#theme14',
    image: porfolioImage1,
  },
  {
    title: '"ぺあぷろ！" repository',
    description: 'This is "ぺあぷろ！" repository, it use Typescript mainly',
    url: 'https://github.com/42supporters-hackason/pair-pro',
    image: porfolioImage2,
  },
  {
    title: 'My blog "how to achive goals"',
    description: 'I wrote my story that how did I achive my goal.',
    url: 'https://blog.shinonome.io/5-habits/',
    image: porfolioImage3,
  },
  {
    title: 'My blog "My Engineer Story"',
    description: 'I wrote my story that how did I improve my engineer skills.',
    url: 'https://zenn.dev/taisei_13046/articles/c7866a2f8f1b63',
    image: porfolioImage4,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2019',
    location: 'Waseda College',
    title: 'Department of Education',
    content: (
      <p>
        I wanted to be a teacher since I was a kid, so I chose the College of Education.
        <br /> I'm still interested in education.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'December 2022 - Present',
    location: 'Meguro/Tokyo',
    title: 'HRBrain',
    content: (
      <p>
        I'm involved in HRBrain's product on <strong>employee experience</strong>.
        <br />
        I'm challenging not only the front end, but also the back end.
      </p>
    ),
  },
  {
    date: 'September 2022',
    location: 'full remote',
    title: 'Yahoo!',
    content: (
      <p>
        I developed headers used throughout Yahoo! <br />I enjoyed working for a company I had always wanted to work
        for.
      </p>
    ),
  },
  {
    date: 'August 2022',
    location: 'full remote',
    title: 'Chatwork',
    content: <p>We use React to develop by scrum. Also, I took on the role of a scrum master.</p>,
  },
  {
    date: 'January 2022 - July 2022',
    location: 'full remote',
    title: 'Shinonome',
    content: (
      <p>This is my first work as an engineer. It was very difficult at first, but I grew a lot as an engineer.</p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contact to me',
  description: 'This is my Contact Information',
  items: [
    {
      type: ContactType.Email,
      text: 'yasui-edu0834@toki.waseda.jp',
      href: 'yasui-edu0834@toki.waseda.jp',
    },
    {
      type: ContactType.Instagram,
      text: 'yasui_taisei',
      href: 'https://www.instagram.com/yasui_taisei/',
    },
    {
      type: ContactType.Github,
      text: 'taisei-13046',
      href: 'https://github.com/taisei-13046',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/taisei-13046'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/yasui_taisei/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/yymytysy1'},
];

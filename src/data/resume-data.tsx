import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Maksim Khadasevich",
  initials: "MK",
  location: "Warsaw, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Warsaw/",
  about:
    "Senior Frontend Engineer focused on building high performance and scalable web applications",
  summary:
    "As a Senior Frontend Engineer, I have completed multiple projects in different domains with all types of business requirements, which are dynamic/static/hybrid web application to headless CMS platforms. Have experience working with serverless platforms on different levels. Currently, I work mostly with Next.js, Typescript, Tailwind and Headless CMS. I have over 5 years of experience in working remotely with companies all around the world.",
  avatarUrl:
    "https://res.cloudinary.com/dntmre4o4/image/upload/v1706639412/photos-platform/wwqnntmc0fm2aiscmcop.png",
  personalWebsiteUrl: "https://dogfrogfog.ch",
  contact: {
    email: "maksim.hodasevich@gmail.com",
    tel: "+48570121727",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/dogfrogfog",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dogfrogfog/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/dogfrogfog",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Belarusian State University of Informatics and Radioelectronics",
      degree: "Bachelor's Degree in Engineering and Economics",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Focusreactive",
      link: "https://focusreactive.com",
      badges: ["Remote"],
      title: "Senior Frontend Engineer",
      logo: null,
      start: "2023",
      end: "current",
      description:
        "Implemented Headless CMS projects from ground up. Often one of the senior engineers in the team, worked on improving the way to develop UI components, integrating better DX practices and more. Technologies: Next.js (including app router), Tailwind, Storyblok, GraphQL.",
    },
    {
      company: "GitNation",
      link: "https://gitnation.org",
      badges: ["Remote"],
      title: "Senior Frontend Engineer",
      logo: null,
      start: "2023",
      end: "current",
      description:
        "Worked on event platform, implemented new platform features like integrating AI, emails, crons and more other. Technologies: Next.js, Blitz.js, Prisma, PostgreSQL, TypeScript.",
    },
    {
      company: "Dashbouquet",
      link: "https://dashbouquet.com",
      badges: ["Remote"],
      title: "Frontend Engineer",
      logo: null,
      start: "2022",
      end: "2023",
      description:
        "Worked on cloud-native profiling application. Implemented multiple features related to increasing data discoverability. Worked on modern profiles data visualisation tools. Technologies: React, Redux, Typescript, Charts APIs.",
    },
    {
      company: "Itransition",
      link: "https://www.itransition.com",
      badges: ["Remote"],
      title: "Frontend Engineer",
      logo: null,
      start: "2020",
      end: "2022",
      description:
        "Worked on online-banking platform of the top bank. Worked on such products as interactive map, credits configurator, mortgage service and others. Implemented micro-frontend and server side rendering. Technologies: React, Next.js, TypeScript, Storybook, Ant design.",
    },
    {
      company: "Frontend Developer/System administrator",
      link: "",
      badges: [],
      title: "Frontend Engineer",
      logo: null,
      start: "2018",
      end: "2019",
      description:
        "Developed CMS platform, layout, integrated various modules, set up hosting and monitoring. Technologies: JavaScript, MySQL, Apache, Nginx.",
    },
    {
      company: "Eastern Technologies",
      link: "https://www.linkedin.com/in/eugene-revin-9664a782",
      badges: [],
      title: "HTML Developer",
      logo: null,
      start: "2018",
      end: "2018",
      description:
        "Creating web pages using HTML and CSS. Implementing different types of responsive layout based on design and business requirements. Typical clients was small businesses.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Databases",
    "Serverless Infrastructure",
    "Sanity",
    "Storyblok",
    "Performance optimization",
  ],
  projects: [
    {
      title: "Portal for Developers",
      techStack: [
        "Next.js",
        "Blitz.js",
        "PostrgeSQL",
        "Prisma",
        "Serverless Infrastructure",
      ],
      description: "Platform to manage content and events for developers.",
      link: {
        label: "portal.gitnation.org",
        href: "https://portal.gitnation.org/",
      },
    },
    {
      title: "Liga Tennisa",
      techStack: [
        "Next.js",
        "PWA",
        "PostrgeSQL",
        "Prisma",
        "Serverless Infrastructure",
      ],
      description:
        "A platform to manage tennis league. atptour.com analog for local community.",
      link: {
        label: "ligatennisa.com",
        href: "https://ligatennisa.com/",
      },
    },
    {
      title: "Pyroscope",
      techStack: ["React", "Redux", "Charts", "Flamegraphs", "Profiling"],
      description: "Cloud native continious profiling platform.",
      link: {
        label: "pyroscope.io",
        href: "https://pyroscope.io/",
      },
    },
    {
      title: "Online Banking Platform",
      techStack: [
        "React",
        "Redux",
        "Next.js",
        "Tracking",
        "Interactivity",
        "Micro-Frontend",
      ],
      description:
        "Online-banking, credits, mortrage, assets management, map and employee portals.",
      link: {
        label: "open bank",
        href: "/",
      },
    },
  ],
} as const;

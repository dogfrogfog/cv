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
    "Performance",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;

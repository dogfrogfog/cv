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
    "Senior Frontend Engineer focused on building blazingly fast and scalable web apps and sites",
  summary: `For more than 6 years of my career, I have been working in such roles as a frontend engineer, and full-stack engineer, and I also have partially been leading a team of up to 3 people. I have completed multiple projects in different domains, helping to understand, improve, and fulfill business requirements. Sharing my knowledge and experience to help people around grow. I like to work closely with the team and tackle user's problems. My tech expertise is concentrated on serverless web technologies, including all the pieces necessary to complete the end-to-end development cycle. My go-to choice is next.js, although I like to try other technologies for specific tasks. Writing articles and open-sourcing.
    `,
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
      {
        name: "site",
        url: "https://dogfrogfog.ch",
        icon: null,
      },
    ],
  },
  education: [
    {
      school: "Belarusian State University of Informatics and Radioelectronics",
      degree: "Bachelor's Degree in Software Engineering and Economics",
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
    "Storyblok",
    "Sanity",
    "Performance optimization",
  ],
  projects: [
    {
      title: "hCMS boilerplate",
      techStack: ["Next.js", "Storyblok", "Sanity", "Turborepo"],
      description:
        "Boilerplate to kick-off a new project. Focused on scalability, performance and reusability.",
      link: {
        label: "multi-theme cms",
        href: "/",
      },
    },
    {
      title: "hCMS marketing platform",
      techStack: ["Next.js", "Storyblok"],
      description:
        "Platform to manage multiple marketing websites using simple entry point.",
      link: {
        label: "multi-theme cms",
        href: "/",
      },
    },
    {
      title: "App to learn new language using LLM",
      techStack: ["Next.js", "Mistral", "PostgreSQL"],
      description:
        "App to help students learn language, using LLM-generated tasks and quizes.",
      link: {
        label: "e-commerce",
        href: "https://language-learning-brown.vercel.app/",
      },
    },
    {
      title: "E-commerce store",
      techStack: ["Next.js", "Protobuf", "Payment systems"],
      description: "Platform to sell clothes online. Inhouse brand.",
      link: {
        label: "e-commerce",
        href: "https://grbpwr-com-dusky.vercel.app",
      },
    },
    {
      title: "Platforms integration",
      techStack: ["Next.js", "Vercel", "Sanity", "Github"],
      description:
        "Integration to link multiple platforms to execute multi-step flow.",
      link: {
        label: "multi-theme cms",
        href: "/",
      },
    },
    {
      title: "hCMS marketing site",
      techStack: [
        "Next.js",
        "Storyblok",
        "GraphQL",
        "PostrgeSQL",
        "PostgreSQL",
        "MongoDB",
      ],
      description:
        "CMS platform for marketing and content teams. Helped improve SEO and iterations spead.",
      link: {
        label: "marketing site",
        href: "/",
      },
    },
    {
      title: "Platform for developers",
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
      title: "Browser extension",
      techStack: ["Plasmo", "React.js", "Chrome", "Mozilla", "Figma"],
      description: "Extension to help schedule multi-timizone meatings easily.",
      link: {
        label: "chrome store",
        href: "https://chromewebstore.google.com/detail/time%E2%9A%A1%EF%B8%8Fshift-time-zones-fo/ooaolokpmaegijiojfepfiojnihnppih",
      },
    },
    {
      title: "Photo hosting platform",
      techStack: ["Next.js", "Cloudinary", "PostrgeSQL", "Clerk auth"],
      description:
        "Platform to store and share film photos. HMY for password to try 😉.",
      link: {
        label: "photo hosting platform",
        href: "https://photo-hosting-platform.vercel.app/",
      },
    },
    {
      title: "Meal planning app",
      techStack: [
        "Next.js",
        "Stripe",
        "PostrgeSQL",
        "Drizzle",
        "Serverless Infrastructure",
        "Clerk auth",
        "LLMs",
      ],
      description: "App to create a personalized meal plan using LLM.",
      link: {
        label: "plate mate AI",
        href: "/",
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

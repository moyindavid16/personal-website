import {
  backend,
  cpp,
  docker,
  ebeano,
  email,
  expressjs,
  figma,
  frontend,
  git,
  hmns,
  kepler,
  linkedin,
  mobile,
  moneybuddy,
  nextjs,
  nodejs,
  nvidia,
  playwright,
  poke,
  postgresql,
  python,
  reactjs,
  rice,
  tailwind,
  twosig,
  typescript
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Experience + Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Computer Science @ Rice",
    icon: rice,
  },
  {
    title: "Web Development",
    icon: frontend,
  },
  {
    title: "Competitve Programming",
    icon: backend,
  },

  {
    title: "Mobile Development",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS + React Native",
    icon: reactjs,
  },
  {
    name: "NextJs",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "ExpressJS",
    icon: expressjs,
  },
  {
    name: "Postgresql",
    icon: postgresql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Playwright",
    icon: playwright,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Mentee",
    company_name: "Two Sigma",
    icon: twosig,
    iconBg: "#333333",
    date: "Aug 2024",
  },
  {
    title: "SummerBridge Scholar",
    company_name: "Nvidia",
    icon: nvidia,
    iconBg: "#333333",
    date: "Jun 2024 - Aug 2024",
  },
  {
    title: "Product Engineer Intern",
    company_name: "Kepler",
    icon: kepler,
    iconBg: "#333333",
    date: "May 2024 - Jul 2024",
  },
  {
    title: "Product Engineer Intern",
    company_name: "Kepler",
    icon: kepler,
    iconBg: "#333333",
    date: "Dec 2023 - Jan 2024",
  },
];

const projects = [
  {
    id: "project-1",
    name: "HMNS Butterfly",
    description:
      "an app for the Houston Museum of Natural Science, enabling 5,000+ daily visitors to photograph butterflies for AI-assisted identification, participate in daily challenges, and explore the museum’s extensive butterfly gallery.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hmns,
    repo: "https://github.com/rice-apps/hmns",
  },
  {
    id: "project-2",
    name: "Money Buddy",
    description:
      "A HackRice 13(Rice University Hackathon) winner, Money Buddy is a personal expense management Discord bot capable of storing, categorizing, and presenting users’ expenses to provide an interactive and user-friendly medium for managing finances.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: moneybuddy,
    repo: "https://github.com/cslvin/Money-Buddy",
  },
  {
    id: "project-3",
    name: "Smart Shop",
    description:
      "SmartShop is a fully functional shopping app I developed to address and reduce congestion in local supermarkets in Lagos, Nigeria. By allowing users to shop seamlessly and schedule pick-ups, the app improves shopping efficiency and enhances the customer experience. This innovative solution won the Rise Global Challenge, showcasing its impact and effectiveness in solving real-world problems.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ebeano,
    repo: "https://github.com/moyindavid16/SmartShop",
  },
  {
    id: "project-4",
    name: "Pokémon Guessing Game",
    description:
      "The Pokémon Guessing Game is a simple yet special project I developed using React. As my first venture into learning React, this game holds a dear place in my heart. Through this project, I not only built a fun and interactive guessing game but also gained invaluable experience with the React framework and handling REST APIs. While there are areas for improvement, this project marks a significant milestone in my journey as a developer.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: poke,
    repo: "https://github.com/moyindavid16/pokemon-guessing-game",
    demo: "http://pokemon-guessing-game-olive.vercel.app/",
  },
];

const contacts = [
  {
    name: "moyindavid16@gmail.com",
    icon: email,
  },
  {
    name: "moyinoluwa-orimoloye",
    icon: linkedin,
    link: "https://www.linkedin.com/in/moyinoluwa-orimoloye/",
  },
];

export { contacts, experiences, projects, services, technologies };


import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  bildhistoria,
  medieinstitutet,
  threejs,
  webdev,
  reactlogo,
  plantnerd,
  gamenerd,
  ppd,
  todo,
  design,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: webdev,
  },
  {
    title: "React Passionate",
    icon: reactlogo,
  },
  {
    title: "Plant Enthusiast",
    icon: plantnerd,
  },
  {
    title: "Game Nerd",
    icon: gamenerd,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer Student",
    company_name: "Medieinstitutet",
    icon: medieinstitutet,
    iconBg: "#ffffff",
    date: "Sep 2022 - Present",
    points: [
      "HTML/CSS - Bootstrap, SCSS,",
      "JavaScript basics/advance - Vanilla JS,Typescript, React, Vue",
      "Testing - End to End tests, Cypress, Jest",
      "Agile project management - Jira, Scrum, sprintplanning, retrospective",
      "Work methodology for developers - versionmanagement system, refractor code",
      "UX/Usability - Design from wireframes, Interfacemanagement, Figma",
      "Graphical tools for interface design - Figma, PS,color- och typography",
      "Internship 1 & 2 - Svensk porträttfoto/Bildhistoria -mainly working with React/typescript and bootstrap/styled components",
    ],
  },
  {
    title: "Web Developer Internship",
    company_name: "Bildhistoria",
    icon: bildhistoria,
    iconBg: "#383E56",
    date: "Sep 2023 - Present",
    points: [
      "Developing and maintaining website using React.js, typescript and other related technologies.",
      "Collaborating with cross-functional teams and other developers to create high-quality experience.",
      "Implementing responsive design and compatibility.",
    ],
  },
];

const projects = [
  {
    name: "Plant Dad Depot",
    description:
      "A simple webshop made as an assignement in the course Basic Javascript. It lacks the backend part and uses mockdata instead. All images (except hero img) are AI generated using Midjourney",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "chakraui",
        color: "pink-text-gradient",
      },
    ],
    image: ppd,
    source_code_link: "https://github.com/Mikael-Ronnberg/Yet-Another-Webshop",
  },
  {
    name: "Todo List",
    description:
      "A simple Todo list made with basic Javascript. This was one of our assignments and it was kind of tricky to do. However, I'm kind of pleased how it turned out. Check it out!",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/Mikael-Ronnberg/Todo-List",
  },
  {
    name: "Svepa Botten",
    description:
      "This is my degree project where we demonstrate everything we've learned through our education. It is by far the most extensive work I've done and also the project I'm most proud of. Due to time limit I didn't have time to implement everything I planned, so there is much room for improvement. But I'm really glad with the result!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "zustand",
        color: "pink-text-gradient",
      },
      {
        name: "chakraUI",
        color: "pink-text-gradient",
      },
    ],
    // image: SB,
    source_code_link: "https://github.com/Mikael-Ronnberg/TicTacToe-React",
  },
  {
    name: "From Design to Web",
    description:
      "This website was built using a wireframe design as an assignment from our basic HTML/CSS course. Even if it was our first assignement, it was fun and hard at the same time. It is also fun to see how much I've improved since making this.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: design,
    source_code_link: "https://github.com/Mikael-Ronnberg/Design",
  },
];

export { services, technologies, experiences, projects };
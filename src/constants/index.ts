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
  threejs,
  webdev,
  reactlogo,
  plantnerd,
  gamenerd,
  ppd,
  sbrun,
  sb,
  wordpress,
  php,
  jquery,
} from "../assets";

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
    name: "Three JS",
    icon: threejs,
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
  { name: "wordpress", icon: wordpress },
  { name: "php", icon: php },
  { name: "jquery", icon: jquery },
];

// const experiences = [
//   {
//     title: "Frontend Developer Student",
//     company_name: "Medieinstitutet",
//     icon: medieinstitutet,
//     iconBg: "#ffffff",
//     date: "Sep 2022 - Present",
//     points: [
//       "HTML/CSS - Bootstrap, SCSS,",
//       "JavaScript basics/advance - Vanilla JS,Typescript, React, Vue",
//       "Testing - End to End tests, Cypress, Jest",
//       "Agile project management - Jira, Scrum, sprintplanning, retrospective",
//       "Work methodology for developers - versionmanagement system, refractor code",
//       "UX/Usability - Design from wireframes, Interfacemanagement, Figma",
//       "Graphical tools for interface design - Figma, PS,color- och typography",
//       "Internship 1 & 2 - Svensk porträttfoto/Bildhistoria -mainly working with React/typescript and bootstrap/styled components",
//     ],
//   },
//   {
//     title: "Web Developer Internship",
//     company_name: "Bildhistoria",
//     icon: bildhistoria,
//     iconBg: "#383E56",
//     date: "Sep 2023 - Present",
//     points: [
//       "Developing and maintaining website using React.js, typescript and other related technologies.",
//       "Collaborating with cross-functional teams and other developers to create high-quality experience.",
//       "Implementing responsive design and compatibility.",
//     ],
//   },
// ];

const projects = [
  {
    name: "Plant Dad Depot",
    description:
      "A simple webshop, that started as a group assignement in the course Basic Javascript but that I later remade. It lacks the backend part and uses mockdata instead. All images (except hero img) are AI generated using Midjourney",
    tags: [
      {
        name: "react",
        color: "#7EC9F3",
      },
      {
        name: "typescript",
        color: "#5FCD61",
      },
      {
        name: "chakraui",
        color: "#E98CBC",
      },
    ],
    image: ppd,
    code_link: "https://github.com/Mikael-Ronnberg/Yet-Another-Webshop",
    live_link: "https://plant-dad-depot.pages.dev",
    live_name: "plant-dad-depot.pages.dev",
  },
  {
    name: "SB SwimRun",
    description:
      "Collect points and compete for the top 10! A game made in godot, rendered with react and stores data with firebase. Only for desktop at the moment",
    tags: [
      {
        name: "react",
        color: "#7EC9F3",
      },
      {
        name: "godot",
        color: "#5FCD61",
      },
      {
        name: "css",
        color: "#E98CBC",
      },
    ],
    image: sbrun,
    code_link: "https://github.com/Mikael-Ronnberg/SB-Gamepage",
    live_link: "https://sb-gamepage.pages.dev",
    live_name: "sb-gamepage.pages.dev",
  },
  {
    name: "Svepa Botten",
    description:
      "This is my degree project where we demonstrate everything we've learned through our education. It is by far the most extensive work I've done and also the project I'm most proud of. Due to time limit I didn't have time to implement everything I planned, so there is much room for improvement. But I'm really glad with the result!",
    tags: [
      {
        name: "react",
        color: "#7EC9F3",
      },
      {
        name: "zustand",
        color: "#FD6262",
      },
      {
        name: "chakraUI",
        color: "#E98CBC",
      },
    ],
    image: sb,
    code_link: "https://github.com/Mikael-Ronnberg/degree-project",
    live_link: "https://svepa-botten.pages.dev/",
    live_name: "svepa-botten.pages.dev",
  },
];

export { services, technologies, projects };

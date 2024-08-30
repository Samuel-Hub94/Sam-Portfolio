import {
  mobile,
  dataScience,
  va,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  sql,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  python,
  niit,
  alx,
  sail,
  exploreAi,
  DashBoard,
  storeApp,
  socialMediaApp,
  threejs,
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
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Data Science",
    icon: dataScience,
  },
  {
    title: "Virtual Assitsance",
    icon: va,
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
    name: "SQL",
    icon: sql,
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
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Virtual Assistant",
    company_name: "ALX Africa",
    icon: alx,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Managing tasks and projects related to web applications, ensuring efficient use of React.js and other technologies.",
      "Coordinating with teams such as designers, product managers, and developers to support the creation of high-quality digital products.",
      "Assisting with implementing responsive design and ensuring smooth functionality across multiple browsers.",
      "Contributing to code reviews and offering constructive insights to improve overall code quality."
    ],
  },
  
  {
    title: "Front-end Developer",
    company_name: "Sail Innovations",
    icon: sail,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "Explore AI",
    icon: exploreAi,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "National Institute of Information Technology",
    icon: niit,
    iconBg: "#E6DEDD",
    date: "May 2024 - in progress",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sam proved me wrong.",
    name: "Gedion Fakolade",
    designation: "CEO",
    company: "Retreasure Global Solutions",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sam does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Sam optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "User Dashboard",
    description:
     "Web-based platform that allows users to keep track of their social media accounts on every platform. It provides insights into metrics like posts, followers, and engagement, offering users a centralized dashboard to monitor their social media presence.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
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
    image: DashBoard,
    source_code_link: "https://github.com/",
  },
  {
    name: "Store App",
    description:
     "Web application that allows users to browse and purchase a variety of products, from clothing to accessories. It features a user-friendly interface with options to filter and sort items, view product details, and securely complete transactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: storeApp,
    source_code_link: "https://github.com/",
  },
  {
    name: "Socia Media App",
    description:
     "A comprehensive dashboard for managing multiple social media platforms. Users can view and analyze detailed metrics such as posts, followers, likes, and engagement, helping them to strategize and enhance their social media campaigns effectively.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: socialMediaApp,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

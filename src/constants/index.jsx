import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { SiAppwrite } from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "SHREYAS GAWADE",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experience.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/user/personal-portfolio",
    liveDemoLink: "https://personal-portfolio.example.com",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/user/ecommerce-platform",
    liveDemoLink: "https://ecommerce-platform.example.com",
  },
  {
    id: 3,
    name: "React Chat App",
    description:
      "A real-time chat application built with React and Firebase. It includes features such as user authentication, chat rooms, and instant messaging capabilities.",
    image: projectImage3,
    githubLink: "https://github.com/Shr3yasG/React-Chat-app",
    liveDemoLink: "https://react-chat-app-sand-beta.vercel.app",
  },
  {
    id: 4,
    name: "Giphy App",
    description:
      "A Giphy search application that allows users to search for and view GIFs from the Giphy API. Built with React and styled-components for a modern and responsive user interface.",
    image: projectImage4,
    githubLink: "https://github.com/Shr3yasG/GiphyClone",
    liveDemoLink: "https://giphy-clone-ten.vercel.app",
  },
  {
    id: 5,
    name: "Muscle Morph",
    description:
      "A fitness application designed to track and analyze workout routines and progress. Built with React and Tailwind CSS, featuring various workout and exercise data management functionalities.",
    image: projectImage5,
    githubLink: "https://github.com/Shr3yasG/Muscle-Morph",
    liveDemoLink: "https://vercel.com/shr3yasgs-projects/muscle-morph",
  },
  {
    id: 6,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/Shr3yasG/Weather-app",
    liveDemoLink: "https://weather-app-orpin-alpha-67.vercel.app",
  },
];


export const BIO = [
  "Shreyas Gawade is a dedicated React Developer with a strong background in frontend development. With expertise in React.js and a commitment to delivering high-quality, user-centric web applications, Shreyas has honed his skills through hands-on experience and continuous learning.",
  "In 2024, Shreyas embarked on a journey to further enhance his technical expertise by actively exploring and upgrading his skills in backend services. This dedication reflects his commitment to providing comprehensive and innovative solutions in the ever-evolving tech landscape.",
  "As a passionate and hardworking professional, Shreyas Gawade excels in creating dynamic, responsive web experiences using modern technologies such as React.js, Redux, and Tailwind CSS. His proactive approach to learning and consistent work ethic drive him to achieve excellence and deliver exceptional results in every project he undertakes."
];


export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React.js",
    experience: "0.8+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "0.6+ years",
  },
  {
    icon: <SiJavascript className="text-4xl text-yellow-500 lg:text-5xl" />,
    name: "JavaScript",
    experience: "2+ years",
  },
  {
    icon: <AiFillGithub className="text-4xl text-gray-600 lg:text-5xl" />,
    name: "GitHub",
    experience: "2+ years",
  },
  {
    icon: <SiAppwrite className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Appwrite",
    experience: "0.3+ year",
  },
  {
    icon: <TbBrandTailwind className="text-4xl text-sky-400 lg:text-5xl" />,
    name: "Tailwind CSS",
    experience: "1+ year",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Dholepatil College of Engineering, Pune",
    duration: "2019 - 2023",
    description: "Graduated with a CGPA of 6.9. Focused on software development, algorithms, and data structures. Worked on various personal projects involving web and application development using modern technologies.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Sanjay Ghodawat IIT & Medical Academy, Kolhapur",
    duration: "2017 - 2019",
    description: "Completed HSC Boards with a percentage of 60.92%. Studied core subjects relevant to engineering and technology, laying the foundation for advanced studies in computer science.",
  },
];


export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.instagram.com/shreyas__lifts/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Shr3yasG",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/shreyas-gawade-786964209/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];

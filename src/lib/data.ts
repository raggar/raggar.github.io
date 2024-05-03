import { Prompt } from "next/font/google";
import React from "react";
import { DiCode } from "react-icons/di";
import { FaVoteYea, FaYCombinator } from "react-icons/fa";
import { SiCocacola, SiWalmart } from "react-icons/si";

export const reftbl = [
  { name: "Home", ref: "#home" },
  { name: "Projects", ref: "#projects" },
  { name: "Experience", ref: "#experience" },
  { name: "About", ref: "#about" }
] as const;

export const projectData = [
  {
    name: "bettervote",
    description: "app for governments to digitially conduct votes, referendums, and plebiscites.",
    href: "https://github.com/raggar/BetterVote",
    devpost: "https://devpost.com/software/bytehacks",
  },
  {
    name: "tip the scales",
    description: "program that distinguishes between 7-note scales using audio processing and ML.",
    href: "https://github.com/raggar/Tip_the_Scales",
    devpost: "https://devpost.com/software/tip_the_scales",
  },
  {
    name: "lasso learn",
    description: "platform for users to engage in one-on-one discussions to teach and learn new skills.",
    href: "https://github.com/raggar/Lasso_Learn",
    devpost: "https://devpost.com/software/lassolearn",
  },
  {
    name: "safe protests",
    description: "app to help users conduct and governments safely manage public protests and rallies.",
    href: "https://github.com/raggar/Safe_Protests",
    devpost: "https://devpost.com/software/safe_protests",
  },
  {
    name: "ios portfolio",
    description: "contains 10+ swift apps including a flower identifier, weather tracker etc.",
    href: "https://github.com/raggar/iOS_Portfolio",
  },
  {
    name: "homegrown",
    description: "enables businesses provide locals with financial aid resources.",
    href: "https://github.com/raggar/homegrown",
    devpost: "https://devpost.com/software/homegrown-o2mz3r",
  },
  {
    name: "shop.io",
    description: "ecommerce store where users can browse, sell, and purchase their favourite items.",
    href: "https://github.com/raggar/Shop.io",
  },
  {
    name: "chatter",
    description: "modern day social media app where users chat in real-time.",
    href: "https://github.com/raggar/Chatter",
  },
]

export const workData = [
  {
    title: "Incoming Member of Technical Staff",
    company: "Cartesia",
    location: "San Francisco, CA",
    description: "Productizing real-time multimodal intelligence.",
    icon: React.createElement(FaYCombinator),
    date: "2025",
    src: "/cartesia.png",
    href: "https://www.cartesia.ai/",
    tags: ["Python", "Go"],
  },
  {
    title: "Software Engineer",
    company: "Ramp",
    location: "New York, NY",
    description: "Intern on the Employee Experience (spend management) team.",
    icon: React.createElement(FaYCombinator),
    date: "2024",
    src: "/ramp.png",
    href: "https://ramp.com/",
    tags: ["Python", "Elixir"],
  },
  {
    title: "Software Engineer",
    company: "Snowflake",
    location: "Bellevue, WA",
    description: "Intern on the Storage Platform team.",
    icon: React.createElement(FaYCombinator),
    date: "2024",
    src: "/snowflake.png",
    href: "https://www.snowflake.com/en/",
    tags: ["Java", "SQL"],
  },
  {
    title: "Software Engineer",
    company: "Cockroach Labs",
    location: "New York, NY",
    description: "Intern on the Storage team.",
    icon: React.createElement(SiCocacola),
    date: "2023",
    src: "/cockroach.png",
    href: "https://www.cockroachlabs.com/",
    tags: ["Go"],
  },
  {
    title: "Research Engineer",
    company: "Waabi",
    location: "San Francisco, CA",
    description: "Intern on the Internal Tools team.",
    icon: React.createElement(DiCode),
    date: "2022",
    src: "/waabi.png",
    href: "https://waabi.ai/",
    tags: ["Python", "Go"],
  },
  {
    title: "Backend Engineer",
    company: "Faire",
    location: "San Francisco, CA",
    description: "Intern on the Cross-border Shipping team.",
    icon: React.createElement(DiCode),
    date: "2023",
    src: "/faire.png",
    href: "https://www.faire.com/en-ca/",
    tags: ["Go", "Kotlin", "SQL", "Protobuf"],
  },
  {
    title: "Software Engineer",
    company: "RemitBee",
    location: "Toronto, ON",
    description:
      "Intern on the Payments team.",
    icon: React.createElement(FaVoteYea),
    date: "2021",
    src: "/remitbee.jpg",
    href: "https://www.remitbee.com/",
    tags: ["React", "Express", "SQL"],
  },
  {
    title: "Software Engineer",
    company: "AirMatrix",
    location: "Toronto, ON",
    description:
      "Intern on the Security team.",
    icon: React.createElement(SiWalmart),
    date: "2020",
    src: "/airmatrix.jpeg",
    href: "https://www.airmatrix.ai/",
    tags: ["Python", "AWS", "Kubernetes"],
  },
] as const;

export const clubData = [
  {
    name: "Hack the North",
    tagline: "Canada's largest student run hackathon",
    description: "Frontend developer '21, Backend developer '22",
    href: "https://hackthenorth.com/",
    tags: ["Typescript", "PostgreSQL", "Instabase"],
    src: "/htn.jpeg",
    date: "2020 - 2023",
  },
  {
    name: "Waterloop",
    tagline: "UWaterloo's hyperloop team",
    description:
      "Fullstack developer",
    href: "https://teamwaterloop.ca/",
    tags: ["React", "PostgreSQL"],
    src: "/waterloop.jpeg",
    date: "2020 - 2021",
  },
  {
    name: "EntSoc",
    tagline: "UWaterloo's Entrepreneurship Society",
    description: "Fullstack developer",
    href: "https://entsoc.ca/#home",
    tags: ["React"],
    src: "/entsoc.png",
    date: "2020 - 2021",
  },
] as const;

export const awardsData = [
  {
    name: "Ramp Hacks",
    description: "Category Winner",
    date: "2024",
  },
  {
    name: "UWaterloo SE Hackathon",
    description: "1st Overall",
    date: "2020",
  },
  {
    name: "Hack3",
    description: "2nd Overall",
    date: "2020",
  },
  {
    name: "YeeHaw Hacks",
    description: "Best use of Google Cloud",
    date: "2020",
  },
  {
    name: "SetHacks",
    description: "Category Winner",
    date: "2020",
  },
  {
    name: "FinHacks",
    description: "3rd Overall",
    date: "2020",
  },
  {
    name: "PicoCTF",
    description: "Top 20 in Canada",
    date: "2019",
  },
  {
    name: "UofT Operations Research Challenge (TORCH)",
    description: "2nd Place",
    date: "2019",
  },
  {
    name: "Hack Lassonde",
    description: "4th Overall",
    date: "2019",
  },
  {
    name: "UWaterloo Engaging in Entrepreneurship and Engineering (E3)",
    description: "1st Place",
    date: "2018",
  },
] as const;


export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "AWS",
  "Python",
  "TensorFlow",
  "PyTorch",
  "NLP",
  "BERT",
  "Transformers",
  "Hugging Face",
  "Knowledge Graphs",
  "Prompt Engineering",
  "Docker",
] as const;

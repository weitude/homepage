import { FaGithub, FaGlobeAmericas } from "react-icons/fa";

const projects = [
  {
    title: "NTU Relief",
    subtitle: "",
    period: "Oct 2022 - Present",
    content:
      "Building a user-friendly website for helping people who have similar emotional problems to ask.",
    buttons: [
      {
        title: "Repository",
        link: "https://github.com/weitude/relief",
        icon: <FaGithub />,
      },
      {
        title: "Website",
        link: "https://nturelief.me/",
        icon: <FaGlobeAmericas />,
      },
    ],
  },
  {
    title: "System Programming",
    subtitle: "",
    period: "Sep 2022 - Jan 2023",
    content:
      "Implemented system programming by socket communication, pipe / fifo, signal handling, and multiprocess / multithread skills with C",
    buttons: [
      {
        title: "Repository",
        link: "https://github.com/weitude/NTU-SP",
        icon: <FaGithub />,
      },
    ],
  },
  {
    title: "Weitude Blog",
    subtitle: "",
    period: "May 2022 - Present",
    content: "Using Hexo and Vite to build my blogs which recording my life.",
    buttons: [
      {
        title: "Repository",
        link: "https://github.com/weitude/weitude.github.io",
        icon: <FaGithub />,
      },
      {
        title: "Website",
        link: "https://weitude.github.io/",
        icon: <FaGlobeAmericas />,
      },
    ],
  },
  {
    title: "Slime Tower",
    subtitle: "",
    period: "Oct 2021 - Jan 2022",
    content: "Use Jack language to build a game called Slime Tower.",
    buttons: [
      {
        title: "Repository",
        link: "https://github.com/weitude/SlimeTower",
        icon: <FaGithub />,
      },
    ],
  },
];

export default projects;

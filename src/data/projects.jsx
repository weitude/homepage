import { FaGithub, FaGlobeAmericas, FaAppStore } from "react-icons/fa";

const projects = [
  {
    title: "Manten Japanese App",
    subtitle: "GCP, Pulumi, Monorepo, Typescript, CI/CD, Docker",
    period: "Sep 2023 - Present",
    content: [
      "Automated deployment and management of GCP infrastructure using IaC tool Pulumi",
      "Developed and managed a TypeScript monorepo with Turborepo",
      "Implemented CI/CD pipelines to run unit tests and build Docker images to GCP Artifact Registry",
    ],
    buttons: [
      {
        title: "App Store",
        link: "https://apps.apple.com/tw/app/%E8%83%8C%E6%97%A5%E6%96%87%E7%A5%9E%E5%99%A8-%E6%97%A5%E6%AA%A2%E5%BF%85%E5%82%99%E5%96%AE%E5%AD%97%E6%95%91%E6%98%9F/id1550577799?l=en-GB",
        icon: <FaAppStore />,
      },
    ],
  },
  {
    title: "System Programming",
    subtitle: "",
    period: "Sep 2022 - Jan 2023",
    content: [
      "Implemented system programming by socket communication, pipes, FIFO, signal handling, and multi-process / multi-thread skills with C.",
    ],
    buttons: [
      {
        title: "Repository",
        link: "https://github.com/weitude/system-programming",
        icon: <FaGithub />,
      },
    ],
  },
  {
    title: "Weitude Blog",
    subtitle: "",
    period: "May 2022 - Present",
    content: ["Using Hexo and Vite to build my blogs which recording my life."],
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
];

export default projects;

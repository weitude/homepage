import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
const infos = [
  {
    title: "Backend Engineer Intern",
    subtitle: "NTUCourse Neo",
    period: "Nov. 2021 - Present",
    content:
      "Created a brand new course website for NTU students, which is user-friendly, secure, and reliable.",
  },
  {
    title: "Co-Founder, Full Stack Developer",
    subtitle: "NTU Relief",
    period: "Oct. 2022 - Jan. 2023",
    content:
      "Developed a user-friendly website for helping people who have similar emotional problems to ask",
  },
];

const education = [
  {
    title: "National Taiwan University",
    subtitle: "B.S.E in Department of Computer Science & Information Engineering",
    period: "Sep. 2021 - Present",
    content: "GPA: 4.14/4.3 ・ Dean’s List Award ・ Taipei, Taiwan",
  },
];

const projects = [
  {
    title: "NTU Relief",
    subtitle: "",
    period: "Oct. 2022 - Present",
    content:
      "Building a user-friendly website for helping people who have similar emotional problems to ask.",
  },
  {
    title: "System Programming",
    subtitle: "",
    period: "Sep. 2022 - Present",
    content:
      "Implemented system programming by socket communication, pipe / fifo, signal handling, and multiprocess / multithread skills with C",
  },
  {
    title: "weitude",
    subtitle: "",
    period: "May. 2022 - Present",
    content: "Using Hexo and Vite to build my blogs which recording my life.",
  },
];

const contactButtons = [
  {
    title: "Github",
    icon: <FaGithub />,
    url: "https://github.com/weitude",
    color: "gray.600",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://github.com/weitude",
    color: "blue.600",
  },
  {
    title: "Instagram",
    icon: <GrInstagram />,
    url: "https://www.instagram.com/5a.0401/",
    color: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
  },
];

export { infos, education, projects, contactButtons };

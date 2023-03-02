import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const contacts = [
  {
    title: "Email",
    icon: <FaEnvelope />,
    url: "mailto:eric.c.w.lin@gmail.com",
    color: "teal.400",
  },
  {
    title: "Github",
    icon: <FaGithub />,
    url: "https://github.com/weitude",
    color: "gray.600",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/ericcwlin/",
    color: "blue.600",
  },
  {
    title: "Instagram",
    icon: <GrInstagram />,
    url: "https://www.instagram.com/5a.0401/",
    color: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
  },
];

export default contacts;

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

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
];

export default contacts;

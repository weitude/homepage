import { FaGlobeAmericas } from "react-icons/fa";

const infos = [
  {
    title: "Quantrend",
    subtitle: "Backend Engineer",
    period: "Sep 2023 - Present",
    content: [
      "Optimized high-frequency trading systems using multi-threading and advanced algorithms, achieving a 62% increase in speed",
      "Built a comprehensive backtest system to replay tick-by-tick cryptocurrency market data, created financial data operators, and benchmarked performance improvements",
      "Developed financial data preprocessing pipelines with Rust, reducing processing time by 20%, and uploaded data to AWS S3 with automated integrity checks",
    ],
    buttons: [
      {
        title: "Website",
        link: "https://quantrend.ai/",
        icon: <FaGlobeAmericas />,
      },
    ],
  },
  {
    title: "WorldQuant",
    subtitle: "WorldQuant BRAIN Consultant",
    period: "May 2023 - Sep 2023",
    content: [
      "Designed and submitted alphas to the BRAIN platform, achieving top scores in quality tests such as Sharpe, Turnover, Fitness, and Self Correlation",
    ],
    buttons: [
      {
        title: "Website",
        link: "https://www.worldquant.com/brain/",
        icon: <FaGlobeAmericas />,
      },
    ],
  },
  {
    title: "NTU, Office of Academic Affairs",
    subtitle: "Backend Engineer Intern, Computer Information Management Division",
    period: "Nov 2022 - May 2023",
    content: [
      "Built RESTful APIs in TypeScript for a brand new course website, ensuring type-safety and validation with the Zod library",
      "Utilized Prisma ORM tool with PostgreSQL, improving data query speed by 88% with Redis caching",
    ],
    buttons: [
      {
        title: "Website",
        link: "https://course.ntu.edu.tw/",
        icon: <FaGlobeAmericas />,
      },
    ],
  },
  {
    title: "NTU CSIE, System Administration Team",
    subtitle: "Team Leader, Web Services Division",
    period: "Sep 2022 - May 2023",
    content: [
      "Migrated virsh to Proxmox VE, enabling High Availability and achieving zero downtime since implementation",
      "Maintained departmental infrastructure, including the homepage, reverse proxy, and other critical web services.",
    ],
  },
];

export default infos;

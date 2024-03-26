import {
  Home,
  MessageSquareCodeIcon,
  Newspaper,
  Presentation,
} from "lucide-react";

export const navItems = [
  {
    name: "Home",
    href: "/",
    icon: <Home />,
  },
  {
    name: "Posts",
    href: "/posts",
    icon: <Newspaper />,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: <Presentation />,
  },
  {
    name: "More",
    icon: <MessageSquareCodeIcon />,
    links: {
      github: "https://github.com/haitar",
      linkedin: "https://www.linkedin.com/in/haitar/",
      resume: "https://github.com/haitar/resume/blob/main/Haitar%20Resume.pdf",
    },
  },
];

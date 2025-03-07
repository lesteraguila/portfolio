import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Lester Aguila",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Web Developer turned Virtual Assistant. I love building things and helping people. Very active on Tiktok.",
  summary:
    "I'm a web developer turned Virtual Assistant, combining tech expertise with administrative efficiency. With a background in building websites and managing digital platforms, I now help businesses streamline tasks, manage operations, and stay organized. My skills in web development, automation, and digital tools allow me to offer seamless support, from handling emails and scheduling to website maintenance and tech troubleshooting. Let’s work together to boost your productivity!",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Vue",
    "PHP",
    "CodeIgniter",
    "Laravel",
    "Mysql",
    "Docker",
    ,
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/lesteraguila",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lesteraaguila/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/deanslester",
        icon: Icons.x,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/deans.lester/",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:lesteraguila07business@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Concentrix Intern",
      href: "https://www.concentrix.com/",
      badges: [],
      location: "Remote",
      title: "Technical Support Engineer",
      logoUrl: "/concentrix.png",
      start: "",
      end: "",
      description:
        "A Technical Support Engineer troubleshoots and resolves software, hardware, and network issues for customers or internal teams. They diagnose problems, provide step-by-step solutions, and escalate complex cases when necessary. Their role includes system monitoring, software support, documentation, security compliance, and user training. Strong problem-solving, communication, and technical skills in operating systems, networking, and troubleshooting tools are essential.",
    },
    {
      company: "Philippine Red Cross",
      href: "https://redcross.org.ph/",
      badges: [],
      location: "Toronto, ON",
      title: "Work Immersionist",
      logoUrl: "/prc.png",
      start: "",
      end: "",
      description:
        "Analyze individual insurance needs and assist in selecting the most suitable coverage options and address client concerns, resolve issues, and provide exceptional customer service to maintain high satisfaction rates.",
    },
  ],
  certifications: [
    {
      title: "Google UX Design",
      company: "Google",
      href: "https://coursera.org/share/f044862d538e5a0f96112cc18d8c372b",
      issued: "Issued June 2024",
      logoUrl: "/google.png",
    },
    {
      title: "Responsive Web Design",
      company: "freeCodeCamp",
      href: "https://www.freecodecamp.org/certification/fcc4ca08973-4409-420a-94c4-24e2f194b51e/responsive-web-design",
      issued: "Issued September 2020",
      logoUrl: "/fcc.png",
    },
  ],
  freelance: [
    {
      title: "Web Developer",
      company: "Developer",
      href: "https://coursera.org/share/f044862d538e5a0f96112cc18d8c372b",
      issued: "Issued June 2024",
      logoUrl: "/webdev.png",
      description:
        "Freelance developer specializing in student projects, using PHP frameworks like Laravel and CodeIgniter 4, along with Node.js and VueJs for modern, dynamic applications.",
    },
    {
      title: "Tiktok Affliate Marketing",
      company: "TikTok",
      href: "https://www.freecodecamp.org/certification/fcc4ca08973-4409-420a-94c4-24e2f194b51e/responsive-web-design",
      issued: "Issued September 2020",
      logoUrl: "/tiktok2.jpg",
      description:
        "Created compelling and informative TikTok videos that effectively showcased products and services to a wide audience. Tracked and analyzed performance metrics to optimize content for maximum engagement and conversion.Utilized social media marketing strategies to increase product visibility and collaborate with brands and companies to align affiliate marketing campaigns with their promotional goals.",
    },
    {
      title: "Portrait Artist",
      company: "Artist",
      href: "#",
      issued: "Issued September 2020",
      logoUrl: "/artist.png",
      description:
        "Develop custom portraits for clients, capturing their essence and personality through various mediums, including graphite, charcoal, oil, and digital tools like Infinite Design and Sketchbook.",
    },
  ],
  education: [
    {
      school: "Mindoro State Univeristy",
      href: "https://www.minsu.edu.ph/",
      degree: "Bachelor of Science in Information Technology",
      logoUrl: "/minsu.png",
      start: "2019",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Likha Community Forum",
      href: "https://chatcollect.com",
      dates: "2023 - 2024",
      active: true,
      description:
        "Likha is an innovative community forum designed to help businesses grow by providing a platform for promotion and networking. To ensure a safe and professional environment, it features an AI-powered NSFW posting detector that prevents inappropriate content.",
      technologies: ["PHP", "Laravel", "VueJS", "MySQL", "Boostrap", "Python"],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: "",
        },
      ],
      image: "/Picture1.png",
      video: "",
    },
    {
      title: "Doccure Appointment Management System",
      href: "https://chatcollect.com",
      dates: "2023 - 2024",
      active: true,
      description:
        "Doccure is an advanced appointment management system designed to streamline doctor-patient scheduling, ensuring seamless bookings, consultations, and healthcare management.",
      technologies: ["PHP", "Codeigniter 4", "VueJS", "MySQL", "Boostrap"],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: "",
        },
      ],
      image: "/Picture3.png",
      video: "",
    },
    {
      title: "Human Resources Information System",
      href: "",
      dates: "2024",
      active: true,
      description:
        "I developed a Human Resource Information System (HRIS) for my client to streamline employee management. It features attendance tracking, payroll processing, and performance monitoring, ensuring efficient HR operations with a user-friendly interface.",
      technologies: [
        "Javascript",
        "ReactJS",
        "Prisma",
        "MySQL",
        "Tailwind",
        "Shadcn UI",
        "NodeJS",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Picture2.png",
      video: "",
    },
    {
      title: "Tiktok Automations",
      href: "",
      dates: "2023 - Present",
      active: true,
      description:
        "I grew few TikTok accounts to thousands of followers using strategic content creation and engagement techniques. Now, it’s earning money through monetization and brand partnerships.",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tiktokauto.jpeg",
      video: "",
    },
  ],
} as const;

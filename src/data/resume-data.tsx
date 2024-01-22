import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Shivam Mishra",
  initials: "SKM",
  location: "Bengaluru, India",
  locationLink: "https://g.co/kgs/hsvbyBs",
  about: "Full Stack Engineer, Trying to learn new things everyday.",
  summary:
    "Hello! I am currently an SDE Intern at Terribly Tiny Tales, equipped with holistic knowledge in software development, IT support, and UX design. Additionally, I have experience in DevOps, Android, and Web Development. My objective is to pursue a growth-oriented and challenging career where I can contribute my knowledge and skills to the organization, while enhancing my experience through continuous learning and teamwork.",
  avatarUrl: "https://avatars.githubusercontent.com/u/71921992?v=4",
  personalWebsiteUrl: "https://mshivam019.vercel.app/",
  contact: {
    email: "mshivam019@gmail.com",
    tel: "+919304168851",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mshivam019",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mshivam019/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/mshivam0019",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Lovely Professional University",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      start: "2020",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Terribly Tiny Tales",
      link: "https://terriblytinytales.com/",
      badges: ["Remote"],
      title: "SDE Intern - Terribly Tiny Tales",
      start: "2023",
      end: "Present",
      description:
        "Designed and implemented an internal dashboard feature for managing recruiter job details, assignments. Contributed significantly to the TTT Academy website by building the complete user onboarding flow and user edit page. Recently developed a new app using React Native, Expo, and Paper, facilitating employee management tasks such as login, logout, and leave management, while also functioning as a timely reminder system. Technologies: React, Nextjs, MySQL, React Native",
    },
    {
      company: "Google Supported Android Internship - Smartbridge",
      link: "https://smartinternz.com/google-virtual-internship-program-2022",
      badges: ["Virtual"],
      title: "Android Intern",
      start: "2022",
      end: "2022",
      description: `Completed Android Basics course and attended 8-weeks of training, learning about building android apps using Kotlin.
        Built a grocery-list app using Kotlin and XML for my final project with the help of Coroutines, MVVM and ROOM database.
        Learnt about Step-by-Step procedure to develop mobile application from wire-framing to data persistence. Technologies: Android, Kotlin, Lottie, XML`,
    },
    {
      company: "Future Ready Talent Cloud Internship",
      link: "https://futurereadytalent.in/courses",
      badges: ["Virtual"],
      title: "Azure Intern",
      start: "2022",
      end: "2022",
      description: `In the Azure Services technology track, I learnt about the roles and duties of an Azure Dev-ops Engineer Associate.
        My final project was a tourism website with a Chat-Bot with CI/CD using GitHub, hosted on Azure Static Web-Apps and Chat-Bot learns from the user dynamically using QnA Maker hosted on Azure Bot Services.
        Experienced the daily hands-on tasks of an Azure Developer (AZ-204) like utilizing Azure Storage, implementing authentication and authorization. Technologies: Azure, Azure Static Web-Apps, Azure Bot Services, QnA Maker, GitHub, HTML, CSS, JavaScript`,
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Java/Kotlin",
    "Golang",
    "React Native/Expo",
    "SQL/NoSQL",
    "Jetpack Compose",
  ],
  projects: [
    {
      title: "EStore",
      techStack: ["MongoDB", "Tailwind CSS", "Realm", "Nextjs", "PayPal"],
      description:
        "E-commerce website with order history, auto-complete search and paypal payment gateway.",
      link: {
        label: "Live Demo",
        href: "https://e-commerce-mshivam019.vercel.app/",
      },
    },
    {
      title: "Hospital Management System",
      techStack: [
        "Java",
        "SpringBoot",
        "PostgreSQL",
        "Docker",
        "REST APIs",
        "Auth0",
      ],
      description: "Hospital website for CRUD operations on appointments.",
      link: {
        label: "Live Demo",
        href: "https://github.com/mshivam019/Hospital_Management",
      },
    },
    {
      title: "Kanban Notes",
      techStack: ["Firebase", "Angular", "Docker", "Typescript", "Firestore"],
      description:
        "Kanban style notes app for storing daily tasks, logs, and to-dos.",
      link: {
        label: "Live Demo",
        href: "https://kanban-notes.vercel.app/",
      },
    },
    {
      title: "Mood Swinger",
      techStack: ["Firebase", "React", "Tailwind CSS", "Firestore", "OAuth"],
      description:
        "Mood tracking web-app with features like mood history, notes, and triggers identification.",
      link: {
        label: "Live Demo",
        href: "https://mood-swinger.vercel.app/",
      },
    },
    {
      title: "Social Butterfly",
      techStack: ["MongoDB", "Mantine", "Data API", "Nextjs", "Auth0"],
      description:
        "Twitter-like web-app for sending, editing, liking, and sharing Flutters (Tweets).",
      link: {
        label: "Live Demo",
        href: "https://social-butterfly.vercel.app/",
      },
    },
    {
      title: "Golang Notes",
      techStack: ["Golang", "JWT", "Postgres", "Swagger", "Gorm"],
      description:
        "Golang Backend for CRUD operations on notes using REST APIs.",
      link: {
        label: "Live Demo",
        href: "https://restless-snowflake-5074.fly.dev/swagger/index.html",
      },
    },
    {
      title: "Expo 2048",
      techStack: [
        "React",
        "React Native",
        "Expo",
        "Expo Notifications",
        "React Native Web",
      ],
      description:
        "2048 game with reminders created with Expo (React Native) for web and Android.",
      link: {
        label: "Live Demo",
        href: "https://mshivam019.github.io/2048/",
      },
    },
    {
      title: "CC-Instagram",
      techStack: ["Jetpack Compose", "Kotlin", "Firebase"],
      description:
        "Instagram Clone made for Compose Camp using Jetpack Compose and Kotlin.",
      link: {
        label: "GitHub Repository",
        href: "https://github.com/mshivam019/CC-Instagram",
      },
    },
    {
      title: "Grocery-App",
      techStack: ["Jetpack Compose", "Kotlin"],
      description: "Grocery Delivery app template built using Jetpack Compose.",
      link: {
        label: "GitHub Repository",
        href: "https://github.com/mshivam019/Grocery-App",
      },
    },
    {
      title: "Habit Tracker",
      techStack: ["Flutter", "Dart"],
      description:
        "Habit Tracker app which tracks daily habits with a GitHub contributions timeline-inspired heatmap.",
      link: {
        label: "GitHub Repository",
        href: "https://github.com/mshivam019/habit-tracker",
      },
    },
    {
      title: "Shopping-List",
      techStack: ["Android", "XML", "Kotlin"],
      description: "Android application for keeping track of shopping lists.",
      link: {
        label: "GitHub Repository",
        href: "https://github.com/mshivam019/Grocery-List",
      },
    },
    {
      title: "Star Wars Weather App",
      techStack: ["Angular", "PWA"],
      description:
        "Fetches weather data and displays it in a UI with a planet background matching the temperature.",
      link: {
        label: "GitHub Repository",
        href: "https://github.com/mshivam019/star-wars-weather-app",
      },
    },
    {
      title: "RPS",
      techStack: ["Jetpack Compose", "Kotlin"],
      description: "Rock-paper-scissors game playable against a bot.",
      link: {
        label: "GitHub Repository",
        href: "https://github.com/mshivam019/RPS",
      },
    },
    {
      title: "Minimalist Weather",
      techStack: ["Flutter", "Dart"],
      description: "Minimalist style weather app built using Flutter.",
      link: {
        label: "GitHub Repository",
        href: "https://github.com/mshivam019/weather-app",
      },
    },

    {
      title: "Flappy Bird",
      techStack: ["Unity3D", "C#"],
      description:
        "2D game of Flappy Bird created in Unity and works on both Android and Windows.",
      link: {
        label: "GitHub Repository",
        href: "https://github.com/mshivam019/Flappy-Bird",
      },
    },
    {
      title: "Meow Speech",
      techStack: ["Swift UI", "Swift"],
      description:
        "Text-to-speech app for iOS devices developed using Swift UI",
      link: {
        label: "GitHub Repository",
        href: "https://github.com/mshivam019/Meow-Speech",
      },
    },
    {
      title: "Pixel Store",
      techStack: ["Java", "XML"],
      description: "Java application for buying a phone.",
      link: {
        label: "GitHub Repository",
        href: "https://github.com/mshivam019/Pixel-Store",
      },
    },
    {
      title: "Just Java",
      techStack: ["Java", "Android Studio"],
      description:
        "Android application for ordering coffee with toppings at any coffee shop",
      link: {
        label: "GitHub Repository",
        href: "https://github.com/mshivam019/JustJava",
      },
    },
  ],
} as const;

import examorPreview from "../../assets/previews/examor.webp";
import btechPreview from "../../assets/previews/btech-1.webp";
import gtaSaPreview from "../../assets/previews/gta-sa-1.webp";
import gtaVcPreview from "../../assets/previews/gta-vc-1.webp";

export const projects = [
  {
    title: "Examor Platform",
    description:
      "Full-stack online exam platform built for real-world academic workflows, combining secure authentication, automated grading, and role-based dashboards.",
    image: examorPreview,
    imageAlt: "Examor dashboard preview",
    tech: ["React", "Node.js", "SQL Server", "JWT", "REST APIs"],
    features: [
      "Role-based access for Admin, Doctor, and Student dashboards.",
      "Question support for MCQ, True/False, and Essay formats.",
      "Automated grading flow with secure exam lifecycle management.",
      "Unique exam code generation for controlled student access.",
      "Countdown timer with auto-submit for timed exam sessions.",
      "More than 20 REST APIs covering auth, exams, results, and dashboards.",
      "Secure authentication using JWT and bcrypt with SQL injection protection.",
    ],
    liveDemo: "https://examor-frontend.vercel.app",
    github: "https://github.com/Kareem-Basem/Examor-platform",
    videoDocumentation:
      "https://drive.google.com/drive/folders/1XaK4Inwxg6K00bYC2Ak6RWA_BV8PuQ-s?usp=drive_link",
  },
  {
    title: "Customer & Sales Management System - BTECH",
    description:
      "Developed a customer and sales management system during a BTECH training program to streamline client data handling and sales operations through a structured Microsoft Access database.",
    image: btechPreview,
    imageAlt: "BTECH customer and sales management system preview",
    tech: ["Microsoft Access", "Database Design", "SQL", "Team Collaboration"],
    features: [
      "Contributed within a 4-member team to design and implement a structured database system.",
      "Designed database tables and relationships for customer records, invoices, and transaction workflows.",
      "Built queries for data retrieval, filtering, and reporting.",
      "Ensured data integrity and consistency across records and operational flows.",
      "Supported management of customer data, sales and purchase transactions, and invoice generation.",
      "Completed within one week from Nov 23 to Nov 30, 2024 as a practical real-world business project.",
    ],
    github: "https://github.com/Kareem-Basem",
  },
  {
    title: "GTA San Andreas - KeMoO Edition",
    description:
      "A revamped San Andreas experience that modernizes the classic game while preserving its original spirit and strong 90s identity.",
    image: gtaSaPreview,
    imageAlt: "GTA San Andreas KeMoO Edition preview",
    tech: ["C++", "Game Modding", "Engine Optimization", "Visual Enhancements"],
    features: [
      "Significantly upgraded graphics quality with updated in-game textures inspired by the 90s aesthetic.",
      "Redesigned vehicles and expanded car variety to strengthen the era-specific feel.",
      "Weapons overhauled for better variety and stronger realism.",
      "Environmental sounds, soundtrack, and audio effects reworked for a richer experience.",
      "Loading screens updated to match the enhanced visual direction.",
      "Movement mechanics refined and core engine adjustments added for smoother gameplay and higher stability.",
      "Support for up to 4K resolution with improved weather, lighting, shadows, and more dynamic AI behavior.",
    ],
    github: "https://github.com/Kareem-Basem",
  },
  {
    title: "GTA Vice City - KeMoO Edition",
    description:
      "A refreshed Vice City edition designed to revive the 1980s atmosphere through upgraded visuals, smoother gameplay, and stronger audio immersion.",
    image: gtaVcPreview,
    imageAlt: "GTA Vice City KeMoO Edition preview",
    tech: ["C++", "Game Modding", "Optimization", "Visual Tweaks"],
    features: [
      "Comprehensive graphics upgrade with more realistic textures that still align with the original environment.",
      "All vehicles replaced to better match the 1980s style and atmosphere.",
      "Weapons redesigned with visual and mechanical improvements for a more modern feel.",
      "Audio elements, soundtrack, and environmental sounds reworked for stronger immersion.",
      "Loading screens updated to stay consistent with the upgraded presentation.",
      "Character and vehicle movement refined for smoother gameplay.",
      "Game engine adjustments focused on stable, cleaner, and more bug-resistant performance.",
    ],
    github: "https://github.com/Kareem-Basem",
  },
];

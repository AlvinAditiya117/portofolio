// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profiles.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "ALVIN ADITIYA",
  tagline: "D-IV Information Technology Student | Designer & Machine Learning Enthusiast",
  location: "Lumajang, Jawa Timur",
  img: profile,
  about: `Mahasiswa aktif Program Studi D-IV Teknologi Informasi Politeknik Negeri Malang yang memiliki ketertarikan dalam bidang desain dan fotografi, terutama pada aspek visual storytelling dan user experience. Saya senang bereksperimen menggunakan Figma untuk membuat desain antarmuka yang fungsional dan menarik, serta mengembangkan minat di bidang machine learning menggunakan Python dan Google Colab. Bagi saya, desain dan teknologi adalah cara untuk menyalurkan kreativitas sekaligus memecahkan masalah dengan cara yang kreatif dan inovatif.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/alvin-aditiya",
  github: "https://www.github.com/AlvinAditiya117",
  cv: "https://drive.google.com/file/d/1MNekoP-vxIbbjWZ3Y7uLwrF8RRa9CKhm/view",
  instagram: "https://www.instagram.com/",
};

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "D-IV Teknologi Informasi",
    Company: "Politeknik Negeri Malang",
    Location: "Kota Malang, Indonesia",
    Type: "Full Time",
    Duration: "Juli 2023 - Sekarang",
  },
  {
    Position: "Semester 5 (IPK: 3.33 / 4.00)",
    Company: "20 SKS",
    Location: "Malang",
    Type: "Full Time",
    Duration: "2023 - Sekarang",
  },
  {
    Position: "Multimedia",
    Company: "SMKN 1 Pasirian",
    Location: "Kota Lumajang, Indonesia",
    Type: "Full Time",
    Duration: "Juli 2020 - Mei 2023",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "RW Marketplace App – PBL Project",
    image: projectImage1,
    description: `Built a neighborhood marketplace app connecting RW residents with local vendors using Flutter for mobile UI and Laravel 12 + Sanctum for backend API. Implemented user authentication, product management, shopping cart, transaction/payment flow, and secure Flutter ↔ Laravel REST API integration. Developed features for resident-vendor interaction, order processing, and local e-commerce within a RW community. (Full Stack Developer, Semester 5, Sep 2025 - Dec 2025, State Polytechnic of Malang)`,
    techstack: "Flutter, Dart, Laravel 12, PHP, Sanctum, MySQL, REST API",
    previewLink: "",
    githubLink: "",
  },
  {
    title: "Internify – Internship Management System",
    image: projectImage2,
    description: `Developed an internship management web application to support companies, students, and lecturers for internship postings, applications, mentoring, evaluations, and feedback. Implemented multi-role authentication and dashboards for students, company users, and lecturers. Built internship vacancy posting, application tracking, mentoring document submission, evaluation scoring, feedback collection, and report generation. Used Laravel 10 with Livewire and Vite for interactive server-driven UI and PHP backend logic. (Full Stack Developer, Feb 2025 - Jun 2025, Politeknik Negeri Malang)`,
    techstack: "Laravel 10, PHP, Livewire, Vite, MySQL, Axios, Turbolinks",
    previewLink: "",
    githubLink: "",
  },
  {
    title: "Student Discipline Management System (Phase 1)",
    image: projectImage3,
    description: `Developed a web-based student conduct enforcement and appeal system using PHP, HTML/CSS, JavaScript, and Microsoft SQL Server. Implemented multi-role access for admin, lecturers, and students to manage violation reports, sanctions, appeals, and profile updates. Built dashboards and responsive pages for report submission, review, sanction tracking, and appeal handling. Integrated secure session management, file uploads, and SQL Server database operations using sqlsrv. (Full Stack Developer, Sep 2025 - Dec 2025, State Polytechnic of Malang)`,
    techstack: "PHP, HTML/CSS, JavaScript, Microsoft SQL Server, SQLSRV, Bootstrap-style UI",
    previewLink: "",
    githubLink: "",
  },
  {
    title: "Student Discipline Management System (Phase 2)",
    image: projectImage4,
    description: `Continued development of the web-based student conduct enforcement and appeal system using PHP, HTML/CSS, JavaScript, and Microsoft SQL Server. Enhanced multi-role access for admin, lecturers, and students to manage violation reports, sanctions, appeals, and profile updates. Improved dashboards and responsive pages for report submission, review, sanction tracking, and appeal handling. Further integrated secure session management, file uploads, and SQL Server database operations using sqlsrv. (Full Stack Developer, Feb 2026 - Now, State Polytechnic of Malang)`,
    techstack: "PHP, HTML/CSS, JavaScript, Microsoft SQL Server, SQLSRV, Bootstrap-style UI",
    previewLink: "",
    githubLink: "",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "navin.arker@gmail.com",
  phone: "+62 878 6035 6949",
};

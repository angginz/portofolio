export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
  details?: string[];
  tags: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
}

export const experiences: ExperienceItem[] = [
  {
    period: "Sep 2025 — Present",
    title: "Backend Developer",
    company: "PT Indosoft Digital Enigma",
    description:
      "Designed, built, and maintained backend services with APIs, database schemas, authentication, and AI integrations to support scalable business applications.",
    details: [
      "Designed and optimized database schemas based on application and business requirements.",
      "Developed and maintained backend services and RESTful APIs using Node.js and Express.js.",
      "Organized project architecture and folder structures to improve maintainability, scalability, and team collaboration.",
      "Created and maintained API documentation while performing API testing to ensure reliable integrations.",
      "Implemented authentication, authorization, and role-based access control features.",
      "Integrated external AI services to support AI-powered application functionality.",
      "Collaborated with cross-functional teams to deliver scalable and reliable software solutions.",
    ],
    tags: ["Node.js", "Express", "Prisma", "PostgreSQL"],
  },
  {
    period: "May 2025 — Sep 2025",
    title: "QA Developer",
    company: "PT Indosoft Digital Enigma",
    description:
      "Ensured application quality through manual and regression testing, defect reporting, and collaboration with development teams.",
    details: [
      "Conducted manual testing for web and mobile applications to identify and report software defects.",
      "Collaborated with development teams to verify bug fixes and ensure application quality throughout the development lifecycle.",
      "Supported functional and regression testing activities to improve system reliability and user experience.",
    ],
    tags: ["Node.js", "Express", "Prisma", "PostgreSQL"],
  },
  {
    period: "Okt 2020 — Apr 2021",
    title: "Engineer Business Analyst",
    company: "PT Icon Plus",
    description:
      "Supported project delivery through client collaboration, system analysis, requirements documentation, prototype design, and development-team communication.",
    details: [
      "Collaborated with clients to develop UI/UX project designs by understanding their needs and objectives.",
      "Conducted system analysis of client applications to identify strengths, weaknesses, and enhancement opportunities.",
      "Gathered, clarified, and documented detailed project requirements aligned with business goals.",
      "Created wireframes and interactive prototypes to support iterative design and client feedback.",
      "Acted as liaison between clients and development teams to ensure requirement clarity throughout the project lifecycle.",
    ],
    tags: ["Node.js", "Express", "Prisma", "PostgreSQL"],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Face Recognition Attendance System",
    description:
      "IoT-based attendance system utilizing face recognition technology to automate attendance tracking and improve accuracy. Developed as a final project using Python and image processing techniques.",
    tags: ["Python", "OpenCV", "Face Recognition", "IoT"],
  },
  {
    title: "Bank Sampah Cibaduyut",
    description:
      "Web-based waste management application developed to support waste collection and management activities. Contributed to requirements documentation, UI/UX design, and backend implementation using PHP and MySQL.",
    tags: ["PHP", "MySQL", "Web Development"],
  },
];

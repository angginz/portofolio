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
  period: "May 2025 — Present",
  title: "Full Stack Engineer",
  company: "PT Indosoft Digital Enigma",
  description:
    "Worked across software quality assurance, backend development, product rollout, and payment-related initiatives based on evolving project and business needs.",

  details: [
    "May 2025 — Nov 2025 · Quality Assurance: Performed functional, regression, API, and database testing for web and mobile applications.",

    "Sept 2025 — Present · Full Stack Developer: Developed RESTful APIs, database schemas, authentication, authorization, and backend integrations using Node.js, Express.js, Prisma, and PostgreSQL.",

  ],

  tags: [
    "Node.js",
    "Express.js",
    "Prisma",
    "PostgreSQL",
    "REST API",
    "API Testing",
  ],
},

  {
    period: "Oct 2020 — Apr 2021",
    title: "Engineer Business Analyst",
    company: "PT Icon Plus",
    description:
      "Supported software projects through requirement analysis, system documentation, UI/UX design, and communication between clients and development teams.",

    details: [
      "Gathered and analyzed client requirements for application development projects.",
      "Conducted system analysis to identify business needs and potential improvements.",
      "Documented functional requirements and project specifications.",
      "Created wireframes and interactive prototypes based on client requirements.",
      "Collaborated with clients during design reviews and requirement clarification.",
      "Communicated project requirements to development teams to support implementation.",
    ],

    tags: [
      "Business Analysis",
      "Requirement Analysis",
      "UI/UX",
      "Wireframing",
      "Prototyping",
      "Documentation",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Face Recognition Attendance System",
    description:
      "IoT-based attendance system using face recognition to automate attendance recording and improve identification accuracy. Developed as a final project using Python and computer vision technologies.",

    tags: [
      "Python",
      "OpenCV",
      "Face Recognition",
      "IoT",
    ],
  },

  {
    title: "Bank Sampah Cibaduyut",
    description:
      "Web-based waste management application designed to support waste collection, customer data management, and operational activities. Contributed to requirement analysis, UI/UX design, and backend development.",

    tags: [
      "PHP",
      "MySQL",
      "UI/UX",
      "Web Development",
    ],
  },
];
export interface SlideTypes {
  id?: string;
  title?: string;
  content: string;
  isTitleSlide?: boolean;
  type?: "default" | "game" | "table";
  roles?: {
    title: string;
    salary: string;
    description: string;
  }[];
  tableData?: {
    label: string;
    formal: {
      main: string;
      pros: string;
      cons: string;
    };
    self: {
      main: string;
      pros: string;
      cons: string;
    };
  }[];
  resources?: {
    name: string;
    url: string;
    logo: string;
  }[];
}

export const slides: SlideTypes[] = [
  {
    content: "Breaking Into Tech: Your Path, Your Power",
    isTitleSlide: true,
  },
  {
    title: "Breaking into Tech: My Path, Your Power",
    content:
      "A real-world guide to launching your tech career—whether you're college-bound or YouTube-grown.",
  },
  {
    title: "Icebreaker: Your App Idea",
    content:
      "If you could build an app to solve any problem in your life or community, what would it do?",
  },
  {
    title: "My Journey into Tech",
    content: `- Grew up curious and creative
- Took both self-taught and formal routes
- Faced real struggles
- Landed my first role through perseverance

Quote: "I wasn’t a genius. I was curious and consistent."`,
  },
  {
    title: "Tech Roles + Salary Game",
    type: "game",
    content: `Can you guess what these do and which pays the most?`,
    roles: [
      {
        title: "Software Developer",
        salary: "$110,000",
        description: "Builds applications and systems for end users.",
      },
      {
        title: "Cybersecurity Analyst",
        salary: "$105,000",
        description: "Protects systems from threats and vulnerabilities.",
      },
      {
        title: "UI/UX Designer",
        salary: "$95,000",
        description: "Designs interfaces and improves user experience.",
      },
      {
        title: "DevOps Engineer",
        salary: "$120,000",
        description: "Automates and manages CI/CD pipelines and infrastructure.",
      },
      {
        title: "Data Scientist",
        salary: "$125,000",
        description: "Analyzes data to uncover patterns and inform decisions.",
      },
    ],
  },
  {
    title: "Formal vs Self-Taught Paths",
    type: "table",
    content: "",
    tableData: [
      {
        label: "Learn via",
        formal: {
          main: "College, Professors",
          pros: "Access to experts and resources",
          cons: "Rigid curriculum",
        },
        self: {
          main: "YouTube, FreeCodeCamp",
          pros: "Self-paced and vast content",
          cons: "Overwhelming and unstructured",
        },
      },
      {
        label: "Cost",
        formal: {
          main: "$$$",
          pros: "Recognized credential",
          cons: "High tuition and debt",
        },
        self: {
          main: "Free to cheap",
          pros: "Low barrier to entry",
          cons: "Requires self-discipline",
        },
      },
      {
        label: "Structure",
        formal: {
          main: "High",
          pros: "Clear roadmap",
          cons: "Limited flexibility",
        },
        self: {
          main: "Low (self-driven)",
          pros: "Adaptable to your goals",
          cons: "Can lead to gaps in knowledge",
        },
      },
      {
        label: "Networking",
        formal: {
          main: "Easier",
          pros: "Built-in alumni & peers",
          cons: "Depends on institution",
        },
        self: {
          main: "Requires effort",
          pros: "Global communities available",
          cons: "Need to seek them out yourself",
        },
      },
    ],
  },
{
  title: "Free Resources to Start",
  content: "Explore free resources to kickstart your learning.",
  resources: [
    {
      name: "Replit",
      url: "https://replit.com",
      logo: "resources//replit.png",
    },
    {
      name: "FreeCodeCamp",
      url: "https://freecodecamp.org",
      logo: "resources//freecodecamp.png",
    },
    {
      name: "W3Schools",
      url: "https://w3schools.com",
      logo: "resources//weschools.png",
    },
    {
      name: "Harvard CS50",
      url: "https://cs50.harvard.edu",
      logo: "resources//harvardcs50.svg.png",
    },
    {
      name: "CyberStart America",
      url: "https://cyberstartamerica.org",
      logo: "resources//cyberstartamerica.png",
    },
    {
      name: "Khan Academy",
      url: "https://www.khanacademy.org/computing",
      logo: "resources//khanacademy.png",
    },
    {
      name: "MIT OpenCourseWare",
      url: "https://ocw.mit.edu",
      logo: "resources//mit.png",
    },
    {
      name: "MDN Web Docs",
      url: "https://developer.mozilla.org",
      logo: "resources//mdnwebdocs.png",
    },
    {
      name: "The Odin Project",
      url: "https://www.theodinproject.com",
      logo: "resources//theodinproject.jpg",
    },
    {
      name: "Frontend Mentor",
      url: "https://www.frontendmentor.io",
      logo: "resources//frontendmentor.png",
    },
    {
      name: "Codecademy",
      url: "https://www.codecademy.com",
      logo: "resources//codeacademy.jpg",
    },
    {
      name: "Hack The Box",
      url: "https://www.hackthebox.com",
      logo: "resources//hackthebox.png",
    },
  ],
},
  {
    title: "Being Black in Tech",
    content: `- Biggest barrier? (Open question)
- Share your experience
- Message: "You belong in this field."`,
  },
  {
    title: "Ask Me Anything",
    content:
      "Rapid-fire questions about salary, school, failures, bias, tech stacks, and next steps.",
  },
  {
    title: "Scan This: Resource List + Connect",
    content:
      "QR Code / Link to resources page with tools, notes, and how to reach me.",
  },
];
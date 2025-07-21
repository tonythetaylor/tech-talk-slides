export interface SlideTypes {
  id?: string;
  title?: string;
  images?: string[];
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
  content: `Can you guess what these roles do and how much they might earn in the future?`,
  roles: [
    {
      title: "Software Engineer",
      salary: "$135,000 → $250,000+",
      description:
        "Builds applications and systems for end users. Projected to remain one of the highest-paid roles, especially at senior/principal levels or in AI-focused companies.",
    },
    {
      title: "Cybersecurity Analyst",
      salary: "$130,000 → $210,000",
      description:
        "Protects systems from threats and vulnerabilities. Demand rising due to increasing attacks and compliance needs.",
    },
    {
      title: "UI/UX Designer",
      salary: "$115,000 → $180,000",
      description:
        "Designs interfaces and improves user experience. Salaries increasing as design becomes central to product success.",
    },
    {
      title: "DevOps Engineer",
      salary: "$150,000 → $230,000",
      description:
        "Automates and manages CI/CD pipelines and infrastructure. Critical in scaling modern cloud-native applications.",
    },
    {
      title: "Data Scientist",
      salary: "$155,000 → $250,000+",
      description:
        "Analyzes data to uncover patterns and inform decisions. AI/ML specialization pushes top-tier salaries even higher.",
    },
    {
      title: "AI/ML Engineer",
      salary: "$180,000 → $350,000+",
      description:
        "Designs and implements machine learning systems. Rapidly growing field with salaries rivaling top software roles.",
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
    content: `Biggest barrier? (Open question)

Other people’s expectations. Knowing when to grow—and when to go. Imposter syndrome. Being placed in a box.

Betting on yourself. Believing in your worth even when others don’t see it yet. Trusting your vision, even when it’s not validated by the room.

I had to unlearn limits that weren’t mine. Had to trust that my path might look different—but still be valid.

Every challenge sharpened my clarity. Every “no” taught me how to say “yes” to myself.

I belong here. And so do you.`
  },
  {
    title: "Ask Me Anything",
    content:
      "Rapid-fire questions about salary, school, failures, bias, tech stacks, and next steps.",
  },
{
  title: "Explore My GitHub + Connect",
  content:
    "Here’s a link to my GitHub where you’ll find resources, tools, and ways to connect: https://github.com/tonythetaylor"
}
];
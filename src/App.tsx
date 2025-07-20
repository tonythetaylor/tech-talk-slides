import { useState } from "react";
import "./index.css";

const slides = [
  {
    title: "Breaking into Tech: My Path, Your Power",
    content: "A real-world guide to launching your tech career—whether you're college-bound or YouTube-grown."
  },
  {
    title: "Icebreaker: Your App Idea",
    content: "If you could build an app to solve any problem in your life or community, what would it do?"
  },
  {
    title: "My Journey into Tech",
    content: `- Grew up curious and creative
- Took both self-taught and formal routes
- Faced real struggles
- Landed my first role through perseverance

Quote: "I wasn’t a genius. I was curious and consistent."`
  },
  {
    title: "Tech Roles + Salary Game",
    content: `Can you guess what these do and which pays the most?

- Software Developer
- Cybersecurity Analyst
- UI/UX Designer
- DevOps Engineer
- Data Scientist`
  },
  {
    title: "Formal vs Self-Taught Paths",
    content: `| Path | Formal Education | Self-Taught |
|------|------------------|-------------|
| Learn via | College, Professors | YouTube, FreeCodeCamp |
| Cost | $$$ | Free to cheap |
| Structure | High | Low (self-driven) |
| Networking | Easier | Requires effort |`
  },
  {
    title: "Free Resources to Start",
    content: `- Replit.com
- FreeCodeCamp.org
- W3Schools.com
- Harvard CS50
- CyberStart America (for cybersecurity)`
  },
  {
    title: "Being Black in Tech",
    content: `- Biggest barrier? (Open question)
- Share your experience
- Message: "You belong in this field."`
  },
  {
    title: "Ask Me Anything",
    content: "Rapid-fire questions about salary, school, failures, bias, tech stacks, and next steps."
  },
  {
    title: "Scan This: Resource List + Connect",
    content: "QR Code / Link to resources page with tools, notes, and how to reach me."
  }
];

function App() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col justify-center items-center px-4 text-center">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">{slides[current].title}</h1>
      <pre className="text-lg whitespace-pre-wrap max-w-xl mb-8">{slides[current].content}</pre>
      <div className="flex gap-4">
        <button
          onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}
          className="bg-white text-black px-4 py-2 rounded-lg"
        >
          ◀ Prev
        </button>
        <button
          onClick={() => setCurrent((prev) => Math.min(prev + 1, slides.length - 1))}
          className="bg-white text-black px-4 py-2 rounded-lg"
        >
          Next ▶
        </button>
      </div>
      <p className="mt-4 text-sm text-gray-400">Slide {current + 1} of {slides.length}</p>
    </div>
  );
}

export default App;
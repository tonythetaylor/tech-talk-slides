export interface SlideTypes {
  title: string;
  content: string;
  isTitleSlide?: boolean;
}

export const slides: SlideTypes[] = [
    {
    title: "BIT Talk",
    content: "Breaking Into Tech: Your Path, Your Power",
    isTitleSlide: true, // 👈 add this field
  },
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
import type { SlideTypes } from "../data/slides";

interface Props {
  slide: SlideTypes;
  index?: number;
  total?: number;
}

export default function Slide({ slide }: Props) {
  return (
    <div className="h-screen w-screen bg-black/60 text-white flex flex-col justify-center items-center px-4 text-center">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">{slide.title}</h1>
      <pre className="text-lg whitespace-pre-wrap max-w-xl mb-8">{slide.content}</pre>
    </div>
  );
}
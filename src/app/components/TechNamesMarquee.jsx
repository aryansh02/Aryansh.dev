export default function TechNamesMarquee() {
  const techNames = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js",
    "Node.js", "Express.js", "MongoDB", "Tailwind CSS",
    "Solidity", "GitHub", "VSCode", "Figma", "Notion",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-background py-4">
      {/* Bottom Row - Tech Names (Left to Right) */}
      <div className="inline-flex animate-marqueeReverse space-x-8">
        {[...techNames, ...techNames].map((name, index) => (
          <div
            key={`name-${index}`}
            className="text-xl font-sans text-[#EED9C4] whitespace-nowrap font-semibold"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

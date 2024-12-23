export default function TechStackMarquee() {
  const techStack = [
    { src: "/icons/HTML.svg", alt: "HTML" },
    { src: "/icons/CSS.svg", alt: "CSS" },
    { src: "/icons/JavaScript.svg", alt: "JavaScript" },
    { src: "/icons/TypeScript.svg", alt: "TypeScript" },
    { src: "/icons/React-Dark.svg", alt: "React" },
    { src: "/icons/NextJS-Dark.svg", alt: "Next.js" },
    { src: "/icons/NodeJS-Dark.svg", alt: "Node.js" },
    { src: "/icons/ExpressJS-Dark.svg", alt: "Express.js" },
    { src: "/icons/MongoDB.svg", alt: "MongoDB" },
    { src: "/icons/TailwindCSS-Dark.svg", alt: "Tailwind CSS" },
    { src: "/icons/Solidity.svg", alt: "Solidity" },
    { src: "/icons/Github-Dark.svg", alt: "GitHub" },
    { src: "/icons/VSCode-Dark.svg", alt: "VSCode" },
    { src: "/icons/Figma-Dark.svg", alt: "Figma" },
    { src: "/icons/Notion-Light.svg", alt: "Notion" },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-background py-4">
      {/* Top Row - Logos (Right to Left) */}
      <div className="inline-flex animate-marquee space-x-8">
        {[...techStack, ...techStack].map((tech, index) => (
          <div key={`logo-${index}`} className="w-16 h-16 flex-shrink-0">
            <img src={tech.src} alt={tech.alt} className="object-contain w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

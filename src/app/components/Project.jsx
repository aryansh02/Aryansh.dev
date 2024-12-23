export default function Project({ name, description, demoLink }) {
  return (
    <div className="bg-card-bg dark:bg-gray-900 rounded-lg shadow-md p-4">
      <h3 className="text-xl font-semibold text-foreground">{name}</h3>
      <p className="text-sm text-accent mt-2">{description}</p>
      <a
        href={demoLink}
        className="mt-4 inline-block text-indigo-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Demo
      </a>
    </div>
  );
}

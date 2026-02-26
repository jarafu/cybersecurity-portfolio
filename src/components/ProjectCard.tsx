interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  tech: string[];
  github?: string;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  details,
  tech,
  github,
}: ProjectCardProps) {
  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-8 space-y-6 hover:shadow-lg transition">
      <div>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          {subtitle}
        </p>
      </div>

      <p className="text-slate-600 dark:text-slate-300">
        {description}
      </p>

      <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
        {details.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 pt-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>

      {github && (
        <div className="pt-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium underline hover:opacity-70 transition"
          >
            View Source Code
          </a>
        </div>
      )}
    </div>
  );
}

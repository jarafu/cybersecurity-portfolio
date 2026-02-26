import SectionWrapper from "@/components/SectionWrapper";

export default function Hero() {
  return (
    <SectionWrapper id="hero" className="pt-40">
      <div className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Cybersecurity Analyst
          <span className="block text-slate-500 dark:text-slate-400 text-3xl mt-4 font-medium">
            SIEM Deployment · Endpoint Monitoring · Threat Detection
          </span>
        </h1>

        <p className="max-w-3xl text-lg text-slate-600 dark:text-slate-300">
          I design and implement security monitoring systems focused on
          endpoint visibility, log analysis, and practical threat detection.
          My experience includes deploying Wazuh-based SIEM infrastructures,
          conducting vulnerability assessments, and performing application
          security testing across Windows and Linux environments.
        </p>

        <div className="flex gap-4 pt-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-xl text-sm font-medium transition hover:scale-105"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-slate-300 dark:border-slate-600 rounded-xl text-sm font-medium transition hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}

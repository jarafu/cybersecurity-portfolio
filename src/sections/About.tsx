import SectionWrapper from "@/components/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="space-y-8 max-w-4xl">
        <h2 className="text-3xl font-bold">Professional Profile</h2>

        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
          Cybersecurity professional focused on practical detection engineering,
          SIEM deployment, and endpoint security operations. I specialize in
          designing monitoring infrastructures using Wazuh and the ELK stack,
          integrating threat intelligence, and performing structured vulnerability
          assessments across Windows and Linux environments.
        </p>

        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
          My experience spans cloud-based SIEM deployment on Azure, log
          correlation tuning, penetration testing in controlled lab
          environments, and corporate endpoint management. I approach security
          with an operational mindset—prioritizing visibility, accuracy, and
          measurable detection improvements.
        </p>
      </div>
    </SectionWrapper>
  );
}

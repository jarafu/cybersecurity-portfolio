import SectionWrapper from "@/components/SectionWrapper";

interface SkillBlockProps {
  title: string;
  skills: string[];
}

function SkillBlock({ title, skills }: SkillBlockProps) {
  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 space-y-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-sm px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="space-y-12">
        <h2 className="text-3xl font-bold">Core Competencies</h2>

        <div className="grid md:grid-cols-2 gap-8">

          <SkillBlock
            title="Detection & Monitoring"
            skills={[
              "SIEM Deployment (Wazuh)",
              "Log Analysis",
              "Elasticsearch Indexing & Sharding",
              "Threat Intelligence Integration",
              "Anomaly Detection",
              "Endpoint Monitoring"
            ]}
          />

          <SkillBlock
            title="Vulnerability Assessment & Testing"
            skills={[
              "VAPT (Lab Environments)",
              "SQL Injection (SQLi)",
              "Cross-Site Scripting (XSS)",
              "Cross-Site Request Forgery (CSRF)",
              "IDOR",
              "Nessus",
              "OWASP ZAP",
              "Metasploit"
            ]}
          />

          <SkillBlock
            title="Cloud & Infrastructure"
            skills={[
              "Microsoft Azure",
              "Linux Administration",
              "Windows Security Configuration",
              "Firewall Configuration",
              "Network Segmentation",
              "TCP/IP & DNS"
            ]}
          />

          <SkillBlock
            title="Incident Response & Analysis"
            skills={[
              "Host-Based Telemetry Analysis",
              "Log Correlation",
              "Digital Forensics (Autopsy)",
              "IDS Rule Tuning",
              "Security Event Investigation"
            ]}
          />

          <SkillBlock
            title="Security Platforms & Tools"
            skills={[
              "Wazuh",
              "Elasticsearch",
              "Logstash",
              "Kibana",
              "Qualys VDMR",
              "Qualys EDR",
              "Wireshark"
            ]}
          />

          <SkillBlock
            title="Programming & Automation"
            skills={[
              "Python",
              "C",
              "Java",
              "SQL",
              "Flask",
              "SOC Automation Concepts"
            ]}
          />

        </div>
      </div>
    </SectionWrapper>
  );
}

import SectionWrapper from "@/components/SectionWrapper";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="space-y-12">
        <h2 className="text-3xl font-bold">Professional Experience</h2>

        {/* Cyforce */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">
            Cybersecurity Intern — Cyforce Technologies
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Abuja, Nigeria · May 2024 – Oct 2024
          </p>

          <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li>
              Deployed and configured a full SIEM stack using Wazuh and the ELK
              (Elasticsearch, Logstash, Kibana) stack from scratch, including
              agent installation and log ingestion pipelines.
            </li>
            <li>
              Configured endpoint security agents across Windows and Linux
              systems for centralized monitoring and event correlation.
            </li>
            <li>
              Analyzed host-based telemetry and network traffic to identify
              anomalies, malware indicators, and unauthorized access attempts.
            </li>
            <li>
              Assisted in IDS rule tuning and firewall configuration to improve
              detection accuracy and reduce false positives.
            </li>
          </ul>
        </div>

        {/* Hactify */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">
            Cybersecurity Intern — Hactify (Remote)
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Feb 2025 – Mar 2025
          </p>

          <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li>
              Conducted Vulnerable Application Penetration Testing (VAPT) in
              structured lab environments targeting web and desktop
              applications.
            </li>
            <li>
              Identified and exploited vulnerabilities including SQL injection
              (SQLi), Cross-Site Scripting (XSS), and Cross-Site Request Forgery
              (CSRF).
            </li>
            <li>
              Documented exploit methodology and provided remediation guidance
              to strengthen application security posture.
            </li>
          </ul>
        </div>

        {/* Royalty Shopping Mall */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">
            Head, Technical Department — Royalty Shopping Mall
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Abuja, Nigeria · Jan 2023 – Present
          </p>

          <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li>
              Manage and secure corporate endpoints, POS systems, and internal
              network infrastructure.
            </li>
            <li>
              Implement baseline security configurations, patch management
              processes, and user access control policies.
            </li>
            <li>
              Investigate hardware, software, and connectivity incidents to
              minimize operational downtime and maintain business continuity.
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}

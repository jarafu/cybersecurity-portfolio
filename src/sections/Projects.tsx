import SectionWrapper from "@/components/SectionWrapper";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="space-y-16">
        <h2 className="text-3xl font-bold">Technical Projects</h2>

        {/* Cloud SIEM */}
        <ProjectCard
          title="Scalable Cloud-Based SIEM Deployment"
          subtitle="Azure Infrastructure · Wazuh · ELK Stack"
          description="Designed and deployed a scalable Security Information and Event Management (SIEM) system on Microsoft Azure with centralized log collection, endpoint monitoring, and advanced threat detection."
          details={[
            "Provisioned and configured Wazuh manager with Elasticsearch, Logstash, and Kibana on Azure.",
            "Implemented Elasticsearch index sharding to improve log scalability and query performance.",
            "Configured custom detection rules for anomaly detection and suspicious activity monitoring.",
            "Integrated threat intelligence feeds for IOC enrichment and correlation.",
            "Deployed and monitored Windows and Linux endpoint agents for centralized telemetry ingestion."
          ]}
          tech={[
            "Azure",
            "Wazuh",
            "Elasticsearch",
            "Logstash",
            "Kibana",
            "Linux",
            "Threat Intelligence"
          ]}
        />

        {/* AGEIS */}
        <ProjectCard
          title="AGEIS — AI-Powered SOC Automation Platform"
          subtitle="Multi-Agent Security Analysis System"
          description="Developed an AI-driven Security Operations Center (SOC) assistant designed to emulate multi-tier analyst workflows for threat validation and incident reporting."
          details={[
            "Implemented a multi-agent architecture (Analyst → Auditor verification loop) to reduce false positives.",
            "Integrated generative AI for structured incident report generation and severity classification.",
            "Designed role-based dashboards simulating Tier-1 to Tier-4 SOC operations.",
            "Implemented IOC enrichment and confidence scoring mechanisms."
          ]}
          tech={[
            "Python",
            "Flask",
            "SQLite",
            "Generative AI",
            "SOC Automation"
          ]}
          github="https://github.com/jarafu"
        />

        {/* ISO 27001 */}
        <ProjectCard
          title="ISO 27001 Compliance Gap Analysis & Risk Assessment"
          subtitle="Information Security Governance"
          description="Conducted a structured ISO 27001 compliance gap analysis identifying control weaknesses and recommending risk mitigation strategies."
          details={[
            "Performed asset identification and risk assessment using qualitative risk scoring.",
            "Mapped organizational controls against ISO 27001 requirements.",
            "Identified control deficiencies and proposed remediation roadmaps.",
            "Produced structured compliance and risk documentation."
          ]}
          tech={[
            "ISO 27001",
            "Risk Assessment",
            "Information Security Governance"
          ]}
        />

        {/* ATHA */}
        <ProjectCard
          title="ATHA — AI-Powered Threat Hunting Assistant"
          subtitle="AI-Driven Threat Hunting Concept"
          description="Designed a conceptual multi-agent threat hunting assistant focused on persistent memory, SOC-tiered workflows, and automated investigative reasoning."
          details={[
            "Architected modular agent design for hypothesis generation and log correlation.",
            "Focused on improving contextual memory and automated investigation flow.",
            "Planned integration with SIEM tools for real-time detection support."
          ]}
          tech={[
            "Threat Hunting",
            "AI Agents",
            "SOC Workflow Design"
          ]}
        />
      </div>
    </SectionWrapper>
  );
}

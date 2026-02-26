import SectionWrapper from "@/components/SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="space-y-8 max-w-3xl">
        <h2 className="text-3xl font-bold">Contact</h2>

        <p className="text-slate-600 dark:text-slate-300 text-lg">
          I am currently open to cybersecurity internship opportunities and
          collaborative security research engagements.
        </p>

        <div className="space-y-4 text-slate-700 dark:text-slate-300">
          <p>
            Email:{" "}
            <a
              href="mailto:ijudigajarafu@gmail.com"
              className="underline hover:opacity-70"
            >
              ijudigajarafu@gmail.com
            </a>
          </p>

          <p>
            GitHub:{" "}
            <a
              href="https://github.com/jarafu"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70"
            >
              github.com/jarafu
            </a>
          </p>

          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/ijudiga-jarafu-748165211"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70"
            >
              linkedin.com/in/ijudiga-jarafu-748165211
            </a>
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

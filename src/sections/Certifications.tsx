import SectionWrapper from "@/components/SectionWrapper";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <div className="space-y-12">
        <h2 className="text-3xl font-bold">Certifications</h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
            <h3 className="font-semibold text-lg">
              Certified in Cybersecurity (CC)
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              ISC2
            </p>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
            <h3 className="font-semibold text-lg">
              Blue Team Junior Analyst (BTJA)
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Security Blue Team
            </p>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
            <h3 className="font-semibold text-lg">
              Certified Social Engineering Defense Practitioner (CSEDP)
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              SECOPS Group
            </p>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
            <h3 className="font-semibold text-lg">
              Vulnerable Application Penetration Tester (VAPT)
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Hactify Cybersecurity
            </p>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
            <h3 className="font-semibold text-lg">
              Certified QUALYS Specialist – VDMR & EDR
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Qualys Training Platform
            </p>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
            <h3 className="font-semibold text-lg">
              Certified Cybersecurity Education Professional (CCEP)
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Issuer: CCEP
            </p>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}

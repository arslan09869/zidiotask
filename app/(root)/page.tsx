import FAQandFooter from "@/components/FAQandFooter";
import Features from "@/components/Features";
import FeaturesForRoles from "@/components/FeaturesForRoles";
import HowToUse from "@/components/HowToUse";
import SparklesEffectPage from "@/components/mvpblocks/sparkles-logo";

export default function Home() {
  return (
    <div className="bg-white dark:bg-[#121212] transition-colors duration-300">
      {/* ================= HERO / INTRO SECTION ================= */}
      <SparklesEffectPage />

      {/* ================= CALL-TO-ACTION (CTA) SECTION ================= */}
      <section className="w-full flex flex-col items-center justify-center text-center px-4 pb-6 bg-transparent dark:bg-[#121212] transition-colors duration-300">
        {/* Headline and subtext introducing the main value proposition */}
        <div className="max-w-2xl dark:mt-0 mt-10">
          <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-gray-100 mb-4 font-semibold">
            Turn Chaos Into Clarity.
          </h2>

          {/* Short description encouraging users to try the platform */}
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Plan tasks, set priorities, and visualize progress — all in one
            place. <br />
            Empower your team with{" "}
            <span className="text-rose-600 dark:text-rose-300 font-medium">
              live updates, flexible boards, and effortless collaboration.
            </span>
          </p>

        </div>

        {/* CTA illustration */}
       <>
  {/* Light mode image */}
  <img
    src="/cta-section-light.png"
    alt="cta-card light"
    className="block dark:hidden max-w-full sm:w-[80%] w-[90%] h-auto object-contain rounded-3xl mt-12 mb-8 shadow-lg transition-shadow duration-300"
  />

  {/* Dark mode image */}
  <img
    src="/cta-section.png"
    alt="cta-card dark"
    className="hidden dark:block max-w-full sm:w-[80%] w-[90%] h-auto object-contain rounded-3xl mt-12 mb-8 shadow-lg dark:shadow-[0_4px_30px_rgba(255,255,255,0.1)] transition-shadow duration-300"
  />
</>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="w-full flex flex-col items-center justify-center text-center px-3 bg-transparent dark:bg-[#121212] transition-colors duration-300">
        <Features />
      </section>

      {/* ================= HOW TO USE SECTION ================= */}
      <section className="bg-white dark:bg-[#121212] transition-colors duration-300">
        <HowToUse />
      </section>

      {/* ================= FAQ AND FOOTER SECTION ================= */}
      <section className="bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
        <FAQandFooter />
        {/* Uncomment to show role-based cards */}
        {/* <FeaturesForRoles /> */}
      </section>
    </div>
  );
}

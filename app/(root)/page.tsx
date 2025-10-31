import FAQandFooter from "@/components/FAQandFooter";
import Features from "@/components/Features";
import FeaturesForRoles from "@/components/FeaturesForRoles";
import HowToUse from "@/components/HowToUse";
import SparklesEffectPage from "@/components/mvpblocks/sparkles-logo";

export default function Home() {
  return (
    <div>
      <SparklesEffectPage />

      {/* CTA SECTION */}
      <section className="bg-[#121212] w-full flex flex-col items-center justify-center text-center px-4 pb-6">
        {/* Text with theme */}
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl text-gray-100 mb-4">
            Turn Chaos Into Clarity.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Plan tasks, set priorities, and visualize progress — all in one
            place. <br />
            Empower your team with{" "}
            <span className="text-rose-300 font-medium">
              live updates, flexible boards, and effortless collaboration.
            </span>
          </p>

          {/* <div className="mt-4 mb-8">
            <button className="bg-rose-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-rose-600 transition-all duration-300">
              Try Zidiotask Free
            </button>
          </div> */}
        </div>
        <img
          src="/cta-section.png"
          alt="cta-card"
          className="max-w-full sm:w-[80%] w-[90%] h-auto object-contain rounded-4xl mt-12 mb-10"
        />
      </section>

      <section className="bg-[#121212] w-full flex flex-col items-center justify-center text-center px-4">
        <Features />
      </section>

      <section>
        <HowToUse />
      </section>

      <section>
        <FAQandFooter />
        {/* <FeaturesForRoles/> */}
      </section>
    </div>
  );
}

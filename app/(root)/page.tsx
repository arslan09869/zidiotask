// Import all necessary components used on the home page
import FAQandFooter from "@/components/FAQandFooter"; // Frequently asked questions + footer section
import Features from "@/components/Features"; // Displays app features (e.g., task management tools)
import FeaturesForRoles from "@/components/FeaturesForRoles"; // (Optional) Role-based features section
import HowToUse from "@/components/HowToUse"; // Step-by-step usage or onboarding guide
import SparklesEffectPage from "@/components/mvpblocks/sparkles-logo"; // Hero section with sparkles animation

export default function Home() {
  return (
    <div>
      {/* ================= HERO / INTRO SECTION ================= */}
      <SparklesEffectPage /> {/* Top animated header or logo section */}

      {/* ================= CALL-TO-ACTION (CTA) SECTION ================= */}
      <section className="bg-[#121212] w-full flex flex-col items-center justify-center text-center px-4 pb-6">
        {/* Headline and subtext introducing the main value proposition */}
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl text-gray-100 mb-4">
            Turn Chaos Into Clarity.
          </h2>

          {/* Short description encouraging users to try the platform */}
          <p className="text-gray-400 text-lg leading-relaxed">
            Plan tasks, set priorities, and visualize progress — all in one
            place. <br />
            Empower your team with{" "}
            <span className="text-rose-300 font-medium">
              live updates, flexible boards, and effortless collaboration.
            </span>
          </p>

          {/* Uncomment this block if you want to add a "Try Now" button */}
          {/*
          <div className="mt-4 mb-8">
            <button className="bg-rose-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-rose-600 transition-all duration-300">
              Try Zidiotask Free
            </button>
          </div>
          */}
        </div>

        {/* CTA illustration or product image */}
        <img
          src="/cta-section.png"
          alt="cta-card"
          className="max-w-full sm:w-[80%] w-[90%] h-auto object-contain rounded-4xl mt-12 mb-8"
        />
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="bg-[#121212] w-full flex flex-col items-center justify-center text-center px-3">
        <Features /> {/* Displays the product's key features */}
      </section>

      {/* ================= HOW TO USE SECTION ================= */}
      <section>
        <HowToUse /> {/* Step-by-step instructions or app workflow */}
      </section>

      {/* ================= FAQ AND FOOTER SECTION ================= */}
      <section>
        <FAQandFooter /> {/* Frequently asked questions and site footer */}

        {/* Uncomment below line if you want to show role-based cards */}
        {/* <FeaturesForRoles /> */}
      </section>
    </div>
  );
}

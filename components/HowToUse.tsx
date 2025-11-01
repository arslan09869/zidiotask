import React from "react";
import { LogIn, Eye, RefreshCcw } from "lucide-react";

function HowToUse() {
  return (
    <section className="bg-white dark:bg-[#121212] sm:pt-10 pt-0 pb-16 px-6 flex flex-col items-center text-center relative transition-colors duration-300">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl text-gray-900 dark:text-white transition-colors duration-300">
          How To{" "}
          <span className="bg-gradient-to-r from-gray-700 to-black dark:from-gray-400 dark:to-white bg-clip-text text-transparent">
            Use
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-lg mx-auto">
          Get started in three simple steps — login, view tasks, and update progress.
        </p>
      </div>

      {/* Steps Section */}
      <div className="relative flex flex-col items-center space-y-12">
        {/* Vertical line with gradient glow */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-rose-600 via-gray-400 dark:from-rose-800 dark:via-gray-700 to-transparent"></div>

        {/* Step 1 */}
        <div className="relative flex flex-col items-center max-w-md text-left 
        bg-gradient-to-br from-gray-100 via-white to-gray-200 
        dark:from-black dark:via-[#1a1a1a] dark:to-slate-900 
        border border-gray-300 dark:border-white/10 p-6 rounded-2xl 
        shadow-lg hover:shadow-rose-500/20 dark:hover:shadow-rose-800/20 
        transition-all duration-300">
          <div className="absolute -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-rose-500 to-red-500 dark:from-rose-800 dark:to-red-600 flex items-center justify-center text-white font-semibold shadow-lg">
            1
          </div>
          <div className="flex items-center justify-center mb-3">
            <LogIn className="text-gray-700 dark:text-gray-400 w-6 h-6" />
          </div>
          <h3 className="text-gray-900 dark:text-white text-lg mb-1">Step 1: Login</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Access ZidioTask with your company credentials. Secure sign-in ensures
            only valid employees can use the system.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative flex flex-col items-center max-w-md text-left 
        bg-gradient-to-br from-gray-100 via-white to-gray-200 
        dark:from-black dark:via-[#1a1a1a] dark:to-slate-900 
        border border-gray-300 dark:border-white/10 p-6 rounded-2xl 
        shadow-lg hover:shadow-rose-500/20 dark:hover:shadow-rose-800/20 
        transition-all duration-300">
          <div className="absolute -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-rose-500 to-red-500 dark:from-rose-800 dark:to-red-600 flex items-center justify-center text-white font-semibold shadow-lg">
            2
          </div>
          <div className="flex items-center justify-center mb-3">
            <Eye className="text-gray-700 dark:text-gray-400 w-6 h-6" />
          </div>
          <h3 className="text-gray-900 dark:text-white text-lg mb-1">Step 2: View Tasks</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Check your assigned tasks on the dashboard. See deadlines, priorities,
            and progress in a clear visual layout.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative flex flex-col items-center max-w-md text-left 
        bg-gradient-to-br from-gray-100 via-white to-gray-200 
        dark:from-black dark:via-[#1a1a1a] dark:to-slate-900 
        border border-gray-300 dark:border-white/10 p-6 rounded-2xl 
        shadow-lg hover:shadow-rose-500/20 dark:hover:shadow-rose-800/20 
        transition-all duration-300">
          <div className="absolute -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-rose-500 to-red-500 dark:from-rose-800 dark:to-red-600 flex items-center justify-center text-white font-semibold shadow-lg">
            3
          </div>
          <div className="flex items-center justify-center mb-3">
            <RefreshCcw className="text-gray-700 dark:text-gray-400 w-6 h-6" />
          </div>
          <h3 className="text-gray-900 dark:text-white text-lg mb-1">Step 3: Update Progress</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Drag and update tasks across stages or mark them as complete. Keep
            managers and teams notified in real time.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowToUse;

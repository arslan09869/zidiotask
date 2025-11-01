'use client';
import React, { useState } from "react";
import {
  Plus,
  Minus,
  HelpCircle,
  Mail,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

function FAQandFooter() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      q: "Who can access Ziditask?",
      a: "Only Ziditask employees with valid company credentials can log in and use the system.",
    },
    {
      q: "How do I log in for the first time?",
      a: "Use your company-provided credentials to sign in securely for the first time.",
    },
    {
      q: "Can I see only my tasks?",
      a: "Yes, employees can view only their assigned tasks while managers can see team progress.",
    },
    {
      q: "Will I get notifications for updates?",
      a: "Ziditask sends real-time notifications when deadlines, comments, or updates occur.",
    },
    {
      q: "What should I do if something doesn’t work?",
      a: "You can contact our support team directly through the Help Center or email us.",
    },
  ];

  return (
    <div className="bg-white dark:bg-[#121212] text-gray-900 dark:text-white w-full overflow-hidden transition-colors duration-300">
      {/* ===== FAQ SECTION ===== */}
      <section className="px-4 sm:px-6 md:px-10 pb-10 flex flex-col items-center text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl">
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-gray-700 to-black dark:from-gray-400 dark:to-white bg-clip-text text-transparent">
            Questions
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3 mb-8 text-sm sm:text-base max-w-xl">
          Quick answers to common queries about using Ziditask.
        </p>

        {/* FAQ Accordion */}
        <div className="w-full max-w-3xl space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              onClick={() => setOpen(open === index ? null : index)}
              className={`rounded-xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                open === index
                  ? "bg-gradient-to-r from-rose-500 to-red-500 border-transparent shadow-lg"
                  : "bg-gray-100 dark:bg-[#1a1a1a] border-gray-300 dark:border-white/10 hover:border-rose-400/30"
              }`}
            >
              <div className="flex items-center justify-between p-3 sm:p-4">
                <h3 className="text-sm sm:text-base md:text-lg font-medium">
                  {item.q}
                </h3>
                {open === index ? (
                  <Minus className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </div>
              {open === index && (
                <div className="px-3 sm:px-4 pb-4 text-white dark:text-gray-100 text-sm sm:text-base leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===== SUPPORT SECTION ===== */}
      <section className="py-10 pb-6 sm:py-20 flex flex-col items-center text-center border-t border-gray-300 dark:border-white/10 px-4 sm:px-6">
        <h3 className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">
          Need Help?{" "}
          <span className="bg-gradient-to-r from-gray-700 to-black dark:from-gray-400 dark:to-white bg-clip-text text-transparent">
            We’re Here.
          </span>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-10 sm:mb-12 text-sm sm:text-base max-w-md">
          Find quick answers or reach out to our support team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full">
          {/* Help Center */}
          <div className="bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-black dark:via-[#1a1a1a] dark:to-slate-900 border border-gray-300 dark:border-white/10 p-5 sm:p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="text-gray-600 dark:text-gray-400 w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h4 className="text-gray-900 dark:text-gray-200 text-lg mb-2">
              Help Center
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-4">
              Find answers to common questions and technical articles.
            </p>
            <button className="px-4 sm:px-5 py-2 rounded-lg bg-gradient-to-r from-rose-500 to-rose-700 text-white text-sm hover:opacity-90 transition">
              Browse Articles
            </button>
          </div>

          {/* Contact Us */}
          <div className="bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-black dark:via-[#1a1a1a] dark:to-slate-900 border border-gray-300 dark:border-white/10 p-5 sm:p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center justify-center mb-4">
              <Mail className="text-gray-600 dark:text-gray-400 w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h4 className="text-gray-900 dark:text-gray-200 text-lg mb-2">
              Contact Us
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-4">
              Get in touch with our support team directly via email or chat.
            </p>
            <button className="px-4 sm:px-5 py-2 rounded-lg bg-gradient-to-r from-rose-500 to-rose-700 text-white text-sm hover:opacity-90 transition">
              Send a Message
            </button>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative bg-gray-100 dark:bg-[#0d0d0d] py-10 sm:py-12 px-4 sm:px-6 mt-10 border-t border-gray-300 dark:border-white/10 overflow-hidden transition-colors duration-300">
        {/* Watermark */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          <p className="text-6xl sm:text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Zidiotask
          </p>
        </div>

        {/* Footer Content */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 sm:gap-14">
          {/* Left */}
          <div className="flex-1 min-w-[200px]">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
              Zidiotask
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
              Level 5, Street View, NYC 2099
              <br /> support@ziditask.com
            </p>
            <div className="flex gap-4 justify-start">
              <Facebook className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-rose-500 cursor-pointer transition" />
              <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-rose-500 cursor-pointer transition" />
              <Instagram className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-rose-500 cursor-pointer transition" />
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 text-sm text-gray-700 dark:text-gray-400 w-full sm:w-auto">
            <div>
              <h4 className="text-gray-900 dark:text-white mb-3">About</h4>
              <ul className="space-y-1">
                <li>Company</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 dark:text-white mb-3">Resources</h4>
              <ul className="space-y-1">
                <li>Help Center</li>
                <li>Guides</li>
                <li>API Docs</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 dark:text-white mb-3">Legal</h4>
              <ul className="space-y-1">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center text-gray-500 dark:text-gray-500 text-xs sm:text-sm mt-8 sm:mt-10">
          © 2025 Zidiotask. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default FAQandFooter;

import React from "react";
import {
  LayoutDashboard,
  Users,
  Clock3,
  Shield,
  Briefcase,
  UserCheck,
} from "lucide-react";

function Features() {
  return (
    <div className="flex flex-col items-center justify-center sm:py-10 pt-0 pb-10 bg-transparent dark:bg-[#121212] px-4 transition-colors duration-300">
      {/* ===== FEATURES HEADING SECTION ===== */}
      <div className="text-center mb-12">
        <p className="text-gray-900 dark:text-gray-200 text-3xl md:text-4xl leading-snug">
          Powerful{" "}
          <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            Features
          </span>{" "}
          For <br />
          Seamless{" "}
          <span className="bg-gradient-to-r from-gray-600 to-gray-900 dark:from-gray-400 dark:to-white bg-clip-text text-transparent">
            Collaboration
          </span>
        </p>
        <p className="text-gray-600 dark:text-gray-400 mt-4">
          Work smarter together with tools that keep tasks clear and teams
          connected.
        </p>
      </div>

      {/* ===== FEATURE CARDS SECTION ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full sm:mb-20 mb-10">
        {/* CARD TEMPLATE */}
        {[
          {
            icon: <LayoutDashboard size={24} />,
            title: "Intuitive UI",
            desc: "Easily create, edit, and track tasks with customizable workflows.",
          },
          {
            icon: <Users size={24} />,
            title: "Team Collaboration",
            desc: "Share updates and progress across teams in real-time.",
          },
          {
            icon: <Clock3 size={24} />,
            title: "Deadline Tracking",
            desc: "Never miss deadlines with integrated reminders and updates.",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a1a1a] dark:to-[#2e2e2e] border border-gray-300 dark:border-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-md dark:shadow-lg hover:scale-[1.02] transition-transform duration-300 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-gray-700 to-gray-500 dark:from-white dark:to-gray-400 text-white dark:text-black">
              {card.icon}
            </div>
            <h3 className="text-gray-900 dark:text-white text-lg mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      {/* ===== FEATURES FOR ROLES SECTION ===== */}
      <div className="text-center mb-12">
        <p className="text-gray-900 dark:text-gray-200 text-3xl md:text-4xl leading-snug">
          Features For{" "}
          <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            Roles
          </span>
        </p>
        <p className="text-gray-600 dark:text-gray-400 mt-4">
          Tailored views and controls for employees, managers, and admins alike.
        </p>
      </div>

      {/* ===== ROLE CARDS SECTION ===== */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl w-full">
        {[
          {
            icon: <Shield size={24} />,
            title: "Admins",
            desc: "Monitor employee progress, assign roles, and manage permissions efficiently.",
          },
          {
            icon: <Briefcase size={24} />,
            title: "Managers",
            desc: "Track project status, approve tasks, and ensure alignment with goals.",
          },
          {
            icon: <UserCheck size={24} />,
            title: "Employees",
            desc: "Manage daily tasks, view assigned projects, and track your productivity.",
          },
        ].map((role, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a1a1a] dark:to-[#2e2e2e] border border-gray-300 dark:border-white/10 rounded-2xl p-6 w-full md:w-1/3 text-center hover:scale-[1.02] transition-transform duration-300 shadow-md dark:shadow-lg"
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-gray-700 to-gray-500 dark:from-white dark:to-gray-400 text-white dark:text-black">
                {role.icon}
              </div>
            </div>
            <h3 className="text-gray-900 dark:text-white text-lg mb-2">
              {role.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {role.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;

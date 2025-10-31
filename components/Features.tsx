import React from "react";
import { LayoutDashboard, Users, Clock3, Shield, Briefcase, UserCheck } from "lucide-react";

function Features() {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-[#121212] px-4">
      {/* ===== FEATURES HEADING SECTION ===== */}
      <div className="text-center mb-12">
        <p className="text-gray-200 text-3xl md:text-4xl leading-snug">
          Powerful{" "}
          <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Features
          </span>{" "}
          For <br />
          Seamless{" "}
          <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
            Collaboration
          </span>
        </p>
        <p className="text-gray-400 mt-4">
          Work smarter together with tools that keep tasks clear and teams
          connected.
        </p>
      </div>

      {/* <img src="/cta-2.png" alt="cta-2" /> */}

      {/* ===== FEATURE CARDS SECTION ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mb-20">
        {/* CARD 1 */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2e2e2e] border border-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 text-center">
          <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-white to-gray-400 text-black">
            <LayoutDashboard size={24} />
          </div>
          <h3 className="text-white text-lg mb-2">
            Intuitive UI
          </h3>
          <p className="text-gray-400 text-sm">
            Easily create, edit, and track tasks with customizable workflows.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2e2e2e] border border-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 text-center">
          <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-white to-gray-400 text-black">
            <Users size={24} />
          </div>
          <h3 className="text-white text-lg mb-2">
            Team Collaboration
          </h3>
          <p className="text-gray-400 text-sm">
            Share updates and progress across teams in real-time.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2e2e2e] border border-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 text-center">
          <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-white to-gray-400 text-black">
            <Clock3 size={24} />
          </div>
          <h3 className="text-white text-lg mb-2">
            Deadline Tracking
          </h3>
          <p className="text-gray-400 text-sm">
            Never miss deadlines with integrated reminders and updates.
          </p>
        </div>
      </div>

      {/* ===== FEATURES FOR ROLES SECTION ===== */}
      <div className="text-center mb-12">
        <p className="text-gray-200 text-3xl md:text-4xl leading-snug">
          Features For{" "}
          <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Roles
          </span>
        </p>
        <p className="text-gray-400 mt-4">
          Tailored views and controls for employees, managers, and admins alike.
        </p>
      </div>

      {/* ===== ROLE CARDS SECTION ===== */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl w-full">
        {/* ADMINS CARD */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2e2e2e] border border-white/10 rounded-2xl p-6 w-full md:w-1/3 text-center hover:scale-[1.02] transition-transform duration-300 shadow-lg">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-white to-gray-400 text-black">
              <Shield size={24} />
            </div>
          </div>
          <h3 className="text-white text-lg mb-2">Admins</h3>
          <p className="text-gray-400 text-sm">
            Monitor employee progress, assign roles, and manage permissions
            efficiently.
          </p>
        </div>

        {/* MANAGERS CARD */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2e2e2e] border border-white/10 rounded-2xl p-6 w-full md:w-1/3 text-center hover:scale-[1.02] transition-transform duration-300 shadow-lg">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-white to-gray-400 text-black">
              <Briefcase size={24} />
            </div>
          </div>
          <h3 className="text-white text-lg mb-2">Managers</h3>
          <p className="text-gray-400 text-sm">
            Track project status, approve tasks, and ensure alignment with goals.
          </p>
        </div>

        {/* EMPLOYEES CARD */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2e2e2e] border border-white/10 rounded-2xl p-6 w-full md:w-1/3 text-center hover:scale-[1.02] transition-transform duration-300 shadow-lg">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-white to-gray-400 text-black">
              <UserCheck size={24} />
            </div>
          </div>
          <h3 className="text-white text-lg mb-2">Employees</h3>
          <p className="text-gray-400 text-sm">
            Manage daily tasks, view assigned projects, and track your
            productivity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;

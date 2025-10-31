import { Settings, BarChart3, CheckCircle2 } from "lucide-react";
import React from "react";

const FeaturesForRoles = () => {
  const roles = [
    {
      title: "Admins",
      icon: Settings,
      description:
        "Manage system settings, monitor analytics, and handle employee access.",
      glowColor: "hsl(28, 100%, 60%)", // Orange Glow
      position: "z-30 -rotate-6 translate-x-[-80px]",
    },
    {
      title: "Managers",
      icon: BarChart3,
      description:
        "Assign tasks, oversee team performance, and keep projects on track.",
      glowColor: "hsl(270, 70%, 60%)", // Purple Glow
      position: "z-20 translate-x-0",
    },
    {
      title: "Employees",
      icon: CheckCircle2,
      description:
        "Stay organized with assigned task updates and move requests.",
      glowColor: "hsl(142, 71%, 45%)", // Green Glow
      position: "z-10 rotate-6 translate-x-[80px]",
    },
  ];

  return (
    <section className="relative bg-[#121212] py-20 px-6 overflow-hidden">
      {/* Gradient background glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,hsl(28,100%,60%)/0.1_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,hsl(270,70%,60%)/0.1_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,hsl(142,71%,45%)/0.1_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light mb-4 text-white">
            Features For <span className="font-bold">Roles</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Tailored views and controls for employees, managers, and admins alike.
          </p>
        </div>

        {/* Side-by-side overlapped cards */}
        <div className="relative flex justify-center items-center gap-0 mt-12">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <div
                key={role.title}
                className={`relative w-full max-w-xs ${role.position} transition-all duration-500 hover:scale-105 hover:rotate-0 hover:z-40 group`}
              >
                <div
                  className="relative backdrop-blur-md bg-[#1e1e1e]/60 border rounded-3xl p-8 transition-all duration-500"
                  style={{
                    borderColor: `${role.glowColor}20`,
                    boxShadow: `0 0 40px ${role.glowColor}15, inset 0 0 60px ${role.glowColor}05`,
                  }}
                >
                  {/* Glow overlay on hover */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${role.glowColor}15 0%, transparent 70%)`,
                    }}
                  />

                  {/* Icon */}
                  <div className="relative mb-6 flex justify-center">
                    <div
                      className="relative w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500"
                      style={{
                        backgroundColor: `${role.glowColor}20`,
                        boxShadow: `0 0 30px ${role.glowColor}40`,
                      }}
                    >
                      <Icon
                        className="w-10 h-10 transition-transform duration-500 group-hover:scale-110"
                        style={{ color: role.glowColor }}
                      />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="relative text-center">
                    <h3 className="text-3xl font-semibold mb-4 text-white">
                      {role.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesForRoles;

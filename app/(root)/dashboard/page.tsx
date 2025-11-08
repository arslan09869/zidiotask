"use client";
import { Sun, Moon } from "lucide-react";
import AppleActivityCard from "@/components/kokonutui/apple-activity-card";
import TasksList from "@/components/TaskList";
import ProjectsCard from "@/components/ProjectList";
import TeamCard from "@/components/TeamMembersList";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex-1 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300 sm:p-8 p-3 overflow-y-auto">

      {/* Header  */}
      <div className="flex justify-between items-center sm:mb-8 mb-4">
        <h1 className="text-xl text-gray-900 dark:text-gray-200">
          Dashboard
        </h1>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 sm:gap-8 gap-4">

        {/* Column 1 */}
        <div className="sm:space-y-8 space-y-4">
          <AppleActivityCard />
          <TasksList />
        </div>

        {/* Column 2 */}
        <div className="sm:space-y-8 space-y-4">
          <ProjectsCard />
          <TeamCard />
        </div>

      </div>
    </div>
  );
}

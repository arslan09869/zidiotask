"use client";
import { FC } from "react";
import { CalendarDays, FolderKanban } from "lucide-react";

interface Project {
  id: number;
  title: string;
  status: "Ongoing" | "Upcoming" | "Completed";
  progress: number;
  due: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Mobile App Redesign",
    status: "Ongoing",
    progress: 64,
    due: "Sep 23",
  },
  {
    id: 2,
    title: "Website Dashboard UI",
    status: "Upcoming",
    progress: 20,
    due: "Oct 01",
  },
];

const ProjectsCard: FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-100 via-white to-gray-200
      dark:from-black dark:via-[#1a1a1a] dark:to-slate-900
      border border-gray-300 dark:border-white/10
      shadow-lg hover:shadow-rose-500/20 dark:hover:shadow-rose-800/20
      transition-all duration-300 p-6 rounded-2xl w-full max-w-lg">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-gray-900 dark:text-white text-lg">
          Projects
        </h2>
        <FolderKanban className="text-gray-700 dark:text-gray-400 w-5 h-5" />
      </div>

      <div className="space-y-5">
        {projects.map((project) => (
          <div key={project.id}>
            {/* Project Title + Due */}
            <div className="flex justify-between mb-1">
              <p className="font-medium text-sm text-gray-900 dark:text-gray-200">
                {project.title}
              </p>
              <span className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1">
                <CalendarDays className="size-3" /> {project.due}
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2 rounded-full bg-gray-300 dark:bg-neutral-700 overflow-hidden">
              <div
                className="h-full bg-rose-600 dark:bg-rose-700 rounded-full"
                style={{ width: `${project.progress}%` }}
              />
            </div>

            {/* Tag */}
            <span className="mt-1 inline-block text-[10px] font-medium px-2 py-1 rounded-full
              bg-gray-100 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700
              text-gray-600 dark:text-gray-300">
              {project.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsCard;

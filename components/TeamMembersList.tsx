"use client";
import Image from "next/image";
import { Plus } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Thomas",
    email: "Thomas@gmail.com",
    avatar: "/avatar.png",
  },
  {
    id: 2,
    name: "Emily",
    email: "Emily@gmail.com",
    avatar: "/avatar.png",
  },
  {
    id: 3,
    name: "James",
    email: "James@gmail.com",
    avatar: "/avatar.png",
  },
  {
    id: 4,
    name: "Tudo",
    email: "Tudo@gmail.com",
    avatar: "/avatar.png",
  },
];

export default function TeamMembersCard() {
  return (
    <section
      className="bg-gradient-to-br from-gray-100 via-white to-gray-200
      dark:from-black dark:via-[#1a1a1a] dark:to-slate-900
      border border-gray-300 dark:border-white/10
      shadow-lg hover:shadow-rose-500/20 dark:hover:shadow-rose-800/20
      transition-all duration-300 p-6 rounded-2xl w-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-gray-900 dark:text-white text-lg font-medium">
          Team Members{" "}
          <span className="text-rose-600 dark:text-rose-400">
            ({teamMembers.length})
          </span>
        </h2>

        <button
          className="px-3 py-1 text-xs font-medium rounded-md
          bg-rose-600 text-white hover:bg-rose-700 transition"
        >
          Add Member
        </button>
      </div>

      {/* Scroll Members */}
      <div className="flex items-center gap-4 overflow-x-auto hide-scrollbar pb-2">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="min-w-[120px] bg-gray-200/60 dark:bg-neutral-900/30 border-2
            border-dashed border-gray-300 dark:border-white/50 
            rounded-xl p-4 
            flex flex-col items-center justify-center
            hover:border-rose-500/40 hover:bg-gray-200/80 dark:hover:bg-neutral-800/60
            transition duration-200"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-400 dark:border-white/20 mb-2">
              <Image
                src={member.avatar}
                alt={member.name}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>

            <p className="text-sm text-gray-900 dark:text-white font-medium">
              {member.name}
            </p>

            <p className="text-[10px] text-gray-500 dark:text-gray-400 truncate max-w-[100px] text-center">
              {member.email}
            </p>
          </div>
        ))}

        {/* Add Member */}
        <button
          className="min-w-[120px] h-[100px] rounded-xl 
          bg-gray-200/60 dark:bg-neutral-900/30
          border-2 border-dashed border-gray-300 dark:border-white/50 
          flex flex-col items-center justify-center
          text-gray-600 dark:text-gray-400
          hover:border-rose-500/40 hover:text-rose-500
          transition duration-200"
        >
          <Plus className="size-6" />
          <span className="text-[11px] mt-1">Add</span>
        </button>
      </div>
    </section>
  );
}

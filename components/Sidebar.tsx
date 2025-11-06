"use client";

import {
  ChevronFirst,
  ChevronLast,
  ChevronDown,
  ChevronRight,
  MoreVertical,
  LayoutDashboard,
  Calendar,
  Layers,
  Flag,
  LifeBuoy,
  Settings,
  Bell,
  Inbox,
  Folder,
} from "lucide-react";
import React, { useState } from "react";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const [openProjects, setOpenProjects] = useState(false);

  return (
    <aside className="h-screen overflow-hidden">
      <nav
        className={`h-full flex flex-col
        bg-gradient-to-b from-rose-50 via-white to-rose-100
        dark:from-[#0b0b0b] dark:via-[#121212] dark:to-[#181818]
        border-r border-rose-200 dark:border-[#1a1a1a]
        shadow-lg text-gray-700 dark:text-gray-300
        transition-all duration-300`}
      >
        {/* ---------- Top Section ---------- */}
        <div className="p-4 pb-2 flex justify-between items-center border-b border-rose-200 dark:border-[#1a1a1a]">
          <img
            src="/icon.png"
            alt="logo"
            className={`overflow-hidden transition-all ${
              expanded ? "w-12" : "w-0"
            }`}
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gradient-to-r from-rose-400 to-rose-600 
            dark:from-rose-700 dark:to-rose-900 
            text-white hover:opacity-90 transition"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        {/* ---------- Sidebar Items ---------- */}
        <ul className="flex-1 px-3 py-4 space-y-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            active
            expanded={expanded}
          />
          <SidebarItem
            icon={<Calendar size={20} />}
            text="Calendar"
            expanded={expanded}
          />
          <SidebarItem
            icon={<Layers size={20} />}
            text="Tasks"
            expanded={expanded}
          />
          <SidebarItem
            icon={<Bell size={20} />}
            text="Notifications"
            alert
            expanded={expanded}
          />
          <SidebarItem
            icon={<Inbox size={20} />}
            text="Inbox"
            expanded={expanded}
          />

          {/* -------- Collapsible Projects -------- */}
          <li>
            <button
              onClick={() => setOpenProjects((prev) => !prev)}
              className={`flex items-center justify-between w-full px-3 py-2 rounded-lg cursor-pointer 
              hover:bg-gradient-to-r hover:from-rose-500 hover:to-red-900 
              dark:hover:from-rose-800 dark:hover:to-red-700
              text-gray-700 dark:text-gray-100 hover:text-white
              transition-all ${expanded ? "" : "justify-center"}`}
            >
              <div className="flex items-center gap-3">
                <Folder size={20} />
                {expanded && <span>Projects</span>}
              </div>
              {expanded &&
                (openProjects ? (
                  <ChevronDown
                    size={16}
                    className="text-gray-500 dark:text-gray-400"
                  />
                ) : (
                  <ChevronRight
                    size={16}
                    className="text-gray-500 dark:text-gray-400"
                  />
                ))}
            </button>

            {openProjects && (
              <ul
                className={`relative mt-2 space-y-1 text-sm transition-all duration-300 ${
                  expanded ? "pl-11" : "pl-0"
                }`}
              >
                {expanded && (
                  <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-black via-gray-500 dark:from-rose-100 dark:via-gray-700 to-transparent" />
                )}
                {expanded &&
                  [
                    "Design System",
                    "Mobile App",
                    "Website Design",
                    "Design Team",
                  ].map((project, i) => (
                    <li
                      key={i}
                      className="relative flex items-center gap-2 pl-4 cursor-pointer 
                      text-gray-700 dark:text-gray-200 
                      hover:text-gray-900 dark:hover:text-rose-100
                      hover:translate-x-1 transition-all duration-300"
                    >
                      {/* <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-rose-500 to-red-500 dark:from-rose-800 dark:to-red-600" /> */}
                      {project}
                    </li>
                  ))}
              </ul>
            )}
          </li>

          <SidebarItem
            icon={<Flag size={20} />}
            text="Reporting"
            expanded={expanded}
          />

          <hr className="my-3 border-rose-200 dark:border-[#1a1a1a]" />

          <SidebarItem
            icon={<Settings size={20} />}
            text="Settings"
            expanded={expanded}
          />
          <SidebarItem
            icon={<LifeBuoy size={20} />}
            text="Help"
            expanded={expanded}
          />
        </ul>

        {/* ---------- User Section ---------- */}
        <div className="border-t border-rose-200 dark:border-[#1a1a1a] flex p-3 items-center">
          <img
            src="/icon.png"
            alt="user"
            className="w-10 h-10 rounded-md border border-rose-300 dark:border-[#2a2a2a]"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all duration-300 ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="text-gray-900 dark:text-white font-medium">
                ConstGenius
              </h4>
              <span className="text-xs text-gray-600 dark:text-gray-500">
                constgenius@gmail.com
              </span>
            </div>
            <MoreVertical
              size={20}
              className="text-gray-500 dark:text-gray-400"
            />
          </div>
        </div>
      </nav>
    </aside>
  );
}

/* ---------------- SidebarItem ---------------- */
function SidebarItem({
  icon,
  text,
  active,
  alert,
  expanded,
}: {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
  expanded: boolean;
}) {
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-xl cursor-pointer transition-all group 
        ${
          active
            ? "bg-gradient-to-r from-rose-500 to-red-500 text-white shadow-md dark:shadow-rose-800/20"
            : "hover:bg-gradient-to-r hover:from-rose-500 hover:to-red-900 text-gray-600 dark:text-gray-100 hover:text-white"
        }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all duration-300 ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>

      {/* {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded-full bg-green-500 dark:bg-[#00ff88] ${
            expanded ? "" : "top-2"
          }`}
        ></div>
      )} */}

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-3 
          bg-gradient-to-r from-rose-600 to-red-600 text-white text-sm invisible opacity-0 -translate-x-3 
          transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}

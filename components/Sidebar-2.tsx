"use client";

import {
  ChevronFirst,
  ChevronLast,
  ChevronDown,
  ChevronRight,
  MoreVertical,
  Folder,
} from "lucide-react";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Context Type
interface SidebarContextType {
  expanded: boolean;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Props
interface SidebarProps {
  children?: ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  const [expanded, setExpanded] = useState(true);
  const [openProjects, setOpenProjects] = useState(true);

  return (
    <aside className="h-screen overflow-hidden">
      <nav className="h-full flex flex-col bg-[#0b0b0b] border-r border-[#1a1a1a] shadow-lg text-gray-300 transition-all duration-300">
        {/* ---------- Top Section ---------- */}
        <div className="p-4 pb-2 flex justify-between items-center border-b border-[#1a1a1a]">
          <img
            src="/icon.png"
            alt="logo"
            className={`overflow-hidden transition-all ${expanded ? "w-12" : "w-0"}`}
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-[#141414] hover:bg-[#1c1c1c] text-gray-300"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        {/* ---------- Sidebar Menu ---------- */}
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 py-4 space-y-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
            {children}

            {/* ---------- Collapsible Projects ---------- */}
            <li className="mt-3">
              <button
                onClick={() => setOpenProjects((prev) => !prev)}
                className={`flex items-center justify-between w-full px-3 py-2 rounded-lg cursor-pointer hover:bg-[#161616] transition-all ${
                  expanded ? "" : "justify-center"
                }`}
              >
                <div className="flex items-center gap-3 text-gray-300">
                  <Folder size={20} />
                  {expanded && <span>Projects</span>}
                </div>

                {expanded &&
                  (openProjects ? (
                    <ChevronDown size={16} className="text-gray-400" />
                  ) : (
                    <ChevronRight size={16} className="text-gray-400" />
                  ))}
              </button>

              {/* Sub-project list with vertical line */}
              {openProjects && (
                <ul
                  className={`relative mt-2 space-y-1 text-sm text-gray-400 transition-all duration-300 ${
                    expanded ? "pl-11" : "pl-0"
                  }`}
                >
                  {expanded && (
                    <div className="absolute left-5 top-0 bottom-0 w-px bg-[#2c2c2c]" />
                  )}
                  {[
                    "Design System",
                    "Mobile App",
                    "Website Design",
                    "Design Team",
                  ].map((project, i) => (
                    <li
                      key={i}
                      className="relative flex items-center gap-2 pl-4 cursor-pointer group"
                    >
                      {/* Dot connector */}
                      {/* <span className="w-2 h-2 rounded-full bg-[#00ff88] group-hover:bg-[#00ffcc] transition-all" /> */}
                      <span className="hover:text-[#e6ffe6]">{project}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </SidebarContext.Provider>

        {/* ---------- User Section ---------- */}
        <div className="border-t border-[#1a1a1a] flex p-3 items-center">
          <img
            src="/icon.png"
            alt="user"
            className="w-10 h-10 rounded-md border border-[#2a2a2a]"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all duration-300 ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="text-white">ConstGenius</h4>
              <span className="text-xs text-gray-500">constgenius@gmail.com</span>
            </div>
            <MoreVertical size={20} className="text-gray-500" />
          </div>
        </div>
      </nav>
    </aside>
  );
}

/* ---------------- SidebarItem ---------------- */
interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
}

export function SidebarItem({
  icon,
  text,
  active,
  alert,
}: SidebarItemProps) {
  const context = useContext(SidebarContext);
  if (!context) throw new Error("SidebarItem must be used within Sidebar");

  const { expanded } = context;

  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-xl cursor-pointer transition-all group 
        ${
          active
            ? "bg-[#161616] text-white"
            : "hover:bg-[#141414] text-gray-400 hover:text-white"
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

      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded-full bg-[#00ff88] ${
            expanded ? "" : "top-2"
          }`}
        ></div>
      )}

      {/* Tooltip on collapse */}
      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-3 bg-[#161616] text-white text-sm invisible opacity-0 -translate-x-3 transition-all
           group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}

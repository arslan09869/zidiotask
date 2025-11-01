"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  LayoutDashboard,
  LayoutList,
  Users,
  Settings,
  Sun,
  Moon,
} from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Home", icon: <LayoutDashboard size={18} />, href: "/" },
  { id: "boards", label: "Boards", icon: <LayoutList size={18} />, href: "/" },
  { id: "teams", label: "Teams", icon: <Users size={18} />, href: "/" },
  { id: "settings", label: "Settings", icon: <Settings size={18} />, href: "/" },
];

export default function FloatingNav() {
  const [active, setActive] = useState("dashboard");
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 border backdrop-blur-2xl rounded-full py-2 px-4 transition-all duration-500
        ${
          isDark
            ? "bg-black/40 border-white/15 shadow-[0_8px_32px_rgba(255,255,255,0.1)]"
            : "bg-white/80 border-gray-200 shadow-[0_4px_25px_rgba(0,0,0,0.08)]"
        }`}
    >
      {/* Navigation Links */}
      {navItems.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          onClick={() => setActive(item.id)}
          className={`relative cursor-pointer flex items-center gap-2 text-sm px-5 py-2 rounded-full transition-all duration-500 ${
            active === item.id
              ? isDark
                ? "text-white drop-shadow-[0_0_6px_oklch(0.63_0.25_21.06)]"
                : "text-black drop-shadow-[0_0_6px_oklch(0.63_0.25_21.06)]"
              : isDark
              ? "text-gray-300 hover:text-white"
              : "text-gray-700 hover:text-black"
          }`}
        >
          <span className="sm:hidden">{item.icon}</span>
          <span className="hidden sm:inline">{item.label}</span>

          {/* Background for active tab */}
          {active === item.id && (
            <motion.div
              layoutId="activeIndicator"
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`absolute inset-0 rounded-full backdrop-blur-3xl border -z-10 ${
                isDark
                  ? "bg-white/[0.08] border-white/15"
                  : "bg-gray-200/60 border-gray-300/40"
              }`}
            />
          )}

          {/* Glow indicator (same color in both modes) */}
          {active === item.id && (
            <motion.div
              layoutId="glowIndicator"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
                duration: 0.8,
              }}
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-9 h-[0.25rem] bg-[oklch(0.63_0.25_21.06)] rounded-t-full shadow-[0_0_25px_oklch(0.63_0.25_21.06)]"
            >
              <div className="absolute w-12 h-6 bg-[oklch(0.63_0.25_21.06)/0.4] rounded-full blur-3xl -top-2 -left-2 animate-soft-glow"></div>
              <div className="absolute w-8 h-6 bg-[oklch(0.63_0.25_21.06)/0.3] rounded-full blur-xl -top-1 animate-soft-glow"></div>
              <div className="absolute w-4 h-4 bg-[oklch(0.63_0.25_21.06)/0.2] rounded-full blur-lg top-0 left-2 animate-soft-glow"></div>
            </motion.div>
          )}
        </Link>
      ))}

      {/* 🌞🌙 Theme Toggle */}
      <div className="relative flex items-center justify-center sm:gap-2">
        {/* Desktop buttons */}
        <button
          onClick={() => setTheme("light")}
          className={`hidden sm:block p-2 rounded-full transition-all duration-300 ${
            theme === "light"
              ? "bg-black/10"
              : "hover:bg-black/10"
          }`}
        >
          <Sun size={18} className={isDark ? "text-gray-100" : "text-gray-800"} />
        </button>

        <button
          onClick={() => setTheme("dark")}
          className={`hidden sm:block p-2 rounded-full transition-all duration-300 ${
            theme === "dark"
              ? "bg-white/20"
              : "hover:bg-black/10"
          }`}
        >
          <Moon size={18} className={isDark ? "text-gray-100" : "text-gray-800"} />
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="sm:hidden p-2 rounded-full transition-all duration-300 hover:bg-black/10"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isDark ? (
              <motion.div
                key="moon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Moon size={18} className="text-gray-100" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Sun size={18} className="text-gray-800" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}

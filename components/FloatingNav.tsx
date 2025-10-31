"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  LayoutDashboard,
  LayoutList,
  Users,
  Settings,
} from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Home", icon: <LayoutDashboard size={18} />, href: "/" },
  { id: "boards", label: "Boards", icon: <LayoutList size={18} />, href: "/" },
  { id: "teams", label: "Teams", icon: <Users size={18} />, href: "/" },
  { id: "settings", label: "Settings", icon: <Settings size={18} />, href: "/" },
];

export default function FloatingNav() {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-white/[0.08] border border-white/[0.15] backdrop-blur-2xl rounded-full py-2 px-4 shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-500">
      {navItems.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          onClick={() => setActive(item.id)}
          className={`relative cursor-pointer flex items-center gap-2 text-sm px-5 py-2 rounded-full transition-all duration-500 ${
            active === item.id
              ? "text-white drop-shadow-[0_0_6px_oklch(0.63_0.25_21.06)]"
              : "text-white hover:text-white"
          }`}
        >
          {/* 📱 Icon for mobile / 🖥️ Text for desktop */}
          <span className="sm:hidden">{item.icon}</span>
          <span className="hidden sm:inline">{item.label}</span>

          {/* 🌫️ Active glass effect */}
          {active === item.id && (
            <motion.div
              layoutId="activeIndicator"
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute inset-0 rounded-full bg-white/[0.1] backdrop-blur-3xl border border-white/20 shadow-[inset_0_0_10px_rgba(255,255,255,0.2)] -z-10"
            />
          )}

          {/* ✨ Smooth glowing line */}
          {active === item.id && (
            <motion.div
              layoutId="glowIndicator"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 30, duration: 0.8 }}
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-9 h-[0.25rem] bg-[oklch(0.63_0.25_21.06)] rounded-t-full shadow-[0_0_25px_oklch(0.63_0.25_21.06)]"
            >
              {/* Glow layers for depth */}
              <div className="absolute w-12 h-6 bg-[oklch(0.63_0.25_21.06)/0.4] rounded-full blur-3xl -top-2 -left-2 animate-soft-glow"></div>
              <div className="absolute w-8 h-6 bg-[oklch(0.63_0.25_21.06)/0.3] rounded-full blur-xl -top-1 animate-soft-glow"></div>
              <div className="absolute w-4 h-4 bg-[oklch(0.63_0.25_21.06)/0.2] rounded-full blur-lg top-0 left-2 animate-soft-glow"></div>
            </motion.div>
          )}
        </Link>
      ))}
    </div>
  );
}

"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ActivityData {
  label: string;
  value: number;
  color: string;
  size: number;
  current: number;
  target: number;
  unit: string;
}

interface CircleProgressProps {
  data: ActivityData;
  index: number;
}

const activities: ActivityData[] = [
  {
    label: "COMPLETED",
    value: 75,
    color: "#22c55e",
    size: 180,
    current: 75,
    target: 100,
    unit: "%",
  },
  {
    label: "IN PROGRESS",
    value: 45,
    color: "#eab308",
    size: 140,
    current: 45,
    target: 100,
    unit: "%",
  },
  {
    label: "PENDING",
    value: 20,
    color: "#ef4444",
    size: 100,
    current: 20,
    target: 100,
    unit: "%",
  },
];

const CircleProgress = ({ data, index }: CircleProgressProps) => {
  const strokeWidth = 16;
  const radius = (data.size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = ((100 - data.value) / 100) * circumference;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
    >
      <svg
        width={data.size}
        height={data.size}
        viewBox={`0 0 ${data.size} ${data.size}`}
        className="transform -rotate-90"
      >
        <circle
          cx={data.size / 2}
          cy={data.size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className="text-gray-300 dark:text-neutral-700"
          stroke="currentColor"
        />

        <motion.circle
          cx={data.size / 2}
          cy={data.size / 2}
          r={radius}
          fill="none"
          stroke={data.color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: progress }}
          transition={{
            duration: 1.6,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
};

const DetailedActivityInfo = () => (
  <div className="flex flex-col gap-6 text-center md:text-left">
    {activities.map((activity) => (
      <div key={activity.label}>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {activity.label}
        </span>

        <span
          className="text-xl font-semibold ml-2"
          style={{ color: activity.color }}
        >
          {activity.current}/{activity.target}
          <span className="text-sm ml-1 text-gray-600 dark:text-gray-400">
            {activity.unit}
          </span>
        </span>
      </div>
    ))}
  </div>
);

export default function AppleActivityCard({
  title = "Task Progress Overview",
  className,
}: {
  title?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full mx-auto p-6 md:p-6 rounded-3xl",
        "bg-gradient-to-br from-gray-100 via-white to-gray-200",
        "dark:from-black dark:via-[#1a1a1a] dark:to-slate-900",
        "border border-gray-300 dark:border-white/10",
        "shadow-lg hover:shadow-rose-500/20 dark:hover:shadow-rose-800/20",
        "transition-all duration-300 text-gray-900 dark:text-white",
        className
      )}
    >
      <motion.h2
        className="sm:text-xl mb-6 text-center md:text-left"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {/* Responsive Layout */}
      <div className="flex flex-col md:flex-row items-center gap-10 justify-center md:justify-start">
        <div className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px]">
          {activities.map((activity, index) => (
            <CircleProgress key={activity.label} data={activity} index={index} />
          ))}
        </div>

        <DetailedActivityInfo />
      </div>
    </div>
  );
}

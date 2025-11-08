"use client";
import { FC, useState } from "react";
import { CheckCircle2, Circle, Plus, Calendar } from "lucide-react";

type Tag = "Today" | "Meeting" | "To-do" | "Important" | "Yesterday";

interface Task {
  id: number;
  title: string;
  info: string;
  tags: Tag[];
  dueDate: string;
  assignedDate: string;
  completed?: boolean;
}

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Text Inputs for Design System",
    info: "Search for inspiration to provide a rich content layout",
    tags: ["Today", "To-do"],
    dueDate: "Aug 04",
    assignedDate: "Aug 02",
  },
  {
    id: 2,
    title: "Meeting with Arthur Taylor",
    info: "Discuss the MVP version of Apex Mobile and…",
    tags: ["Today", "Meeting"],
    dueDate: "Aug 04",
    assignedDate: "Aug 03",
  },
  {
    id: 3,
    title: "Check neutral and state colors",
    info: "Button components will be revised and design…",
    tags: ["Yesterday", "Important"],
    dueDate: "Aug 03",
    assignedDate: "Aug 01",
  },
];

const TagStyles: Record<Tag, string> = {
  Today:
    "bg-gray-100 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-gray-200",
  Meeting:
    "bg-gray-100 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 text-blue-700 dark:text-blue-300",
  "To-do":
    "bg-gray-100 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 text-gray-800 dark:text-gray-300",
  Important:
    "bg-gray-100 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 text-red-700 dark:text-red-300",
  Yesterday:
    "bg-gray-100 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 text-yellow-700 dark:text-yellow-300",
};


const TasksList: FC = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleComplete = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <section className="w-full max-w-lg">
  <div className="
    bg-gradient-to-br from-gray-100 via-white to-gray-200
    dark:from-black dark:via-[#1a1a1a] dark:to-slate-900
    border border-gray-300 dark:border-white/10
    shadow-lg hover:shadow-rose-500/20 dark:hover:shadow-rose-800/20
    transition-all duration-300 p-6 rounded-2xl">

        {/* Header */}
        <div className="flex items-center justify-between mb-3 border-b border-gray-200 dark:border-gray-800 pb-2">
          <h2 className="text-lg text-gray-900 dark:text-white flex items-center gap-2">
            My Tasks
          </h2>

          <button
            className="flex items-center gap-2 text-sm px-4 py-2 rounded-xl 
          bg-white dark:bg-black/40 border 
          border-gray-300 dark:border-gray-700 transition-all"
          >
            <Plus size={16} /> Add Task
          </button>
        </div>
        {tasks.map((task, i) => (
          <div
            key={task.id}
            className={`py-4 flex justify-between items-start gap-3 ${
              i !== tasks.length - 1 &&
              "border-b border-gray-200 dark:border-gray-800"
            }`}
          >
            {/* Left */}
            <div className="flex items-start gap-3">
              <button onClick={() => toggleComplete(task.id)}>
                {task.completed ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-400" />
                )}
              </button>

              <div>
                <h3
                  className={`font-medium text-gray-900 dark:text-white ${
                    task.completed ? "line-through opacity-60" : ""
                  }`}
                >
                  {task.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {task.info}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {task.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-medium px-3 py-0.5 rounded-full ${TagStyles[tag]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Dates */}
            <div className="flex flex-col items-end text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar size={14} /> {task.dueDate}
              </span>
              <span className="opacity-70 mt-1">
                Assigned: {task.assignedDate}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TasksList;

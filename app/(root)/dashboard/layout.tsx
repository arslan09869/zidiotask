// import Sidebar, { SidebarItem } from "@/components/Sidebar";
import Sidebar from "@/components/Sidebar";
import {
  LayoutDashboard,
  Home,
  StickyNote,
  Layers,
  Flag,
  Calendar,
  LifeBuoy,
  Settings,
  Bell,
  Inbox,
} from "lucide-react";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      {/* <Sidebar>
        <SidebarItem icon={<Home size={20} />} text="Home" alert />
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          active
        />
        <SidebarItem icon={<StickyNote size={20} />} text="Projects" alert />
        <SidebarItem icon={<Calendar size={20} />} text="Calendar" />
        <SidebarItem icon={<Layers size={20} />} text="Tasks" />
        <SidebarItem icon={<Bell size={20} />} text="Notifications" alert />
        <SidebarItem icon={<Inbox size={20} />} text="Inbox" />
        <SidebarItem icon={<Flag size={20} />} text="Reporting" />
        <hr className="my-3" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
      </Sidebar> */}
      <Sidebar />
      {children}
    </div>
  );
}

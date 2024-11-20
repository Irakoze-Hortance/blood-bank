"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Hospital, CalendarRange, User } from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Hospital, label: "Hospital" },
  { icon: CalendarRange, label: "Appointment" },
  { icon: User, label: "Profile" },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen p-4">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-center space-x-3 p-3 rounded-lg mb-2 cursor-pointer ${
            item.active
              ? "bg-red-50 text-red-500"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <item.icon size={24} />
          <span>{item.label}</span>
        </div>
      ))}
      <div className="mt-auto pt-4">
        <button className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
          Log Out
        </button>
      </div>
    </div>
  );
}

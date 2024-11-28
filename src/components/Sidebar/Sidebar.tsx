"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Hospital, CalendarRange, User } from "lucide-react";
import { logout } from "@/services/auth";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Hospital, label: "Hospital", path: "/dashboard/hospital" },
  {
    icon: CalendarRange,
    label: "Appointment",
    path: "/dashboard/appointments",
  },
  { icon: User, label: "Profile", path: "/dashboard/profile" },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="w-64 h-full py-16 border-r border-gray-200 flex flex-col">
      <div className="">
        {menuItems.map((item, index) => (
          <Link href={item.path} key={index}>
            <div
              key={index}
              className={`flex text-black items-center space-x-3 p-3 mb-2 cursor-pointer ${
                item.path === pathname
                  ? "bg-gray-100 border-r-4 border-red-500"
                  : " hover:bg-gray-50"
              }`}
            >
              <item.icon size={24} />
              <span>{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-auto pt-4 mx-4">
        <Link href={"/signin"}>
          <button
            onClick={logout}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
          >
            Log Out
          </button>
        </Link>
      </div>
    </div>
  );
}

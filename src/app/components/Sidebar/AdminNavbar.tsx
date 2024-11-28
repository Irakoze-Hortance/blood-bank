"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Calendar, LogOut, Droplet, LayoutDashboard, Hand } from "lucide-react";

const AdminNavbar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/donors", label: "Donors", icon: Droplet },
    { href: "/admin/volunteers", label: "Volunteers", icon: Hand },
    { href: "/admin/schedule", label: "Schedule", icon: Calendar },
  ];

  return (
    <div className="w-64 bg-white h-screen fixed top-0 left-0 shadow-md z-10 flex flex-col justify-between">
      <nav className="p-6">
        <ul className="space-y-4">
          {links.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className={`flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 rounded-lg ${
                  pathname === href ? "bg-gray-100" : ""
                }`}
              >
                <Icon className="w-5 h-5 mr-3 text-red-500" />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-6 border-t border-gray-200">
        <a
          href="#"
          className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </a>
        {/* <p className="mt-6 text-center text-xs text-gray-400">
                    copyright@2020 aimed
                </p> */}
      </div>
    </div>
  );
};

export default AdminNavbar;

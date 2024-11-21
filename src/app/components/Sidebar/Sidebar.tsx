"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Hospital, CalendarRange, User } from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/hospitals', label: 'Hospitals', icon: Hospital },
    { href: '/appointments', label: 'Appointments', icon: CalendarRange },
    { href: '/profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="w-64 bg-white h-screen fixed top-0 left-0 shadow-md z-10 py-6 px-4 flex flex-col justify-between">
      <div>

        <ul className="space-y-4">
          {links.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className={`flex items-center space-x-4 p-3 rounded-md w-full transition-colors ${
                  pathname === href
                    ? 'bg-gray-100  '
                    : 'hover:bg-gray-100'
                }`}
              >
                <Icon size={24} />
                <span className="font-medium">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button className="bg-primary text-white rounded-md py-3 px-6 font-medium hover:bg-primary/90 transition-colors">
        Log Out
      </button>
    </div>
  );
};

export default Sidebar;
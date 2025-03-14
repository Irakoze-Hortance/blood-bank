import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Topbar } from "@/components/Sidebar/Topbar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-inherit text-white flex flex-col">
        {/* Sidebar Body */}
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-14 overflow-y-auto bg-gray-100 px-8">
        {/* Fixed Main Navbar */}
        <Topbar />
        {/* Scrollable Main Content */}
        <div className="bg-gray-100">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;

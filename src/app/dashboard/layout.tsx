import { Sidebar } from "@/components/Sidebar/Sidebar";

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
        <div className="h-16 sticky top-5 bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">Volunteer</h2>
            <p>Dashboard</p>
          </div>
          <div className="flex gap-3">
            <div className="text-right">
              <h2 className="font-bold">Julia Hanhrie</h2>
              <p className="font-light">Active</p>
            </div>
            <img
              src="https://picsum.photos/id/237/200/300"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
        {/* Scrollable Main Content */}
        <div className="bg-gray-100">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;

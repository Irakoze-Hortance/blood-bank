import React from "react";

function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-red-500">BloodDonate</h1>
          <div className="mt-4">
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <p className="mt-2 font-medium">Jane Kare</p>
            <p className="text-gray-500 text-sm">jane.kare@example.com</p>
          </div>
        </div>
        <nav className="mt-6">
          <ul className="space-y-2">
            <li className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer">
              <i className="fas fa-tachometer-alt text-red-500"></i>
              <span>Dashboard</span>
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer">
              <i className="fas fa-hospital text-red-500"></i>
              <span>Hospitals</span>
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer">
              <i className="fas fa-users text-red-500"></i>
              <span>Donors</span>
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer">
              <i className="fas fa-hands-helping text-red-500"></i>
              <span>Volunteers</span>
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer text-red-500">
              <i className="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </li>
          </ul>
        </nav>
        <footer className="absolute bottom-4 left-4 text-gray-400 text-sm">
          © 2020 Aimed
        </footer>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Stats */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white shadow-lg p-4 rounded flex items-center justify-between">
            <div>
              <p className="text-lg font-medium">40 Hospitals</p>
            </div>
            <i className="fas fa-hospital text-red-500 text-2xl"></i>
          </div>
          <div className="bg-white shadow-lg p-4 rounded flex items-center justify-between">
            <div>
              <p className="text-lg font-medium">200 Donors</p>
            </div>
            <i className="fas fa-users text-red-500 text-2xl"></i>
          </div>
          <div className="bg-white shadow-lg p-4 rounded flex items-center justify-between">
            <div>
              <p className="text-lg font-medium">200 Volunteers</p>
            </div>
            <i className="fas fa-hands-helping text-red-500 text-2xl"></i>
          </div>
        </div>

        {/* Hospital Table */}
        <div className="bg-white shadow-lg p-6 rounded">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Hospitals</h2>
            <button className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600">
              + Add a hospital
            </button>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Location</th>
                <th className="py-2 px-4">Donors</th>
                <th className="py-2 px-4">Volunteers</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((item) => (
                <tr key={item} className="border-b">
                  <td className="py-2 px-4">Ruli Hospital</td>
                  <td className="py-2 px-4">rulihospital@gmail.com</td>
                  <td className="py-2 px-4">North Province, Gakenke</td>
                  <td className="py-2 px-4">400</td>
                  <td className="py-2 px-4">80</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

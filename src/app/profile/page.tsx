import { icons } from "lucide-react";
import ProfilePage from "./ProfilePage";
import { Topbar } from "@/components/Sidebar/Topbar";
import { Sidebar } from "@/components/Sidebar/Sidebar";
const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64 p-6">
        <Topbar />
        <ProfilePage />
      </div>
    </div>
  );
};

export default Dashboard;

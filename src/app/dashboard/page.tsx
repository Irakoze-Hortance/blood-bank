import { icons } from "lucide-react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Topbar } from "../components/Sidebar/Topbar";
import HospitalCard from "./hospital/HospitalData";
import RecentTable from "./donations/Recent";
 const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 ml-64 p-6">
                <Topbar />
                <HospitalCard />
                <RecentTable />
        </div>
        </div>
    );
};

export default Dashboard;
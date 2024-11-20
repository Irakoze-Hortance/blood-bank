import Sidebar from "@/components/Sidebar/Sidebar";
import { Topbar } from "@/components/Sidebar/Topbar";
import AppointmentsTable from "./AppointmentTable";

const Appointments = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64 p-6">
        <Topbar />
        <AppointmentsTable />
      </div>
    </div>
  );
};

export default Appointments;

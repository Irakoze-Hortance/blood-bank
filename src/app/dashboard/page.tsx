import { DonationTable } from "@/components/dashboards/DonationTable";
import { HospitalCard } from "@/components/dashboards/HospitalCard";

function Dashboard() {
  return (
    <div className="flex-1">
      <div className="grid grid-cols-2 gap-4 mb-8">
        <HospitalCard
          name="Khouchi hospital"
          address="Khulna, sylhate 234"
          email="staff@hospital.com"
        />
        <HospitalCard
          name="Khouchi hospital"
          address="Khulna, sylhate 234"
          email="staff@hospital.com"
        />
      </div>

      <DonationTable />
    </div>
  );
}

export default Dashboard;

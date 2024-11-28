import DonorData from "./DonorsData";
import ReactQueryProvider from "@/app/providers/QueryProvider";
const Donors = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <DonorData />
      </div>
    </div>
  );
};

export default Donors;

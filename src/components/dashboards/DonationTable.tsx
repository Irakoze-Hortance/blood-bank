import WeightModal from "@/app/dashboard/donations/AddModal";
interface Donation {
  hospital: string;
  email: string;
  location: string;
  amount: string;
  date: string;
}

const donations: Donation[] = [
  {
    hospital: "St. Hospital",
    email: "volunteer@gmail.com",
    location: "North province street 23",
    amount: "1.5L",
    date: "20/12/23",
  },
  {
    hospital: "St. Hospital",
    email: "volunteer@gmail.com",
    location: "North province street 23",
    amount: "1.5L",
    date: "20/12/23",
  },
  {
    hospital: "St. Hospital",
    email: "volunteer@gmail.com",
    location: "North province street 23",
    amount: "1.5L",
    date: "20/12/23",
  },
];

export function DonationTable() {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-lg font-medium">Recent donations</h2>
        <WeightModal />
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-4">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search donation"
            className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="pb-3">Hospital</th>
              <th className="pb-3">Email</th>
              <th className="pb-3">Location</th>
              <th className="pb-3">Amount</th>
              <th className="pb-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation, index) => (
              <tr key={index} className="border-t border-gray-100">
                <td className="py-3">{donation.hospital}</td>
                <td className="py-3">{donation.email}</td>
                <td className="py-3">{donation.location}</td>
                <td className="py-3">{donation.amount}</td>
                <td className="py-3">{donation.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

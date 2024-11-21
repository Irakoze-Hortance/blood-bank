interface HospitalCardProps {
  name: string;
  address: string;
  email: string;
}

export function HospitalCard({ name, address, email }: HospitalCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
      <div>
        <h3 className="font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">Address: {address}</p>
        <p className="text-sm text-gray-500">Email: {email}</p>
      </div>
      <button className="p-2 bg-red-50 rounded-lg">
        <svg
          className="w-6 h-6 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
    </div>
  );
}

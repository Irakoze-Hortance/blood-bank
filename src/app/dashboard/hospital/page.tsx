"use client"
import React from 'react';
import { icons } from 'lucide-react';
const hospitalData = [
  {
    name: 'Kicucito hospital',
    address: 'kikukiro, cyimana L23n',
    email: 'kicuki@hospital.com',
    logo: icons.BedDouble,
  },
  {
    name: 'Braveheart Hospital',
    address: '123 Main St, Anytown USA',
    email: 'info@braveheart.com',
    logo: icons.BedDouble,
  },
  {
    name: 'Wellness Clinic',
    address: '456 Oak Rd, Somewhere CA',
    email: 'contact@wellnessclinic.org',
    logo: icons.BedDouble,
  },
];

const HospitalCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {hospitalData.map((hospital, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden w-full">
          <div className="flex items-center p-4">
              <hospital.logo className="w-16 p-4 h-16 rounded-full bg-primary text-white flex-shrink-0 " />
            <div className="ml-4 flex-1">
              <h2 className="text-lg font-medium text-gray-900">{hospital.name}</h2>
              <p className="text-gray-600 text-sm">{hospital.address}</p>
              <p className="text-gray-600 text-sm">{hospital.email}</p>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default HospitalCard;
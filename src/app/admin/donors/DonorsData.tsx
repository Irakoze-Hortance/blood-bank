"use client";

import React from "react";
import { Search } from "lucide-react";
import TopStats from "@/components/Topstats";
import { Card } from "@/components/ui/card";

const donors = [
  {
    name: "Izere Kerie",
    email: "izere@gmail.com",
    location: "North province, Gakenke",
    bloodType: "AB",
    totalTimes: 4,
  },
  {
    name: "Izere Kerie",
    email: "izere@gmail.com",
    location: "North province, Gakenke",
    bloodType: "400",
    totalTimes: 4,
  },
  {
    name: "Izere Kerie",
    email: "izere@gmail.com",
    location: "North province, Gakenke",
    bloodType: "AB",
    totalTimes: 4,
  },
];

const DonorData = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
        <TopStats/>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Donors</h2>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-300 rounded-lg pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>

      <div className="space-y-4">
        {donors.map((donor, index) => (
        <div className="p-4 max-w-5xl mx-auto" key={donor.name}>
      <Card className="w-full bg-white hover:bg-gray-50 transition-colors duration-200">
        <div className="grid grid-cols-5 gap-4 p-4 items-center">
          {/* Name Column */}
          <div className="space-y-1">
            <div className="text-sm text-gray-500 font-medium">Name</div>
            <div className="text-gray-700">Izere Kerie</div>
          </div>

          {/* Email Column */}
          <div className="space-y-1">
            <div className="text-sm text-gray-500 font-medium">Email</div>
            <div className="text-gray-700">izere@gmail.com</div>
          </div>

          {/* Location Column */}
          <div className="space-y-1">
            <div className="text-sm text-gray-500 font-medium">Location</div>
            <div className="text-gray-700">
              <div>North province</div>
              <div>Gakenke</div>
            </div>
          </div>

          {/* Blood Type Column */}
          <div className="space-y-1">
            <div className="text-sm text-gray-500 font-medium">BloodType</div>
            <div className="text-gray-700">AB</div>
          </div>

          {/* Total Times Column */}
          <div className="space-y-1">
            <div className="text-sm text-gray-500 font-medium">Total Times</div>
            <div className="text-gray-700">4</div>
          </div>

          {/* Red Accent Bar */}
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-red-500"></div>
        </div>
      </Card>
    </div>
        ))}
      </div>
    </div>
  );
};

export default DonorData;

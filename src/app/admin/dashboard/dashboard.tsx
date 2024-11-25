"use client";

import React from "react";
import TopStats from "@/components/Topstats";
const DashboardData = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <TopStats />

      {/* Main Content Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Volunteer Requests */}
        <div className="col-span-2">
          <h2 className="text-lg font-semibold mb-4">Volunteer Requests</h2>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-red-50 p-4 rounded-lg"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                    KS
                  </div>
                  <p className="ml-4 font-medium">Manzi Gustave</p>
                </div>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                  Accept
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Week Schedule */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Week Schedule</h2>
          <div className="space-y-4">
            <div className="bg-white shadow-md p-4 rounded-lg">
              <p className="font-semibold">Appointment</p>
              <p className="text-gray-500 text-sm">
                21 Jan 2022 <br />
                Monday 9:00pm-12:00pm
              </p>
              <p className="text-sm text-gray-600">Dr. Gahamanzi</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg border-l-4 border-red-500">
              <p className="font-semibold">Blood Donation Day Event</p>
              <p className="text-gray-500 text-sm">
                21 Jan 2022 <br />
                Monday 9:00pm-12:00pm
              </p>
              <p className="text-sm text-gray-600">At Ruli Hospital</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg border-l-4 border-blue-500">
              <div className="flex justify-between items-center">
                <p className="font-semibold">Appointment</p>
                <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-lg">
                  Today
                </span>
              </div>
              <p className="text-gray-500 text-sm">
                21 Jan 2022 <br />
                Monday 9:00pm-12:00pm
              </p>
              <p className="text-sm text-gray-600">Dr. Gahamanzi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardData;

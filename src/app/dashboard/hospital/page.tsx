"use client";
import { useGetHospitals } from "@/services/hospital";
import React from "react";
import WeightModal from "../donations/AddModal";

function Hospital() {
  const { data: hospitals, isPending: isLoadingHospitals } = useGetHospitals();
  const length = hospitals?.length || 0;
  const randomIndex = Math.floor(Math.random() * length);
  const featuredHospital = hospitals?.[randomIndex];
  const restHospitals = hospitals?.filter(
    (hospital) => hospital.id !== featuredHospital?.id
  );

  if (!featuredHospital) {
    return <p>{isLoadingHospitals ? "Loading..." : "No hospitals found."}</p>;
  }
  return (
    <div className="bg-gray-100 mb-4">
      {/* Featured Hospital Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Image Section */}
          <img
            src="https://via.placeholder.com/600x400" // Replace with the hospital image URL
            alt="Ruhengeri hospital"
            className="w-full h-64 object-cover rounded-lg"
          />

          {/* Hospital Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                {featuredHospital?.name}
              </h1>
              <p className="text-gray-600 mb-4">
                {featuredHospital?.description}
              </p>
              <p className="text-gray-500">
                <span className="font-medium">Location:</span>
                {featuredHospital?.district}, {featuredHospital?.sector}
              </p>
              <a href="#" className="text-blue-500 underline mt-2 inline-block">
                View all the appointments you had with this hospital
              </a>
            </div>
            {/* Date and Donate Button */}
            <div className="flex items-center justify-between mt-4">
              <p className="text-red-500 font-semibold">
                <i className="far fa-calendar-alt"></i> 12th May,{" "}
                {new Date().getFullYear()}
              </p>
              <WeightModal text="Donate" />
            </div>
          </div>
        </div>
      </div>

      {restHospitals && restHospitals?.length > 0 ? (
        <div>
          <h2 className="text-xl font-bold mb-4">Other Hospitals</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {/* Hospital Card */}
            {restHospitals.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Hospital"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {item.description.substring(0, 100)}...
                  </p>
                  <p className="text-gray-500">
                    <span className="font-medium">Location:</span>{" "}
                    {item.district}, {item.sector}
                  </p>
                  <WeightModal text="Donate" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Hospital;

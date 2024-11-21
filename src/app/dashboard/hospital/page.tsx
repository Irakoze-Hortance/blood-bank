import React from "react";

function Hospital() {
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
              <h1 className="text-2xl font-bold mb-2">Ruhengeri Hospital</h1>
              <p className="text-gray-600 mb-4">
                Ruhengeri is the closest hospital from your current location and
                is prepared for your blood donation. Take this opportunity,
                don't miss it!
              </p>
              <p className="text-gray-500">
                <span className="font-medium">Location:</span> Kigeme hospital
                center, at 2:00pm
              </p>
              <a href="#" className="text-blue-500 underline mt-2 inline-block">
                View all the appointments you had with this hospital
              </a>
            </div>
            {/* Date and Donate Button */}
            <div className="flex items-center justify-between mt-4">
              <p className="text-red-500 font-semibold">
                <i className="far fa-calendar-alt"></i> January 21, 2022
              </p>
              <button className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600">
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Other Hospitals Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Other Hospitals</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {/* Hospital Card */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src="https://via.placeholder.com/400x300" // Replace with other hospital image URLs
                alt="Hospital"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Ruhengeri Hospital</h3>
                <p className="text-gray-600 mb-4">
                  Ruhengeri is another hospital that you can donate to.
                </p>
                <p className="text-gray-500">
                  <span className="font-medium">Location:</span> Kigeme hospital
                  center, at 2:00pm
                </p>
                <button className="bg-red-500 text-white mt-4 px-4 py-2 rounded shadow hover:bg-red-600">
                  Donate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hospital;

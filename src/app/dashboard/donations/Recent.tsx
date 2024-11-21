"use client";
import React from "react";
import { Search, TriangleAlert } from "lucide-react";
const donationsData=[
    {
        hospital:"Ruli Hospital",
        email:"ruli@hospital.com",
        location:"Ruli, Rwanda",
        quantity:"0.5 ml",
        date:"12/12/2021",
    },
    {
        hospital:"Kabaya Hospital",
        email:"kabaye",
        location:"Kabaya, Rwanda",
        quantity:"0.5 ml",
        date:"12/12/2021",
    },
    {
        hospital:"Kicukiro Hospital",
        email:"kicukiro",
        location:"Kicukiro, Rwanda",
        quantity:"0.5 ml",
        date:"12/12/2021",
    },
]
const RecentTable=()=>{
    return(

        <div className="container w-full p-3  bg-white mt-6 border">
        <h2 className="text-lg font-semibold">Recent Donations</h2>
 
        <div className="flex items-center justify-between mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-primary" />
          <input
            type="text"
            placeholder="Search donation"
            className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm "
          />
        </div>
        <button className="bg-primary ml-auto text-white rounded-md p-2 ">Add Donation</button>
        </div>
        <table  className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-40 overflow-x-auto">
            <thead>
            <tr className="bg-gray-50 border-b">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Hospital</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Email</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Location</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Quantity</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Date</th>
            </tr>
            </thead>
            <tbody>
                {donationsData.map((donation,index)=>(
                    <tr key={index} className="border-b">
                        <td className="py-4 px-4 text-sm text-gray-600 ">{donation.hospital}</td>
                        <td>{donation.email}</td>
                        <td>{donation.location}</td>
                        <td>{donation.quantity}</td>
                        <td>{donation.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}

export default RecentTable;
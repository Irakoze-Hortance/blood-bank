"use client";
import React from "react";

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
        <div className="flex m-2 p-3">
        <input className="rounded-md bg-gray-50 p-1 " placeholder="search donation"/>
        <button className="bg-primary ml-auto text-white rounded-md p-2 ">Add Donation</button>
        </div>
        <table  className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-40 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="p-2 m-2">
                    <th className="p-2 m-2">Hospital</th>
                    <th>Email</th>
                    <th>Location</th>
                    <th>Quantity</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {donationsData.map((donation,index)=>(
                    <tr key={index} className="border-b">
                        <td className="p-2 m-2 ">{donation.hospital}</td>
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
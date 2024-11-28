"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Search } from "lucide-react";
import TopStats from "@/components/Topstats";
import { Card } from "@/components/ui/card";

const fetchDonors = async () => {
    const response = await axios.get('https://blood-bank-api-b02r.onrender.com/auth/users-by-role?role=DONOR');
    return response.data;
};

const DonorsData = () => {
    const { data, error, isLoading } = useQuery({ queryKey: ['donors'], queryFn: fetchDonors });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading donors data</div>;
    }

    return (
        <div className="container mx-auto p-4">
          <TopStats />
            <h1 className="text-2xl font-bold mb-4">Donors List</h1>
            <div className="relative mb-4">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-primary" />
                <input
                    type="text"
                    placeholder="Search donor"
                    className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
                />
            </div>
            <table className="table-auto w-full text-sm text-left text-gray-500">
                <thead>
                    <tr className="bg-gray-50 border-b">
                        <th className="py-3 px-4 text-sm font-medium text-gray-600">Name</th>
                        <th className="py-3 px-4 text-sm font-medium text-gray-600">Email</th>
                        <th className="py-3 px-4 text-sm font-medium text-gray-600">Location</th>
                        <th className="py-3 px-4 text-sm font-medium text-gray-600">Blood Type</th>
                        <th className="py-3 px-4 text-sm font-medium text-gray-600">Gender</th>
                        <th className="py-3 px-4 text-sm font-medium text-gray-600">Joined</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((donor: any) => (
                        <tr key={donor.id} className="border-b">
                            <td className="py-3 px-4">{`${donor.firstName} ${donor.lastName}`}</td>
                            <td className="py-3 px-4">{donor.email}</td>
                            <td className="py-3 px-4">{donor.address}</td>
                            <td className="py-3 px-4">{donor.bloodGroup}</td>
                            <td className="py-3 px-4">{donor.gender}</td>
                            <td className="py-3 px-4">{new Date(donor.createdAt).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DonorsData;
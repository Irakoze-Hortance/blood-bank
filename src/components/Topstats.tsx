"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Droplet, User, Hand } from "lucide-react";

const fetchDonorsCount = async () => {
    const response = await axios.get('https://blood-bank-api-b02r.onrender.com/auth/users-by-role?role=DONOR');
    return response.data.length;
};

const fetchVolunteersCount = async () => {
    const response = await axios.get('https://blood-bank-api-b02r.onrender.com/auth/users-by-role?role=VOLUNTEER');
    return response.data.length;
};

const TopStats = () => {
    const { data: donorsCount, isLoading: isLoadingDonors } = useQuery({ queryKey: ['donorsCount'], queryFn: fetchDonorsCount });
    const { data: volunteersCount, isLoading: isLoadingVolunteers } = useQuery({ queryKey: ['volunteersCount'], queryFn: fetchVolunteersCount });

    if (isLoadingDonors || isLoadingVolunteers) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
                <div className="bg-red-100 text-red-600 p-3 rounded-full mr-4">
                    <Droplet className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold">{donorsCount}</h3>
                    <p className="text-gray-500">Donors</p>
                </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
                <div className="bg-red-100 text-red-600 p-3 rounded-full mr-4">
                    <User className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold">{volunteersCount}</h3>
                    <p className="text-gray-500">Volunteers</p>
                </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
                <div className="bg-red-100 text-red-600 p-3 rounded-full mr-4">
                    <Hand className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold">{volunteersCount}</h3>
                    <p className="text-gray-500">Volunteer Requests</p>
                </div>
            </div>

        </div>
    );
};

export default TopStats;
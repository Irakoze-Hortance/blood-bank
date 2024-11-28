"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import TopStats from "@/components/Topstats";

const Dashboard = () => {
    interface Volunteer {
        id: number;
        firstName: string;
        lastName: string;
        email: string;
    }

    const [volunteers, setVolunteers] = useState<Volunteer[]>([]);

    useEffect(() => {
        const fetchVolunteers = async () => {
            try {
                const response = await axios.get('https://blood-bank-api-b02r.onrender.com/auth/users-by-role?role=VOLUNTEER')
                setVolunteers(response.data);
            } catch (error) {
                console.error('Error fetching volunteers:', error);
            }
        };

        fetchVolunteers();
    }, []);

    return (
        <div className="container mx-auto my-8 space-y-4">
          <TopStats />
            {volunteers.map((volunteer) => (
                <div key={volunteer.id} className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                            {volunteer.firstName.charAt(0).toUpperCase()}
                            {volunteer.lastName.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">{volunteer.firstName} {volunteer.lastName}</h3>
                            <p className="text-gray-500">{volunteer.email}</p>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                            Accept
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                            Decline
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;
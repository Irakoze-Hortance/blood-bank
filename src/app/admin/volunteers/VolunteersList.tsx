"use client";
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Search } from 'lucide-react';
import TopStats from '@/components/Topstats';

const fetchVolunteers = async () => {
    const response = await axios.get('https://blood-bank-api-b02r.onrender.com/auth/users-by-role?role=VOLUNTEER');
    return response.data;
};

const VolunteersList = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { data, error, isLoading } = useQuery({ queryKey: ['volunteers'], queryFn: fetchVolunteers });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading volunteers data</div>;
    }

    const filteredVolunteers = data.filter((volunteer: any) =>
        `${volunteer.firstName} ${volunteer.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto p-4">
            <TopStats />
            <h1 className="text-2xl font-bold mb-4">Volunteers List</h1>
            <div className="relative mb-4">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-primary" />
                <input
                    type="text"
                    placeholder="Search volunteer"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
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
                    {filteredVolunteers.map((volunteer: any) => (
                        <tr key={volunteer.id} className="border-b">
                            <td className="py-3 px-4">{`${volunteer.firstName} ${volunteer.lastName}`}</td>
                            <td className="py-3 px-4">{volunteer.email}</td>
                            <td className="py-3 px-4">{volunteer.address}</td>
                            <td className="py-3 px-4">{volunteer.bloodGroup}</td>
                            <td className="py-3 px-4">{volunteer.gender}</td>
                            <td className="py-3 px-4">{new Date(volunteer.createdAt).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VolunteersList;
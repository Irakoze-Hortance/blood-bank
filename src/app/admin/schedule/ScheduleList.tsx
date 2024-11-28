"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TopStats from "@/components/Topstats";

const fetchEvents = async () => {
    const response = await axios.get('https://blood-bank-api-b02r.onrender.com/events');
    return response.data;
};

interface Hospital {
    id: string;
    name: string;
}

const fetchHospitalDetails = async (hospitalId: string): Promise<Hospital> => {
    const response = await axios.get(`https://blood-bank-api-b02r.onrender.com/hospitals/${hospitalId}`);
    return response.data;
};

const ScheduleList = () => {
    const { data: events, error, isLoading } = useQuery({ queryKey: ['events'], queryFn: fetchEvents });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading events data</div>;
    }

    return (
        <div className="container mx-auto my-8">
            <TopStats />
            <h1 className="text-2xl font-bold mb-4">Schedule List</h1>
            <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Type</th>
                            <th className="px-4 py-2 text-left">Location</th>
                            <th className="px-4 py-2 text-left">Date</th>
                            <th className="px-4 py-2 text-left">Hospital</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event: any) => (
                            <EventRow key={event.id} event={event} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const EventRow = ({ event }: { event: any }) => {
    const { data: hospital, isLoading: isLoadingHospital } = useQuery({ queryKey: ['hospital', event.organizer], queryFn: () => fetchHospitalDetails(event.hospitalId) });

    return (
        <tr className="border-b">
            <td className="px-4 py-2 text-sm text-gray-600">{event.title}</td>
            <td className="px-4 py-2 text-sm text-gray-600">{event.description}</td>
            <td className="px-4 py-2 text-sm text-gray-600">{event.location}</td>
            <td className="px-4 py-2 text-sm text-gray-600">{new Date(event.eventDate).toLocaleDateString()}</td>
            <td className="px-4 py-2 text-sm text-gray-600">
                {isLoadingHospital ? 'Loading...' : hospital?.name}
            </td>
        </tr>
    );
};

export default ScheduleList;
"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TopStats from "@/components/Topstats";

const fetchEvents = async () => {
    const response = await axios.get('https://blood-bank-api-b02r.onrender.com/events');
    return response.data;
};

const ScheduleList = () => {
    const { data, error, isLoading } = useQuery({ queryKey: ['events'], queryFn: fetchEvents });

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
                            <th className="px-4 py-2 text-left">Title</th>
                            <th className="px-4 py-2 text-left">Description</th>
                            <th className="px-4 py-2 text-left">Location</th>
                            <th className="px-4 py-2 text-left">Date</th>
                            <th className="px-4 py-2 text-left">Organizer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((event: any) => (
                            <tr key={event.id} className="border-b">
                                <td className="px-4 py-2">{event.title}</td>
                                <td className="px-4 py-2">{event.description}</td>
                                <td className="px-4 py-2">{event.location}</td>
                                <td className="px-4 py-2">{new Date(event.eventDate).toLocaleDateString()}</td>
                                <td className="px-4 py-2">{event.organizer}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ScheduleList;
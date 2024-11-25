"use client";
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import TopStats from '@/components/Topstats';

const VolunteersList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  

  const volunteers = [
    {
      id: 1,
      name: 'Izere Kerie',
      email: 'izere@gmail.com',
      location: {
        province: 'North province',
        district: 'Gakenke'
      },
      bloodType: 'AB',
      status: 'Accepted' as 'Accepted' | 'Pending'
    },
    {
      id: 2,
      name: 'Izere Kerie',
      email: 'izere@gmail.com',
      location: {
        province: 'North province',
        district: 'Gakenke'
      },
      bloodType: 'AB',
      status: 'Pending' as 'Accepted' | 'Pending'
    },
    {
      id: 3,
      name: 'Izere Kerie',
      email: 'izere@gmail.com',
      location: {
        province: 'North province',
        district: 'Gakenke'
      },
      bloodType: 'AB',
      status: 'Accepted' as 'Accepted' | 'Pending'
    },
    {
      id: 4,
      name: 'Izere Kerie',
      email: 'izere@gmail.com',
      location: {
        province: 'North province',
        district: 'Gakenke'
      },
      bloodType: 'AB',
      status: 'Pending' as 'Accepted' | 'Pending'
    }
  ];

  const StatusBadge = ({ status }: { status: 'Accepted' | 'Pending' }) => {
    const statusStyles = {
      Accepted: 'bg-green-100 text-green-600',
      Pending: 'bg-red-100 text-red-600'
    };

    return (
      <span className={`px-3 py-1 rounded-full text-sm ${statusStyles[status]}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
        <TopStats/>
      <h1 className="text-2xl font-semibold mb-6">Volunteers</h1>
      
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 " size={20} />
        <input
          type="text"
          placeholder="Search volunteers..."
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-5 gap-4 px-4 py-2 bg-gray-50 rounded-t-lg">
        <div className="font-medium">Name</div>
        <div className="font-medium">Email</div>
        <div className="font-medium">Location</div>
        <div className="font-medium">BloodType</div>
        <div className="font-medium">Status</div>
      </div>

      <div className="space-y-1">
        {volunteers.map((volunteer) => (
          <div
            key={volunteer.id}
            className="grid grid-cols-5 gap-4 px-4 py-3 bg-white hover:bg-gray-50 transition-colors duration-200 relative"
          >
            <div className="text-gray-600">{volunteer.name}</div>
            <div className="text-gray-600">{volunteer.email}</div>
            <div className="text-gray-600">
              <div>{volunteer.location.province}</div>
              <div>{volunteer.location.district}</div>
            </div>
            <div className="text-gray-600">{volunteer.bloodType}</div>
            <div>
              <StatusBadge status={volunteer.status} />
            </div>
            
            <div 
              className={`absolute right-0 top-0 bottom-0 w-1 ${
                volunteer.status === 'Accepted' ? 'bg-green-500' : 'bg-red-500'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteersList;
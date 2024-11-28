"use client";
import { useState } from 'react';
import { Camera, Save } from 'lucide-react';
import { Card } from '@/components/ui/card';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';


const ProfilePage = () => {
  const [formData, setFormData] = useState({
    firstName: 'Gahamanyi',
    lastName: 'Yvette',
    email: 'ygahamanyi@gmail.com',
    gender: 'Female',
    dateOfBirth: '2021-01-22',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const fetchProfileData = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`);
    return response.data;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 space-y-6">
          <h2 className="text-xl font-semibold">Personal data</h2>
          
          <div className="text-center space-y-4">
            <div className="relative inline-block">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                <img
                  src="https://img.freepik.com/free-photo/portrait-laughing-woman_641386-775.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 bg-red-500 p-2 rounded-full text-white">
                <Camera size={16} />
              </button>
            </div>
            
            <div className="text-center">
              <h3 className="font-medium">Yvette Gahamanyi</h3>
              <p className="text-gray-500 text-sm">January 22,2021</p>
              <p className="text-gray-500 text-sm">Ruhengeri</p>
              <p className="text-gray-500 text-sm">Female</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <div className="font-semibold">AB+</div>
              <div className="text-sm text-gray-500">Blood group</div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <div className="font-semibold">03</div>
              <div className="text-sm text-gray-500">Donations</div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span>I am available to donate</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
            </label>
          </div>
        </Card>

        <div className="md:col-span-2 space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Update profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">First name</label>
                <input
                  type="text"
                  defaultValue={formData.firstName}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Last name</label>
                <input
                  type="text"
                  defaultValue={formData.lastName}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Email address</label>
                <input
                  type="email"
                  defaultValue={formData.email}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Gender</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Female</option>
                  <option>Male</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2">Date of birth</label>
                <input
                  type="date"
                  defaultValue={formData.dateOfBirth}
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Update password</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2">Current password</label>
                <input
                  type="password"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">New password</label>
                  <input
                    type="password"
                    placeholder="Enter your new password"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Confirm password</label>
                  <input
                    type="password"
                    placeholder="Re-enter your new password"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>
            </div>
          </Card>

          <button className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 flex items-center justify-center gap-2">
            <Save size={20} />
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
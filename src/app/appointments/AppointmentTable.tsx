"use client";
import React, {useState} from "react";
import { Dialog, DialogTrigger, DialogContent, DialogOverlay } from "@radix-ui/react-dialog";
import { Search, TriangleAlert } from "lucide-react";
import ScheduleModal from "./ScheduleModal";

const AppointmentsTable = () => {
  const appointments = [
    {
      hospital: "Ruli Hospital",
      email: "rulihospital@gmail.com",
      location: "North province Gakenke",
      date: "20-1-2022",
      status: "cancelled"
    },
    {
      hospital: "Ruli Hospital",
      email: "rulihospital@gmail.com",
      location: "North province Gakenke",
      date: "20-1-2022",
      status: "pending"
    },
    {
      hospital: "Ruli Hospital",
      email: "rulihospital@gmail.com",
      location: "North province Gakenke",
      date: "20-1-2022",
      status: "approved"
    },
    {
      hospital: "Ruli Hospital",
      email: "rulihospital@gmail.com",
      location: "North province Gakenke",
      date: "20-1-2022",
      status: "done"
    }
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleDialogClose = () => {
    setIsOpen(false);
  }

  const getStatusStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case 'cancelled':
        return 'bg-red-50 text-red-500';
      case 'pending':
        return 'bg-yellow-50 text-yellow-600';
      case 'approved':
        return 'bg-violet-50 text-violet-600';
      case 'done':
        return 'bg-green-50 text-green-600';
      default:
        return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <>
      <div className="container w-full bg-primary flex p-2 m-3">
        <TriangleAlert className="text-white h-12 w-12 float-left mt-3" />
        <div className="m-2">
          <p className="text-white font-semibold text-lg">Ruli Hospital</p>
          <p className="text-white text-sm">Kigembe hospital centre at 2:00pm</p>
          <p className="text-white font-bold text-lg">2 days left to donate</p>
        </div>
      </div>

      <div className="p-6 bg-white rounded-lg border">
        <h1 className="text-xl font-semibold text-gray-900 mb-4">Appointments</h1>
        <div className="flex items-center justify-between mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-primary" />
            <input
              type="text"
              placeholder="Search donation"
              className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
            />
          </div>

    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
          Add Appointment
        </button>
      </DialogTrigger>

      <ScheduleModal onClose={handleDialogClose} />
    </Dialog>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Hospital</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Email</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Location</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4 px-4 text-sm text-gray-600">{appointment.hospital}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{appointment.email}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{appointment.location}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{appointment.date}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusStyles(appointment.status)}`}
                    >
                      {appointment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AppointmentsTable;

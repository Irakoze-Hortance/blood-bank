"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogOverlay,
} from "@radix-ui/react-dialog";
import { Search, TriangleAlert } from "lucide-react";
import ScheduleModal from "./ScheduleModal";
import { useGetAppointments } from "@/services/appointment";
import { Table } from "@/components/ui/table";
import { IAppointment } from "@/types/appointments";
import { EAppointmentStatus } from "@/types/shared";

const AppointmentsTable = () => {
  const { data: appointments, isLoading } = useGetAppointments();

  const [isOpen, setIsOpen] = useState(false);

  const handleDialogClose = () => {
    setIsOpen(false);
  };
  const columns = [
    {
      header: "Hospital ID",
      accessor: (row: IAppointment) => row.id || "Empty",
    },
    {
      header: "Email",
      accessor: (row: IAppointment) => row.id || "Empty",
    },
    {
      header: "Location",
      accessor: (row: IAppointment) => row.eventId || "Empty",
    },
    {
      header: "Date",
      accessor: (row: IAppointment) => row.createdAt || "Empty",
    },
    {
      header: "Status",
      accessor: (row: IAppointment) => (
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-medium capitalize ${
            row.status === EAppointmentStatus.APPROVED
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {row.status}
        </span>
      ),
    },
  ];

  const getStatusStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case "cancelled":
        return "bg-red-50 text-red-500";
      case "pending":
        return "bg-yellow-50 text-yellow-600";
      case "approved":
        return "bg-violet-50 text-violet-600";
      case "done":
        return "bg-green-50 text-green-600";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  return (
    <>
      <div className="container w-full bg-primary flex p-2 my-3">
        <TriangleAlert className="text-white h-12 w-12 float-left mt-3" />
        <div className="m-2">
          <p className="text-white font-semibold text-lg">Ruli Hospital</p>
          <p className="text-white text-sm">
            Kigembe hospital centre at 2:00pm
          </p>
          <p className="text-white font-bold text-lg">2 days left to donate</p>
        </div>
      </div>

      <div className="p-6 bg-white rounded-lg border">
        <h1 className="text-xl font-semibold text-gray-900 mb-4">
          Appointments
        </h1>
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
            <ScheduleModal onClose={handleDialogClose} />
          </Dialog>
        </div>
        <Table
          data={appointments?.data ?? []}
          isLoading={isLoading}
          columns={columns}
        />
      </div>
    </>
  );
};

export default AppointmentsTable;

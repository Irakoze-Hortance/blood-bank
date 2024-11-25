import React from "react";
import { DialogContent, DialogOverlay, DialogTitle, DialogClose, DialogTrigger } from "@radix-ui/react-dialog";

const ScheduleModal = ({ onClose }: { onClose: () => void }) => {
    return (
    <>
      <DialogOverlay
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
      />            
      <DialogTrigger asChild>
      <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
        Add Appointment
      </button>
    </DialogTrigger>

      <DialogContent
        className="fixed inset-0 flex items-center justify-center p-4"
        aria-labelledby="schedule-title"
      >
        <div className="w-96 p-6 bg-white rounded-md shadow-lg relative">

            <DialogTitle id="schedule-title" className="text-lg font-semibold text-gray-900 mb-4">Schedule Appointment</DialogTitle>

          <DialogClose asChild>
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              aria-label="Close"
              onClick={onClose}
            >
              ✕
            </button>
          </DialogClose>

          <div className="flex items-center space-x-2 mt-4">
            <input
              type="date"
              className="w-full py-2 px-3 border border-gray-200 rounded-md text-sm"
              placeholder="Select date"
            />
          </div>

          <div className="flex items-center space-x-2 mt-4">
            <input
              type="text"
              placeholder="Location"
              className="w-full py-2 px-3 border border-gray-200 rounded-md text-sm"
            />
          </div>

          <div className="flex items-center space-x-2 mt-4">
            <select className="w-full py-2 px-3 border border-gray-200 rounded-md text-sm">
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>


          <button
            className="w-full mt-4 py-3 px-6 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
           onClick={onClose}
          >
            Schedule
          </button>
        </div>
      </DialogContent>
      </>
  );
};

export default ScheduleModal;

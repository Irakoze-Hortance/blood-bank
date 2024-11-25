"use client";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { AlertCircle, HelpCircle } from "lucide-react";
import ScheduleModal from "../appointments/ScheduleModal";

const WeightModal: React.FC = () => {
  const [eligible, setEligible] = useState<boolean | null>(null);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button className="bg-red-600 text-white">Add Donatipn</Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
        <Dialog.DialogTitle className="hidden">Check Eligibility</Dialog.DialogTitle>
        <Dialog.Content className="fixed top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-50">
          {!eligible && eligible !== false && (
            <div className="text-center">
              <HelpCircle className="w-10 h-10 text-red-600 mx-auto" />
              <h2 className="text-lg font-semibold text-gray-800 mt-4">
                Do you weigh at least 45kg?
              </h2>
              <div className="mt-6 flex justify-center space-x-4">
                <Button
                  onClick={() => setEligible(true)}
                  className="bg-red-500 text-white"
                >
                  Yes
                </Button>
                <Button
                  onClick={() => setEligible(false)}
                  className="bg-red-500 text-white"
                >
                  No
                </Button>
              </div>
            </div>
          )}

          {eligible === false && (
            <div className="text-center">
              <AlertCircle className="w-10 h-10 text-black mx-auto" />
              <h2 className="text-lg font-semibold text-gray-800 mt-4">
                Sorry, you are not fit for blood donation.
              </h2>
              <Dialog.DialogClose asChild
                onClick={() => setEligible(null)}
                className="bg-red-500 text-white mt-6"
              >
                Back to Dashboard
              </Dialog.DialogClose>
            </div>
          )}

{eligible === true && (
                <div className="text-center">
                    <h2 className="text-lg font-semibold text-gray-800 mt-4">
                        Schedule a Blood Donation
                    </h2>
                    <p className="text-sm text-gray-600 mt-2">
                        Proceed to schedule your blood donation at your nearest center.
                    </p>
                    <Dialog.Root open={isScheduleModalOpen} onOpenChange={setIsScheduleModalOpen}>

                        <ScheduleModal onClose={() => setIsScheduleModalOpen(false)} />
                    </Dialog.Root>
                </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default WeightModal;

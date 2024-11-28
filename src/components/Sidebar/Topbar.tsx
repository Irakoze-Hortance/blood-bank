"use client";

import { useGetMe } from "@/services/auth";
import { usePathname } from "next/navigation";

export const Topbar = () => {
  const { data: me, isPending: isLoadingMyData } = useGetMe();

  const pathname = usePathname();
  const lastPart = pathname.split("/").pop();
  return (
    <div className="h-16 sticky top-5 bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-semibold">Volunteer</h2>
        <p className="capitalize">{lastPart}</p>
      </div>
      {isLoadingMyData ? (
        <div className="animate-pulse flex gap-1">
          <div className="flex flex-col gap-2">
            <div className="w-10 h-4 bg-gray-200 rounded"></div>
            <div className="w-10 h-2 bg-gray-200 rounded"></div>
          </div>
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        </div>
      ) : (
        <div className="flex gap-3">
          <div>
            <h2 className="font-bold">
              {me?.data?.firstName} {me?.data?.lastName}
            </h2>
            <p className="font-light">Active</p>
          </div>

          <img
            src="https://picsum.photos/id/237/200/300"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      )}
    </div>
  );
};

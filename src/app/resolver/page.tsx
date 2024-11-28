"use client";
import { useGetMe } from "@/services/auth";
import { ERole } from "@/types/shared";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function ResolvePage() {
  const { data: myData, isLoading: isLoadingMyData } = useGetMe();
  const router = useRouter();

  useEffect(() => {
    if (!isLoadingMyData && myData) {
      if (myData?.role === ERole.ADMIN) {
        router.push("/admin/dashboard");
      } else {
        router.push("/dashboard");
      }
    }
  }, [isLoadingMyData, myData]);
  return (
    <div className="flex h-screen w-full items-center justify-center">
      Loading....
    </div>
  );
}

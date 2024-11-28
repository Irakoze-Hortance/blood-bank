"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { addHospital, updateHospital } from "@/services/hospital";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { hospitalSchema, IHospital } from "@/types/hospital";

interface HospitalFormProps {
  hospitalData?: IHospital;
}

const HospitalForm: React.FC<HospitalFormProps> = ({ hospitalData }) => {
  const { mutate: createMutate, isPending: isCreating } = useMutation({
    mutationFn: addHospital,
    onSuccess: () => {
      toast.success("Hospital successfully created!");
    },
    onError: (error: any) => {
      toast.error(error?.message ?? "Failed to create hospital");
    },
  });

  const { mutate: updateMutate, isPending: isUpdating } = useMutation({
    mutationFn: updateHospital,
    onSuccess: () => {
      toast.success("Hospital successfully updated!");
    },
    onError: (error: any) => {
      toast.error(error?.message ?? "Failed to update hospital");
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IHospital>({
    resolver: zodResolver(hospitalSchema),
    defaultValues: hospitalData || {},
  });

  useEffect(() => {
    if (hospitalData) {
      reset(hospitalData);
    }
  }, [hospitalData, reset]);

  const onSubmit = async (data: IHospital) => {
    if (hospitalData) {
      updateMutate({ ...hospitalData, ...data });
    } else {
      createMutate(data);
    }
  };

  return (
    <div className="container max-w-md p-4 mx-auto">
      <h1 className="text-3xl font-bold text-center">
        {hospitalData ? "Update Hospital" : "Register Hospital"}
      </h1>
      <div className="mt-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 border p-12 bg-white"
        >
          <Input
            label="Hospital Name"
            placeholder="Enter Hospital Name"
            {...register("name")}
            error={errors.name?.message}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Enter Hospital Email"
            {...register("email")}
            error={errors.email?.message}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter Password"
            {...register("password")}
            error={errors.password?.message}
          />
          <Input
            label="District"
            placeholder="Enter District"
            {...register("district")}
            error={errors.district?.message}
          />
          <Input
            label="Sector"
            placeholder="Enter Sector"
            {...register("sector")}
            error={errors.sector?.message}
          />
          <Input
            label="Description"
            placeholder="Enter Hospital Description"
            {...register("description")}
            error={errors.description?.message}
          />
          <Button
            type="submit"
            className="w-full"
            isLoading={isCreating || isUpdating}
          >
            {hospitalData ? "Update Hospital" : "Register Hospital"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default HospitalForm;

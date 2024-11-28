"use client";
import React from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ISignUp, signUpSchema } from "@/types/auth";
import { EBloodGroup, EGender, ERole } from "@/types/shared";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { IApiErrorResponse } from "@/types/shared";
import { signUp } from "@/services/auth";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
const SignUp = () => {
  return (
    <div className="container flex flex-col md:flex-row items-center justify-center w-full min-h-screen">
      <img
        src="https://img.freepik.com/free-vector/hand-holding-blood-bag-type-ab-donation_1308-112043.jpg"
        className="w-full md:w-1/2"
      />
      <SignUpForm />
    </div>
  );
};

const SignUpForm = () => {
  const router = useRouter();
  const { mutate, isPending: isCreatingUser } = useMutation({
    onSuccess(data) {
      toast.success(
        `${getValues("firstName")} ${getValues(
          "lastName"
        )}, welcome to the family`
      );
      router.push("/signin");
    },
    onError(error: IApiErrorResponse) {
      toast.error(error?.message ?? "Failed to create account");
    },
    mutationFn: signUp,
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ISignUp>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      role: ERole.VOLUNTEER,
    },
  });

  const onSubmit = async (data: ISignUp) => {
    mutate(data);
  };

  return (
    <div className="container max-w-md  p-4 mx-4">
      <p className="text-left text-sm text-gray-400">
        <span>
          Already Have an Account?
          <Link href="/signin" className="text-red-500">
            {" "}
            Sign In
          </Link>
        </span>
      </p>
      <h1 className="text-3xl font-bold text-center">Create an account</h1>
      <div className="mt-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 border p-12 bg-white"
        >
          <Input
            label="First Name"
            placeholder="Enter Your First Name"
            {...register("firstName")}
            error={errors.firstName?.message}
          />
          <Input
            label="Last Name"
            placeholder="Enter Your Last Name"
            {...register("lastName")}
            error={errors.lastName?.message}
          />
          <Select
            label="Gender"
            error={errors.gender?.message}
            {...register("gender")}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select</option>
            <option value={EGender.MALE}>Male</option>
            <option value={EGender.FEMALE}>Female</option>
            <option value={EGender.OTHER}>Other</option>
          </Select>
          <Input
            label="Email"
            type="email"
            placeholder="Enter Your Email"
            {...register("email")}
            error={errors.email?.message}
          />

          <Select
            label="Blood Group"
            error={errors.bloodGroup?.message}
            {...register("bloodGroup")}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select</option>
            <option value={EBloodGroup.A_POSITIVE}>A+</option>
            <option value={EBloodGroup.A_NEGATIVE}>A-</option>
            <option value={EBloodGroup.B_POSITIVE}>B+</option>
            <option value={EBloodGroup.B_NEGATIVE}>B-</option>
            <option value={EBloodGroup.AB_POSITIVE}>AB+</option>
            <option value={EBloodGroup.AB_NEGATIVE}>AB-</option>
            <option value={EBloodGroup.O_POSITIVE}>O+</option>
            <option value={EBloodGroup.O_NEGATIVE}>O-</option>
          </Select>

          <Input
            label="Location"
            placeholder="Enter Your Location"
            {...register("address")}
            error={errors.address?.message}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter Your Password"
            {...register("password")}
            error={errors.password?.message}
          />
          <Button type="submit" className="w-full" isLoading={isCreatingUser}>
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

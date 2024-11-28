"use client";
import { Camera, Save } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useGetMe } from "@/services/auth";
import { useForm } from "react-hook-form";
import { ISignUp } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { EBloodGroup, EGender, IApiErrorResponse } from "@/types/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { updateUser } from "@/services/user";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  IUpdatePassword,
  updatePasswordSchema,
  updateProfileSchema,
} from "@/types/user";

const ProfilePage = () => {
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
              <h3 className="font-medium">
                {myData?.firstName} {myData?.lastName}
              </h3>
              <p className="text-gray-500 text-sm">{myData?.createdAt}</p>
              <p className="text-gray-500 text-sm">{myData?.address}</p>
              <p className="text-gray-500 text-sm">{myData?.gender}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <div className="font-semibold">{myData?.bloodGroup}</div>
              <div className="text-sm text-gray-500">Blood group</div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <div className="font-semibold">00</div>
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <Input
                label="First name"
                defaultValue={myData?.firstName}
                {...register("firstName")}
                error={errors.firstName?.message}
              />
              <Input
                label="Last name"
                defaultValue={myData?.lastName}
                {...register("lastName")}
                error={errors.lastName?.message}
              />
              <Input
                label="Address"
                defaultValue={myData?.address}
                {...register("address")}
                error={errors.address?.message}
              />

              <Select
                label="Gender"
                {...register("gender")}
                error={errors.role?.message}
              >
                <option value={EGender.MALE}>Male</option>
                <option value={EGender.FEMALE}>Female</option>
              </Select>

              <Select
                label="Blood group"
                {...register("bloodGroup")}
                error={errors.bloodGroup?.message}
              >
                <option value={EBloodGroup.A_POSITIVE}>A+</option>
                <option value={EBloodGroup.A_NEGATIVE}>A-</option>
                <option value={EBloodGroup.B_POSITIVE}>B+</option>
                <option value={EBloodGroup.B_NEGATIVE}>B-</option>
                <option value={EBloodGroup.O_POSITIVE}>O+</option>
                <option value={EBloodGroup.O_NEGATIVE}>O-</option>
                <option value={EBloodGroup.AB_POSITIVE}>AB+</option>
                <option value={EBloodGroup.AB_NEGATIVE}>AB-</option>
              </Select>

              <Input label="Date of birth" value={"2001-02-04"} />

              <Button
                disabled={!isDirty}
                type="submit"
                isLoading={isCreatingUser}
              >
                Save
              </Button>
            </form>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Update password</h2>
            <form
              onSubmit={passwordHandleSubmit(onPasswordSubmit)}
              className="space-y-6"
            >
              <Input
                label="Current password"
                type="password"
                {...passwordRegister("currentPassword")}
                error={passwordErrors.currentPassword?.message}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="New password"
                  type="password"
                  {...passwordRegister("newPassword")}
                  error={passwordErrors.newPassword?.message}
                />
                <Input
                  label="Confirm password"
                  type="password"
                  {...passwordRegister("confirmPassword")}
                  error={passwordErrors.confirmPassword?.message}
                />
              </div>
              <Button
                className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 flex items-center justify-center gap-2"
                disabled={!isPasswordDirty}
              >
                <Save size={20} />
                Save password
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

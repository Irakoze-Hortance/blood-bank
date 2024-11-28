import { EBloodGroup, EGender, ERole, ITable } from "./shared";
import { z } from "zod";

export const updateProfileSchema = z.object({
  firstName: z.string().min(3, { message: "First name is too short" }),
  lastName: z.string().optional().default(""),
  email: z.string().email("Invalid email"),
  address: z.string().min(3, { message: "Address is too short" }),
  bloodGroup: z.nativeEnum(EBloodGroup, {
    message: "Please select blood group",
  }),
});

export const updatePasswordSchema = z
  .object({
    currentPassword: z.string().min(6, { message: "Password is too short" }),
    newPassword: z.string().min(6, { message: "Password is too short" }),
    confirmPassword: z.string().min(6, { message: "Password is too short" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export interface IUser extends ITable {
  email: string;
  firstName: string;
  lastName: string;
  role: ERole;
  bloodGroup: EBloodGroup;
  gender: EGender;
  address: string;
}

export type IUpdateUser = z.infer<typeof updateProfileSchema>;
export type IUpdatePassword = z.infer<typeof updatePasswordSchema>;

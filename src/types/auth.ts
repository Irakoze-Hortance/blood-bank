import { z } from "zod";
import { EBloodGroup, EGender, ERole } from "./shared";

export const signInSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const signUpSchema = z.object({
  firstName: z.string().min(3, { message: "First name is too short" }),
  lastName: z.string().optional().default(""),
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  gender: z.nativeEnum(EGender, { message: "Please select gender" }),
  bloodGroup: z.nativeEnum(EBloodGroup, {
    message: "Please select blood group",
  }),
  address: z.string().min(3, { message: "Address is too short" }),
  role: z.nativeEnum(ERole, { message: "Please select role" }),
});

export type ISignIn = z.infer<typeof signInSchema>;
export type ISignUp = z.infer<typeof signUpSchema>;

import { z } from "zod";

export const hospitalSchema = z.object({
  name: z.string().min(2, "Hospital name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  district: z.string().min(2, "District must be at least 2 characters"),
  sector: z.string().min(2, "Sector must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

export type IHospital = z.infer<typeof hospitalSchema> & {
  id: number;
};

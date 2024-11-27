import { z } from "zod";
import { EAppointmentStatus, ITable } from "./shared";

export const appointmentSchema = z.object({
  userId: z.string().uuid("User ID must be a valid UUID"),
  eventId: z
    .string()
    .min(1, "Event ID is required")
    .uuid("Event ID must be a valid UUID"),
  status: z.nativeEnum(EAppointmentStatus, {
    message: "Status is required",
  }),
  appointmentDate: z.string().refine(
    (date) => {
      const parsedDate = new Date(date);
      return !isNaN(parsedDate.getTime()) && parsedDate > new Date();
    },
    { message: "Appointment date must be a valid date and in the future" }
  ),
});

export type IAppointment = z.infer<typeof appointmentSchema> & ITable;

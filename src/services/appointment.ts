import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axios";
import { IApiErrorResponse, IResponse } from "@/types/shared";
import { AxiosError } from "axios";
import { IAppointment } from "@/types/appointments";

export function addAppointment(data: IAppointment) {
  return axiosInstance.post("/appointments", data);
}

export function updateAppointment(data: IAppointment) {
  return axiosInstance.patch(`/appointments/${data.id}`, data);
}

export function deleteAppointment(id: number) {
  return axiosInstance.delete(`/appointments/${id}`);
}

export function useGetAppointments() {
  return useQuery<IResponse<IAppointment[]>, AxiosError<IApiErrorResponse>>({
    queryKey: ["appointment"],
    queryFn: () => axiosInstance.get("/appointments").then((res) => res.data),
  });
}

export function useGetAppointment(id: number) {
  return useQuery<IResponse<IAppointment>, AxiosError<IApiErrorResponse>>({
    queryKey: ["appointment", id],
    queryFn: () =>
      axiosInstance.get(`/appointments/${id}`).then((res) => res.data),
  });
}

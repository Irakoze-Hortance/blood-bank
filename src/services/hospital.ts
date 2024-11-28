import { IHospital } from "@/types/hospital";
import axiosInstance from "./axios";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { IApiErrorResponse, IResponse } from "@/types/shared";

export function addHospital(data: IHospital) {
  return axiosInstance.post("/hospitals", data);
}

export function updateHospital(data: IHospital) {
  return axiosInstance.patch(`/hospitals/${data.id}`, data);
}

export function deleteHospital(id: number) {
  return axiosInstance.delete(`/hospitals/${id}`);
}

export function useGetHospitals() {
  return useQuery<IHospital[], AxiosError<IApiErrorResponse>>({
    queryKey: ["hospitals"],
    queryFn: () => axiosInstance.get("/hospitals").then((res) => res.data),
  });
}

export function useGetHospital(id: number) {
  return useQuery<IResponse<IHospital>, AxiosError<IApiErrorResponse>>({
    queryKey: ["hospitals", id],
    queryFn: () =>
      axiosInstance.get(`/hospitals/${id}`).then((res) => res.data),
  });
}

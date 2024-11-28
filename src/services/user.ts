import { IUpdateUser } from "@/types/user";
import axiosInstance from "./axios";

export function updateUser(id: string, data: IUpdateUser) {
  return axiosInstance.patch(`/hospitals/${id}`, data);
}

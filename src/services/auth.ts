import { ISignIn, ISignUp } from "@/types/auth";
import axiosInstance from "./axios";
import { useQuery } from "@tanstack/react-query";
import { IUser } from "@/types/user";
import { AxiosError } from "axios";
import { IApiErrorResponse, IResponse } from "@/types/shared";

export function signIn(data: ISignIn) {
  return axiosInstance.post("/auth/login", data);
}

export function signUp(data: ISignUp) {
  return axiosInstance.post("/auth/register", data);
}

export function useGetMe() {
  return useQuery<IUser, AxiosError<IApiErrorResponse>>({
    queryKey: ["me"],
    queryFn: () => axiosInstance.get("/auth/me").then((res) => res.data),
  });
}

export function logout() {
  localStorage.clear();
  window.location.href = "/signin";
}

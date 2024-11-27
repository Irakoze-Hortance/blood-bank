import { ISignIn, ISignUp } from "@/types/auth";
import axiosInstance from "./axios";

export function signIn(data: ISignIn) {
  return axiosInstance.post("/auth/login", data);
}

export function signUp(data: ISignUp) {
  return axiosInstance.post("/auth/register", data);
}

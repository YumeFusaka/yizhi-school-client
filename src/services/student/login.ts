import type { LoginRequest, LoginResult } from "@/types/student/Login";
import { http } from "@/utils/http";

export const studentLoginAPI = (data: LoginRequest) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/student/login',
    data: data
  })
}
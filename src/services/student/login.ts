import type { LoginRequest, LoginResult } from "@/types/student/login";
import { http } from "@/utils/http";

export const studentLogin = (data: LoginRequest) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/student/login',
    data: data
  })
}
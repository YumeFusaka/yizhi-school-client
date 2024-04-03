
import type { LoginRequest, LoginResult } from "@/types/teacher/Login";
import { http } from "@/utils/http";

export const teacherLoginAPI = (data: LoginRequest) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/teacher/login',
    data: data
  })
}
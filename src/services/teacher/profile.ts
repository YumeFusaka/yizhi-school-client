import type { TeacherProfile } from "@/types/teacher/Profile";
import { http } from "@/utils/http";

export const getTeacherProfileAPI = ()=>{
  return http<TeacherProfile>({
    url: '/teacher/profile',
    method: 'POST'
  })
}
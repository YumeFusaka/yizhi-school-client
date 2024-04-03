import type { ClassLog } from "@/types/student/ClassLog";
import { http } from "@/utils/http";

export const studentClassLogAPI = () => {
  return http<ClassLog[]>({
    url: '/student/class_log',
    method:'POST',
  })
}
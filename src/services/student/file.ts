import type { StudentFile } from "@/types/student/file";
import { http } from "@/utils/http";

export const getStudentFileAPI = ()=>{
  return http<StudentFile[]>({
    url: '/student/file',
    method: 'POST',
  })
}
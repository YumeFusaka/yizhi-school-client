import type { StudentProfile} from "@/types/student/Profile";
import { http} from "@/utils/http";

export const getStudentProfileAPI = ()=>{
    return http<StudentProfile>({
      url: '/student/profile',
      method: 'POST'
    })
}
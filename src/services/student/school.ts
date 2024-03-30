import type { ScoreResult } from "@/types/student/Score";
import { http } from "@/utils/http";

export const getStudentSchoolAPI = (semester:number)=>{
  return http<ScoreResult[]>({
    url: `/student/school?semester=${semester}`,
    method: 'GET',
  })
}
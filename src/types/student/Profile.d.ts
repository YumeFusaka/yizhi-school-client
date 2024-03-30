import type { BaseProfile } from "../BaseProfile"

export type StudentProfile = BaseProfile & {
  student_id: string,
  political: string,
  hometown: string,
  department: string,
  classes: string,
  major:string,     
}

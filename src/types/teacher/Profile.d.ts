import type { BaseProfile } from "../BaseProfile"

export type TeacherProfile = BaseProfile & {
  teacher_id: string,
  political: string,
  hometown: string,
  department: string,
  classes: string,
  major:string,     
}

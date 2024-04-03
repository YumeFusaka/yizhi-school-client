import { http } from "@/utils/http";
import type {Notification} from "@/types/Notification"
export const getNotificationAPI = () => {
  return http<Notification[]>({
    url: '/general/notification',
    method:'POST',
  })
}
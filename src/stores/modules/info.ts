import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useInfoStore = defineStore(
  'info',
  () => {
    const info = ref(0)
    const changeInfo = (val:number)=>{
      info.value = val
    }
    return {
      info,
      changeInfo
    }
  },
)

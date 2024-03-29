import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useClientStore = defineStore(
  'client',
  () => {
    const token = ref()

    const setToken = (val:string)=>{
      token.value = val
    }

    const clearToken = ()=>{
      token.value = undefined
    }
    
    return {
      token,
      setToken,
      clearToken
    }
  },
  // TODO: 持久化
  {
    persist: {
    // 调整为兼容多端的API
      storage: {
        setItem(key, value) {
          uni.setStorageSync(key, value) // [!code warning]
        },
        getItem(key) {
          return uni.getStorageSync(key) // [!code warning]
        },
      },
    }
  },
)

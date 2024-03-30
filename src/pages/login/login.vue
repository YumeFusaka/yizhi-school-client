<script setup lang="ts">
import { ref } from 'vue';
import { studentLoginAPI } from '@/services/student/login';
import { useClientStore } from '@/stores';
import type { LoginRequest } from '@/types/student/Login';
const valiForm = ref<UniHelper.UniForms>()
const valiFormData = ref({
  account: '2022117316',
	password: 'j',
  identity: '学生'
})

const identity = ref([
  {
    text: '学生',
    value: '学生'
  }, 
  {
    text: '教师',
    value: '教师'
  }
]) 

const back = ()=>{
  uni.navigateBack({delta:1})
}

const rules = ref({
  account: {
    rules: [
      {
        required: true,
        errorMessage: '账号不能为空'
      },
    ]
  },
  password: {
    rules: [
      {
        required: true,
        errorMessage: '密码不能为空'
			}
    ]
	}
} as UniHelper.UniFormsRules)

const studentLogin = async ()=>{
  const param = { 
      account:valiFormData.value.account,
      password:valiFormData.value.password} as LoginRequest
    const res = await studentLoginAPI(param)
    console.log(res)
    const clientStore = useClientStore()
    if(clientStore.token != null)
      clientStore.clearToken()
    clientStore.setToken(res.data.token)
}

const login = async ()=>{
  await valiForm.value!.validate()
  if(valiFormData.value.identity==='学生'){
    await studentLogin()
  }
  uni.showToast({ icon: 'none', title: '登录成功' })
    setTimeout(() => {
      uni.navigateBack()
    }, 500)
}
</script>


<template>
<uni-nav-bar dark title="登录" :border="false" left-icon="left" left-text="返回" @clickLeft="back" height="25">
</uni-nav-bar>


<view class="content">
  <uni-forms style="padding: 40px 30px 10px;" ref="valiForm" :rules="rules" :modelValue="valiFormData">
    <uni-forms-item label="账号" name="account">
      <uni-easyinput :clearable="false" v-model="valiFormData.account" placeholder="请输入账号" />
    </uni-forms-item>
    <uni-forms-item label="密码" name="password">
      <uni-easyinput :clearable="false" type="password" v-model="valiFormData.password" placeholder="请输入密码" />
    </uni-forms-item>
    <uni-forms-item label="身份">
			<uni-data-checkbox style="padding-top: 5px;" v-model="valiFormData.identity" :localdata="identity" />
		</uni-forms-item>
  </uni-forms>

  <button style="margin: 0px 30px 0px;" type="primary" @click="login">登录</button>

  <view style="padding-bottom: 20px;"></view>
</view>

</template>

<style lang="scss">
.content{
  background-color: white;
}
</style>
@/types/student/Login
<script setup lang="ts">
import { ref } from 'vue';
import { studentLoginAPI } from '@/services/student/login';
import { useClientStore } from '@/stores';
import type { LoginRequest } from '@/types/student/Login';
import {teacherLoginAPI} from '@/services/teacher/login'
const valiForm = ref<UniHelper.UniForms>()
const valiFormData = ref({
  account: '2022117316',
	password: 'j',
  identity: ''
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
	},
  identity:{
    rules: [
      {
        required: true,
        errorMessage: '身份不能为空'
      }
    ]
  }
} as UniHelper.UniFormsRules)

const studentLogin = async ()=>{
  const param = { 
      account:valiFormData.value.account,
      password:valiFormData.value.password} as LoginRequest
    console.log(param)
    const res = await studentLoginAPI(param)
    console.log(res)
    const clientStore = useClientStore()
    if(clientStore.token != null)
      clientStore.clearToken()
    if(res.data?.token == null){
      uni.showToast({ icon: 'error', title: '账号或者密码错误' })
      throw console.error('账号或者密码错误');
    }
    clientStore.setToken(res.data.token)
}

const teacherLogin = async ()=>{
  const param = { 
      account:valiFormData.value.account,
      password:valiFormData.value.password} as LoginRequest
    console.log(param)
    const res = await teacherLoginAPI(param)
    console.log(res)
    const clientStore = useClientStore()
    if(clientStore.token != null){
      clientStore.clearToken()
      clientStore.clearIdentity()
    }
    if(res.data?.token == null){
      uni.showToast({ icon: 'error', title: '账号或者密码错误' })
      throw console.error('账号或者密码错误');
    }
    clientStore.setToken(res.data.token)
    clientStore.setIdentity(1)
}

const login = async ()=>{
  await valiForm.value!.validate()
  if(valiFormData.value.identity==='学生'){
    await studentLogin()
  }
  else if(valiFormData.value.identity==='教师'){
    await teacherLogin()
  }
  uni.showToast({ icon: 'none', title: '登录成功' })
  setTimeout(() => {
    uni.navigateBack({
      delta:1,
    })
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
    <uni-forms-item label="身份" name="identity">
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
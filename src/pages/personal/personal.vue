<script lang="ts" setup>
import {ref} from "vue"
import { onShow } from "@dcloudio/uni-app";
import type {StudentProfile} from "@/types/student/Profile"
import {getStudentProfileAPI} from "@/services/student/profile"
import {getTeacherProfileAPI} from "@/services/teacher/profile"
import { useClientStore } from "@/stores";
import type { TeacherProfile } from "@/types/teacher/Profile";
const clientStore= useClientStore()
const login=()=>{
  uni.navigateTo({
    url: '/pages/login/login'
  })
}

const quit=()=>{
  clientStore.clearToken()
  uni.reLaunch({ url: '/pages/personal/personal' })
}

const studentData=ref<StudentProfile>()
const teacherData=ref<TeacherProfile>()

const getStudentProfile = async()=>{
  const res = await getStudentProfileAPI()
  console.log(res)
  studentData.value = res.data
  console.log(studentData.value)
}

const getTeacherProfile = async()=>{
  const res = await getTeacherProfileAPI()
  console.log(res)
  teacherData.value = res.data
  console.log(teacherData.value)
}

onShow(()=>{
  if(studentData.value===undefined){
    if(clientStore.identity == 0)
      getStudentProfile()
    else
      getTeacherProfile()
  }
})
</script>

<template>
  <view class="head">
    <image :src="studentData?.avatar || `../../static/thumbnail.jpg`" class="thumbnail" mode="aspectFill"></image>
    <view class="headInfo" v-if="clientStore.identity==0">
      <view style="grid-area: 1/1/span 1/span 1;align-self: center;justify-self:start;margin-top:16px">姓名:  {{ studentData?.name }}</view>
      <view style="grid-area: 2/1/span 1/span 1;align-self: start;justify-self:start;">学号: {{studentData?.student_id}}</view>  
    </view>
    <view class="headInfo" v-else>
      <view style="grid-area: 1/1/span 1/span 1;align-self: center;justify-self:start;margin-top:16px">姓名:  {{ teacherData?.name }}</view>
      <view style="grid-area: 2/1/span 1/span 1;align-self: start;justify-self:start;">教师号: {{teacherData?.teacher_id}}</view>  
    </view>
  </view>

  <view class="baseInfo">
    <uni-list :border="true" v-if="clientStore.identity==0">
      <uni-list-item title="基本信息"></uni-list-item>
      <uni-list-item title="性别" :right-text="studentData?.sex"></uni-list-item>
      <uni-list-item title="年龄" :right-text="studentData?.age" ></uni-list-item>
      <uni-list-item title="电话" :right-text="studentData?.phone"></uni-list-item> 
      <uni-list-item title="出生日期" :right-text="studentData?.birth" ></uni-list-item>
      <uni-list-item title="身份证号码" :right-text="studentData?.id_number"></uni-list-item> 
    </uni-list>
    <uni-list :border="true" v-else>
      <uni-list-item title="基本信息"></uni-list-item>
      <uni-list-item title="性别" :right-text="teacherData?.sex"></uni-list-item>
      <uni-list-item title="年龄" :right-text="teacherData?.age" ></uni-list-item>
      <uni-list-item title="电话" :right-text="teacherData?.phone"></uni-list-item> 
      <uni-list-item title="出生日期" :right-text="teacherData?.birth" ></uni-list-item>
      <uni-list-item title="身份证号码" :right-text="teacherData?.id_number"></uni-list-item> 
    </uni-list>
  </view>

  <view class="otherInfo">
    <uni-list :border="true" v-if="clientStore.identity==0">
      <uni-list-item title="其他信息" style=""></uni-list-item>
      <uni-list-item title="政治面貌" :right-text="studentData?.political"></uni-list-item>
      <uni-list-item title="故乡" :right-text="studentData?.hometown"></uni-list-item>
      <uni-list-item title="学院" :right-text="studentData?.department"></uni-list-item>
      <uni-list-item title="班级" :right-text="studentData?.classes"></uni-list-item>
      <uni-list-item title="专业" :right-text="studentData?.major"></uni-list-item>
    </uni-list>
    <uni-list :border="true" v-else>
      <uni-list-item title="其他信息" style=""></uni-list-item>
      <uni-list-item title="政治面貌" :right-text="teacherData?.political"></uni-list-item>
      <uni-list-item title="故乡" :right-text="teacherData?.hometown"></uni-list-item>
      <uni-list-item title="学院" :right-text="teacherData?.department"></uni-list-item>
      <uni-list-item title="班级" :right-text="teacherData?.classes"></uni-list-item>
      <uni-list-item title="专业" :right-text="teacherData?.major"></uni-list-item>
    </uni-list>
  </view>

  <button type="primary" class="quit" @click="login">登录</button>
  <button type="warn" class="quit" @click="quit">注销</button>
</template>

<style lang="scss" scoped>
/* 头部信息 */
.head{
  background-color: #feeeed;
  border-radius: 10px;
  margin: 20px;
  display: grid;
  grid-template: 80px / 2fr 5fr;
  margin-top: 20px;
  margin-bottom: 10px;
}
.thumbnail{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 10px;
  align-self: center;
  justify-self: center;
  grid-area: 1/1/span 1/span 1;
}
.headInfo{
  grid-area: 1/2/span 1/span 1;
  display:grid;
  grid-template: 1fr 1fr /1fr;
}

/*主体信息*/
.baseInfo{
  margin: 20px;
  margin-top: 20px;
  margin-left: 18px;
  margin-right: 18px;
}

.otherInfo{
  margin-bottom: 15px;
  margin-top: 20px;
  margin-left: 18px;
  margin-right: 18px;
}

.quit{
  margin: 10px 40px 10px;
}

</style>
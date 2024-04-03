<script setup lang="ts">
import { ref } from 'vue';
import {getStudentFileAPI} from '@/services/student/file'
import { onShow } from '@dcloudio/uni-app';
import type { StudentFile } from '@/types/student/file';
const back = ()=>{
  uni.navigateBack({delta:1})
}

const acquireList = ref<StudentFile[]>()
const punishList = ref<StudentFile[]>()

const getStudentFile = async()=>{
  const res = await getStudentFileAPI()
  console.log(res)
  acquireList.value = res.data.filter((item:StudentFile)=>item.rap===0)
  punishList.value = res.data.filter((item:StudentFile)=>item.rap===1)
}

onShow(()=>{
  if(acquireList.value===undefined && punishList.value===undefined)
    getStudentFile()
})
</script>


<template>
  <uni-nav-bar dark title="学生档案" :border="false" left-icon="left" left-text="返回" @clickLeft="back" height="25">
  </uni-nav-bar>

  <view style="background-color: white;">
    <view class="acquire">
      <h3 style="justify-self: center;">获奖经历</h3>
      <view class="list">
        <view class="title">获奖时间</view>
        <view class="title">获奖名称</view>
        <view class="title">获奖等级</view>
      </view>
      <view class="list" style="padding-top: 8px;" v-for="(item,index) in acquireList" :key="index">
        <view>{{ item.time }}</view>
        <view style="text-align: center;">{{item.content}}</view>
        <view style="text-align: center;">{{item.result}}</view>
      </view>
    </view>
    
    <view class="punish">
      <h3 style="justify-self: center;">处罚经历</h3>
      <view class="list">
        <view class="title">处罚时间</view>
        <view class="title">处罚原因</view>
        <view class="title">处罚结果</view>
      </view>
      <view class="list" style="padding-top: 8px;" v-for="(item,index) in punishList" :key="index">
        <view>{{item.time}}</view>
        <view style="text-align: center;">{{item.content}}</view>
        <view style="text-align: center;">{{item.result}}</view>
      </view>
    </view>
    <view style="padding-bottom: 10px;"></view>
  </view>

</template>

<style lang="scss" scoped> 

.acquire{
  background-color:cornflowerblue;  
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
}

.title{
  margin-top: 5px;
}

.punish{
  background-color:crimson;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  margin-top: 10px;
}

.list{
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-auto-rows: minmax(30px, auto);
  background-color: white;
  justify-items: center;
  align-items: center;
}


</style>
<script lang="ts" setup>
import { ref } from 'vue'
import {studentClassLogAPI }from '@/services/student/classLog'
import { onShow } from '@dcloudio/uni-app';
import type { ClassLog } from '@/types/student/ClassLog';
const popup = ref<UniHelper.UniPopupInstance>()
const contentNow = ref<string>("")
const classLog= ref<ClassLog[]>()
const selectNow = ref<number>(1)

const studentClassLog = async()=>{
  const res = await studentClassLogAPI()
  console.log(res)
  classLog.value=res.data
  contentNow.value=classLog.value[0].content
}

onShow(()=>{
  if(contentNow.value=="")
    studentClassLog()
})

</script>

<template>
  <uni-popup ref="popup" type="dialog">
    <uni-popup-dialog  :showClose="false" title="详细内容">
      <scroll-view :scroll-y="true" style="height: 400px;"> {{ contentNow }} </scroll-view>
    </uni-popup-dialog>
  </uni-popup>
  
  <view class="AllContain">
    <view class="TextContain">
      <view class="index">作者</view>
      <view class="index">标题</view>
      <view class="time">时间</view>
    </view>
    <view v-for="item in classLog?.slice(selectNow*10-10,selectNow*10)" :key="item.title" class="TextContain">
        <view class="index">{{ item.author }}</view>
        <view class="title" @click="contentNow=item.content;popup?.open?.();">{{ item.title }}</view>
        <view class="time">{{ item.time }}</view>
    </view>

    <uni-pagination style="margin: 0px 10px 5px;" title="标题文字" :total="classLog?.length" :page-size="10" :current="selectNow"></uni-pagination>
  </view>


  
</template>

<style lang="scss" scoped>
.AllContain{
  display: grid;
  margin: 10px;
  margin-top: 20px;
  background-color: white;
  grid-template-columns : 1fr;
  grid-auto-rows: auto;
  border-radius: 10px;
}

.TextContain{
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-auto-rows: minmax(40px,auto);
  row-gap:20px;
}

.index{
  justify-self:center;
  align-self:center;
  text-align:center;
}


.title{
  color:cornflowerblue;
  text-align:center;
  align-self: center;
}

.time{
  align-self:center;
  justify-self: center;
}
</style>

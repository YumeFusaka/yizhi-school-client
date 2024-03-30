<script setup lang="ts">
import { ref } from 'vue'
import { onShow } from '@dcloudio/uni-app';
import {getStudentSchoolAPI} from '@/services/student/school'
import type {ScoreResult} from '@/types/student/Score'
const value = ref(0)
const range = [
  {value:0,text:"第一学年"},
  {value:1,text:"第二学年"},
  {value:2,text:"第三学年"},
  {value:3,text:"第四学年"}
]

const change = (e:any)=>{
  getStudentSchool()
}

const studentSchool = ref<ScoreResult[]>() 
const scoreSum = ref(0)
const rankSum = ref(0)
const avg = ref(0)

const countSum = ()=>{
  scoreSum.value = 0
  rankSum.value = 0
  avg.value = 0 
  for(var i=0;i<studentSchool.value!.length;i++){
    scoreSum.value+=studentSchool.value![i].score*parseFloat(studentSchool.value![i].rank)
    rankSum.value+=parseFloat(studentSchool.value![i].rank)
  }
  if(scoreSum.value!=0)
    avg.value=scoreSum.value/rankSum.value
}


const getStudentSchool = async()=>{
  const res = await getStudentSchoolAPI(value.value+1)
  studentSchool.value = res.data as ScoreResult[]
  countSum()
  console.log(res.data)
}

onShow(()=>{
  if(studentSchool.value==undefined){
    getStudentSchool()
  }
})
</script>

<template>
<uni-section title="学年成绩与绩点" type="line" style="margin: 20px;">
  <uni-data-select
    v-model="value"
    :localdata="range"
    @change="change"
    :clear="false"
  ></uni-data-select>
</uni-section>

<view class="contain">
  <view class="title">
    <view class="text">课程</view>
    <view class="text">学分</view>
    <view class="text">成绩</view>
  </view>

  <view class="score" v-for="item in studentSchool" :key="item.lesson">
    <view class="text" style="padding-left: 20px;">{{ item.lesson }}</view>
    <view class="text">{{ item.rank }}</view>
    <view class="text">{{ item.score }}</view>
  </view>
  
</view>

<view class="sum">
  <view class="text">加权总分</view>
  <view class="text">总学分</view>
  <view class="text">平均学分绩点</view>
  <view class="text">{{ scoreSum }}</view>
  <view class="text">{{ rankSum }}</view>
  <view class="text">{{ avg.toFixed(2) }}</view>
</view>
</template>

<style lang="scss" scoped>

.contain{
  margin:20px;
  border-radius: 5px;
  display:grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(30px,auto);
  background-color: white;
}

.title{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
}

.text {
  justify-self: center;
  text-align:center;
}

.score{
  display:grid;
  grid-template-columns: repeat(3,1fr);
  grid-auto-rows: minmax(40px,auto);
  background-color: white;
  row-gap: 25px;
  column-gap: 10px;
  .text {
    justify-self: center;
    align-self: center;
    text-align: center;
  }
}



.sum{
  margin:20px;
  border-radius: 5px;
  background-color: white;
  display: grid;
  gap: 10px;
  grid-template: repeat(2,30px) / repeat(3,1fr);
  align-items: center;
  .text{
    justify-self: center;
    text-align:center;
  }
}


</style>
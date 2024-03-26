<script setup lang="ts">
import { ref } from 'vue'
const value = ref(0)
const range = [
  {value:0,text:"第一学年"},
  {value:1,text:"第二学年"},
  {value:2,text:"第三学年"},
  {value:3,text:"第四学年"}
]
const change = (e:any)=>{
  
}
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

<view class="score">
  <view class="text">课程</view>
  <view class="text">学分</view>
  <view class="text">成绩</view>
  <view class="text">大学英语</view>
  <view class="text">4</view>
  <view class="text">85</view>
  <view class="text">高等数学</view>
  <view class="text">4</view>
  <view class="text">90</view>
  <view class="text">大学体育</view>
  <view class="text">4</view>
  <view class="text">78</view>
  <view class="text">大学物理</view>
  <view class="text">3</view>
  <view class="text">87</view>
  <view class="text">电工学</view>
  <view class="text">3</view>
  <view class="text">67</view>
  <view class="text">中国近代史纲要</view>
  <view class="text">3.5</view>
  <view class="text">95</view>
  <view class="text">创新创业基础</view>
  <view class="text">2</view>
  <view class="text">80</view>
</view>

<view class="sum">
  <view class="text">加权总分</view>
  <view class="text">总学分</view>
  <view class="text">平均学分绩点</view>
  <view class="text">86</view>
  <view class="text">23.5</view>
  <view class="text">88.3085</view>
</view>
</template>

<style lang="scss" scoped>
.score{
  margin:20px;
  border-radius: 5px;
  display:grid;
  grid-template-columns: repeat(3,1fr);
  grid-auto-rows: minmax(30px,auto);
  background-color: white;
  align-items: center;
  gap: 10px;
  .text {
    justify-self: center;
    text-align:center;
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
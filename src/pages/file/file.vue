<script setup lang="ts">
const back = ()=>{
  uni.navigateBack({delta:1})
}
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

        <view>2024/03/27</view>
        <view style="text-align: center;">第十四届蓝桥杯程序设计大赛</view>
        <view>全国一等奖</view>

        <view>2024/03/27</view>
        <view style="text-align: center;">ACM ICPC 亚洲区域赛</view>
        <view>金牌</view> 
      </view>
    </view>
    
    <view class="punish">
      <h3 style="justify-self: center;">处罚经历</h3>
      <view class="list">
        <view class="title">处罚时间</view>
        <view class="title">处罚原因</view>
        <view class="title">处罚结果</view>
        <view>2024/03/27</view>
        <view>上课玩手机</view>
        <view>休学1星期</view>
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
  grid-auto-rows:auto;
  background-color: white;
  justify-items: center;
  align-items: center;
  row-gap:10px
}


</style>
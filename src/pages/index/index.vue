<script setup lang="ts">
import { ref } from 'vue'
const title = ref('')

</script>

<template>
	<uni-card style="margin: 20px 20px;border-radius: 15px;background-image: linear-gradient(to right, #a8edea 0%, #fed6e3 100%);"
  title="梦浮羽" sub-title="2022117316" extra="计科2211" thumbnail="/static/thumbnail.jpg">
		<text class="uni-body">欢迎梦浮羽同学使用易智校园</text>
	</uni-card>

  <view class="my-grid">
    <view class="grid-item-box"  style="background-color: #FFFFCC;">
        <image src="@/static/home/个人.png" mode="aspectFit" style="width: 50px;height: 50px;"></image>
        <text class="text">个人资料</text>
    </view>
    <view class="grid-item-box" style="background-color: #CCFFFF;">
      <image src="@/static/home/成绩.png" mode="aspectFit" style="width: 50px;height: 50px;"></image>
      <text class="text">成绩查询</text>
    </view>
    <view class="grid-item-box" style="background-color: #CCFFE5;">
      <image src="@/static/home/通知.png" mode="aspectFit" style="width: 50px;height: 50px;"></image>
      <text class="text">信息通知</text>
    </view>
    <view class="grid-item-box" style="background-color: #FFCCFF;">
      <image src="@/static/home/日志.png" mode="aspectFit" style="width: 50px;height: 50px;"></image>
      <text class="text">班务日志</text>
    </view>
    <view class="grid-item-box" style="background-color: #FFCCCC;">
      <image src="@/static/home/评奖.png" mode="aspectFit" style="width: 50px;height: 50px;"></image>
      <text class="text">评优评奖</text>
    </view>
    <view class="grid-item-box" style="background-color: #CCCCFF;">
      <image src="@/static/home/档案.png" mode="aspectFit" style="width: 50px;height: 50px;"></image>
      <text class="text">学生档案</text>
    </view>
  </view>



  <uni-section title="紧急通知" type="line" style="margin: 10px 20px;border-radius: 15px; background-image: linear-gradient(to right, #ebc0fd 0%, #d9ded8 100%);" >
		<uni-notice-bar text="近期15栋外卖丢失现象频繁发生,请大家在外卖到达后尽快下楼取餐" />
	</uni-section>


</template>



<style lang="scss" scoped>
.image {
  width: 25px;
  height: 25px;
}

.text {
  font-size: 14px;
  margin-top: 5px;
}

.my-grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80px;
  margin-left: 18px;
  margin-right:18px;
}


.grid-item-box {
  flex: 1;
  // position: relative;
  
  display: flex;
  
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  border-radius: 15px;
  margin: 6px 4px;
}


</style>

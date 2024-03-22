<script setup lang="ts">
import { ref } from 'vue'
const title = ref('')

</script>

<template>
	<uni-card style="margin: 20px 20px;border-radius: 15px;background-image: linear-gradient(to right, #ebbba7 0%, #cfc7f8 100%);" title="梦浮羽" sub-title="2022117316" extra="计科2211" thumbnail="/static/thumbnail.jpg">
		<text class="uni-body">欢迎梦浮羽同学使用易智校园</text>
	</uni-card>

  
  <uni-grid :column="2" style="margin: 0px 10px;" :highlight="false" :showBorder="false" :square="false">
    <uni-grid-item>
      <view class="grid-item-box"  style="background-color: #FFFFCC;">
        <image src="@/static/home/个人.png" mode="aspectFit" style="width: 50px;height: 50px;"></image>
        <text class="text">个人信息</text>
      </view>
    </uni-grid-item>
    <uni-grid-item>
      <view class="grid-item-box" style="background-color: #CCFFFF;">
        <image src="@/static/home/成绩.png" mode="aspectFit" style="width: 50px;height: 50px;"></image>
        <text class="text">成绩查询</text>
      </view>
    </uni-grid-item>
    <uni-grid-item>
      <view class="grid-item-box" style="background-color: #CCFFE5;">
        <image src="@/static/home/通知.png" mode="aspectFit" style="width: 50px;height: 50px;"></image>
        <text class="text">通知信息</text>
      </view>
    </uni-grid-item>
    <uni-grid-item>
      <view class="grid-item-box" style="background-color: #FFCCFF;">
        <image src="@/static/home/日志.png" mode="aspectFit" style="width: 50px;height: 50px;"></image>
        <text class="text">班务日志</text>
      </view>
    </uni-grid-item>
    <uni-grid-item>
      <view class="grid-item-box" style="background-color: #FFCCCC;">
        <image src="@/static/home/评奖.png" mode="aspectFit" style="width: 50px;height: 50px;"></image>
        <text class="text">评优评奖</text>
      </view>
    </uni-grid-item>
    <uni-grid-item>
      <view class="grid-item-box" style="background-color: #CCCCFF;">
        <image src="@/static/home/档案.png" mode="aspectFit" style="width: 50px;height: 50px;"></image>
        <text class="text">学生档案</text>
      </view>
    </uni-grid-item>
  </uni-grid>
  <uni-section title="紧急通知" type="line" style="margin: 10px 20px;border-radius: 15px;background: linear-gradient(135deg, #c850c0, #4158d0);" >
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


	.grid-item-box {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10px 0;
	}

.grid-item-box{
  border-radius: 15px;
  margin: 6px 4px;
}
</style>

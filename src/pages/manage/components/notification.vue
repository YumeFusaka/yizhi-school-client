<script lang="ts" setup>
import { ref } from 'vue'
const popup = ref<UniHelper.UniPopupInstance>()
const contentList = [
  `下午第一节下课后请寝室长们留一下`
] as string[];
const str = ref<string>(contentList[0])
</script>

<template>
  <uni-popup ref="popup" type="dialog">
    <uni-popup-dialog  :showClose="false" title="详细内容">
      <scroll-view :scroll-y="true" style="height: 400px;"> {{ str }} </scroll-view>
    </uni-popup-dialog>
  </uni-popup>
  
  <view class="AllContain">
    <view class="TextContain">
      <view class="index">作者</view>
      <view class="index">标题</view>
      <view class="index">时间</view>

      <view class="title">杭波</view>
      <view class="content" @click="popup?.open?.(); str = contentList[0]">寝室长开会</view>
      <view class="time">2024/03/26</view>

    </view>

    <uni-pagination style="margin: 0px 10px 5px;" title="标题文字" :total="50" :current="2"></uni-pagination>
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
  grid-auto-rows: auto;
  row-gap:10px;
}

.index{
  justify-self:center;
  align-self:center;
}

.title{
  align-self:center;
  justify-self: center;
}

.content{
  color:cornflowerblue;
  text-align: center;
}

.time{
  align-self:center;
  justify-self: center;
}
</style>

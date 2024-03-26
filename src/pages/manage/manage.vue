<script lang="ts" setup>
import classLog from '@/pages/manage/components/class-log.vue'
import notification from '@/pages/manage/components/notification.vue'
import { ref } from 'vue'
const nowTitle = ref<string>('信息通知')
</script>

<template>
  <view class="head">
    <h2 style="justify-self: center;align-self: center;"> {{nowTitle}} </h2>
    <view class="select">
      <button style="background-color: #FFCCE5;" size="mini" @click="nowTitle = '信息通知'">
        信息通知
      </button>
      <button style="background-color: #FFFFCC;" size="mini" @click="nowTitle = '班务日志'">
        班务日志
      </button>
    </view>
  </view>
  
  
  <view v-if="nowTitle === '信息通知'">
    <classLog/>
  </view>
  <view v-else>
    <notification/>
  </view>
</template>

<style lang="scss" scoped>
.head{
  margin: 20px 40px 20px;
  border-radius: 10px;
  background-color: white;
  display: grid;
  grid-template: 30px 40px / 1fr;
}

.select{
  border-radius: 10px;
  display:grid;
  grid-template: 40px/repeat(2,1fr);
  align-items:center;
  justify-items:center;
}
</style>
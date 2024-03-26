<script lang="ts" setup>
import classLog from '@/pages/manage/components/class-log.vue'
import notification from '@/pages/manage/components/notification.vue'
</script>

<template>
  <view class="select">
    <button style="background-color: #FFCCE5;">
      信息通知
    </button>
    <button style="background-color: #FFFFCC;">
      班务日志
    </button>
  </view>
  
  <view v-if="true">
    <classLog/>
  </view>
  <view v-else>
    <notification/>
  </view>
</template>

<style lang="scss" scoped>
.select{
  margin:20px;
  border-radius: 10px;
  display:grid;
  grid-template: 60px/repeat(2,1fr);
  align-items:center;
  justify-items:center;
}
</style>
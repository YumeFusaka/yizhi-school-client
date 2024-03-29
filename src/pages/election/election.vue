<script setup lang="ts">
const back = ()=>{
  uni.navigateBack({delta:1})
}
</script>


<template>
  <uni-nav-bar dark title="评优评奖" :border="false" left-icon="left" left-text="返回" @clickLeft="back" height="25">
  </uni-nav-bar>
</template>

<style lang="scss" scoped> 

</style>
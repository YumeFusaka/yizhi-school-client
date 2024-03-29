<script lang="ts" setup>
import {ref} from "vue"
const login=()=>{
  uni.navigateTo({
    url: '/pages/login/login'
  })
}
</script>

<template>
  <view class="head">
    <image src="@/static/thumbnail.jpg" class="thumbnail" mode="aspectFill"></image>
    <view class="headInfo">
      <view style="grid-area: 1/1/span 1/span 1;align-self: center;justify-self:start;margin-top:16px">姓名: 梦浮羽</view>
      <view style="grid-area: 2/1/span 1/span 1;align-self: start;justify-self:start;">学号: 2022117316</view>  
    </view>
  </view>

  <view class="baseInfo">
    <uni-list :border="true">
      <uni-list-item title="基本信息"></uni-list-item>
      <uni-list-item title="性别" right-text="男"></uni-list-item>
      <uni-list-item title="年龄" right-text="20" ></uni-list-item>
      <uni-list-item title="电话" right-text="19353303242"></uni-list-item> 
      <uni-list-item title="出生日期" right-text="2004-04-14" ></uni-list-item>
      <uni-list-item title="身份证号码" right-text="421126200404140013"></uni-list-item> 
    </uni-list>
  </view>

  <view class="otherInfo">
    <uni-list :border="true">
      <uni-list-item title="其他信息" style=""></uni-list-item>
      <uni-list-item title="政治面貌" right-text="群众"></uni-list-item>
      <uni-list-item title="故乡" right-text="湖北省黄冈市"></uni-list-item>
      <uni-list-item title="学院" right-text="计算机工程学院"></uni-list-item>
      <uni-list-item title="班级" right-text="2211班"></uni-list-item>
      <uni-list-item title="专业" right-text="计算机科学与技术"></uni-list-item>
    </uni-list>
  </view>

  <button type="primary" class="quit" @click="login">登录</button>
  <button type="warn" class="quit">注销</button>
</template>

<style lang="scss" scoped>
/* 头部信息 */
.head{
  background-color: #feeeed;
  border-radius: 10px;
  margin: 20px;
  display: grid;
  grid-template: 80px / 2fr 5fr;
  margin-top: 20px;
  margin-bottom: 10px;
}
.thumbnail{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 10px;
  align-self: center;
  justify-self: center;
  grid-area: 1/1/span 1/span 1;
}
.headInfo{
  grid-area: 1/2/span 1/span 1;
  display:grid;
  grid-template: 1fr 1fr /1fr;
}

/*主体信息*/
.baseInfo{
  margin: 20px;
  margin-top: 20px;
  margin-left: 18px;
  margin-right: 18px;
}

.otherInfo{
  margin-bottom: 15px;
  margin-top: 20px;
  margin-left: 18px;
  margin-right: 18px;
}

.quit{
  margin: 10px 40px 10px;
}

</style>
<script lang="ts" setup>
import { ref } from 'vue'
const popup = ref<UniHelper.UniPopupInstance>()
const contentList = [`《原神》是由中国公司 miHoYo 开发和发布的一款开放世界冒险游戏。游戏首次在 2020 年发布，可以在多个平台上玩，包括 Windows、PlayStation 4、iOS、Android，以及 Nintendo Switch。

在《原神》中，玩家扮演的是一位被称为"旅行者"的角色，他在多个世界中旅行，寻找他的失散兄弟或姐妹。游戏目前包含了几个大的区域，每个区域都有自己的文化和风景，以及独特的任务和故事。

游戏的战斗系统基于角色的元素属性，通过组合不同元素属性可以产生各种效果。此外，游戏还包含了解谜和探索元素，玩家可以在开放世界中自由探索，寻找隐藏的宝藏和秘密。

《原神》以其精美的画面、丰富的世界观和深度的角色系统受到了玩家的热烈欢迎。`,
`这片银河中有名为“星神”的存在，他们造就现实，抹消星辰，在无数“世界”中留下他们的痕迹。
你——一名特殊的旅客，将与继承“开拓”意志的同伴一起，乘坐星穹列车穿越银河，沿着某位“星神”曾经所行之途前进。
你将由此探索新的文明，结识新的伙伴，在无数光怪陆离的“世界”与“世界”之间展开新的冒险。所有你想知道的，都将在群星中找到答案。
那么，准备好开始这段“开拓”之旅了吗？
愿此行，终抵群星。`];
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

      <view class="title">原神</view>
      <view class="content" @click="popup?.open?.(); str = contentList[0]">《原神》是由中国公司 miHoYo 开发和发布的一款开放世界冒险游戏。</view>
      <view class="time">2024/03/26</view>

      <view class="title">崩坏:星穹铁道</view>
      <view class="content" @click="popup?.open?.(); str = contentList[1]">
        这片银河中有名为“星神”的存在，他们造就现实，抹消星辰，在无数“世界”中留下他们的痕迹。
      </view>
      <view class="time">2024/03/27</view>
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
  text-align: center;
}

.content{
  color:cornflowerblue;
  text-align:center;
}

.time{
  align-self:center;
  justify-self: center;
}
</style>

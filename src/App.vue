<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style lang="less">
body {
  background: url('/static/b.png') no-repeat center center fixed ;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
}
</style>

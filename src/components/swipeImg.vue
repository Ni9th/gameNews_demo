<template>
  <div>
    <van-swipe class="swiper-wrap">
      <van-swipe-item class="swipe-item"></van-swipe-item>
      <van-swipe-item class="swipe-item"></van-swipe-item>
      <van-swipe-item class="swipe-item"></van-swipe-item>
      <van-swipe-item class="swipe-item"></van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'

Vue.use(Swipe)
Vue.use(SwipeItem)
export default {

}
</script>
<style scoped>
.swipe-wrap{
  display: block;
  /* line-height: 12rem; */
  /* align-content: center ; */
  /* width: 5px */
}
.swipe-item {
  /* display: block; */
  /* line-height: 12rem; */
  background-color: #6b48ff;
  height: 12rem;
  width: 5rem
}
</style>

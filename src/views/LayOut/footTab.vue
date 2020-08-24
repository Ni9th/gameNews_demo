<template>
  <van-tabbar route class="foot-tab" v-model="footIndex">
    <van-tabbar-item replace :to="{name: '首页1'}" icon="home-o" class="foot-tab-item">
      首页
    </van-tabbar-item>
    <van-tabbar-item replace :to="{name: '游戏1'}" icon="play-circle-o" class="foot-tab-item">
      找游戏
    </van-tabbar-item>
    <van-tabbar-item replace :to="{name: '攻略1'}" icon="comment-o" class="foot-tab-item">
      查攻略
    </van-tabbar-item>
    <van-tabbar-item replace :to="{name: '社区1'}" icon="friends-o" class="foot-tab-item">
      圈子
    </van-tabbar-item>
    <van-tabbar-item replace to="/personalCenter" icon="user-o" class="foot-tab-item">
      我的
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant'
import Vue from 'vue'
Vue.use(Tabbar)
Vue.use(TabbarItem)
export default {
  data () {
    return {
      footIndex: 0
    }
  },
  methods: {
    // onTap () {
    //   this.$emit('footTap')
    // }
  }
}
</script>
<style  scoped>
  .foot-tab {
    height: 2.8rem;
    width: 100%;
    overflow: hidden;
    position: absolute;
    left: 0;bottom: 0;
    font-size: 0.65rem;
  }
  .foot-tab-item {
    height: 100%;
    width:20%;
    position: relative;
    float: left;
  }
</style>

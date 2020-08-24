<template>
  <div class="headNav">
    <van-nav-bar @click-left="goBack" left-arrow @click-right='switchFont' class="navBar">
      <template #right>
        <van-icon name="ellipsis"></van-icon>
      </template>
      <template #title>
        <van-tabs v-model="activeTab" class="navTabs" color='#000' @click="conLog">
          <van-tab title="正文" > 123</van-tab>
          <van-tab title="评论" >456</van-tab>
        </van-tabs>
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
import Vue from 'vue'
import { NavBar, Tab, Tabs, Icon } from 'vant'

Vue.use(NavBar)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Icon)
export default {
  data () {
    return {
      activeTab: 0
    }
  },
  props: {
    newsObj: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    switchFont () {
      this.$$emit('isSwitchFont')
    },
    conLog () {
      console.log(this.newsObj)
    }
  }
}
</script>
<style scoped>
.headNav {
  width: 100%;
  height: 3rem;
  position: absolute;
  left: 0;
  top: 0;
}
.navBar {
  width: 100%;
  height: 3rem;
}
.navTabs {
  width: 100%;
  height: 100%;
}
</style>

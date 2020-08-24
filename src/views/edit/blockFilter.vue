<template>
  <div class="pWrapper">
    <van-nav-bar left-arrow @click-left='backPage'>
      <template #title>
        <p>请选择发往的圈子 <van-icon name="arrow-up" color="#000" size=".8rem" /></p>
      </template>
    </van-nav-bar>
    <b-filter></b-filter>
  </div>
</template>
<script>
import bFilter from '../community/filter'
import Vue from 'vue'
import { NavBar, Icon } from 'vant'

Vue.use(NavBar, Icon)
export default {
  components: {
    bFilter
  },
  methods: {
    backPage () {
      this.$router.replace({ name: 'edit' })
    }
  }
}
</script>
<style scoped>

</style>

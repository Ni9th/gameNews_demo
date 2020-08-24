<template>
  <div id="app">
    <transition :name="animate">
        <keep-alive>
          <router-view id="view"></router-view>
        </keep-alive>
    </transition>
    <login :class='{ "login-active": loginPage }'></login>
    <!-- <router-view id="views"></router-view> -->
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import login from '_c/login.vue'
export default {
  components: {
    login
  },
  data () {
    return {
      animate: ''
    }
  },
  watch: {
    // $route (to, from) {
    //   /*
    //   0: 不做动画
    //   1: 左切换
    //   2: 右切换
    //   3: 上切换
    //   4: 下切换
    //     */
    //   const animate = this.$router.animate || to.meta.slide
    //   if (!animate) {
    //     this.animate = from.meta.slide === 1 ? 'slide-right'
    //       : from.meta.slide === 2 ? 'slide-left'
    //         : from.meta.slide === 3 ? 'slide-bottom'
    //           : from.meta.slide === 4 ? 'slide-top' : ''
    //   } else {
    //     this.animate = animate === 1 ? 'slide-left'
    //       : animate === 2 ? 'slide-right'
    //         : animate === 3 ? 'slide-top'
    //           : animate === 4 ? 'slide-bottom' : ''
    //   }
    //   this.$router.animate = 0
    // }
    $route (to, from) {
      /*
                0: 不做动画
                1: 左切换
                2: 右切换
                3: 上切换
                4: 下切换
                 */
      let animate = this.$router.animate || to.meta.slide
      if (!animate) {
        this.animate = ''
      } else {
        this.animate = animate === 1 ? 'slide-left'
          : animate === 2 ? 'slide-right'
            : animate === 3 ? 'slide-top'
              : animate === 4 ? 'slide-bottom' : ''
      }
      this.$router.animate = 0
    }
  },
  computed: {
    ...mapGetters([
      'loginPage'
    ])
  }
}
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fff;
  height: 100%;
  width: 100%;
}
.login-active{
  top: 0;
  opacity: 1;
}
#view {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
    }

  .slide-left-enter,
  .slide-right-leave-active {
      opacity: 0;
      transform: translate(100%, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
      opacity: 0;
      transform: translate(-100%, 0);
  }

  .slide-top-enter,
  .slide-bottom-leave-active {
      opacity: 0;
      transform: translate(0, 100%);
  }

  .slide-top-leave-active,
  .slide-bottom-enter {
      opacity: 0;
      transform: translate(0, -100%);
  }
  .v-enter, .v-leave{
    opacity: 0;
  }
</style>

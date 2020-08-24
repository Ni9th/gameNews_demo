<template>
    <div class="app-wrapper">
        <head-tab></head-tab>
        <router-view class="main-content"></router-view>
        <footTab></footTab>
    </div>
</template>
<script>
import footTab from './footTab'
import headTab from './headTab'

export default {
  components: {
    headTab,
    footTab
  },
  data () {
    return {
      activePage: 'homeHeadList',
      headList: 'this.homeTopicList'
    }
  },
  methods: {
  }
}
</script>
<style scoped>
  .app-wrapper {
    height: 100%;
    width: 100%;
  }
  .main-content {
    width: 100%;
    position: relative;
    height: calc(100% - 6.2rem);
    overflow-y: scroll

  }
</style>

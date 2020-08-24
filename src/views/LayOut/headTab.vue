<template>
    <div class="head-wrap">
      <div class="tabs-wrapper">
        <van-tabs v-model="activeTab" swipeable>
          <van-tab
          v-for="topic in topicList"
          :key="topic.index"
          :to=topic.path
          :title=topic.name
          :name=topic.name></van-tab>
         </van-tabs>
      </div>
      <van-icon class="search-icon" @click="toSearch" name="search" color="#3b3b3b" />
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Vue from 'vue'
import { Icon, Tab, Tabs } from 'vant'

Vue.use(Icon)
Vue.use(Tab)
Vue.use(Tabs)
export default {
  props: {
    // footIndex: {
    //   type: Number,
    //   default () {
    //     return 0
    //   }
    // }
  },
  data () {
    return {
      activeTab: 0
    }
  },
  methods: {
    topLink () {
      this.router.push('About')
    },
    toSearch () {
      this.$router.push({ name: 'search' })
    }
  },
  computed: {
    ...mapGetters([
      'homeTopicList',
      'gamesTopicList',
      'SteagetyTopicList',
      'communityTopicList'
    ]),
    topicList: function () {
      // let list = this.$route.name === '首页' ? this.homeTopicList : []
      const list = this.$route.name.includes('首页') ? this.homeTopicList
        : this.$route.name.includes('游戏') ? this.gamesTopicList
          : this.$route.name.includes('攻略') ? this.SteagetyTopicList
            : this.$route.name.includes('社区') ? this.communityTopicList : []
      return list
    }
  },
  watch: {
    // footIndex: function (newV, oldV) {
    //   this.activeTab = newV === 0 ? 1 : 0
    // }
    $route (to, from) {
      if (to.name.slice(0, 2) !== from.name.slice(0, 2)) {
        this.activeTab = 0
      } else if (to.name === from.name.slice(0, 2) + '1') {
        this.activeTab = 0
      }
    }
  }
}
</script>
<style scoped>
  .head-wrap {
    height: 3.4rem;
    width: 100%;
    display: block;
    position: relative;
    top: 0; left: 0;
  }
  .tabs-wrapper{
    width: calc(100% - 2.7rem);
  }
  .search-icon {
    font-size: 1.7rem;
    position: absolute;
    top: .5rem; right: 1rem;
  }
</style>

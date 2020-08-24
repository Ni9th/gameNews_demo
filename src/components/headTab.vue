<template>
    <div class="head-wrap">
      <van-tabs v-model="activeTab">
        <van-tab
        v-for="topic in topicList"
         :key="topic.index"
         :to=topic.path
         :title=topic.name
         :name=topic.name></van-tab>
      </van-tabs>
      <van-icon class="search-icon" name="search" color="#3b3b3b" />
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
    topicList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      activeTab: '头条',
      tabList: [
        {
          tabName: '热门',
          newsList: '热门页面'
        }, {
          tabName: '游戏',
          newsList: '游戏页面'
        }
      ]
    }
  },
  methods: {
    topLink () {
      this.router.push('About')
    }
  },
  computed: {
    ...mapGetters([
      'homeTopicList',
      'gamesTopicList',
      'SteagetyTopicList',
      'communityTopicList'
    ])
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
  .search-icon {
    font-size: 1.7rem;
    position: absolute;
    top: 1rem; right: 1rem;
  }
</style>

<template>
  <div class="home">
    <!-- 顶部 -->
    <!-- <headTab :topicList='homeTopicList'></headTab> -->
    <!-- 中间主要画面 -->
    <swipe-img></swipe-img>
    <van-list class="list" @load="moreNews">
      <div v-for="item in nList" :key="item.id" @click="toNews(item)" class="newsItem">
        <div v-if="item.postImg.length == 1 || item.title.length > 29" class="smallNewsItem">
          <div class="listBoxL">
            <p class="newsTitleS">{{ item.title }}</p>
            <span class="newsMes">{{ item.postTime }} {{ item.comment }}评论</span>
          </div>
          <div class="listBoxR">
            <img :src='item.postImg[0]' />
          </div>
        </div>
        <div v-else class="bigNewsItem">
          <p class="newsTitleL">{{ item.title }}</p>
          <div class="imgsBox">
            <img :src='item.postImg[0]' />
            <img :src='item.postImg[1]' />
            <img :src='item.postImg[2]' />
          </div>
          <div class="newsMes"><span>{{ item.postTime }} {{ item.comment }}评论</span></div>
        </div>
      </div>
    </van-list>
    <!-- {{ msg }} -->
  </div>
</template>

<script>
import swipeImg from '_c/swipeImg.vue'
import { mapGetters } from 'vuex'
import { throttle } from '@/lib/util.js'
import Vue from 'vue'
import { List } from 'vant'

Vue.use(List)

export default {
  components: {
    swipeImg
  },
  data () {
    return {
      isTouchAble: true,
      loadMoreNews: null
    }
  },
  created () {
    this.newsList.length || this.$store.dispatch('getMoreNews')
  },
  computed: {
    ...mapGetters([
      'homeTopicList',
      'newsList'
    ]),
    nList () {
      return [...this.newsList]
    }
  },
  methods: {
    toNews (news) {
      this.$router.push({ name: 'article', params: { news: news, id: news.newsId } })
    },
    disMoreNews () {
      this.$store.dispatch('getMoreNews')
    },
    moreNews () {
      if (!this.loadMoreNews) this.loadMoreNews = throttle(this.disMoreNews.bind(this), 1000)
      this.loadMoreNews()
    }
  }
}
</script>
<style scoped>
/* .home {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
} */
.main-box {
  height: 93%;
  width: 100%;
}
.swiper-wrapper {
  height: 100%;
  width: 100;
  position: relative;
  display: block;
}
.newsItem{
  margin: .5rem 0
}
.bigNewsItem{
  height: 8.6rem;
  margin: .2rem 1rem;
  overflow: hidden;
  /* margin-top: .2rem; */
}
.smallNewsItem{
  height: 5.2rem;
  overflow: hidden;
  margin: .2rem 1rem;
  display: flex;
  align-items: left;
  justify-content: space-around;
}
.listBoxL{
  width: 70%;
}
.listBoxR{
  width: 33%;
  height: 100%;
}
.listBoxR img{
  /* height: 5.2rem; */
  width: 100%;
  height: 100%;
  margin: .1rem;
  border-radius: .3rem;
}
.newsTitleS{
  display: block;
  height: 4.2rem;
  width: 100%;
  font-size: .95rem;
  line-height: 1.3rem;
  text-align: left;
}
.newsMes{
  display: inline-block;
  text-align: left;
  font-size: .85rem;
  width: 100%;
}

.newsTitleL{
  /* display: block; */
  /* height: 2.4rem; */
  font-size: .95rem;
  line-height: 1.1rem;
  text-align: left;
  margin-bottom: .2rem;
}
.imgsBox{
  width: 100%;
  height: 5.2rem;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.imgsBox img{
  width: 32%;
  height: 100%;
  border-radius: .3rem;
}
</style>

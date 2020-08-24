<template>
  <div class="p-wrapper">
    <van-list class="list-wrapper" @load="moreNews">
       <div v-for="(news, index) in nList" :key="index" @click="toNews(news)">
        <div class="newsItem">
          <div class="newsL">
            <p class="newsTitle">{{ news.title }}</p>
            <span class="newsMes">{{ news.postTime }}     评论{{ news.comment }}</span>
          </div>
          <div class="newsR">
            <img :src="news.postImg[0]" />
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>
<script>
import Vue from 'vue'
import { throttle } from '@/lib/util.js'
import { List } from 'vant'
import { mapGetters } from 'vuex'

Vue.use(List)
export default {
  data () {
    return {
      loadMoreNews: null
    }
  },
  computed: {
    ...mapGetters([
      'newsList'
    ]),
    nList () {
      return [...this.newsList]
    }
  },
  methods: {
    disMoreNews () {
      this.$store.dispatch('getMoreNews')
    },
    moreNews () {
      if (!this.loadMoreNews) this.loadMoreNews = throttle(this.disMoreNews.bind(this), 1000)
      this.loadMoreNews()
    },
    toNews (news) {
      this.$router.push({ name: 'article', params: { news: news, id: news.newsId } })
    }
  }
}
</script>
<style scoped>
.list-wrapper{
  width: 100%;
  height: 100%;
  display: block;
}
.newsItem{
  height: 5.2rem;
  overflow: hidden;
  margin: .5rem .7rem;
  display: flex;
  align-items: left;
  justify-content: space-around;
}
.newsL{
  width: 69%;
  height: 100%;
}
.newsR{
  width: 30%;
  height: 100%;
}
.newsTitle{
  display: block;
  width: 100%;
  height: 4.2rem;
  padding-right: .5rem;
  text-align: left;
  font-size: .95rem;
  line-height: 1.2rem;
}
.newsMes{
  display: inline-block;
  font-size: .85rem;
  text-align: left;
  width: 100%;
}
.newsR img{
  width: 100%;
  height: 100%;
  border-radius: .3rem;
}
</style>

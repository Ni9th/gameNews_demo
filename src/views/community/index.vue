<template>
  <div class="pWrapper">
    <div class="hwrapper">
      <ul class="headList van-hairline-bottom">
        <li v-for="(game, index) in gList1" :key="index" class="navBtn" @click='toDetail(game)'>
          <van-image style="border-radius: .3rem; overflow: hidden"  width="3.5rem" height="3.5rem" :src="game.post" fit="cover" />
          <p>{{ game.name }}</p>
        </li>
      </ul>
    </div>
    <!-- 推荐话题 -->
    <div class="hotTopicWrapper">
      <div class="htTitle">
        <p>推荐话题</p>
        <span>发现更多 <van-icon name="arrow" size=".7rem" /></span>
      </div>
      <div class="htList">
        <ul>
          <li v-for="topic in hotTopic" :key="topic.index">
            <p class="van-multi-ellipsis--l2">{{ topic.topicName }}</p>
            <span>{{ topic.discussed }}人讨论</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 轮播 -->
    <van-swipe :show-indicators="true" :autoplay="5000" class="van-hairline-bottom swBox">
      <van-swipe-item v-for="news in nList1" :key="news.newsId" @click='toAPage(news)'>
        <van-image
        width="95%"
        height="6rem"
        fit="cover"
        :src="news.postImg[0]"
        class="swImg" />
      </van-swipe-item>
    </van-swipe>
    <!-- 帖子列表 -->
    <div class="articalHead">
      <van-tabs v-model="activeTab" color='#000' class="articalTab">
        <van-tab title-style='width: 4rem; overflow: hidden' title="全部"></van-tab>
        <van-tab title-style='width: 4rem; overflow: hidden' title="热门"></van-tab>
        <van-tab title-style='width: 4rem; overflow: hidden' title="精品"></van-tab>
      </van-tabs>
      <div class="headSwitch" v-if="!postFirst" @click='firstSw'>
        <span>
          <van-icon size="1.2rem" name="arrow-up" color="#000"/>
          <van-icon size="1.2rem" name="arrow-down" color="#dadada"/>
        </span>
        <span>
          最新回复
        </span>
      </div>
      <div class="headSwitch" v-else @click='firstSw'>
        <span>
          <van-icon size="1.2rem" name="arrow-up" color="#dadada"/>
          <van-icon size="1.2rem" name="arrow-down" color="#000"/>
        </span>
        <span>
          最新发布
        </span>
      </div>
    </div>
    <van-list class="newsList" @load="moreComment">
      <div v-for="news in (postFirst ? nList1 : nList2)" :key="news.newsId" class="newsBox" @click='toAPage(news)'>
        <div class="newsHead">
          <van-image width="2.2rem" height="2.2rem" round :src="news.authorImg" class="headImg"></van-image>
          <div class="authorMes">
            <p>{{ news.author }}</p>
            <span>{{ news.postDate }}</span>
          </div>
        </div>
        <div class="newsContent">
          <p class="van-multi-ellipsis--l3">{{ news.newsContent }}</p>
          <div class="postBox">
            <van-image v-for="(post, index) in news.postImg"
            :key="index"
            :src="post"
            width="7rem"
            height="7rem"
            fit="cover"
            class="newsPost"/>
          </div>
        </div>
        <div class="exMessage">
          <p>{{ news.block }}</p>
          <span> <van-icon size="1rem" name="good-job-o" /> {{ news.admired }}</span>
          <span> <van-icon size="1rem" name="comment-o" /> {{ news.comment }}</span>
        </div>
      </div>
    </van-list>
    <div class="editBtn" @click='toEditPage'>
      <van-icon name="edit" color="#fff" size="2.5rem"></van-icon>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Vue from 'vue'
import { throttle } from '@/lib/util.js'
import { Image as VanImage, Cell, Icon, Swipe, SwipeItem, Tab, Tabs, List } from 'vant'

Vue.use(VanImage)
Vue.use(Cell)
Vue.use(Icon)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(List)
export default {
  created () {
    this.gameList.length || this.$store.dispatch('getGameList')
    this.hotTopic.length || this.$store.dispatch('getHotTopic')
    this.newsList.length || this.$store.dispatch('getMoreNews')
  },
  data () {
    return {
      activeTab: 0,
      postFirst: true,
      loadMoreComment: null
    }
  },
  computed: {
    ...mapGetters([
      'gameList',
      'hotTopic',
      'newsList',
      'isLogin'
    ]),
    nList () {
      return [...this.newsList]
    },
    gList () {
      return [...this.gameList]
    },
    gList1 () {
      const arr = []
      for (let i = 10; i > 0; i--) {
        arr.push(this.gameList[i])
      }
      return arr
    },
    nList1 () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      const arr2 = [...this.nList]
      arr2.sort((a, b) => a.postDate > b.postDate ? -1 : 1)
      return arr2
    },
    nList2 () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      const arr2 = [...this.nList]
      arr2.sort((a, b) => a.lastDiscussDate > b.lastDiscussDate ? -1 : 1)
      return arr2
    }
  },
  methods: {
    disMoreComment () {
      this.$store.dispatch('getMoreNews')
    },
    moreComment () {
      if (!this.loadMoreComment) {
        this.loadMoreComment = throttle(this.disMoreComment.bind(this), 1000)
      }
      this.disMoreComment()
    },
    toEditPage () {
      this.isLogin ? this.$router.push({ name: 'edit' }) : this.$store.dispatch('swLoginPage')
    },
    toAPage (news) {
      this.$router.push({ name: 'article', params: { news: news, id: news.newsId } })
    },
    toDetail (game) {
      this.$router.push({ name: 'gameDetails', params: { theGame: game, id: game.Id } })
    },
    firstSw () {
      this.postFirst = !this.postFirst
    }
  }
}
</script>
<style scoped>
.pWrapper{
  width: 100%;
  height: calc(100% - 6.2rem);
  overflow-y: scroll;
}
.hwrapper{
  width: 100%;
  height: 5rem;
  overflow-x: scroll;
}
.hwrapper::-webkit-scrollbar {display:none}
.headList{
  width: 200%;
  height: 100%;
  /* overflow-x: scroll;
  overflow: hidden; */
  /* display: flex; */
  /* align-items: space-between; */
}
.navBtn{
  /* flex: 1 1 auto; */
  float: left;
  width: 10%;
  height: 100%;
  padding: .5rem;
}
.navBtn::after{
  clear: both;
}
.navBtn p{
  font-size: .5rem;
}
.hotTopicWrapper{
  width: 100%;
  height: 10rem;
  overflow: hidden;
}
.htTitle{
  width: 100%;
  height: 3.3rem;
  position: relative;
}
.htTitle p {
  display: block;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 3.3rem;
  padding-left: .5rem;
  text-align: left;
}
.htTitle span {
  position: absolute;
  right: .5rem;top: 1.2rem;
  font-size: .7rem;
  line-height: 1rem;
}
.htList{
  width: 100%;
  height: calc(100% - 3.3rem);
  overflow-x: scroll;
}
.htList::-webkit-scrollbar {display:none}
.htList ul{
  width: 400%;
  height: 100%;
}
.htList li{
  width: 9%;
  height: 80%;
  margin: .45rem;
  border: .1rem solid #dadada;
  border-radius: .3rem;
  float: left;
}
.htList li>p{
  display: block;
  width: 100%;
  height: 70%;
  padding: .3rem;
  text-align: left;
  font-size: .95rem;
  font-weight: 600;
}
.htList li>span{
  display: inline-block;
  width: 100%;
  height: 30%;
  text-align: left;
  font-size: .85rem;
  font-weight: 400;
  padding-left: .5rem;
}

.articalTab{
  width: 40%;
  overflow: hidden;
}
.articalHead{
  width: 100%;
  height: 2.9rem;
  overflow: hidden;
  position: relative;
}
.headSwitch{
  position: absolute;
  top: .48rem;
  right: .5rem;
  font-size: .9rem;
  line-height: 1.1rem;
}
.newsList{
  width: 100%;
  height: auto;
}
.newsBox{
  width: 100%;
  min-height: 5rem;
  overflow: hidden;
  margin-top: .5rem;
  border-bottom: .15rem solid rgb(208, 216, 208);
}
.newsHead{
  height: 2.2rem;
  width: 100%;
  padding-left: .5rem;
  overflow: hidden;
  text-align: left;
}
.authorMes{
  display: inline-block;
  padding-left: .5rem;
}
.authorMes p{
  font-weight: 700;
}
.authorMes span{
  font-size: .65rem;
  font-weight:lighter
}
.newsContent{
  width: 100%;
  padding: .5rem;
}
.newsContent p{
  margin-bottom: .2rem;
  line-height: 1.3rem;
}
.postBox{
  width: 100%;
  display: flex;
}
.newsPost{
  border-radius: .5rem;
  overflow: hidden;
  margin: 0 .2rem;
}
.exMessage{
  text-align: left;
  margin-bottom: .5rem;
}
.exMessage p{
  display: inline-block;
  padding-left: .7rem;
  font-size: .9rem;
}
.exMessage span{
  display: block;
  float: right;
  font-size: 1rem;
  line-height: 2rem;
  font-weight:lighter;
  margin-right: .5rem;
}
.editBtn{
  width: 3rem;
  height: 3rem;
  background-color: #000;
  border-radius: 50%;
  overflow: hidden;
  line-height: 3rem;
  position:fixed;
  right: 2rem;
  bottom: 4rem;
}
</style>

<template>
  <div  class="page-wrapper">
    <swipe-img></swipe-img>
    <!-- 陈列部分 -->
    <!-- 最新上市游戏 -->
    <div class="displayTopic">
      <p class="topic">最新上市</p>
      <span class="moreBtn">更多 <van-icon name="arrow" /> </span>
      <van-tabs v-model="active1" class="stageTab">
        <van-tab title="PC" name="PC"></van-tab>
        <van-tab title="PS4" name="PS4"></van-tab>
        <van-tab title="NS" name="NS"></van-tab>
        <van-tab title="XBONE" name="XBONE"></van-tab>
      </van-tabs>
      <ul class="gList-wrapper">
        <li class="game-box" v-for="game in gList1" :key="game.postDate" @click="toGameDetail(game)">
          <div class="postBox">
            <img class="gamePost" :src='game.post' >
          </div>
          <div class="gameMes">
            <p>{{ game.name }}</p>
            <span>{{ game.postDate }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import swipeImg from '_c/swipeImg.vue'
import Vue from 'vue'
import { Icon, Tab, Tabs } from 'vant'
import { mapGetters } from 'vuex'

Vue.use(Icon)
Vue.use(Tab)
Vue.use(Tabs)
export default {
  components: {
    swipeImg
  },
  created () {
    this.gameList.length || this.$store.dispatch('getGameList')
    this.gList = this.gameList
  },
  data () {
    return {
      active1: 'PC',
      gList: []
    }
  },
  computed: {
    ...mapGetters([
      'gameList'
    ]),
    gList1 () {
      const arr = this.gList
      arr.sort((a, b) => a.postDate > b.postDate ? -1 : 1)
      return arr.filter(game => game.stage.some(stage => stage === this.active1)).splice(0, 6)
    }
  },
  methods: {
    toGameDetail (game) {
      this.$router.push({ name: 'gameDetails', params: { theGame: game, id: game.Id } })
    }
  }
}
</script>
<style scoped>
.page-wrapper{
  width: 100%;
  height: calc(100% - 6.2rem);
  overflow-y: scroll;
}
.displayTopic{
  position: relative;
  width: 100%;
  height: 33rem;
  overflow: hidden;
}
.topic{
  display: block;
  /* height: 1.5rem; */
  margin-top: .5rem;
  text-align: left;
  font-size: 1.2rem;
  line-height: 2rem;
  padding-left: 1rem;
  position: relative;
  background-color: #fff;
}
.moreBtn{
  font-size: .8rem;
  position: absolute;
  right: .3rem;top: .8rem;
}
.stageTab{
  width: 100%;
  height: 2.8rem;
}
.gList-wrapper{
  width: 100%;
  height: calc(100% - 4.8rem);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.game-box{
  width: 30%;
  height: 45%;
  padding: .5rem;
}
.postBox{
  width: 100%;
  height: calc(100% - 2rem);
  overflow: hidden;
}
.gamePost{
  width: 100%;
  height: auto;
}
.gameMes{
  width: 100%;
  height: 2rem;
  margin: .2rem 0;
}
.gameMes p{
  display: block;
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 800;
  text-align: left;
}
.gameMes span{
  display: inline-block;
  width: 100%;
  font-size: .8rem;
  text-align: left;
}
</style>

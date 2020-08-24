/* eslint-disable vue/valid-v-model */
/* eslint-disable vue/valid-v-model */
<template>
  <div class="pWrapper">
    <van-tabs v-model="activeTab" class="tbs">
      <van-tab title="热门游戏"></van-tab>
      <van-tab title="最新上市"></van-tab>
      <van-tab title="最高评分"></van-tab>
      <van-tab title="即将上市"></van-tab>
    </van-tabs>
    <van-list class="list-wrapper" @load="moreGame">
      <div v-for="(game, index) in displayList" :key="index" class="gameBox" @click="toDetails(game)">
        <div class="gBoxL">
          <van-image class="gPost" :src="game.post" fit="cover" />
        </div>
        <div class="gBoxM">
          <p>{{ game.name }}</p>
          <span>
            <van-rate size=".8rem" readonly v-model="game.score / 2" allow-half></van-rate> {{ game.score }}
          </span>
          <van-icon name="desktop-o"></van-icon>
        </div>
        <div class="gBoxR" v-if="exMes">
          <p>{{ game.played }}</p>
          <span>人玩过</span>
        </div>
        <div class="gBoxR" v-else>
          <p>{{ game.postDate }}</p>
          <span>上市</span>
        </div>
      </div>
    </van-list>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Vue from 'vue'
import { Tab, Tabs, List, Image as VanImage, Rate } from 'vant'

Vue.use(Tab)
Vue.use(Tabs)
Vue.use(List)
Vue.use(VanImage)
Vue.use(Rate)
export default {
  props: {
    stageName: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      activeTab: 0,
      nowTime: new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate(),
      isLoading: false
    }
  },
  created () {
    this.gameList.length || this.$store.dispatch('getGameList')
  },
  computed: {
    ...mapGetters([
      'gameList'
    ]),
    StageName () {
      return this.$route.params.stageName
    },
    gList () {
      return this.gameList.filter(game => game.stage.some(stage => stage === this.StageName))
    },
    displayList () {
      const list = this.gList.filter(game => game.stage.some(stage => stage === this.StageName))
      return this.activeTab === 0
        ? list : this.activeTab === 1
          ? list.filter(game => game.postDate < this.nowTime).sort((a, b) => a.postDate < b.postDate ? 1 : -1) : this.activeTab === 2
            ? list.sort((a, b) => a.score < b.score ? 1 : -1) : list.filter(game => game.postDate > this.nowTime).sort((a, b) => a.postDate > b.postDate ? 1 : -1)
    },
    exMes () {
      return this.activeTab === 0
    }
  },
  methods: {
    moreGame () {
      this.$store.dispatch('getGameList')
    },
    toDetails (game) {
      this.$router.push({ name: 'gameDetails', params: { theGame: game, id: game.id } })
    }
  }
}
</script>
<style scoped>
.pWrapper{
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.tbs{
  width: 100%;
  height: 3rem;
}
.list-wrapper{
  width: 100%;
  height: calc(100% - 3rem);

}
.gameBox{
  width: 100%;
  height: 7rem;
  overflow: hidden;
  margin: .2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
}
.gBoxL{
  flex: 1 1 auto;
  width: 20%;
  height: 100%;
  overflow: hidden;
}
.gBoxM{
  width: 60%;
  height: 100%;
  padding-left: .5rem;
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
}
.gBoxM p{
  display: block;
  padding-top: .3rem;
  width: 100%;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 700;
}
.gBoxM span{
  display: block;
  width: 100%;
  text-align: left;
  font-size: .8rem;
}
.gBoxR{
  flex: 1 1 auto;
  padding-right: .2rem;
  width: 20%;
}
.gBoxR p{
  display: block;
  font-size: .8rem;
  /* width: 100%; */
}
.gBoxR span{
  display: block;
  margin-top: .1rem;
  font-size: .65rem;
  font-weight: 300;
  /* width: 100%; */
}
</style>

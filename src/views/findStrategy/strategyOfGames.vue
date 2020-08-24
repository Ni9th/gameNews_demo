<template>
    <div  class="pWrapper">
      <van-list class="listWrapper" @load="moreGame" :immediate-check='false' >
        <div class="gBox " v-for="(game, index) in gameList" :key="index" @click="toDetail(game)">
          <van-image width="6.58rem" height="10.4rem" fit="cover" :src="game.post" />
          <p>{{ game.name }}</p>
        </div>
      </van-list>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Vue from 'vue'
import { List, Image as VanImage } from 'vant'

Vue.use(List)
Vue.use(VanImage)
export default {
  created () {
    this.gameList.length || this.$store.dispatch('getGameList')
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'gameList'
    ]),
    gList () {
      return [...this.gameList]
    }
  },
  methods: {
    moreGame () {
      this.$store.dispatch('getGameList')
      console.log('load Event')
    },
    toDetail (game) {
      this.$router.push({ name: 'gameDetails', params: { theGame: game, id: game.Id, tabPage: 1 } })
    }
  }
}
</script>
<style scoped>
.pWrapper{
  width: 100%;
  height: 100%;
}
.listWrapper{
  width: 100%;
  padding: .5rem;
  background-color: #fff;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  align-content: center;
}
.gBox{
  width: 30%;
  margin: 0 1.52%;
  height: 12.7rem;
  overflow: hidden;
}
.gBox p{
  display: block;
  text-align: left;
  padding-left: .3rem;
  font-size: .9rem;
  font-weight: 700;
  line-height: 1.5rem;
}
</style>

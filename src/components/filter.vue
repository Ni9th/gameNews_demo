<template>
  <div  class="fWrapper">
    <van-search class="searchBtn"></van-search>
    <div class="blockBox">
      <div class="blockNav">
        <span @click="scrollTo(blockC)" v-for="blockC of classList" :key="blockC.index">{{ blockC }}</span>
      </div>
      <div class="blockDP">
        <div class="blockClass" v-for="blockC of classList" :key="blockC.index" :id="blockC">
          <p>{{ blockC }}</p>
          <van-grid direction="horizontal" column-num="2" :border="false">
            <van-grid-item
            v-for="game in gameList.filter(game => game.blockClass === blockC)"
            :key="game.Id"
            :icon='game.post'
            :text='game.name'
            class="blockBtn"
            @click='choseBtn(game.name, game)'/>
          </van-grid>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Search, Grid, GridItem } from 'vant'
import { mapGetters } from 'vuex'

Vue.use(Search)
Vue.use(Grid)
Vue.use(GridItem)
// Vue.use(Tabs)
export default {
  created () {
    this.gameList.length || this.$store.dispatch('getGameList')
    this.gList = this.gameList
  },
  data () {
    return {
      gList: [],
      classList: ['A类', 'B类', 'C类', 'D类', 'E类']
    }
  },
  computed: {
    ...mapGetters([
      'gameList'
    ])
  },
  methods: {
    scrollTo (block) {
      document.getElementById(block).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
    },
    choseBtn (name, game) {
      this.$route.name === 'blockFilter'
        ? this.$router.replace({ name: 'edit', params: { blockName: name } })
        : this.$router.push({ name: 'gameDetails', params: { theGame: game, id: game.Id } })
    }
  }
}
</script>
<style scoped>
.fWrapper{
  width: 100%;
  /* height: calc(100% - 6.2rem); */
  height: 100%;
}
.searchBtn{
  width: 100%;
  height: 3rem;
}
.blockBox{
  width: 100%;
  /* height: 100%; */
  height: calc(100% - 3rem);
  overflow-y: scroll;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.blockNav{
  height: 100%;
  width: 20%;
}
.blockNav span{
  display: block;
  width: 100%;
  height: 3rem;
  font-size: 1rem;
}
.blockDP{
  width: 80%;
  /* height: calc(100% - 3rem); */
  height: 100%;
  /* overflow: hidden; */
  overflow-y: scroll;
}
.blockClass{
  width: 100%;
  margin: .5rem 0 1rem 0;
}
.blockClass p {
  display: block;
  text-align:left;
  padding-left: 1rem;
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 700;
}
.blockBtn{
  display: flex;
}
</style>

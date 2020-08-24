<template>
  <div class="pWrapper">
    <div class="sHeader">
      <div class="gameName" style="">
        <p>游戏名</p>
        <span>
          <van-icon name="plus" />
          关注
        </span>
      </div>
      <van-search v-model="searchTxt"
      shape="round"
      placeholder="游戏下搜索"
      background="rgba(000, 000, 000, 0)"
      ></van-search>
    </div>
    <ul class="sBody">
      <li v-for="(storage, index) in sList" :key="index">
        <p>{{ storage.blockName }}</p>
        <div class="articles">
          <span v-for="(article, index) in storage.storageList" :key="index">{{ article }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue'
import { Search, Icon } from 'vant'
import { mapGetters } from 'vuex'

Vue.use(Search)
Vue.use(Icon)
export default {
  props: {
    theGame: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  created () {
    this.gameStorages.length || this.$store.dispatch('getGameStorages')
    this.sList = this.gameStorages
  },
  data () {
    return {
      sList: [],
      searchTxt: ''
    }
  },
  computed: {
    ...mapGetters([
      'gameStorages'
    ])
  }
}
</script>
<style scoped>
.pWrapper{
  width: 100%;
  height: 100%;
}
.sHeader{
  width: 100%;
  height: 8rem;
  overflow: hidden;
  background-image: url('http://dummyimage.com/200x100&text=1');
  background-repeat: no-repeat;
  background-size: cover;
}
.gameName{
  width: 100%;
  height: 4.5rem;
  padding: 1rem;
  float: left;
  display: flex;
  justify-content: space-between;
  align-items: start;
}
.gameName p{
  font-size: 1.5rem;
  margin: -0.5rem 0;
}
.gameName span{
  font-size: .8rem;
}
.postImg{
  width: 100%;
  height: 4.5rem;
}

.sBody{
  width: 100%;
  overflow-x: hidden;
}
.sBody>li{
  width: 100%;
}
.sBody>li::after{
  display: block;
  content: '';
  width: 100%;
  border: .1rem solid rgb(197, 194, 194);
}
.sBody p{
  display: block;
  width: 100%;
  text-align: left;
  height: 4rem;
  margin-top: .5rem;
  padding-left: .5rem;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 4rem;
}
.articles{
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content:flex-start
}
.articles span{
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: .8rem;
  line-height: 1.1rem;
  width: 30%;
  height: 1.5rem;
  margin: .5rem 1.5%;
  padding: .2rem;
  background-color: rgb(207, 202, 202);
}
</style>

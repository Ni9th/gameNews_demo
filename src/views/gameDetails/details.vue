<template>
  <div class="pWrapper">
    <div class="gameImgsDisplay">
      <div class="displayImg">
        <van-image :src="displayImg" width="100%" height="12rem"></van-image>
      </div>
      <div class="imgWrapper">
        <ul>
          <li v-for="(img, index) in gImgs"
          :key="index"
          :class="{ actImg : activeImg === index, otherImg: activeImg !== index }"
          @click="changeImg(index)">
            <van-image :src="img" fit="cover" width="100%" height="3rem"></van-image>
          </li>
        </ul>
      </div>
    </div>
    <div class="gamePrice">
      <van-icon name="gold-coin-o"></van-icon>
      <p>{{ theGame.price }}</p>
    </div>
    <div class="gameDetailMes">
      <div class="gameName">
        <p>{{ theGame.name }}</p>
        <span>英文名</span>
        <div class="gameConfig">
          <van-icon name="setting-o"></van-icon>
          <p>配置</p>
        </div>
      </div>
      <div class="gameInfo">
        <p> <van-icon v-for="(stage, index) in theGame.stage"
        :key="index"
        name="good-job-o"></van-icon> 平台 |</p>
        <p> 语言：{{ theGame.language }}|</p>
        <p>{{ theGame.postDate }} 上市 <van-icon name="arrow" /> </p>
      </div>
      <div class="gameClass">
        <!-- <span v-for="(type, index) in theGame.blockClass" :key="index"></span> -->
        <span> A类 </span>
        <span> B类 </span>
      </div>
      <div class="introduction">
        <span>简介</span>
        <p :class="{ textEllipsis: hideTxt }" >{{ theGame.introduction }}<span class="introBtn" v-if="hideTxt" @click="dpAllIntro">详情</span></p>
      </div>
    </div>
    <div class="achievement">
      <div>
        <p>奖杯/成就</p>
        <van-icon name="arrow" style="border-radius: 50%; overflow: hidden; border: .1rem solid #000"></van-icon>
      </div>
      <span>点击查看游戏奖杯和成就数据</span>
    </div>
    <div class="comments">
      <div class="commentHeader">
        <p>玩家点评</p>
        <span>更多 <van-icon name="arrow" /></span>
      </div>
      <van-list class="cListWrapper">
        <div v-for="(comment, index) in cList" :key="index" class="comment">
          <div class="author">
            <van-image width="2.5rem" height="2.5rem" fit="cover" round :src="comment.authorImg" />
            <div class="authorName">
                <p>{{ comment.author }}</p>
              <span>玩过</span>
            </div>
            <van-icon name="ellipsis" />
          </div>
          <p class="cMianContent">{{ comment.content }}</p>
          <div class="cMes">
            <p>{{ comment.postDate }}</p>
            <span>
              <van-icon name="good-job-o" />
              {{ comment.admired }}
            </span>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Image as VanImage, Icon, List } from 'vant'
import { mapGetters } from 'vuex'

Vue.use(VanImage)
Vue.use(Icon)
Vue.use(List)
export default {
  created () {
    this.gameImgs.length || this.$store.dispatch('getGameImgs')
    this.comments.length || this.$store.dispatch('getComment')
    this.gImgs = this.gameImgs
    this.cList = this.comments
  },
  props: {
    theGame: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      gImgs: [],
      activeImg: 1,
      hideTxt: true,
      cList: [],
      newArr: ['a', 'a', 'b', 'c']
    }
  },
  computed: {
    ...mapGetters([
      'gameImgs',
      'comments'
    ]),
    displayImg () {
      return this.gImgs[this.activeImg]
    }
  },
  methods: {
    changeImg (index) {
      this.activeImg = index
    },
    dpAllIntro () {
      this.hideTxt = !this.hideTxt
    }
  }
}
</script>
<style scoped>
.pWrapper{
  width: 100%;
  height: 100%;
}
.gameImgsDisplay{
  width: 100%;
  height: 15rem;
  overflow: hidden;
  border: .1rem solid #000;
}
.displayImg{
  width: 100%;
  height: 12rem;
  overflow: hidden;
}
.imgWrapper{
  width: 100%;
  height: 3rem;
  margin: 0;
  overflow-x: scroll;
}
.imgWrapper::-webkit-scrollbar{display: none;}
.imgWrapper ul{
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.imgWrapper li{
  flex: 1 0 auto;
  width: 20%;
  height: 100%;
}
.actImg{
  border: .1rem solid #fff;
}
.otherImg{
  border: .1rem solid #000;
}
.gamePrice{
  width: 100%;
  height: 3rem;
  color: rgb(255, 255, 255);
  background-color: rgb(63, 58, 58);
  font-size: 1.3rem;
  text-align: left;
  padding-left: 1rem;
}
.gamePrice p{
  font-size: 2rem;
  line-height: 3rem;
  display: inline;
  vertical-align: center;
}

.gameDetailMes{
  width: 100%;
  padding: .5rem
}
.gameDetailMes::after{
  content: '';
  display: block;
  width: calc(100% + 1rem);
  border: .02rem solid rgb(138, 136, 136);
  margin:  -.5rem;
}
.gameName {
  width: 100%;
  height: 5rem;
  text-align: left;
  position: relative;
}
.gameName >p{
  display: block;
  width: 100%;
  height: 2.8rem;
  font-size: 1.5rem;
  line-height: 2.8rem;
  font-weight: 700;
}
.gameName >span{
  display: block;
  width: 100%;
  height: 1.5rem;
  font-size: 1.1rem;
  font-weight: lighter;
  line-height: 1.5rem;
}
.gameConfig{
  position: absolute;
  top: 0;right: 0;
  text-align: right;
  width: 3.2rem;
  margin-top: .5rem;
  padding: .1rem 0;
  font-size: .8rem;
}
.gameConfig > p{
  display: inline;
}

.gameInfo{
  width: 100%;
  height: 2rem;
  text-align-last: left;
}
.gameInfo p{
  display: inline;
}

.gameClass{
  width: 100%;
  height: 2rem;
  text-align: left;
}
.gameClass span{
  display: inline-block;
  height: 100%;
  margin: 0 .5rem;
  padding: 0 .2rem;
  font-size: 1.2rem;
  line-height: 2rem;
  background-color: rgb(165, 161, 161);
  border-radius: .3rem;
  overflow: hidden;
}

.introduction{
  width: 100%;
  margin: .5rem 0;
  position: relative;
  text-align-last: left;
  padding: .5rem 0;
}
.introduction > span {
  display: block;
  width: 100%;
  height: 2.5rem;
  text-align: left;
  font-size: 1.3rem;
  line-height: 2.5rem;
  font-weight: 700;
}
.introduction > p {
  width: 100%;
  position: relative;
}
.textEllipsis{
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.introBtn{
  position: absolute;
  right: 0;bottom: 0;
  font-size: 1rem;
  z-index: 99;
  color: rgb(27, 172, 240);
  background-color: #fff;
  font-weight: lighter;
}

.achievement{
  width: 100%;
  height: 5rem;
  margin: .5rem 0;
  /* padding-bottom: .5rem; */
}
.achievement > div {
  height: 3rem;
  text-align: left;
  padding-left: .5rem;
}
.achievement p {
  display: inline;
  font-size: 1.5rem;
  line-height: 3rem;
  font-weight: 700;
  margin-right: .5rem;
}
.achievement span{
  display: block;
  width: 100%;
  text-align: left;
  padding-left: .5rem;
  font-weight: lighter;
}
.achievement::after{
  content: '';
  display: block;
  margin-top: 1rem;
  width: calc(100% - .2rem);
  border: .1rem solid rgb(167, 163, 163);
}

.comments{
  width: 100%;
  background-color: #fff;
  padding: .5rem;
}
.commentHeader{
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
}
.commentHeader p{
  font-size: 1.3rem;
  font-weight: 700;
}
.commentHeader span{
  font-size: .9rem;
}
.cListWrapper{
  width: 100%;
}
.comment{
  width: 100%;
}
.author {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
}
.authorName{
  width: 80%;
  height: 100%;
  text-align: left;
}
.authorName > p {
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 700;
}
.authorName > span {
  font-weight: .9rem;
  line-height: 1.5rem;
  font-weight: lighter;
}
.cMianContent {
  display: block;
  width: 100%;
  margin: .5rem 0;
  text-align: left;
  font-size: 1rem;
  line-height: 1.2rem;
}
.cMes {
  display: flex;
  justify-content: space-between;
  margin: .5rem 0;
  font-size: .8rem;
}
.cMes p{
  color: rgb(173, 168, 168)
}
.cMes span{
  color: rgb(173, 168, 168)
}
</style>

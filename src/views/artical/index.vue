<template>
  <div class="pWrapper">
    <div :class="{headNav1 : activeTab == 0 , headNav2: activeTab == 1}">
      <van-tabs v-model="activeTab" class="switchBtn" sticky swipeable>
        <template #nav-left>
          <div class="navLeft">
            <van-icon name="arrow-left" size="1.8rem" @click="backPage"></van-icon>
          </div>
        </template>
        <template #nav-right>
          <div class="navRight">
            <van-icon name="ellipsis" size="1.8rem" @click="showPanel"></van-icon>
          </div>
        </template>
        <van-tab title="正文">
          <div class="article">
            <p>{{ news.title }}</p>
            <div class="author">
              <van-image width="2.5rem" height="2.5rem" round :src="news.authorImg" />
              <div class="authorR">
                <p>{{ news.author }}</p>
                <span>{{ news.postDate }} {{ news.postTime }} 编辑</span>
              </div>
            </div>
            <div class="content"
            :class="[{cFsz1: contentFsz === 1},
            {cFsz2: contentFsz ===2},
            {cFsz3: contentFsz === 3}]">{{ news.newsContent }}</div>
            <!-- 评论 -->
            <div class="comment">
              <div class="hotComment">
                <p>热门评论</p>
                <div class="commentBox" v-for="comment in hotCList" :key="comment.index">
                  <div class="headImg">
                    <van-image :src="comment.authorImg" width="2.5rem" height="2.5rem" round />
                  </div>
                  <div class="cBoxR">
                    <div class="contentHead">
                      <div class="authorName">
                        <p>{{ comment.author }}</p>
                      </div>
                      <div class="exBtn">
                        <van-icon name="ellipsis"></van-icon>
                      </div>
                    </div>
                    <p class="contentMid">{{ comment.content }}</p>
                    <div class="contentFoot">
                      <span>
                        {{ new Date().getMonth() - comment.postDate.slice(5,7) == 0 &&
                        new Date().getDate() - comment.postDate.slice(8,9) == 0 ? comment.postDate + comment.postTime : comment.postDate }}
                      </span>
                      <span>
                        <van-icon name="good-job-o"></van-icon>
                        {{ comment.admired }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <van-list>
                <div class="allComment">
                  <van-list>
                    <p class="allCTitle">全部评论</p>
                    <div class="commentBox" v-for="comment in allList" :key="comment.index">
                      <div class="headImg">
                        <van-image :src="comment.authorImg" width="2.5rem" height="2.5rem" round />
                      </div>
                      <div class="cBoxR">
                        <div class="contentHead">
                          <div class="authorName">
                            <p>{{ comment.author }}</p>
                          </div>
                          <div class="commentFloor">
                            <van-icon name="ellipsis"></van-icon>
                          </div>
                        </div>
                        <p class="contentMid">{{ comment.content }}</p>
                        <div class="contentFoot">
                          <span>{{ comment.postDate }}</span>
                          <span>
                            <van-icon name="good-job-o"></van-icon>
                            {{ comment.admired }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </van-list>
                </div>
              </van-list>
            </div>
          </div>
        </van-tab>
        <van-tab title="评论">
          <div class="comment">
            <comment-p></comment-p>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <van-popup position="bottom" v-model="panel">
      <div class="panel">
        <div class="panelBtn" :class="{activeFsz: contentFsz === 1}" @click="changeFsz(1)">
          <van-icon name="eye-o"></van-icon> 大字体
        </div>
        <div class="panelBtn" :class="{activeFsz: contentFsz === 2}" @click="changeFsz(2)">
          <van-icon name="eye-o"></van-icon> 中字体
        </div>
        <div class="panelBtn" :class="{activeFsz: contentFsz === 3}" @click="changeFsz(3)">
          <van-icon name="eye-o"></van-icon> 小字体
        </div>
      </div>
    </van-popup>
    <foot-tool v-if="activeTab === 0" @toCommentPage='toComment'></foot-tool>
  </div>
</template>
<script>
import Vue from 'vue'
import { Tab, Tabs, Icon, image as VanImage, List, Popup } from 'vant'
import commentP from './comment'
// import headNav from './headNav'
import footTool from './footTool'
import { mapGetters } from 'vuex'

Vue.use(Tabs)
Vue.use(Tab)
Vue.use(Icon)
Vue.use(Popup)
Vue.use(VanImage)
Vue.use(List)
export default {
  components: {
    // headNav,
    footTool,
    commentP
  },
  created () {
    this.comments.length || this.$store.dispatch('getComment')
    this.cList = this.comments
  },
  data () {
    return {
      cList: [],
      // activeTab: 0,
      panel: false,
      contentFsz: 2,
      wantLogin: false
    }
  },
  props: {
    news: {
      type: Object,
      default () {
        return {}
      }
    },
    id: {
      type: [Number, String],
      default () {
        return 0
      }
    },
    activeTab: {
      type: Number,
      default () {
        return 0
      }
    }
  },
  computed: {
    ...mapGetters(['comments']),
    hotCList () {
      const arr = [...this.cList]
      return arr.sort((a, b) => (a.admired > b.admired ? -1 : 1)).splice(0, 4)
      // return this.allList
    },
    allList () {
      const arr = [...this.cList].sort((a, b) =>
        a.postDate > b.postDate ? -1 : 1
      )
      return arr
    }
  },
  methods: {
    backPage () {
      this.$router.go(-1)
      this.$router.animate = 2
    },
    toComment () {
      this.activeTab = 1
    },
    showPanel () {
      this.panel = !this.panel
    },
    changeFsz (fsz) {
      this.contentFsz = fsz
    }
  }
}
</script>
<style scoped>
.pWrapper {
  height: 100%;
  width: 100%;
}
.headNav1 {
  width: 100%;
  height: calc(100% - 2rem);
  overflow-y: scroll;
  /* display: flex; */
}
.headNav2 {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  /* display: flex; */
}
.switchBtn {
  width: 100%;
  z-index: 100;
  /* height: calc(100% - 3rem);
  overflow-y: scroll; */
  /* overflow: hidden; */
}
.navLeft {
  width: 20%;
  height: 100%;
  padding-left: 0.7rem;
  display: flex;
  align-items: center;
}
.navRight {
  width: 20%;
  height: 100%;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: right;
  align-content: flex-end;
}

.article{
  width: 100%;
  /* overflow-y: scroll; */
}
.article > p {
  display: block;
  width: 100%;
  height: 5rem;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 2rem;
  text-align: left;
  padding: .6rem;
}
.author{
  display: block;
  width: 100%;
  height: 2.5rem;
  overflow: hidden;
  margin: 1rem 0;
  padding: 0 1rem;
  display: flex;
}
.authorR{
  margin-left: .5rem;
}
.authorR > p{
  text-align: left;
  font-size: 1.1rem;
  font-weight: 700;
}
.authorR > span{
  font-size: .7rem;
  font-weight:lighter
}
.content{
  padding: .6rem;
  text-align: left;
  line-height: 1.2rem;
  padding-bottom: .5rem;
}
.cFsz1{
  font-size: 1.5rem;
  line-height: 2.5rem;
}
.cFsz2{
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.cFsz3{
  font-size: 1rem;
  line-height: 1.5rem;
}
.content::after {
  display: block;
  width: calc(100% + 1.2rem);
  margin: .5rem -0.6rem;
  height: 0.2rem;
  content: '';
  background-color: rgb(189, 177, 177);
}
.comment{
  width: 100%;
  padding: .5rem;
}
.hotComment > p{
  display: block;
  margin: .5rem .5rem;
  font-size: 1.4rem;
  line-height: 1.5rem;
  font-weight: 700;
  text-align-last: left;
}
.allCTitle{
  display: block;
  margin: .5rem .5rem;
  font-size: 1.4rem;
  line-height: 1.5rem;
  font-weight: 700;
  text-align-last: left;
}
.commentBox{
  width: 100%;
  padding-left: .5rem;
  display: flex;
}
.headImg{
  height: 3rem;
  width: 2.5rem;
  flex: 1 0 auto;
}
.cBoxR{
  width: calc(100% - 2.5rem);
  flex: 1 1 auto;
  padding: .3rem;
}
.contentHead{
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 600;
}
.contentMid{
  display: block;
  text-align: left;
  font-size: 1.05rem;
  line-height: 1.4rem;
}
.contentFoot{
  display: flex;
  justify-content:space-between;
  margin: .5rem 0 1rem 0 ;
  font-size: .8rem;
  font-weight: lighter;
}

.panel{
  width: 100%;
  height: 7.5rem;
}
.panelBtn{
  width: 100%;
  height: 25%;
  line-height: 2.5rem;
}
.activeFsz{
  color: rgb(224, 103, 103);
}

.lPage{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 1;
}
</style>

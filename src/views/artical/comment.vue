<template>
  <div class="pWrapper">
    <div class="hotComment" ref="hotC" >
      <van-sticky :container="hotC" offset-top="2.75rem" class="bTitle">
        <p>热门评论</p>
      </van-sticky>
      <div class="allComment" v-for="comment of hotCList" :key="comment.index">
        <div class="commentL">
          <van-image :src="comment.authorImg" width="3.5rem" height="3.5rem" round />
        </div>
        <div class="commentR">
          <div class="authorName">
            <p>{{ comment.author }}</p>
            <van-icon name="ellipsis"></van-icon>
          </div>
          <p class="commentC">{{ comment.content }}</p>
          <div class="botmMes">
            <p>{{ comment.postTime }}</p>
            <span>
              <van-icon name="good-job-o"></van-icon> {{ comment.admired }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <van-list ref="allC" @load="loadComment">
      <van-sticky :container="allC" offset-top="2.75rem" class="bTitle">
        <div class="allCBox">
          <p>全部评论</p>
          <span v-if="dpDirection" @click='changeDirection'>
            <van-icon name="arrow-up"></van-icon>
            最新
          </span>
          <span v-else @click='changeDirection'>
            <van-icon name="arrow-down"></van-icon>
            最早
          </span>
        </div>
      </van-sticky>
      <div class="allComment" v-for="comment of (dpDirection ? cList1 : cList2)" :key="comment.index">
        <div class="commentL">
          <van-image :src="comment.authorImg" width="3.5rem" height="3.5rem" round  />
        </div>
        <div class="commentR">
          <div class="authorName">
            <p>{{ comment.author }}</p>
            <van-icon name="ellipsis"></van-icon>
          </div>
          <p class="commentC">{{ comment.content }}</p>
          <div class="botmMes">
            <p>{{ comment.postTime }}</p>
            <span>
              <van-icon name="good-job-o"></van-icon> {{ comment.admired }}
            </span>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>
<script>
// import headNav from './headNav'
import { mapGetters } from 'vuex'
import Vue from 'vue'
import { Sticky, List, Icon, Image as VanImage } from 'vant'

Vue.use(Sticky)
Vue.use(List)
Vue.use(Icon)
Vue.use(VanImage)
Vue.use(Sticky)
export default {
  created () {
    this.comments.length || this.$store.dispatch('getComment')
  },
  mounted () {
    this.hotC = this.$refs.hotC
  },
  components: {
    // headNav
  },
  data () {
    return {
      hotC: null,
      dpDirection: true
    }
  },
  computed: {
    ...mapGetters([
      'comments'
    ]),
    hotCList () {
      const arr = [...this.comments].sort((a, b) => a.admired > b.admired ? -1 : 1)
      return arr.slice(0, 5)
    },
    cList1 () {
      const arr = [...this.comments].sort((a, b) => a.postTime > b.postTime ? -1 : 1)
      return arr
    },
    cList2 () {
      const arr = [...this.comments].sort((a, b) => a.postTime > b.postTime ? 1 : -1)
      return arr
    }
  },
  methods: {
    changeDirection () {
      this.dpDirection = !this.dpDirection
    },
    loadComment () {
      this.$store.dispatch('getComment')
    }
  }
}
</script>
<style scoped>
.pWrapper{
  width: 100%;
  height: 100%;
}
.hotComment{
  width: 100%;
  /* overflow: hidden; */
}
.bTitle{
  display: block;
  margin-left: -.5rem;
  height: 2.75rem;
  width: calc(100% + 1rem);
  text-align: left;
  font-size: 1.4rem;
}
.allCBox{
  width: 100%;
  height: 2.75rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
.bTitle p{
  display: block;
  padding-left: .5rem;
  height: 2.75rem;
  line-height: 2.75rem;
  background-color: #fff;
}
.bTitle span {
  font-size: .8rem;
  font-weight: 700;
  margin-right: .5rem;
}
.allComment{
  width: 100%;
  margin: .5rem 0 1rem 0;
  display: flex;
  justify-content:space-between;
  align-items: start;
}
.commentL{
  width: 3.5rem;
}
.commentR{
  width: 80%;
}
.authorName{
  width: 100%;
  height: 1.4rem;
  margin: .2rem 0;
  display: flex;
  justify-content: space-between;
}
.authorName p{
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4rem;
}
.commentC{
  display: block;
  width: 100%;
  text-align: left;
  font-size: 1rem;
  line-height: 1.5rem;
}
.botmMes{
  width: 100%;
  height: 1rem;
  margin: .5rem 0;
  font-size: .8rem;
  display: flex;
  justify-content: space-between;
}
</style>

<template>
  <div class="pWrapper">
    <div class="cbody">
      <van-sticky >
        <div class="settingBTns">
          <span>
            <van-icon name="setting-o" @click='showLogout' />
          </span>
          <p>{{ user.userName }}</p>
          <span>
            <van-icon name="comment-o" />
          </span>
        </div>
      </van-sticky>
      <div class="userMes" @click="toLogin">
        <div class="headImg">
          <van-image width="5rem" round height="5rem" :src="user.headImg" />
        </div>
        <div class="userName">
          <p>{{ user.userName }}</p>
          <span v-if="!isLogin">登陆后获得更多精彩内容</span>
        </div>
      </div>
      <ul class="userBtn" v-if="isLogin">
        <li>
          <p>{{ user.focus }}</p>
          <span>关注</span>
        </li>
        <li>
          <p>{{ user.fans }}</p>
          <span>粉丝</span>
        </li>
        <li>
          <p>{{ user.collection }}</p>
          <span>收藏</span>
        </li>
        <li>
          <p>{{ user.history }}</p>
          <span>历史</span>
        </li>
      </ul>
      <!-- 用户痕迹  -->
      <van-pull-refresh v-model="isReLoading" success-text="刷新成功" @refresh="reload">
        <div class="userComment">
          <van-tabs v-model="commentTab" color="#000" class="commentTab">
            <van-tab title="圈子"></van-tab>
            <van-tab title="评论"></van-tab>
            <van-tab title="点评"></van-tab>
          </van-tabs>
          <van-list>
            <div v-for="comment in user.comment" :key="comment.index">
              <div class="commentBox">
                <van-image width="2rem" height="2rem" round :src="user.headImg" />
                <div class="commentBoxR">
                  <p>{{ user.userName }}</p>
                  <div class="commentContent">
                    <p>{{ comment.content }}</p>
                    <span>来源文章</span>
                  </div>
                  <div class="commentMes">
                    <span>{{ comment.commentDate }}</span>
                    <span>
                      <van-icon name="good-job-o" />
                      {{ comment.admired }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </van-list>
        </div>
        <van-empty class="emptyPage" v-if="!isLogin" />
      </van-pull-refresh>
    </div>
    <van-dialog v-model="isLogout" show-cancel-button @confirm='userLogout'>
      <template #title>
        <p style="color: rgb(255, 0, 0)">是否注销用户</p>
      </template>
    </van-dialog>
    <footTab></footTab>
  </div>
</template>
<script>
import footTab from '@/views/LayOut/footTab.vue'
import {
  Icon,
  Image as VanImage,
  PullRefresh,
  List,
  Empty,
  Sticky,
  Dialog
} from 'vant'
import { mapGetters } from 'vuex'
import Vue from 'vue'

Vue.use(Icon)
Vue.use(VanImage)
Vue.use(PullRefresh)
Vue.use(List)
Vue.use(Empty)
Vue.use(Sticky)
Vue.use(Dialog)
export default {
  components: {
    footTab
  },
  data () {
    return {
      userMes: {},
      commentTab: 0,
      isReLoading: false,
      isLogout: false
    }
  },
  created () {
    this.isLogin || (this.userMes = this.user)
  },
  computed: {
    ...mapGetters(['isLogin', 'user'])
  },
  methods: {
    reload () {
      setTimeout(() => {
        this.isReLoading = false
      }, 2000)
    },
    toLogin () {
      this.$store.dispatch('swLoginPage')
    },
    showLogout () {
      if (this.isLogin) {
        this.isLogout = true
      } else {
        this.$store.dispatch('swLoginPage')
      }
    },
    userLogout () {
      this.$store.dispatch('logout')
      console.log('logout event')
    }
  }
}
</script>
<style scoped>
.pWrapper {
  width: 100%;
  height: calc(100% - 2.8rem);
  overflow-y: scroll;
  background-color: #414141;
}
.cbody{
  width: 100%;
  height: calc(100% - 2.8rem);
  overflow-y: scroll;
}
.settingBTns {
  display: block;
  width: 100%;
  height: 2.5rem;
  background-color: #fff;
  font-size: 1.4rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* .settingBTns span{
  display: block;
  line-height: 3rem;
  font-size: 1.2rem;
  margin-right: .5rem;
} */

.userMes {
  display: flex;
  height: 5rem;
  margin: 1rem 0;
  overflow: hidden;
  padding-left: 2rem;
}
.userName {
  width: calc(100% - 5rem);
  height: 100%;
  color: #fff;
}
.userName p {
  display: block;
  height: 70%;
  margin-left: 1rem;
  text-align: left;
  font-size: 1.3rem;
  font-weight: 800;
  line-height: 4.5rem;
}
.userName span {
  display: inline-block;
  width: 100%;
  text-align: left;
  margin-left: 1rem;
  font-size: 0.7rem;
}

.userBtn {
  width: 100%;
  height: 4.5rem;
  color: #fff;
  display: flex;
  align-items: center;
  /* align-content: space-between; */
  justify-content: center;
  padding: 0 1rem 1rem 1rem;
}
.userBtn li {
  flex: 1 1 auto;
  width: 25%;
  height: 100%;
}
.userBtn p {
  display: block;
  width: 100%;
  height: 1.5rem;
  font-size: 1rem;
  line-height: 1.4rem;
}
.userBtn span {
  font-size: 0.8rem;
  font-weight: lighter;
}

.commentTab {
  width: 13rem;
}
.userComment {
  background-color: #fff;
  border-radius: 1rem 1rem 0 0;
  overflow: hidden;
  width: 100%;
  height: calc(100% - 12.5rem);
}
.commentBox {
  width: 100%;
  margin: 1rem;
  display: flex;
}
.commentBoxR {
  margin-left: 1rem;
  width: 80%;
}
.commentBoxR p {
  display: block;
  text-align: left;
  font-size: 1.1rem;
  font-weight: 800;
  line-height: 1.5rem;
  height: 2rem;
}
.commentContent {
  text-align: left;
  width: 100%;
}
.commentContent p {
  font-size: 0.95rem;
  font-weight: normal;
}
.commentContent span {
  background-color: #dadada;
  display: block;
  height: 1.3rem;
  width: 100%;
  padding: 0.1rem;
  font-size: 0.9rem;
  line-height: 1.1rem;
  color: #6b48ff;
}
.commentMes {
  width: 100%;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.commentMes span {
  font-size: 0.8rem;
  font-weight: lighter;
}

.emptyPage {
  height: 30rem;
  width: 100%;
  background-color: #fff;
}
</style>

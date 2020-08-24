<template>
  <div class="foot-tool">
    <span @click="editComment">我来说两句</span>
    <van-icon name="comment-o" @click="toCommentPage" size="1.3rem"></van-icon>
    <van-icon id="admired" :name="goodJob" @click="admire" size="1.3rem" :color='goodJobColor'></van-icon>
    <van-icon :name="star" @click="onStar" :color="starColor" size="1.3rem"></van-icon>
    <van-icon name="exchange" size="1.3rem"></van-icon>
    <van-popup v-model="commentInput" position="bottom">
      <div class="commentEdit">
        <van-field
        v-model="userComment"
        placeholder="我来说两句"
        type="textarea"
        autosize
        class="inputArea"/>
        <div class="inputBottom">
          <span>
            <van-uploader preview-size="1.5rem"></van-uploader>
          </span>
          <van-button class="submitBtn" :disabled="userComment===''">发布</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import { Icon, Toast, Popup, Field, Button, Uploader } from 'vant'
import Vue from 'vue'
import { mapGetters } from 'vuex'

Vue.use(Icon)
Vue.use(Toast)
Vue.use(Popup)
Vue.use(Field)
Vue.use(Button)
Vue.use(Uploader)
export default {
  data () {
    return {
      admired: false,
      stared: false,
      commentInput: false,
      userComment: ''
    }
  },
  methods: {
    toCommentPage () {
      this.$emit('toCommentPage')
    },
    admire () {
      this.admired = !this.admired
      this.admired ? Toast.success('点赞成功') : Toast.fail('取消点赞')
    },
    onStar () {
      this.stared = !this.stared
      this.stared ? Toast.success('收藏成功') : Toast.fail('取消收藏')
    },
    editComment () {
      if (this.isLogin) {
        this.commentInput = !this.commentInput
      } else {
        this.$store.dispatch('swLoginPage')
      }
    },
    uploadFile () {

    }
  },
  computed: {
    ...mapGetters([
      'isLogin'
    ]),
    goodJob () {
      return this.admired ? 'good-job' : 'good-job-o'
    },
    goodJobColor () {
      return this.admired ? '#e42c64' : ''
    },
    star () {
      return this.stared ? 'star' : 'star-o'
    },
    starColor () {
      return this.stared ? '#e42c64' : ''
    }
  }
}
</script>
<style scoped>
.foot-tool{
  height: 2rem;
  width: 100%;
  border-top: .1rem solid rgb(121, 119, 119);
  /* overflow: hidden; */
  position: absolute;
  left: 0;bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
}
.foot-tool>span{
  display: inline-block;
  height: 1.5rem;
  width: 50%;
  font-size: 1rem;
  line-height: 1.5rem;
  border-radius: 2rem;
  background-color: #a79b9bc0;
}
.commentEdit{
  width: 100%;
  height: 10rem;
  padding: 0 1rem;
}
.inputArea{
  height: 8rem;
}
.inputBottom{
  padding: 0 .5rem;
  display: block;
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
}
.submitBtn{
  width: 4.5rem;
  height: 2rem;
  border-color: rgba(0, 0, 0, 0);
}
</style>

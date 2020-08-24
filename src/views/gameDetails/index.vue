<template>
  <div class="pWrapper">
    <div class="tabWrapper" :class="{withoutFoot: !showFoot}" >
      <van-tabs v-model="activetab" sticky>
        <template #nav-left>
          <div class="navLeft" @click='backPage'>
            <van-icon name="arrow-left">
          </van-icon></div>
        </template>
        <template  #nav-right>
          <div class="navRight">
            <van-icon name='ellipsis'></van-icon>
          </div>
        </template>
        <van-tab title="简介">
          <detail :theGame='theGame'></detail>
        </van-tab>
        <van-tab title="攻略">
          <storage :theGame='theGame'></storage>
        </van-tab>
      </van-tabs>
    </div>
    <div class="footmes" v-if="showFoot">
      <div class="minPrice">
        <span>最低价</span>
        <p><van-icon name="gold-coin" size="1.2rem" style="margin-top: .2rem" />{{ theGame.price }}</p>
      </div>
      <p>查看购买渠道</p>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Tab, Tabs, Icon } from 'vant'
import detail from './details'
import storage from './storages'

Vue.use(Tabs)
Vue.use(Tab)
Vue.use(Icon)
export default {
  props: {
    theGame: {
      type: Object,
      default () {
        return {}
      }
    },
    id: {
      type: [Number, String],
      default () {
        return 404
      }
    },
    tabPage: {
      type: Number,
      default () {
        return 0
      }
    }
  },
  created () {
    this.activetab = this.tabPage === 1 ? 1 : 0
  },
  components: {
    detail,
    storage
  },
  data () {
    return {
      activetab: 0
    }
  },
  computed: {
    showFoot () {
      return this.activetab === 0
    }
  },
  methods: {
    backPage () {
      this.$router.go(-1)
      this.$router.animate = 2
      this.$destroy()
    }
  }
}
</script>
<style scoped>
.pWrapper{
  width: 100%;
  height: 100%;
}
.tabWrapper{
  width: 100%;
  height: calc(100% - 3rem);
  overflow-y: scroll;
}
.withoutFoot{
  height: 100%;
}
.navLeft{
  width: 5rem;
  height: 3rem;
  text-align: left;
  line-height: 3.5rem;
  font-size: 2rem;

}
.navRight{
  width: 5rem;
  right: 3rem;
  line-height: 3.5rem;
  font-size: 2rem;
  text-align: right;
  padding-right: .5rem;
}
.footmes{
  width: 100%;
  height: 3rem;
  padding: .2rem 0;
  border-top: .1rem solid rgb(189, 187, 187);
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footmes>p {
  display: block;
  height: 100%;
  font-size: 1.2rem;
  line-height: 2.2rem;
  margin-right: .5rem;
  padding: .2rem;
  border-radius: .3rem;
  overflow: hidden;
  background-color: #000;
  color: #fff;
}
.minPrice{
  height: 100%;
  width: 4rem;
}
.minPrice span{
  font-size: .7rem;
  background-color: rgb(197, 186, 186);
}
.minPrice p{
  width: 100%;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.3rem;
  vertical-align: bottom
}
</style>

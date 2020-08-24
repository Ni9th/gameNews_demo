<template>
  <div class="pWrapper">
    <van-nav-bar
    left-text="取消"
    right-text="发布"
    @click-left='backPage'/>
    <div class="blockChoose" @click="choseBlock">
      <p>
        <van-icon name="label-o" size="1rem"></van-icon>
        {{ blockName }}
      </p>
      <span>
        <van-icon name="arrow"></van-icon>
      </span>
    </div>
    <div class="editArea">
      <van-field v-model="aTitle" placeholder="添加标题" class="aTitle"></van-field>
      <van-field v-model="aContent" placeholder="添加文字" type="textarea" class="aContent"></van-field>
      <van-uploader class="upLoadBtn"  />
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { NavBar, Icon, Field, Uploader } from 'vant'

Vue.use(NavBar, Icon, Field, Uploader)
export default {
  props: {
    blockName: {
      type: String,
      default () {
        return '选择你要发往的圈子'
      }
    }
  },
  data () {
    return {
      aTitle: '',
      aContent: ''
    }
  },
  methods: {
    choseBlock () {
      this.$router.replace({ name: 'blockFilter' })
    },
    backPage () {
      this.$router.back()
    }
  }
}
</script>
<style scoped>
.pWrapper {
  width:  100%;
  height: 100%;
}
.blockChoose{
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  padding: 0 .5rem;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
}
.blockChoose p{
  font-size: .9rem;
  font-weight: 700;
}
.editArea{
  width: 100%;
  overflow: hidden;
}
.aTitle{
  width: 100%;
  margin: 1rem 0;
}
.aContent{
  width: calc(100% - 1rem);
  border: .1rem solid rgb(167, 165, 165);
  border-radius: .3rem;
  margin: .5rem;
  min-height: 10rem;
  max-height: 12rem;
}
.upLoadBtn{
  display: block;
  margin: 2rem .5rem;
}
</style>

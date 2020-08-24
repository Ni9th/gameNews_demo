<template>
    <div class="pWrapper">
      <div class="searchHeader">
        <van-search
        placeholder='请输入搜索内容'
        show-action
        v-model="searchStr"
        @search='onSearch'
        @cancel='onCancel' />
      </div>
      <div class="searchHistory">
        <p>搜索历史</p>
        <div class="historyStr">
          <span v-for="(history, index) in searchHistory" :key="index">{{ history }}</span>
        </div>
      </div>
      <div class="hotSearch">
        <p>热门搜索</p>
      </div>
    </div>
</template>
<script>
import Vue from 'vue'
import { Search } from 'vant'
import { mapGetters } from 'vuex'

Vue.use(Search)
export default {
  data () {
    return {
      searchStr: ''
    }
  },
  computed: {
    ...mapGetters([
      'searchHistory'
    ])
  },
  methods: {
    onSearch (value) {
      this.$store.dispatch('search', value)
    },
    onCancel () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.pWrapper{
  width: 100%;
}
.searchHeader{
  width: 100%;
  padding: 0;
  height: 4rem;
}
.searchHistory{
  width: 100%;
}
.searchHistory p{
  display: block;
  width: 100%;
  height: 2rem;
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 2rem;
  text-align: left;
  padding-left: 1rem;
}
.historyStr{
  padding-left: .5rem;
  display: flex;
  flex-wrap: wrap;

}
.historyStr span{
  background-color: rgb(192, 189, 189);
  margin: .25rem;
  padding: .2rem;
  border-radius: .2rem;
}
</style>

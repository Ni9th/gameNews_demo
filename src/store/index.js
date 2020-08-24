import Vue from 'vue'
import Vuex from 'vuex'
import topicList from './modules/topicList.js'
import getters from './getters.js'
import user from './modules/user'
import newsList from './modules/newsList'
import swipeImgList from './modules/swipeImg'
import games from './modules/games'
import comment from './modules/comment'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    topicList,
    user,
    newsList,
    swipeImgList,
    games,
    comment
  },
  getters
})

import axios from '@/api/index.js'
const user = {
  state: {
    isLogin: false,
    loginPage: false,
    user: {
      userName: '点击登录'
    },
    searchHistory: []
  },
  actions: {
    login ({ commit }) {
      return axios.request({
        url: '/getUserInfo',
        method: 'get'
      }).then(res => {
        commit('LOGIN', res.data)
        console.log(res)
      })
    },
    search ({ commit }, targetStr) {
      console.log(targetStr)
      commit('SET_SEARCH_HISTORY', targetStr)
    },
    logout ({ commit }) {
      commit('LOGOUT')
    },
    swLoginPage ({ commit }) {
      commit('SHOW_LOGIN')
    }
  },
  mutations: {
    LOGIN (state, data) {
      state.isLogin = true
      state.user = data
    },
    SHOW_LOGIN (state) {
      state.loginPage = !state.loginPage
    },
    SET_SEARCH_HISTORY (state, params) {
      if (!state.searchHistory.some(str => str === params)) {
        state.searchHistory.push(params)
      }
    },
    LOGOUT (state) {
      state.user = {
        userName: '点击登录'
      }
      state.isLogin = false
    }
  }
}
export default user

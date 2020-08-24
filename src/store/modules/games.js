import axios from '@/api/index'
const games = {
  state: {
    gameList: [],
    gameImgs: [],
    gameStorages: []
  },
  actions: {
    getGameList ({ commit }) {
      axios.request({
        url: '/getGameList',
        method: 'get'
      }).then(res => {
        console.log(res)
        commit('MORE_GAME', res.data)
      })
    },
    getGameImgs ({ commit }) {
      axios.request({
        url: '/getGameImgs',
        method: 'get'
      }).then(res => {
        console.log(res)
        commit('SET_IMG', res.data)
      })
    },
    getGameStorages ({ commit }) {
      axios.request({
        url: '/getGameStorages',
        method: 'get'
      }).then(res => {
        console.log(res)
        commit('SET_SLIST', res.data)
      })
    }
  },
  mutations: {
    MORE_GAME (state, params) {
      state.gameList.push(...params)
    },
    SET_IMG (state, params) {
      state.gameImgs.push(...params)
    },
    SET_SLIST (state, params) {
      state.gameStorages.push(...params)
    }
  }
}
export default games

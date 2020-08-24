import axios from '@/api/index'
const newsList = {
  state: {
    newsList: []
  },
  actions: {
    getMoreNews ({ commit }) {
      return axios.request({
        url: '/getMoreNews',
        method: 'get'
      }).then(res => {
        commit('GET_MORE_NEWS', res.data)
        console.log(res)
      })
    }
  },
  mutations: {
    GET_MORE_NEWS (state, params) {
      state.newsList.push(...params)
    }
  }
}
export default newsList

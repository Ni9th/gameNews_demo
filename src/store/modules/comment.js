import axios from '@/api/index'
const comment = {
  state: {
    comments: []
  },
  actions: {
    getComment ({ commit }) {
      return axios.request({
        url: '/getComment',
        method: 'get'
      }).then(res => {
        commit('SET_COMMENTS', res.data)
        console.log(res.data)
      })
    }
  },
  mutations: {
    SET_COMMENTS (state, params) {
      state.comments.push(...params)
    }
  }
}
export default comment

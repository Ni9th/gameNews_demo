import axios from '@/api/index'
const swipeImg = {
  state: {
    swipeImgList: []
  },
  actions: {
    getImgList ({ commit }) {
      axios.request({
        url: '/getSwipeImgList',
        method: 'get'
      }).then(res => {
        commit('SET_IMG_LIST', res.data)
        console.log(res)
      })
    }
  },
  mutations: {
    SET_IMG_LIST (state, parmas) {
      state.swipeImgList = parmas
    }
  }
}
export default swipeImg

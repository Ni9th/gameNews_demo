import axios from '@/api/index.js'
const topicList = {
  state: {
    homeTopicList: [
      { name: '头条', path: { name: '首页1' } },
      { name: '热点', path: { name: '首页2' } }
    ],
    gamesTopicList: [
      { name: '推荐', path: { name: '游戏1' } },
      { name: 'PC', path: { name: '游戏2', params: { stageName: 'PC' } } },
      { name: 'PS4', path: { name: '游戏2', params: { stageName: 'PS4' } } },
      { name: 'NS', path: { name: '游戏2', params: { stageName: 'NS' } } },
      { name: 'XBONE', path: { name: '游戏2', params: { stageName: 'XBONE' } } }
    ],
    SteagetyTopicList: [
      { name: '攻略', path: { name: '攻略1' } },
      { name: '工具', path: { name: '攻略2' } }
    ],
    communityTopicList: [
      { name: '广场', path: { name: '社区1' } },
      { name: '分区', path: { name: '社区2' } }
    ],
    hotTopic: []
  },
  actions: {
    getHotTopic ({ commit }) {
      return axios.request({
        url: '/getHotTopic',
        method: 'get'
      }).then(res => {
        console.log(res)
        commit('SET_HOTTOPPIC', res.data)
      })
    }
  },
  mutations: {
    SET_HOTTOPPIC (state, parmas) {
      state.hotTopic.push(...parmas)
    }
  }
}
export default topicList

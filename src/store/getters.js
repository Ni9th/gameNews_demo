
const getters = {
  topicList: state => state.topicList,
  homeTopicList: state => state.topicList.homeTopicList,
  gamesTopicList: state => state.topicList.gamesTopicList,
  SteagetyTopicList: state => state.topicList.SteagetyTopicList,
  communityTopicList: state => state.topicList.communityTopicList,
  hotTopic: state => state.topicList.hotTopic,

  user: state => state.user.user,
  isLogin: state => state.user.isLogin,
  loginPage: state => state.user.loginPage,
  searchHistory: state => state.user.searchHistory,

  newsList: state => state.newsList.newsList,

  swipeImgList: state => state.swipeImgList,

  gameList: state => state.games.gameList,
  gameImgs: state => state.games.gameImgs,
  gameStorages: state => state.games.gameStorages,

  comments: state => state.comment.comments
}

export default getters

import Mock from 'mockjs'
import { baseURL } from '@/config'
import { getUserInfo } from './response/user'
import { getMoreNews } from './response/newsList'
import { getImgList } from './response/swipeImg'
import { getGameList } from './response/games'
import { getHotTopic } from './response/hotTopic'
import { getComment } from './response/comment'
import { getGameImgs } from './response/gameImgs'
import { getGameStorages } from './response/gameStorages'

Mock.mock(baseURL + '/getUserInfo', getUserInfo)
Mock.mock(baseURL + '/getMoreNews', getMoreNews)
Mock.mock(baseURL + '/getSwipeImgList', getImgList)
Mock.mock(baseURL + '/getGameList', getGameList)
Mock.mock(baseURL + '/getHotTopic', getHotTopic)
Mock.mock(baseURL + '/getComment', getComment)
Mock.mock(baseURL + '/getGameImgs', getGameImgs)
Mock.mock(baseURL + '/getGameStorages', getGameStorages)

export default Mock
// http://localhost:3000

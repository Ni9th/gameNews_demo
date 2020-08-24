import axios from './index'

export const getHeadLineList = () => {
  return axios.request({
    url: '/getHeadLineList',
    method: 'get'
  })
}

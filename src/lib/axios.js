import axios from 'axios'
import { baseURL } from '@/config'
// import { getToken } from '@/lib/util'

class HttpRequest {
  constructor (baseurl = baseURL) {
    this.baseUrl = baseurl
    this.queue = {}
  }

  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {

      }
    }
    return config
  }

  // distroy (url) {
  //   delete this.queue[url]
  //   if (!Object.keys(this.queue).length) {
  //     // Spin.hide()
  //   }
  // }

  // interceptors (instance, url) {
  // }

  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    return instance(options)
  }
}
export default HttpRequest

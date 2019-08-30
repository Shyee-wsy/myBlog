import axios from 'axios'
import Vue from 'vue'
import store from '../store/index'

//创建实例并配置默认值
const service = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 30 * 1000
})

//添加请求拦截器
service.interceptors.request.use(
  //在发送前绑定token，用户验证
  config => {
    let token = store.state.token.token
    //查询字符串的参数名-值对使用"&"分隔，首先检查URL是否含有问号（以确定是否已经含有参数存在）。如果没有，就添加一个问号；否则，就添加一个和号。
    config.url += (config.url.indexOf('?') == -1 ? '?' : '&') + 'access_token=' + token
    return config
  },
  error => {
   return Promise.reject(error)
  }
)

//添加响应拦截器
service.interceptors.response.use(
  response => {
    let data = response.data
    return response
  },
  error => {
    let errorMessage;
    switch(error.response.status){
      case 401:
        errorMessage = 'Token错误'
            break
      default:
        errorMessage = error.response.data.message
            break
    }
    Vue.prototype.$message({
      message: errorMessage,
      type: 'error'
    })
    return Promise.reject('error')
  }
)

export default service

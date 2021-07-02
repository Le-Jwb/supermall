import axios from 'axios'

export function request(config){
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://192.168.3.147:5000',
    timeout: 5000
  })

  // 拦截器
  // 请求拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {

  })

  // 响应拦截器
  instance.interceptors.response.use(config => {
    return config
  }, err => {

  })

  return instance(config)
}
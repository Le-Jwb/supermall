import {request} from './request'

export function getHomeData(){
  return request({
    url: '/home'
  })
}

export function Login(type){
  return request({
    url: 'login',
    params: {
      type: type
    }
  })
}
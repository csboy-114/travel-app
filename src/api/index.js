import request from '../utils/request'

export function getSwiperInfo(){
  return request({
    url:'/index/slider',
    method:'GET'
  })
}

export function getNavInfo(){
  return request({
    url:'/index/nav',
    method:'GET'
  })
}
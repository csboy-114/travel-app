import request from '../utils/request'

export function getSwiperInfo(){
  return request({
    url:'/mall-wepApp/index/slider',
    method:'GET'
  })
}

export function getNavInfo(){
  return request({
    url:'/mall-wepApp/index/nav',
    method:'GET'
  })
}
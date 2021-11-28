import request from '../utils/request'

export function getDestInfo(id){
  return request({
    url:`/destination/content/${id}`
  })
}
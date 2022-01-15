import request from '../utils/request'

export function getDetailsInfo(id){
  return request({
    url:`/details/${id}`,
    method:'GET'
  })
}
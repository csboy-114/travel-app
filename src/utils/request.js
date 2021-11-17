import axios from "axios"

const request=axios.create({
  baseURL:'https://www.imooc.com/api/',
  withCredentials:true
})

export default request
import axios from "axios"

window.axiosCancel=[]

const request=axios.create({
  baseURL:'/api',
  withCredentials:true,
})

request.interceptors.request.use(
  config=>{
    config.cancelToken=new axios.CancelToken(cancel=>{
      window.axiosCancel.push({cancel})
    })
    return config
  },
  error=>{
    return Promise.reject(error)
  }
)



request.interceptors.response.use(
  response=>{
    if(response.data.code===200){
      return response.data.data
    }
  },
  error=>{
    return Promise.reject(error.response.status)
  }
)


export default request
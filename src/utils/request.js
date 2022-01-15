import axios from "axios"

const request=axios.create({
  baseURL:process.env.VUE_APP_BASE_API,
  withCredentials:true
})

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
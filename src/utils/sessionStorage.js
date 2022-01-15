export const get=key=>{
  return JSON.parse(sessionStorage.getItem(key))
}

export const set=(key,value)=>{
  sessionStorage.setItem(key,JSON.stringify(value))
}


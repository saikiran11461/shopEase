import axios from "axios";
import * as types from "./actionTypes";


export const postRegisterUser =(payload)=>(dispatch)=>{
    console.log("payload", payload)
    dispatch({type:types.POST_REGISTER_REQUEST})
   return axios.post("http://localhost:3344/api/users/register", payload)
    .then(res=>{
     return   dispatch({type:types.POST_LOGIN_SUCCESS, payload:res.data})
    })
    .catch(err=>{
      return  dispatch({type:types.POST_LOGIN_FAILURE, payload:err})
    })
}



export const postLoginUser =(payload)=>(dispatch)=>{
    console.log("payload", payload)
    dispatch({type:types.POST_REGISTER_REQUEST})
   return axios.post("http://localhost:3344/api/users/login", payload)
    .then(res=>{
     return   dispatch({type:types.POST_LOGIN_SUCCESS, payload:res.data})
    })
    .catch(err=>{
      return  dispatch({type:types.POST_LOGIN_FAILURE, payload:err})
    })
}
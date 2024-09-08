import axios from "axios";
import * as types from "./actionTypes";


export const getMenProducts = ()=>(dispatch)=>{
    dispatch({type:types.GET_MEN_PRODUCTS_REQUEST})
    return axios.get("http://localhost:3344/api/men")
    .then(res=>{
    dispatch({type:types.GET_MEN_PRODUCTS_SUCCESS, payload:res.data.data})
    return res.data.data
    })
    .catch(err=>{
     return   dispatch({type:types.GET_MEN_PRODUCTS_FAILURE, payload:err})
    })
}
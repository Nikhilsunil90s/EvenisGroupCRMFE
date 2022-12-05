import { createSlice } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../config/serverConfig";

const STATUSES= Object.freeze({
    SUCCESS:"Success",
    ERROR:"error",
    LOADING:"loading",
    FALSE:"false"
})

const initialState = {
    data:[],
    token:"",
    status:STATUSES.FALSE,
}as any;

const LoginSlice=createSlice({
    name:`login`,
    initialState,
    reducers:{
        setLogin(state,action){
            state.token = action.payload;
        },
        setStatus(state,action){
            state.status =action.payload;
        },
        setLogOut(state,action){
            state.status = action.payload
        }

    }})

     export const {setLogin,setStatus,setLogOut}= LoginSlice.actions
     export default LoginSlice.reducer
     

    //  Thunk //

  export   const LoginFetch =(data:any)=>{
       return async function fetchLoginThunk(dispatch:any){
        dispatch(setStatus(STATUSES.LOADING));
        try{
            fetch(API_BASE_URL + "signin"
            ,{method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)})
        .then((res)=>res.json())
        .then((res)=>{
            if(res.status === 200){
             dispatch(setStatus(STATUSES.SUCCESS))
             dispatch(setLogin(res.token))
            }else if(res.status === false){
                dispatch(setStatus(STATUSES.ERROR))
          
            }

        })

       }catch{

       }
    }

}
export const LogOutFunction=()=>{
    return  function LogoutFunction (dispatch:any){
        dispatch(setLogOut(STATUSES.FALSE))
    }
   }
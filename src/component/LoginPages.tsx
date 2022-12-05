 import { toNamespacedPath } from "node:path/win32";
import React, { useState,useEffect } from "react";
 import {useNavigate} from 'react-router-dom'
 import { useDispatch,useSelector } from "react-redux";
 import {toast,Toaster} from "react-hot-toast"
 import { LoginFetch } from "../redux/loginSlice";
 const LoginPage=()=>{
    const navigate = useNavigate()
    const dispatch =useDispatch()
    const state = useSelector((login)=> login)as any;
    const [LoginStatus,setStatus]=useState(false)as any
    const [data,setData]=useState({
        email:"",
        password:""
    })as any

    const notifyLogin = () => toast.success("Welcome To Intermann!");
    const notifyLoginError = () =>
      toast.dismiss("Invalid Email or Password! Please Try Again.");
    
// useEffect(()=>{
//     if(state.login.status === "Success"){
//         navigate("/download-center")
//      }
//     else if(state.login.status === 'error'){
//         toast.error("Wrong email password!!")
//      }

// })
  
useEffect(() => {
    if (state.login.status === "Success") {
      setTimeout(()=>{
        notifyLogin();
      },2000)
      setStatus(false)
      localStorage.setItem("token", state.login.token);
      navigate("/download-center");
    } else if (state.login.status === 'error') {
      notifyLoginError();
      setStatus(false)

    }
  }, [state]);

 
    const LoginCheck=(e:any)=>{
      setStatus(true)
        e.preventDefault()
        dispatch<any>(LoginFetch(data))
        if (state.login.status === "Success") {
          
      setStatus(false)
         
            localStorage.setItem("token", state.login.token);
            navigate("/download-center");
            setTimeout(()=>{
              notifyLogin();
            },2000)
          } else if (state.login.status === 'error') {
      setStatus(false)
         
          notifyLoginError();
          }


    }
    return(<>
    <Toaster  position="top-right" toastOptions={{}} containerStyle={{zIndex:"999999999"}}          />
            <div className="2xl:flex xl:flex md:flex 2xl:p-0 xl:p-0 md:p-0 sm:p-0 px-14 pt-16  h-auto  w-[100vw]">
            <div className="xl:w-6/12 xl:bg-gray-900 xl:block md:block md:w-6/12 sm:hidden hidden">
                <img className="login-sideImg" src={require("../assets/img/SideLoginImg.svg").default}   />
              </div>
            <div className="2xl:w-6/12 xl:w-6/12 md:w-6/12  sm:w-full  xl:bg-white  h-[100vh] 2xl:pt-20 xl:py-11 md:pt-10 md:px-20 2xl:px-20 xl:px-20  sm:p-14" >
       <div className="grid">
        <div className="w-12/12">
         <p className="font-sans font-normal 2xl:text-[26px] not-italic">Welcome back</p>
        </div>
        <div className="w-12/12">
            <p className="font-sans font-bold 2xl:text-[49px] xl:text-[30px] md:text-[25px] sm:text-[14px] text-[29px] not-italic">Login to your account</p>
            </div>
        </div>       
              
<form className="2xl:mt-10 xl:mt-10 md:mt-10 sm:mt-10 mt-5" autoComplete="" onSubmit={LoginCheck}>
<div className="grid">
    <div className="w-12/12 grid">
        <label className="font-sans font-normal not-italic text-[#4A5568;] 2xl:text-[26px] xl:text-[14px] md:text-[12px] sm:text-[8px]  mb-2">Email</label>
        <input className="w-full rounded-3xl 2xl:h-16 xl:h-13 md:h-9 sm:h-6 border-2 focus:outline-none border-[#E8E8E8] font-sans font-normal 2xl:text-[23px] px-5" type={"email"} placeholder="Email..." autoComplete="off" onChange={(e)=>setData({...data,email:e.target.value})}    />
    </div>
    <div className="w-full grid mt-6">
        <label className="font-sans font-normal not-italic text-[#4A5568;] 2xl:text-[26px] xl:text-[14px] md:text-[12px] sm:text-[8px] mb-2">Password</label>
        <input className="w-full rounded-3xl 2xl:h-16 xl:h-13 md:h-9 sm:h-6 border-2 focus:outline-none border-[#E8E8E8] font-sans font-normal 2xl:text-[23px] px-5" placeholder="************" type={"password"}   onChange={(e)=>setData({...data,password:e.target.value})} />

    </div>
    <div className="flex w-12/12 mt-10">
        <div className="w-6/12 flex">
            <div className="flex ">
                <input type={"radio"}  className="rounded-full w-5 mx-2"  />
                <p className="font-sans font-normal not-italic 2xl:text-[26px] xl:text-[14px] md:text-[12px] sm:text-[8px]">Remember me</p>
            </div>
            </div> 
             <div className="w-6/12 text-end">
            <p className="font-sans font-normal not-italic text-[#2C5282] 2xl:text-[26px] xl:text-[14px] md:text-[12px] sm:text-[8px]">Forgot password?</p>
            </div> 
    </div>
    <div className="flex 2xl:mt-12 xl:mt-7 md:pt-10 sm:pt-10" >
        <button type="submit" disabled={LoginStatus} className="w-full p-4 not-italic rounded-3xl font-sans font-bold text-[#ffff] bg-[#1A5E9A] 2xl:text-[26px] xl:text-[15px] md:text-[13px] sm:[10px]">{LoginStatus  ?< div className="flex justify-center items-center">  <svg className="animate-spin h-5 w-5 mr-3 border-[2px] rounded-full" viewBox="0 0 24 24">
  </svg> Please Wait!!</div>  :  "Login now"}</button>
    </div>
</div>

</form>
                </div>
                </div>
    </>)
 }
 export default LoginPage
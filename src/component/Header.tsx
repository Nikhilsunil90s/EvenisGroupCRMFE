import React from "react";
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {LogOutFunction} from "../redux/loginSlice";
import {Toaster,toast} from 'react-hot-toast'
function  Header(){
  const LogNotify = () => toast.success("Log-Out!");
     const navigate =useNavigate()
     const dispatch =useDispatch()

    const LogOut=()=>{
      dispatch<any>(LogOutFunction())
      navigate("/")
      LogNotify()
    }

    return(<>
      <Toaster position="top-right" containerStyle={{zIndex:"999999999999999999"}}/>

           <div className="flex w-full 2xl:h-[100px] xl:h-[70px] md:h-[60px] sm:h-[50px]  bg-[#fff] border-b-[1px] border-[#c5c5c5]">
            <div className="w-7/12 h-full 2xl:p-0 2xl:px-8 items-center flex font-sans font-black not-italic text-[#000] 2xl:text-[32px] xl:text-[14px]  md:text-[12px] sm:text-[8px] leading-5">Download Center</div>
            <div className="w-3/12 justify-end flex items-center p-1"><img src={require("../assets/img/admin.svg").default } className="2xl:h-[67px] xl:h-[50px] md:h-[30px] sm:h-[25px] h-[13px] mx-2" /><div className="grid font-sans font-bold 2xl:text-[20px] xl:text-[18px] md:text-[15px] sm:text-[10px] text-[8px] lending-4">Test<span className="font-sans font-normal 2xl:text-[14px]  xl:text-[12px] md:text-[10px] sm:text-[8px] text-[6px] text-[#717579] lending-4">super admin</span></div></div>
            <button className="w-2/12 cursor-pointer justify-center flex items-center p-1" onClick={()=>LogOut()}><img src={require("../assets/img/logout.svg").default } className="2xl:h-[58px] xl:h-[48px] md:h-[30px] sm:h-[25px] h-[13px] md mx-2" /><p className="font-sans font-medium 2xl:text-[16px]  xl:text-[14px]  md:text-[12px]  sm:text-[10px]  text-[#A3A3A3;] lending-4">Log out</p></button>
           </div>

    </>)
}
export default  Header;
import React from "react";
import Header from "../component/Header";
import { Toaster } from "react-hot-toast";

function DownLoadCenter(){

    return(
        <>
      <Toaster position="top-right" containerStyle={{zIndex:"999999999999999999"}}/>

        <Header   />

        <section className="mt-10 px-7">

        <div className="flex w-full 2xl:h-[80px] items-center rounded-2xl bg-white p-3 font-sans font-black not-italic text-[#000] 2xl:text-[22px] xl:text-[18px]  md:text-[14px] sm:text-[10px]  ">
        Bon de visite signé
        </div>
        <div className="grid w-full rounded items-center  bg-white justify-center 2xl:h-[80px] mt-5">
          <p className="font-sans font-black not-italic text-[#000] 2xl:text-[18px] xl:text-[15px]  md:text-[13px] sm:text-[10px] ">✘✘ No Data Available Yet!!</p>
        </div>
        </section>
        </>
    )
}
export default  DownLoadCenter;
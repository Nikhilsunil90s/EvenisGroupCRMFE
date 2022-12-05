import React from "react";

export default function  Sidebar(props:any){

    return(<>
        <div  className="h-[100vh] w-full flex">
            <div className="2xl:w-2/12 xl:w-2/12 md:w-3/12 sm:w-3/12 bg-white ">
                <div className="w-full 2xl:h-[100px] xl:h-[70px] md:h-[60px] sm:h-[50px] flex p-2 border-b-[1px] justify-center border-[#1A5E9A]"
                >
<img src={require("../assets/img/logo.svg").default}  className="h-18" />
                </div>
        <ul>
            <li> <button className="w-full p-7 font-sans font-medium not-italic text-[#717579] 2xl:text-[18px] xl:text-[14px]  md:text-[10px] sm:text-[8px]  leading-5 inline-block align-middle "><div className="w-3/12 inline-flex align-middle justify-end"><img src={require("../assets/img/grid.svg").default} className="inline-flex mx-3" /></div><div className="w-9/12 inline-flex align-middle">Dashboard</div></button></li>
            <li>   
            <button className="w-full p-7 font-sans font-medium not-italic text-[#717579] 2xl:text-[18px] xl:text-[14px]  md:text-[10px] sm:text-[8px] leading-5"><div className="w-3/12 inline-flex align-middle justify-end"><img src={require("../assets/img/Leads.svg").default} className="inline-flex mx-3" /></div><div className="w-9/12 inline-flex align-middle">Prospects/Leads</div></button>
        </li>
       
            <li>    <button className="w-full p-7 font-sans font-medium not-italic text-[#717579] 2xl:text-[18px] xl:text-[14px]  md:text-[10px] sm:text-[8px] leading-5"><div className="w-3/12 inline-flex align-middle justify-end"><img src={require("../assets/img/group.svg").default} className="inline-flex mx-3" /></div><div className="w-9/12 inline-flex align-middle">Clients</div></button></li>
            <li>     <button className="w-full p-7 font-sans font-medium not-italic text-[#717579] 2xl:text-[18px] xl:text-[14px]  md:text-[10px] sm:text-[8px] leading-5"><div className="w-3/12 inline-flex align-middle justify-end"><img src={require("../assets/img/setting.svg").default} className="inline-flex mx-3" /></div><div className="w-9/12 inline-flex align-middle">User Settings</div></button></li>
            <li className="p-2"><button className="w-full 2xl:h-14 xl:h-14 md:h-12 sm:h-10 xs:h-8 font-sans font-medium not-italic rounded-2xl bg-[#195D9A] text-[#ffff] 2xl:text-[18px] xl:text-[14px]  md:text-[10px] sm:text-[8px] leading-5"><div className="w-3/12 inline-flex align-middle justify-end"><img src={require("../assets/img/download.svg").default} className="inline-flex mx-3 2xl:10 xl:h-8 md:h-6 sm:h-3" /></div><div className="w-9/12 inline-flex align-middle">Download Center</div></button></li>
        </ul>
            

            </div>
            <div className="2xl:w-10/12 xl:w-10/12 md:w-9/12 sm:w-9/12 bg-[#EEEEEE] ">
            {props.children}
            </div>
        </div>
    </>)
}
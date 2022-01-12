import React,{useState} from 'react'
import RedirectForm from "../Redirectform/Redirectform";
import PageHeading from "../PageHeading/PageHeading";
import {Link} from "react-router-dom"
import Addform from "../Addform/Addform"


function DataForm() {


const [currenttab,settab]=useState("/")




  return (
      <>
        <div className="rounded-lg shadow bg-base-200 drawer h-30">
        <input id="my-drawer-1" type="checkbox" className="drawer-toggle"/> 
        <div className="flex flex-col drawer-content">
        <div className="w-full navbar bg-base-300">
       <div className="flex-none lg:hidden">
        <label for="my-drawer-1" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div> 
     
      <div className="flex-none hidden lg:block">
        <ul className="menu horizontal text-white">
              <li>
          <Link to="/">
           Home
          </Link>
             </li> 
            <li onClick={()=>{
                settab('SERVICES')
              }}>
            Service
             </li> 
            <li onClick={()=>{
                settab('COURSES')
              }}>
            Courses
             </li> 
            <li onClick={()=>{
                settab('STARTUP')
              }}>
           Startup
             </li> 
        </ul>
      </div>
    </div>
  </div> 


{
currenttab==="/"  && <Addform />
}

{
currenttab!=="/"  && <RedirectForm pageheading={currenttab} formname={currenttab} />
}













</div>
      
 
        
       


       



   </>

)
}

export default DataForm;
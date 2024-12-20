import React from "react";
import Sidebar from "./naim/Component/Sidebar";
import AddInfo from "../Components/AddInfo";
import Logo from '../assets/log_logo.png'



const AddInfoPage = () => {
  return (
    <div>
      <div className="bg-white bg-opacity-60 shadow-[rgba(145,_158,_171,_0.10)_-8px_8px_24px_-4px] h-[90px] pl-[68px] pt-6">
                          <img src={Logo} alt="Logo" className='h-[37px] w-[83px] object-cover'/>
                      </div>
      <div className="flex">
        <Sidebar />
        <AddInfo />
        
      </div>          
    </div>
  );
};

export default AddInfoPage;

import React from 'react'
import { useParams } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Sidebar from './Sidebar';
import GroupPage from './GroupPage';
import Logo from '../../../assets/log_logo.png'
import Login from '../../Login';

const PageCategory = () => {
    
    const { category } = useParams()

    if (category == "dashboard" || category == "groups" || category == "users" || category == "analytics" || category == "reviews" || category == "settings" || category == "archive" || category == "login") {
        return (
           <div className="">
            {
              category == "login"?
              <Login/> : 

              <div>
              <div className="bg-white bg-opacity-60 shadow-[rgba(145,_158,_171,_0.10)_-8px_8px_24px_-4px] h-[90px] pl-[68px] pt-6">
                  <img src={Logo} alt="Logo" className='h-[37px] w-[83px] object-cover'/>
              </div>
              <div className="flex">
                  <Sidebar />
                  
                  {category == "groups" && <GroupPage />}
              </div>
          </div>

            }
              
           </div>
        )
    } else {
        return <ErrorPage />
    }
}

export default PageCategory
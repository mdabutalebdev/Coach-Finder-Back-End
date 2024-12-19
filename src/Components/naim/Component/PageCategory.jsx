import React from 'react'
import { useParams } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Sidebar from './Sidebar';
import GroupPage from './GroupPage';

const PageCategory = () => {
    
    const { category } = useParams()

    if (category == "dashboard" || category == "groups" || category == "users" || category == "analytics" || category == "reviews" || category == "settings" || category == "archive") {
        return (
            <div>
                <div className="bg-white bg-opacity-60 shadow-[rgba(145,_158,_171,_0.10)_-8px_8px_24px_-4px] h-[90px]"></div>
                <div className="flex">
                    <Sidebar />
                    
                    {category == "groups" && <GroupPage />}
                </div>
            </div>
        )
    } else {
        return <ErrorPage />
    }
}

export default PageCategory
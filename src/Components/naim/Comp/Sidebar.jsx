import React from 'react'
import { Analytics, Archive, DashboardIcon, Gropus, Setting, Star, Users, } from '../icons'
import { Link } from 'react-router-dom'
import Login from '../../Login'

const Sidebar = () => {
    let list = [
       
        {
            name: "Dashboard",
            icon: <DashboardIcon />,
            path: "dashboard"
        },
        {
            name: "Groups",
            icon: <Gropus />,
            path: "groups"
        },
        {
            name: "Users",
            icon: <Users />,
            path: "users"
        },
        {
            name: "Analytics",
            icon: <Analytics />,
            path: "analytics"
        },
        {
            name: "Reviews",
            icon: <Star className={"!fill-none !stroke-[#141B34] !h-6 !w-6"} />,
            path: "reviews"
        },
        {
            name: "Settings",
            icon: <Setting />,
            path: "settings"
        },
        {
            name: "Archive",
            icon: <Archive />,
            path: "archive"
        },
    ]

    return (
        <div className="h-full w-[283px] pt-[44px] pl-[68px]">
            <ul className='flex flex-col gap-8'>
                {
                    list.map((el, idx) => (
                        <Link key={idx} to={`/${el.path}`}>
                            <li className='flex items-center gap-[17px] text-base font-semibold text-primaryColor'>{el.icon} {el.name}</li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default Sidebar
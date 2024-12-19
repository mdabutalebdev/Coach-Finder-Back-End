import React, { useState } from 'react'
import Button from '../../layouts/button'
import { Close, Delet, Delet2, Delet3, Export, Search, Star } from '../icons'
import { IoFilterOutline } from "react-icons/io5";
import { groupData } from './groupData';


const GroupPage = () => {
    let [data, setdata] = useState(groupData)

    let arr = ["Innovators", "Titans", "Collective", "Visionary", "Dynamic"]

    const [first, setfirst] = useState("All Groups")
    const [chekDisplay, setchekDisplay] = useState(false)
    const [checkedArr, setcheckedArr] = useState([])
    const [popUpDelet, setpopUpDelet] = useState(false)
    const [ischecked, setischecked] = useState(false)

    let holdTimeout;

    function msDown() {
        holdTimeout = setTimeout(() => {
            setchekDisplay(true)
        }, 300);
    }
    function msUp() {
        clearInterval(holdTimeout)
    }

    function handleCheckboxChange(id) {
        if (checkedArr.includes(id)) {
            return setcheckedArr(checkedArr.filter(item => item !== id))
        } else {
            return setcheckedArr([...checkedArr, id])
        }
    }

    function handleDeletPopUp() {
        if (ischecked == true) {
            setpopUpDelet(false)
        }
        else if (checkedArr.length > 0) {
            setpopUpDelet(true)
        }

    }



    function handleDelet() {
        let deletUpdate = data.filter((el) => {
            return !checkedArr.includes(el.id)
        })
        setdata(deletUpdate)
        setchekDisplay(false)
        setcheckedArr([])
        setpopUpDelet(false)
    }

    
    return (
        <div className='pt-[47px] pl-[38px] pr-[60px] font-sans w-full relative z-10'>

            <div className={`bg-[#00000064]  h-[1000px] w-full absolute left-0 top-0 z-20 flex flex-col items-center justify-center ${popUpDelet ? "block" : "hidden"}`}>

                <div className="p-6 rounded-xl bg-white w-[544px] flex gap-4">
                    <div className="relative w-[55px] h-[55px]">
                        <Delet2 />
                        <div className="!absolute !top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Delet3 />
                        </div>
                    </div>

                    <div className="">
                        <h3 class="text-gray-900 font-urbanist text-xl font-semibold leading-7 flex items-center justify-between">
                            Are you sure you want to delete this Group?
                            <Close onClick={() => setpopUpDelet(false)} />
                        </h3>

                        <p className='text-[#535862] text-base leading-[24px] mt-[6px]'>The group  will be archived. You can unable the group from archive section.</p>

                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" checked={ischecked} onChange={() => setischecked(!ischecked)} />
                                <h4 className='text-[#414651] text-sm font-semibold'>Don’t show again</h4>
                            </div>

                            <div className="flex gap-4 mt-2">
                                <Button onClick={() => setpopUpDelet(false)} className='!bg-transparent !border !text-[#14141A]'>
                                    Cancel
                                </Button>

                                <Button onClick={handleDelet} className='!bg-[#F31A1A]'>
                                    Confirm
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="flex justify-between">
                <h3 className='text-[24px] font-medium'>{chekDisplay ? "Manage Groups" : "Groups"}</h3>

                {
                    chekDisplay ?
                        <Button onClick={ischecked ? handleDelet : handleDeletPopUp} className="flex gap-2 items-center px-3">
                            <Delet />
                            Delete
                        </Button>
                        :
                        <div className="flex gap-4">
                            <Button>
                                Add Group
                            </Button>
                            <Button className='!bg-transparent !border !text-[#14141A]'>
                                Manage Groups
                            </Button>
                        </div>
                }
            </div>

            <div className="w-[95%] mt-[75px] mx-auto flex items-center justify-between">
                <select onChange={(e) => setfirst(e.target.value)} value={first} className='outline-none w-[115px] h-[35px] border rounded-md text-center'>
                    {
                        arr.map((el, idx) => (
                            <option key={idx}>{el}</option>
                        ))
                    }
                </select>

                <div className="flex items-center">
                    <button className='flex gap-2 items-center text-sm text-[#787878]'>
                        <Export /> Export
                    </button>

                    <div className="relative ml-6 mr-2 bg-[#F2F2F2]">
                        <Search className="absolute top-1/2 -translate-y-1/2 left-[12px]" />
                        <input type="text" className='outline-none !bg-transparent border rounded w-[148px] pl-[39px] pr-[15px] py-2 text-sm h-[30px]' placeholder='Search here' />
                    </div>

                    <button className='flex gap-2 items-center text-sm text-[#787878] bg-[#F2F2F2] py-2 px-[10px]'>
                        <IoFilterOutline />
                        Filter
                    </button>
                </div>
            </div>

            <div className="w-[95%] mx-auto mt-2">
                <div className="bg-[#6A8DAB] text-white p-5 font-semibold rounded-t-lg">
                    <div className="flex">
                        <div className="w-2/12">Groups</div>
                        <div className="w-2/12">Location</div>
                        <div className="w-2/12">Created by</div>
                        <div className="w-2/12">Date</div>
                        <div className="w-2/12">Members</div>
                        <div className="w-2/12">Rating</div>
                    </div>
                </div>
            </div>

            <div className="w-[95%] mx-auto">
                <div className="flex flex-col gap-2">
                    {
                        data.map((el, idx) => (
                            <div onMouseDown={msDown} onMouseUp={msUp} key={idx} className="flex items-center px-5 py-[17px] relative">

                                <div className={`absolute -left-8 top-1/2 -translate-y-1/2 ${chekDisplay ? "block" : "hidden"}`}>
                                    <div className={`w-4 h-4 border-2 ${checkedArr.includes(el.id) ? "border-BtnColor" : "border-gray-300"} rounded cursor-pointer relative`}
                                        onClick={() => handleCheckboxChange(el.id)}>
                                        <svg className={`w-3 h-3 text-BtnColor absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${checkedArr.includes(el.id) ? "block" : "hidden"}`} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>

                                <div className="w-2/12 text-left text-[#EB3743] text-xm font-normal">{el.Groups}</div>
                                <div className="w-2/12 text-left text-[#1A1A1A] text-xm font-normal">{el.Location}</div>
                                <div className="w-2/12 text-left text-[#1A1A1A] text-xm font-normal">{el.CreatedBy}</div>
                                <div className="w-2/12 text-left text-[#1A1A1A] text-xm font-normal">{el.Date}</div>
                                <div className="w-2/12 text-left text-[#1A1A1A] text-xm font-normal">{el.Members}</div>
                                <div className="w-2/12 flex items-center gap-2">
                                    <div className="flex items-center gap-[5px]">
                                        {
                                            Array.from({ length: el.Rating }, (_, idx) => (
                                                <Star key={idx} className={idx === 4 ? "stroke-[#FDAE53] fill-none" : false} />
                                            ))
                                        }
                                    </div>
                                    <span className="text-gray-500">(35 reviews)</span>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default GroupPage
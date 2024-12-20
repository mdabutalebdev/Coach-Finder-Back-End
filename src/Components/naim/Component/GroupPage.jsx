import React, { useEffect, useState } from 'react'
import Button from '../../../Components/layouts/Button'
import { Close, Delet, Delet2, Delet3, Export, Search, Star } from '../icons'
import { IoFilterOutline } from "react-icons/io5";
import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { deleteGroup, fetchGroups, searchFeatch, toastFunc } from '../../../redux/FilterSice';


const GroupPage = () => {

    let arr = ["Innovators", "Titans", "Collective", "Visionary", "Dynamic"]

    const [first, setfirst] = useState("All Groups")
    const [chekDisplay, setchekDisplay] = useState(false)
    const [checkedArr, setcheckedArr] = useState([])
    const [popUpDelet, setpopUpDelet] = useState(false)
    const [ischecked, setischecked] = useState(false)
    const [toast, settoast] = useState(false);
    const [filter, setfilter] = useState(false);

    let holdTimeout;

    function msDown() {
        holdTimeout = setTimeout(() => {
            setchekDisplay(true)
        }, 300);
    }

    function msUp() {
        clearInterval(holdTimeout)
    }

    let { dataInfo, toastName } = useSelector((state) => state.FilterSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchGroups());
    }, []);


    const searchChange = (e) => {
        dispatch(searchFeatch(e.target.value));
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
        dispatch(deleteGroup(checkedArr[0]));
        dispatch(toastFunc(checkedArr[0]));
        setchekDisplay(false)
        setcheckedArr([])
        setpopUpDelet(false)
        setTimeout(() => {
            settoast(true)
        }, 300);
        setTimeout(() => {
            settoast(false)
        }, 1000);
    }


    return (
        <div className='py-[47px] pl-[38px] pr-[60px] font-sans w-full h-[90vh] relative z-10'>

            {/* popup start */}
            <div className={`bg-[#00000064]  h-screen w-full absolute left-0 top-0 z-20 flex flex-col items-center justify-center ${popUpDelet ? "block" : "hidden"}`}>

                <div className="p-6 rounded-xl bg-white w-[544px] flex gap-4">
                    <div className="relative w-[55px] h-[55px]">
                        <Delet2 />
                        <div className="!absolute !top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Delet3 />
                        </div>
                    </div>

                    <div className="">
                        <h3 className="text-gray-900 font-urbanist text-xl font-semibold leading-7 flex items-center justify-between">
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
            {/* popup end */}

            {/* toast start */}
            <div className={`w-[544px] shadow-xl p-6 flex gap-4 rounded-2xl bg-white duration-1000 ease-linear absolute ${toast ? "top-0 block" : "bottom-[100%] hidden"} left-1/2 -translate-x-1/2`}>
                <div className="relative w-[55px] h-[55px]">
                    <Delet2 />
                    <div className="!absolute !top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Delet3 />
                    </div>
                </div>

                <div className="">
                    <h3 className="text-gray-900 font-urbanist text-xl font-semibold leading-7 flex items-center justify-between">
                        {toastName} group deleted successfully
                        <Close onClick={() => setpopUpDelet(false)} />
                    </h3>

                    <p className='text-[#535862] text-base leading-[24px] mt-[6px]'>The group is archived. You can check the group from <span className='text-[#0BF] cursor-pointer'>here.</span></p>
                </div>
            </div>
            {/* toast end */}

            <div className="flex justify-between">
                <h3 className='text-[24px] font-medium'>{chekDisplay ? "Manage Groups" : "Groups"}</h3>

                {
                    chekDisplay ?
                        <Button onClick={ischecked ? handleDelet : handleDeletPopUp} className="flex gap-2 items-center px-3 font-semibold">
                            <Delet />
                            Delete
                        </Button>
                        :
                        <div className="flex gap-4">
                            <Link to={`/groups/add-info`}>
                                <Button className='font-semibold'>
                                    Add Group
                                </Button>
                            </Link>
                            <Button onClick={() => setchekDisplay(true)} className='!bg-transparent font-semibold !border !text-[#14141A]'>
                                Manage Groups
                            </Button>
                        </div>
                }
            </div>

            <div className="w-[95%] mt-[75px] mx-auto flex items-center justify-between">
                <select onChange={(e) => setfirst(e.target.value)} value={first} className='outline-none w-[115px] h-[35px] border rounded-md text-left'>
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
                        <input onChange={searchChange} type="text" className='outline-none !bg-transparent border rounded w-[148px] pl-[39px] pr-[15px] py-2 text-sm h-[30px]' placeholder='Search here' />
                    </div>

                    <div className="relative">
                        <Button onClick={() => setfilter(!filter)} className={`flex gap-2 items-center text-sm font-semibold ${filter ? false : "bg-[#F2F2F2] !text-[#787878]"} py-2 px-[10px] `}>
                            <IoFilterOutline />
                            Filter
                        </Button>

                        <div className={`w-64 absolute right-0 top-[110%] z-50 bg-white shadow-lg rounded-md p-4 space-y-2 text-gray-800 duration-500 ease-linear ${filter ? "block scale-1" : "hidden scale-x-0"}`}>
                            <button className="block w-full text-left hover:bg-gray-100 px-4 py-2 rounded-md">
                                Alphabetical <span className="font-bold">A–Z</span>
                            </button>
                            <button className="block w-full text-left hover:bg-gray-100 px-4 py-2 rounded-md">
                                Alphabetical <span className="font-bold">Z–A</span>
                            </button>
                            <button className="block w-full text-left hover:bg-gray-100 px-4 py-2 rounded-md">
                                Dates – <span className="font-bold">Ascending</span>
                            </button>
                            <button className="block w-full text-left hover:bg-gray-100 px-4 py-2 rounded-md">
                                Dates – <span className="font-bold">Descending</span>
                            </button>
                            <button className="block w-full text-left hover:bg-gray-100 px-4 py-2 rounded-md">
                                Members – <span className="font-bold">High – Low</span>
                            </button>
                            <button className="block w-full text-left hover:bg-gray-100 px-4 py-2 rounded-md">
                                Members – <span className="font-bold">Low – High</span>
                            </button>
                        </div>

                    </div>
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

            <div className="w-full mx-auto overflow-y-auto h-[58vh]">
                <div className="flex flex-col gap-2">
                    {
                        dataInfo?.map((el, idx) => {
                            const months = [
                                "January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"
                            ];

                            let date = new Date("2024-12-19T17:36:07.094Z");
                            const year = date.getFullYear();
                            const month = months[date.getMonth()]
                            const day = date.getDate();

                            return (
                                <div onMouseDown={msDown} onMouseUp={msUp} key={idx} className="flex items-center px-[50px] py-[17px] relative">

                                    <div className={`absolute left-0 top-1/2 -translate-y-1/2 ${chekDisplay ? "block" : "hidden"}`}>
                                        <div className={`w-4 h-4 border-2 ${checkedArr.includes(el._id) ? "border-BtnColor" : "border-gray-300"} rounded cursor-pointer relative`}
                                            onClick={() => handleCheckboxChange(el._id)}>
                                            <svg className={`w-3 h-3 text-BtnColor absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${checkedArr.includes(el._id) ? "block" : "hidden"}`} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="w-2/12 text-left text-[#EB3743] text-xm font-normal">{el.group_name}</div>
                                    <div className="w-2/12 text-left text-[#1A1A1A] text-xm font-normal capitalize">{el.country},{el.city}</div>
                                    <div className="w-2/12 text-left text-[#1A1A1A] text-xm font-normal capitalize">
                                        {el.group_createdBy.first_name}  {el.group_createdBy.last_name}
                                    </div>
                                    <div className="w-2/12 text-left text-[#1A1A1A] text-xm font-normal">
                                        {day} {month}  {year}
                                    </div>
                                    <div className="w-2/12 text-left text-[#1A1A1A] text-xm font-normal">
                                        {2500}</div>
                                    <div className="w-2/12 flex items-center gap-2">
                                        <div className="flex items-center gap-[5px]">
                                            {
                                                Array.from({ length: 5 }, (_, idx) => (
                                                    <Star key={idx} className={idx === 4 ? "stroke-[#FDAE53] fill-none" : false} />
                                                ))
                                            }
                                        </div>
                                        <span className="text-gray-500">(35 reviews)</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default GroupPage
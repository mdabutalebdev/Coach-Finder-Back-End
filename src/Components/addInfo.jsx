import { useState } from "react";
import Plus from "../assets/icon/Plus";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Idea from "../assets/icon/Idea";
import Cross from "../assets/icon/Cross";
import axios from "axios";
import Swal from "sweetalert2";
import { Close } from "./naim/icons";
import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import DragIcon from "../assets/icon/DragIcon";



const zodAddInfoValidation = z.object({
  group_name: z.string().min(3, { message: "Group name is required" }),
   
  country: z
  .array(z.string().nonempty({ message: "Each industry must be a non-empty string" }))
  .nonempty({ message: "At least one industry is required" }),
  city: z.string().nonempty({ message: "City is required" }),

  group_industry: z
  .array(z.string().nonempty({ message: "Each industry must be a non-empty string" }))
  .nonempty({ message: "At least one industry is required" }),

  group_primary_goal: z
  .array(z.string().nonempty({ message: "Each industry must be a non-empty string" }))
  .nonempty({ message: "At least one industry is required" }),

  group_focus_area: z
  .array(z.string().nonempty({ message: "Each industry must be a non-empty string" }))
  .nonempty({ message: "At least one industry is required" }),
  group_key_topics: z
  .array(z.string().nonempty({ message: "Each industry must be a non-empty string" }))
  .nonempty({ message: "At least one industry is required" }),

  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  meeting_format: z.enum(["In person", "Virtual", "Hybrid"], {
    errorMap: () => ({ message: "Please choce one options" }),
  }),
  hiring_price: z.string().regex(/^\d+$/, { message: "Price must be a valid number" }),
  registration_link: z.string().url({ message: "Enter a valid URL" }),


  group_logo: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: "Logo is required" }),

    group_video: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: "" }),
})
const AddInfo = () => {

 const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm();
 

  const adminId = localStorage.getItem("adminId");
  const [swipe, setswipe] = useState(false);
  const [imgUrl, setimgUrl] = useState(false);
  const [videoUrl, setvideoUrl] = useState(false);


  const [addLogoPop, setAddLogoPop] = useState(false);
  const [upDone, setupDone] = useState(false);
  const [progress, setProgress] = useState(0);


  const [groupInfo, setgroupInfo] = useState({
    group_name: "",
    country: "",
    city: "",
    group_industry: "",
    group_primary_goal: "",
    group_focus_area: "",
    group_key_topics: "",
    description: "",
    meeting_format: "",
    hiring_price: "",
    registration_link: "",
    group_logo: null,
    group_video: "",
    review_status: false,
    group_createdBy: adminId,
    group_rating: [],
    group_size: 0,
  });
 
 

  const first = ["Finance", "Healthcare", "Consumer Goods", "Manufacturing", "Real Estate", "Education", "Media"];
  const second = ["Networking", "Scaling my business", "Personal development", "Leadership insights", "Accountability", "Problem-solving", "Exploring new markets", "Mentorship"];
  const third = ["Integrity", "Innovation", "Collaboration", "Growth mindset", "Accountability", "Transparency", "Inclusivity"];
  const forth = ["Scaling the business", "Managing teams", "Fundraising", "Market competition", "Personal development", "Operations efficiency", "Sales and marketing", "Innovation and product development"];

//  ============================================

  const reviewsStatus = () => {
    setswipe(!swipe);
    setgroupInfo({ ...groupInfo, review_status: !swipe });
  };

 
 

 

  const handleVideo = (e) => {
    const file = e.target.files[0];
    console.log(file);

    setgroupInfo({ ...groupInfo, group_video: e.target.files[0] });
    const videoPath = URL.createObjectURL(file);
    setvideoUrl(videoPath);
  };

  const VideoClose = () => {
    setgroupInfo({ ...groupInfo, group_video: "" })
    setvideoUrl(false)
  }

const changeDnd = () => {
  setgroupInfo({ ...groupInfo, group_logo: document.querySelector(".dndInputFild").files[0] })
  let url = URL.createObjectURL(document.querySelector(".dndInputFild").files[0])
  setimgUrl(url);
}

const importDragOver = (e) => {
  e.preventDefault()
}

const importDragDrop = (e) => {
  e.preventDefault();
  document.querySelector(".dndInputFild").files = e.dataTransfer.files
  changeDnd()
  }

const imgClose = () => {
  setgroupInfo({ ...groupInfo, group_logo: "" });
  setupDone(false)
};

const dndSubmit = (e) => {
  e.preventDefault()
  const interval = setInterval(() => {
    setProgress((prevProgress) => {
      if (prevProgress >= 100) {
        clearInterval(interval);
        setAddLogoPop(false)
        setupDone(true)
        setProgress(0)
        document.getElementById('url').value = ""
        return 100;
      }
      return prevProgress + 1;
    });
    }, 25);
  }


 const formHandler = (data)=>{
 

 }

  const onSubmit = (e) => {
    e.preventDefault();
 

    let token = localStorage.getItem("adminAuthToken");
    async function infoFunc() {
      try {
        const { data: response } = await axios.post(
          "http://77.37.74.82:5000/api/groups/create-group",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

  

        if (response) {
          Swal.fire({
            title: response?.message,
            icon: "success",
          });
        }
        console.log(response);
        return response;
      } catch (error) {
        Swal.fire({
          title: "Failed to add group!",
          text: error.message,
          icon: "error",
        });
        throw Error(error.message);
      }
    }

    infoFunc();
  };

  return (
    <div className=" py-8 pl-8 pr-20 w-full">


<div className={`w-full h-full bg-[#00000066] absolute top-0 left-0 z-50 ${addLogoPop ? "block" : "hidden"} flex justify-center items-center`}>
        <div className="p-6 border w-[550px] rounded-[24px] bg-white">

          {/* addLogo Pop up start  */}
          <form onSubmit={dndSubmit}>

            <div className="flex items-center justify-between">
              <div className="">
                <h3 className="text-[#0B0B0B] text-[18px] leading-[24px] font-bold">Media Upload</h3>
                <h3 className="text-SecondaryColor text-[14px] leading-[20px] mt-1">Add your logo here, and you can upload only one file</h3>
              </div>
              <Close className="!stroke-[black] cursor-pointer" onClick={() => setAddLogoPop(false)} />
            </div>

            <div className="w-full h-[145px] mt-4 relative">
              <label onDragOver={importDragOver} onDrop={importDragDrop} htmlFor="dnd" className="w-full h-full overflow-hidden flex flex-col items-center justify-center rounded-lg border border-dashed border-[#EB3743] bg-white">

                <div className="">
                  <DragIcon />
                  <h3 className="text-sm leading-[20px] text-[#0B0B0B] pt-3">Drag your file or <span className="font-semibold text-[#EB3743]">browse</span>
                  </h3>
                  <p className="text-sm leading-[20px] text-[#6D6D6D] pt-2">
                    Max 10 MB files are allowed
                  </p>
                </div>

              </label>

              <input required {...register("group_logo")} onChange={changeDnd} type="file" id="dnd" className="absolute top-0 hidden dndInputFild" accept=".jpg, .jpeg, .png, .svg" />
              {errors.group_logo && <p className="text-red-500">{errors.group_logo.message}</p>}
            </div>

            <div className="mt-4 flex flex-col gap-y-4">
              <p className="text-sm leading-[20px] text-[#6D6D6D] pt-2">
                Only support .jpg, .png and .svg and zip files
              </p>

              <div className="text-sm leading-[20px] text-[#6D6D6D] pt-2 uppercase text-center flex items-center gap-3">
                <div className="flex-grow border-t border[#E7E7E7]"></div>
                OR
                <div className="flex-grow border-t border[#E7E7E7]"></div>
              </div>

              <label htmlFor="url" className="text-[#0B0B0B] text-[18px] leading-[24px] font-bold">Upload from URL</label>

              <div className="border border-[#EB3743] rounded-[12px] p-3 flex items-center justify-between gap-4">
                <input required type="text" id="url" className="w-full h-full outline-none" />
                <button type="submit" className="bg-BtnColor text-white text-[12px] font-semibold px-4 h-[36px] rounded-[8px]">Upload</button>
              </div>

            </div>

            {/* progress  start*/}
            <div className={`p-4 border-2 rounded-[12px] mt-4 ${progress > 0 ? "block" : "hidden"}`}>

              <div className="flex justify-between">
                <div className="w-full h-[40px] flex gap-2">
                  <img src={imgUrl ? imgUrl : ""} alt="" className="w-[40px] h-full object-cover" />
                  <h3 className="font-bold text-xs flex flex-col gap-1">{groupInfo.group_logo ? groupInfo.group_logo.name : false}
                    <span className="font-normal text-SecondaryColor">
                      {groupInfo.group_logo ? groupInfo.group_logo.size / 1024 : false}KB</span>
                  </h3>
                </div>

                <Close className={"stroke-[#858585] cursor-pointer"} />
              </div>

              <div className={`w-full mt-1 flex items-center justify-between mr-[100px]`}>
                <div className="w-[93%] h-2 rounded-lg">
                  <div
                    className={`h-full !bg-BtnColor rounded-lg text-center text-white font-semibold`}
                    style={{ width: `${progress}%` }}
                  >
                  </div>
                </div>

                {progress}%
              </div>

            </div>
            {/* progress end */}

          </form>
          {/* addLogo Pop up end  */}

        </div>
      </div>



      <div className="flex justify-between py-3 pl-14 w-full bg-[#F9C1C5] rounded-[8px] mb-8 relative">
        <Idea className="absolute top-3 left-5" />
        <p>
          Need to add multiple groups at once? Try our import data feature{" "}
          <a href="#" className="underline font-bold">
            Import Data
          </a>
        </p>
        <Cross className="mr-4 mt-1 cursor-pointer" />
      </div>

      <h3 className="font-medium text-2xl text-[#000000]">Add Group</h3>

      <div className="border p-10 rounded-[8px] mt-6">
        <h3 className="font-semibold text-xl text-[#000000]">New Group</h3>
        <div className="border-t px-10 mt-3"></div>

        <form onSubmit={handleSubmit(formHandler)}>
          <div className="grid grid-cols-2">
            {/* left one start */}
            <div className="">
              <h3 className="font-semibold text-base text-[#1A1A1A] pt-6">
                What is the group name?
              </h3>

              <div className="mt-6">
                <label htmlFor="group_name"> Group Name*</label>
                <br />
                <input
                  {...register("group_name")}
                  type="text"
                  placeholder="Input Name"
                  className="font-normal text-[12px] w-[302px] h-[38px] text-[#1A1A1A] opacity-60 border border-[#A2A2A2] py-3  px-[10px] rounded-[8px] outline-none mt-2"
                /> {errors.group_name && <p className="text-red-500">{errors.group_name.message}</p>}
              </div>

              <h3 className="font-semibold text-base text-[#1A1A1A] pt-6">
                Location
              </h3>

              <div className="flex gap-10">
                <div className="mt-6">
                  <label htmlFor="country">COUNTRY*</label>
                  <br />
                  <select
                    
                    {...register("country")}
                    className="font-normal text-[12px] text-[#1A1A1A] opacity-60 border border-[#A2A2A2] outline-none py-2 px-2 w-[174px] h-[38px] rounded-[8px] mt-2 "
                  >
                    <option>United States</option>
                    <option>Bangladesh</option>
                    <option>India</option>
                    <option>Nepal</option>
                  </select>
                  {errors.country && <p className="text-red-500">{errors.country.message}</p>}
                </div>



                <div className="mt-6">
                  <label htmlFor="city">CITY*</label>
                  <br />
                  <input
                     {...register("city")}
                    type="text"
                    placeholder="Input Name"
                    className="font-normal text-[12px] text-[#1A1A1A] opacity-60 border border-[#A2A2A2] py-2 w-[174px] h-[38px] rounded-[8px] outline-none mt-2 px-2"
                  />
                  {errors.city && <p className="text-red-500">{errors.city.message}</p>}
                </div>
              </div>
            </div>

            <div className="">
              <h3 className="font-semibold text-base text-[#1A1A1A] pt-6">
                Upload Images/Videos{" "}
              </h3>

              <div className="">
                 
                  <div onClick={() => setAddLogoPop(true)} className="flex gap-2 mt-6 cursor-pointer">
                    <Plus className="mt-1" />
                    <h4 className="font-semibold text-[12px] text-[#5587FF]">
                      Add Logo
                    </h4>
                  </div>
                
              
                

                {
                  upDone ?
                  <div className="w-[100px] h-[80px] border mt-5 relative">
                    <img src={`${imgUrl}`} alt="" className="w-full h-full" />

                    <div onClick={imgClose} className="w-[26px] h-[26px] bg-[#F31A1A] rounded-full flex items-center justify-center  absolute -top-3 -right-3">
                      <Close className={"!stroke-white !w-[10px] !h-[10px] cursor-pointer"} />
                    </div>
                  </div> :
                  false
                }
              </div>

              <div className="">
                <label htmlFor="logo">
                  <div className="flex gap-2 mt-6">
                    <Plus className="mt-1" />
                    <h4 className="font-semibold text-[12px] text-[#5587FF]">
                      Add Video
                    </h4>
                  </div>
                </label>
                <input
                   {...register("group_video")}
                  type="file"
                  id="video"
                  className="hidden"
                  onChange={handleVideo}
                  accept="video/*"
                />
                 {errors.group_video && <p className="text-red-500">{errors.group_video.message}</p>}
                {videoUrl ? (
                  <div className="w-[100px] h-[80px] border mt-5 relative">
                    <video src={`${videoUrl}`}></video>

                    <div
                      onClick={VideoClose}
                      className="w-[26px] h-[26px] bg-[#F31A1A] rounded-full flex items-center justify-center  absolute -top-3 -right-3"
                    >
                      <Close className={"!stroke-white !w-[10px] !h-[10px]"} />
                    </div>
                  </div>
                ) : (
                  false
                )}
              </div>

              <div className="flex gap-2 mt-6">
                <div
                  onClick={reviewsStatus}
                  className={`h-[20px] w-9  rounded-2xl relative before:h-4 before:w-4 before:rounded-full before:bg-white before:absolute before:top-1/2 before:-translate-y-1/2 ${
                    swipe
                      ? "before:right-[2px] before:duration-300 bg-blue-600"
                      : "before:left-[2px] before:duration-300 bg-gray-400"
                  }`}
                ></div>
                <h3 className="font-semibold text-[12px] text-primaryColor">
                  Enable reviews
                </h3>
              </div>
            </div>
            {/* right one end */}
          </div>

          <div className="">
            <h3 className="font-semibold text-base text-[#1A1A1A] pt-6">
              Group metrics
            </h3>

            <div className="grid grid-cols-2">
              <div className="mt-6">
                <label htmlFor="group_industry" className="">
                  Industry*
                </label>

                <div className="mt-3">
                  <Autocomplete
                    className="!rounded-[8px]"
                    {...register("group_industry")}
                    multiple
                    limitTags={2}
                    options={first}
                    getOptionLabel={(option) => option}
                    defaultValue={[]}
                    renderInput={(params) => (
                      <TextField
                        name="group_industry"
                        {...params}
                        placeholder="select"
                      />
                    )}
                    sx={{ width: "500px" }}
                  />
                  {errors.group_industry && <p className="text-red-500">{errors.group_industry.message}</p>}
                </div>
              </div>

              {/* -------- */}
              <div className="mt-6">
                <label htmlFor="group_primary_goal" className="">
                  Primary Goals*
                </label>

                <div className="mt-3">
                  <Autocomplete
                   {...register("group_primary_goal")}
                    multiple
                    limitTags={2}
                    id="multiple-limit-tags group_primary_goal"
                    options={second}
                    getOptionLabel={(option) => option}
                    defaultValue={[]}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="select" />
                    )}
                    sx={{ width: "500px" }}
                    className="rounded-3xl outline-none"
                  />
                  {errors.group_industry && <p className="text-red-500">{errors.group_industry.message}</p>}
                </div>
              </div>
              {/* ------------------ */}
              <div className="mt-6">
                <label htmlFor="group_focus_area" className="">
                  Focus Area*
                </label>

                <div className="mt-3">
                  <Autocomplete
                    {...register("group_focus_area")}
                    multiple
                    limitTags={2}
                    id="multiple-limit-tags group_focus_area"
                    options={third}
                    getOptionLabel={(option) => option}
                    defaultValue={[]}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="select" />
                    )}
                    sx={{ width: "500px" }}
                  />
                  {errors.group_focus_area && <p className="text-red-500">{errors.group_focus_area.message}</p>}
                </div>
              </div>

              {/* ----------------- */}
              <div className="mt-6">
                <label htmlFor="group_key_topics" className="">
                  Key Topics*
                </label>

                <div className="mt-3">
                  <Autocomplete
                   {...register("group_key_topics")}
                 
                    className=" "
                    multiple
                    limitTags={2}
                    id="multiple-limit-tags group_key_topics"
                    options={forth}
                    getOptionLabel={(option) => option}
                    defaultValue={[]}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="select"
                        className=""
                      />
                    )}
                    sx={{ width: "500px" }}
                  />
                  {errors.group_key_topics && <p className="text-red-500">{errors.group_key_topics.message}</p>}
                </div>
              </div>
              {/* ---------------------- */}
            </div>
          </div>

          <h3 className="font-semibold text-base text-[#1A1A1A] pt-6">About</h3>

          <div className="">
            <label
              htmlFor="description"
              className="font-medium text-[10px] text-[#1A1A1A]"
            >
              Write a description about the group
            </label>

            <textarea
              {...register("description")}
              maxLength="500"
              placeholder="0/500"
              rows="5"
              cols="30"
              className="border w-full rounded-[8px] outline-none mt-3 font-medium text-[12px] text-[#949494] pl-[23px] pr-8 pt-[20px]"
            />
            {errors.description && <p className="text-red-500">{errors.description.message}</p>}
          </div>

          <div className="">
            <h3 className="font-semibold text-base text-[#1A1A1A] pt-6">
              Meeting Format
            </h3>

            <div className="">
              <FormControl>
                <RadioGroup
                 {...register("meeting_format")}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="In person"
                    control={<Radio name="In-person" />}
                    label="In person"
                  />
                  <FormControlLabel
                    value="Virtual"
                    control={<Radio name="Virtual" />}
                    label="Virtual"
                  />
                  <FormControlLabel
                    value="Hybrid"
                    control={<Radio name="Hybrid" />}
                    label="Hybrid"
                  />
                </RadioGroup>
                {errors.meeting_format && <p className="text-red-500">{errors.meeting_format.message}</p>}
              </FormControl>
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="hiring_price">Pricing*</label>
            <div className="flex gap-x-3">
              <input
               
                {...register("hiring_price")}
             
                type="text"
                placeholder="Input Price"
                className="font-normal text-[12px] text-[#1A1A1A] opacity-60 border border-[#A2A2A2] py-2 w-[174px] rounded-[8px] outline-none mt-2 px-2"
              /> 
             
              <p className="font-normal text-[12px] text-[#1A1A1A] opacity-60 pt-5">
                /Hr
              </p>
            </div>
              {errors.hiring_price && <p className="text-red-500">{errors.hiring_price.message}</p>}
          </div>

          <div className="mt-6">
            <label htmlFor="registration_link">Registration link*</label>
            <br />
            <input
             
              {...register("registration_link")}
              type="text"
              placeholder="Paste URL"
              className="font-normal text-[12px] text-[#1A1A1A] opacity-60 border border-[#A2A2A2] py-2 w-[174px] rounded-[8px] outline-none mt-2 px-2"
            />
            {errors.registration_link && <p className="text-red-500">{errors.registration_link.message}</p>}
          </div>

          <button className="mt-10 !py-3 bg-BtnColor font-bold text-base text-white px-6 rounded-[8px]">
            Create Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddInfo;

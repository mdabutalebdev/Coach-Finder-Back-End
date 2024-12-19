import React, { useState } from "react";
import Plus from "../assets/icon/Plus";
import Switch from "@mui/material/Switch";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "./layouts/Button";
import Idea from "../assets/icon/Idea";
import Cross from "../assets/icon/Cross";

const AddInfo = () => {
  const [text, setText] = useState("");

  const [swipe, setswipe] = useState(false);

  const first = [
    { title: "Finance", year: 1994 },
    { title: "Healthcare", year: 1972 },
    { title: "Consumer Goods", year: 1974 },
    { title: "Manufacturing", year: 2008 },
    { title: "Real Estate", year: 1957 },
    { title: "Education", year: 1993 },
    { title: "Media", year: 1994 }
  
  ];
  const second = [
    { title: "Networking", year: 1994 },
    { title: "Scaling my business", year: 1972 },
    { title: "Personal development", year: 1974 },
    { title: "Leadership insights", year: 2008 },
    { title: "Accountability", year: 1957 },
    { title: "Problem-solving", year: 1993 },
    { title: "Exploring new markets", year: 1994 },
    { title: "Mentorship", year: 1994 }
  
  ];
  const third = [
    { title: "Integrity", year: 1994 },
    { title: "Innovation", year: 1972 },
    { title: "Collaboration", year: 1974 },
    { title: "Growth mindset", year: 2008 },
    { title: "Accountability", year: 1957 },
    { title: "Transparency", year: 1993 },
    { title: "Inclusivity", year: 1994 }
  
  ];
  const forth = [
    { title: "Scaling the business", year: 1994 },
    { title: "Managing teams", year: 1972 },
    { title: "Fundraising", year: 1974 },
    { title: "Market competition", year: 2008 },
    { title: "Personal development", year: 1957 },
    { title: "Operations efficiency", year: 1993 },
    { title: "Sales and marketing", year: 1994 },
    { title: "Innovation and product development", year: 1994 }
  
  ];
  return ( 
    <div className=" py-8 pl-8 pr-20 w-full"> 
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

        <div className="grid grid-cols-2">
          {/* left one start */}
          <div className="">
            <h3 className="font-semibold text-base text-[#1A1A1A] pt-6">
              What is the group name?
            </h3>
            <div className="mt-6">
              <label htmlFor="text"> Group Name *</label> <br />
              <input
                name="group_name"
                type="text"
                placeholder="Input Name"
                className="font-normal text-[12px] text-[#1A1A1A] opacity-60 border border-[#A2A2A2] py-2  px-14 rounded-[8px] outline-none mt-2"
              /> 
            </div>
            <h3 className="font-semibold text-base text-[#1A1A1A] pt-6">
              Location
            </h3>
            <div className="flex gap-10">
              <div className="mt-6">
                <label htmlFor="text">COUNTRY *</label> <br />
                <select
                  name="country"
                  id="country"
                  className="font-normal text-[12px] text-[#1A1A1A] opacity-60 border border-[#A2A2A2] outline-none py-2 px-2 w-[174px]  rounded-[8px] mt-2"
                >
                  <option value="volvo">United States</option>
                  <option value="saab">Bangladesh</option>
                  <option value="mercedes">India</option>
                  <option value="audi">Nepal</option>
                </select>
              </div>
              <div className="mt-6">
                <label htmlFor="text"> CITY *</label> <br />
                <input
                  name="city"
                  type="text"
                  placeholder="Input Name"
                  className="font-normal text-[12px] text-[#1A1A1A] opacity-60 border border-[#A2A2A2] py-2 w-[174px] rounded-[8px] outline-none mt-2 px-2"
                /> 
              </div>
            </div>
          </div>
          {/* left one end */}
          {/* right one start */}
          <div className="">
            <h3 className="font-semibold text-base text-[#1A1A1A] pt-6">
              Upload Images/Videos{" "}
            </h3>
            <div className="flex gap-2 mt-6">
              <Plus className="mt-1" />
              <h4 className="font-semibold text-[12px] text-[#5587FF]">
                Add Logo
              </h4>
            </div>
            <div className="flex gap-2 mt-6">
              <Plus className="mt-1" />
              <h4 className="font-semibold text-[12px] text-[#5587FF]">
                Add Video
              </h4>
            </div>
            <div className="flex gap-2 mt-6">
              <div
                onClick={() => setswipe(!swipe)}
                className={`h-[20px] w-9  bg-blue-600 rounded-2xl relative before:h-4 before:w-4 before:rounded-full before:bg-white before:absolute before:top-1/2 before:-translate-y-1/2 ${
                  swipe
                    ? "before:right-0 before:duration-300"
                    : "before:left-0 before:duration-300"
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
              <label htmlFor="text" className="">
                Industry*
              </label>
              <br />
              <div className="mt-3">
                <Autocomplete
                  name="group_industry"
                  multiple
                  limitTags={2}
                  id="multiple-limit-tags"
                  options={first}
                  getOptionLabel={(option) => option.title}
                  defaultValue={[
                     
                  ]}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="select" />
                  )}
                  sx={{ width: "500px" }}
                />
              </div>
            </div>
            {/* -------- */}
            <div className="mt-6">
              <label htmlFor="text" className="">
                Primary Goals*
              </label>
              <br />
              <div className="mt-3">
                <Autocomplete
                 name="group_primary_goal"
                  multiple
                  limitTags={2}
                  id="multiple-limit-tags"
                  options={second}
                  getOptionLabel={(option) => option.title}
                  defaultValue={[
                  
                  ]}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="select" />
                  )}
                  sx={{ width: "500px" }}
                  className="rounded-3xl outline-none"
                />
              </div>
            </div>
            {/* ------------------ */}
            <div className="mt-6">
              <label htmlFor="text" className="">
                Focus Area*
              </label>
              <br />
              <div className="mt-3">
                <Autocomplete
                  name="group_focus_area"
                  multiple
                  limitTags={2}
                  id="multiple-limit-tags"
                  options={third}
                  getOptionLabel={(option) => option.title}
                  defaultValue={[
                  
                  ]}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="select" />
                  )}
                  sx={{ width: "500px" }}
                />
              </div>
            </div>
            {/* ----------------- */}
            <div className="mt-6">
              <label htmlFor="text" className="">
                Key Topics*
              </label>
              <br />
              <div className="mt-3">
                <Autocomplete
                  name="group_key_topics"
                  className=" "
                  multiple
                  limitTags={2}
                  id="multiple-limit-tags"
                  options={forth}
                  getOptionLabel={(option) => option.title}
                  defaultValue={[ 
                  ]}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="select" className=""/>
                  )}
                  sx={{ width: "500px" }}
                />
              </div>
            </div>
            {/* ---------------------- */}
          </div>
        </div>
        {/* ====================== */}
        <h3 className="font-semibold text-base text-[#1A1A1A] pt-6">About</h3>
        <div className="">
          <label
            htmlFor="text"
            className="font-medium text-[10px] text-[#1A1A1A]"
          >
            Write a description about the group
          </label>
          <br />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength="500"
            placeholder="0/500"
            rows="5"
            cols="30"
            className="border w-full rounded-[8px] outline-none mt-3 font-medium text-[10px] text-[#C0C0C0] text-end pr-2 pt-2"
          />
         
        </div>
        <div className="">
          <h3 className="font-semibold text-base text-[#1A1A1A] pt-6">
            Meeting Format
          </h3>
          <div className="">
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="In person"
                  control={<Radio />}
                  label="In person"
                />
                <FormControlLabel
                  value="Virtual"
                  control={<Radio />}
                  label="Virtual"
                />
                <FormControlLabel
                  value="Hybrid"
                  control={<Radio />}
                  label="Hybrid"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        {/* =============== */}
        <div className="mt-6">
          <label htmlFor="text"> Pricing*</label> <br />
          <div className="flex gap-x-3">
            <input
              name="hiring_price"
              type="text"
              placeholder="Input Price"
              className="font-normal text-[12px] text-[#1A1A1A] opacity-60 border border-[#A2A2A2] py-2 w-[174px] rounded-[8px] outline-none mt-2 px-2"
            /> 
            <p className="font-normal text-[12px] text-[#1A1A1A] opacity-60 pt-5">
              /Hr
            </p>
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="text"> Registration link*</label> <br />
          <input
          name="registration_link"
            type="text"
            placeholder="Paste URL"
            className="font-normal text-[12px] text-[#1A1A1A] opacity-60 border border-[#A2A2A2] py-2 w-[174px] rounded-[8px] outline-none mt-2 px-2"
          /> 
        </div>
        <Button className="mt-10 !py-3">Create Group</Button>
      </div>
    </div>
  );
};

export default AddInfo;

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
import axios from "axios";

const AddInfo = () => {
  const [swipe, setswipe] = useState(false);
  const [groupInfo, setgroupInfo] = useState({
    group_name: "",
    country: "",
    city: "",
    group_industry: [],
    group_primary_goal: [],
    group_focus_area: [],
    group_key_topics: [],
    description: "",
    meeting_format: "",
    hiring_price: "",
    registration_link: "",
    group_logo: "",
    group_video: "",
    review_status: false,
  });

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

  const inputChange = (e) => {
    setgroupInfo({ ...groupInfo, [e.target.name]: e.target.value })
  }

  const reviewsStatus = (e) => {
    setswipe(!swipe)
    setgroupInfo({ ...groupInfo, review_status: !swipe })
  };


  const infoSubmit = (e) => {
    e.preventDefault();
    let token = localStorage.getItem("adminAuthToken")

    async function infoFunc() {
      try {
        const res = await fetch("http://77.37.74.82:5000/api/groups/create-group", {
          method: 'POST',
          body: JSON.stringify({ key: 'value' }),
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
          },
        })

        let response = await res.json()
        return response

      }
      catch (error) {
        throw Error(error)
      }
    }

    infoFunc()

  }

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

        <form onSubmit={infoSubmit}>
          <div className="grid grid-cols-2">
            {/* left one start */}
            <div className="">
              <h3 className="font-semibold text-base text-[#1A1A1A] pt-6">
                What is the group name?
              </h3>

              <div className="mt-6">
                <label htmlFor="group_name"> Group Name *</label>
                <br />
                <input
                  onChange={inputChange}
                  name="group_name"
                  id="group_name"
                  type="text"
                  placeholder="Input Name"
                  className="font-normal text-[12px] w-[302px] h-[38px] text-[#1A1A1A] opacity-60 border border-[#A2A2A2] py-3  px-[10px] rounded-[8px] outline-none mt-2"
                />
              </div>

              <h3 className="font-semibold text-base text-[#1A1A1A] pt-6">
                Location
              </h3>

              <div className="flex gap-10">

                <div className="mt-6">
                  <label htmlFor="country">COUNTRY *</label>
                  <br />
                  <select
                    onChange={inputChange}
                    value={groupInfo.country}
                    name="country"
                    id="country"
                    className="font-normal text-[12px] text-[#1A1A1A] opacity-60 border border-[#A2A2A2] outline-none py-2 px-2 w-[174px] h-[38px] rounded-[8px] mt-2 "
                  >
                    <option>United States</option>
                    <option>Bangladesh</option>
                    <option>India</option>
                    <option>Nepal</option>
                  </select>
                </div>

                <div className="mt-6">
                  <label htmlFor="city">CITY *</label>
                  <br />
                  <input
                    onChange={inputChange}
                    name="city"
                    id="city"
                    type="text"
                    placeholder="Input Name"
                    className="font-normal text-[12px] text-[#1A1A1A] opacity-60 border border-[#A2A2A2] py-2 w-[174px] h-[38px] rounded-[8px] outline-none mt-2 px-2"
                  />
                </div>

              </div>

            </div>

            <div className="">
              <h3 className="font-semibold text-base text-[#1A1A1A] pt-6">
                Upload Images/Videos{" "}
              </h3>

              <div className="">
                <label htmlFor="logo">
                  <div className="flex gap-2 mt-6">

                    <Plus className="mt-1" />
                    <h4 className="font-semibold text-[12px] text-[#5587FF]">
                      Add Logo
                    </h4>
                  </div>
                </label>
                <input onChange={(e) => setgroupInfo({ ...groupInfo, group_logo: e.target.files[0] })} type="file" id="logo" className="hidden" accept="image/*" />
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
                <input type="file" id="logo" className="hidden" onChange={(e) => setgroupInfo({ ...groupInfo, group_video: e.target.files[0] })} accept="video/*" />
              </div>

              <div className="flex gap-2 mt-6">
                <div
                  onClick={reviewsStatus}
                  className={`h-[20px] w-9  rounded-2xl relative before:h-4 before:w-4 before:rounded-full before:bg-white before:absolute before:top-1/2 before:-translate-y-1/2 ${swipe
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
                    onChange={(event, newValue) => {
                      setgroupInfo({ ...groupInfo, group_industry: newValue })
                    }}
                    multiple
                    limitTags={2}
                    id="multiple-limit-tags group_industry"
                    options={first}
                    getOptionLabel={(option) => option.title}
                    defaultValue={[

                    ]}
                    renderInput={(params) => (
                      <TextField name="group_industry" {...params} placeholder="select" />
                    )}
                    sx={{ width: "500px" }}
                  />
                </div>
              </div>

              {/* -------- */}
              <div className="mt-6">
                <label htmlFor="group_primary_goal" className="">
                  Primary Goals*
                </label>

                <div className="mt-3">
                  <Autocomplete
                    onChange={(event, newValue) => {
                      setgroupInfo({ ...groupInfo, group_primary_goal: newValue })
                    }}
                    name="group_primary_goal"
                    multiple
                    limitTags={2}
                    id="multiple-limit-tags group_primary_goal"
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
                <label htmlFor="group_focus_area" className="">
                  Focus Area*
                </label>

                <div className="mt-3">
                  <Autocomplete
                    onChange={(event, newValue) => {
                      setgroupInfo({ ...groupInfo, group_focus_area: newValue })
                    }}
                    name="group_focus_area"
                    multiple
                    limitTags={2}
                    id="multiple-limit-tags group_focus_area"
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
                <label htmlFor="group_key_topics" className="">
                  Key Topics*
                </label>

                <div className="mt-3">
                  <Autocomplete
                    onChange={(event, newValue) => {
                      setgroupInfo({ ...groupInfo, group_key_topics: newValue })
                    }}
                    name="group_key_topics"
                    className=" "
                    multiple
                    limitTags={2}
                    id="multiple-limit-tags group_key_topics"
                    options={forth}
                    getOptionLabel={(option) => option.title}
                    defaultValue={[
                    ]}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="select" className="" />
                    )}
                    sx={{ width: "500px" }}
                  />
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
              name="description"
              id="description"
              value={groupInfo.description}
              onChange={inputChange}
              maxLength="500"
              placeholder="0/500"
              rows="5"
              cols="30"
              className="border w-full rounded-[8px] outline-none mt-3 font-medium text-[12px] text-[#949494] pl-[23px] pr-8 pt-[20px]"
            />

          </div>

          <div className="">
            <h3 className="font-semibold text-base text-[#1A1A1A] pt-6">
              Meeting Format
            </h3>

            <div className="">
              <FormControl>
                <RadioGroup
                  onChange={(e) => setgroupInfo({ ...groupInfo, meeting_format: e.target.value })}
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
              </FormControl>
            </div>

          </div>


          <div className="mt-6">
            <label htmlFor="hiring_price">Pricing*</label>
            <div className="flex gap-x-3">
              <input
                name="hiring_price"
                onChange={inputChange}
                id="hiring_price"
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
            <label htmlFor="registration_link">Registration link*</label>
            <br />
            <input
              name="registration_link"
              id="registration_link"
              onChange={inputChange}
              type="text"
              placeholder="Paste URL"
              className="font-normal text-[12px] text-[#1A1A1A] opacity-60 border border-[#A2A2A2] py-2 w-[174px] rounded-[8px] outline-none mt-2 px-2"
            />
          </div>

          <Button className="mt-10 !py-3">Create Group</Button>
        </form>
      </div>
    </div>
  );
};

export default AddInfo;

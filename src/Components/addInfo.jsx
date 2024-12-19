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

  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    {
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
    },
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
    {
      title: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: "Goodfellas", year: 1990 },
    { title: "The Matrix", year: 1999 },
    { title: "Seven Samurai", year: 1954 },
    {
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977,
    },
    { title: "City of God", year: 2002 },
    { title: "Se7en", year: 1995 },
    { title: "The Silence of the Lambs", year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: "Life Is Beautiful", year: 1997 },
    { title: "The Usual Suspects", year: 1995 },
    { title: "Léon: The Professional", year: 1994 },
    { title: "Spirited Away", year: 2001 },
    { title: "Saving Private Ryan", year: 1998 },
    { title: "Once Upon a Time in the West", year: 1968 },
    { title: "American History X", year: 1998 },
    { title: "Interstellar", year: 2014 },
    { title: "Casablanca", year: 1942 },
    { title: "City Lights", year: 1931 },
    { title: "Psycho", year: 1960 },
    { title: "The Green Mile", year: 1999 },
    { title: "The Intouchables", year: 2011 },
    { title: "Modern Times", year: 1936 },
    { title: "Raiders of the Lost Ark", year: 1981 },
    { title: "Rear Window", year: 1954 },
    { title: "The Pianist", year: 2002 },
    { title: "The Departed", year: 2006 },
    { title: "Terminator 2: Judgment Day", year: 1991 },
    { title: "Back to the Future", year: 1985 },
    { title: "Whiplash", year: 2014 },
    { title: "Gladiator", year: 2000 },
    { title: "Memento", year: 2000 },
    { title: "The Prestige", year: 2006 },
    { title: "The Lion King", year: 1994 },
    { title: "Apocalypse Now", year: 1979 },
    { title: "Alien", year: 1979 },
    { title: "Sunset Boulevard", year: 1950 },
    {
      title:
        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      year: 1964,
    },
    { title: "The Great Dictator", year: 1940 },
    { title: "Cinema Paradiso", year: 1988 },
    { title: "The Lives of Others", year: 2006 },
    { title: "Grave of the Fireflies", year: 1988 },
    { title: "Paths of Glory", year: 1957 },
    { title: "Django Unchained", year: 2012 },
    { title: "The Shining", year: 1980 },
    { title: "WALL·E", year: 2008 },
    { title: "American Beauty", year: 1999 },
    { title: "The Dark Knight Rises", year: 2012 },
    { title: "Princess Mononoke", year: 1997 },
    { title: "Aliens", year: 1986 },
    { title: "Oldboy", year: 2003 },
    { title: "Once Upon a Time in America", year: 1984 },
    { title: "Witness for the Prosecution", year: 1957 },
    { title: "Das Boot", year: 1981 },
    { title: "Citizen Kane", year: 1941 },
    { title: "North by Northwest", year: 1959 },
    { title: "Vertigo", year: 1958 },
    {
      title: "Star Wars: Episode VI - Return of the Jedi",
      year: 1983,
    },
    { title: "Reservoir Dogs", year: 1992 },
    { title: "Braveheart", year: 1995 },
    { title: "M", year: 1931 },
    { title: "Requiem for a Dream", year: 2000 },
    { title: "Amélie", year: 2001 },
    { title: "A Clockwork Orange", year: 1971 },
    { title: "Like Stars on Earth", year: 2007 },
    { title: "Taxi Driver", year: 1976 },
    { title: "Lawrence of Arabia", year: 1962 },
    { title: "Double Indemnity", year: 1944 },
    {
      title: "Eternal Sunshine of the Spotless Mind",
      year: 2004,
    },
    { title: "Amadeus", year: 1984 },
    { title: "To Kill a Mockingbird", year: 1962 },
    { title: "Toy Story 3", year: 2010 },
    { title: "Logan", year: 2017 },
    { title: "Full Metal Jacket", year: 1987 },
    { title: "Dangal", year: 2016 },
    { title: "The Sting", year: 1973 },
    { title: "2001: A Space Odyssey", year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: "Toy Story", year: 1995 },
    { title: "Bicycle Thieves", year: 1948 },
    { title: "The Kid", year: 1921 },
    { title: "Inglourious Basterds", year: 2009 },
    { title: "Snatch", year: 2000 },
    { title: "3 Idiots", year: 2009 },
    { title: "Monty Python and the Holy Grail", year: 1975 },
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
                type="text"
                placeholder="Input Name"
                className="font-normal text-[12px] text-[#1A1A1A] opacity-60 border border-[#A2A2A2] py-2  px-14 rounded-[8px] outline-none mt-2"
              ></input>
            </div>
            <h3 className="font-semibold text-base text-[#1A1A1A] pt-6">
              Location
            </h3>
            <div className="flex gap-10">
              <div className="mt-6">
                <label htmlFor="text">COUNTRY *</label> <br />
                <select
                  name="cars"
                  id="cars"
                  className="font-normal text-[12px] text-[#1A1A1A] opacity-60 border border-[#A2A2A2] outline-none py-2 px-2 w-[174px]  rounded-[8px] mt-2"
                >
                  <option value="volvo">United States</option>
                  <option value="saab">Bangladesh</option>
                  <option value="mercedes">India</option>
                  <option value="audi">Nepal</option>
                </select>
              </div>
              <div className="mt-6">
                <label htmlFor="text"> Group Name *</label> <br />
                <input
                  type="text"
                  placeholder="Input Name"
                  className="font-normal text-[12px] text-[#1A1A1A] opacity-60 border border-[#A2A2A2] py-2 w-[174px] rounded-[8px] outline-none mt-2 px-2"
                ></input>
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
                  multiple
                  limitTags={2}
                  id="multiple-limit-tags"
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  defaultValue={[
                    top100Films[13],
                    top100Films[12],
                    top100Films[11],
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
                  multiple
                  limitTags={2}
                  id="multiple-limit-tags"
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  defaultValue={[
                    top100Films[13],
                    top100Films[12],
                    top100Films[11],
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
                  multiple
                  limitTags={2}
                  id="multiple-limit-tags"
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  defaultValue={[
                    top100Films[13],
                    top100Films[12],
                    top100Films[11],
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
                  multiple
                  limitTags={2}
                  id="multiple-limit-tags"
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  defaultValue={[
                    top100Films[13],
                    top100Films[12],
                    top100Films[11],
                  ]}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="select" />
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
              type="text"
              placeholder="Input Price"
              className="font-normal text-[12px] text-[#1A1A1A] opacity-60 border border-[#A2A2A2] py-2 w-[174px] rounded-[8px] outline-none mt-2 px-2"
            ></input>
            <p className="font-normal text-[12px] text-[#1A1A1A] opacity-60 pt-5">
              /Hr
            </p>
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="text"> Registration link*</label> <br />
          <input
            type="text"
            placeholder="Paste URL"
            className="font-normal text-[12px] text-[#1A1A1A] opacity-60 border border-[#A2A2A2] py-2 w-[174px] rounded-[8px] outline-none mt-2 px-2"
          ></input>
        </div>
        <Button className="mt-10 !py-3">Create Group</Button>
      </div>
    </div>
  );
};

export default AddInfo;

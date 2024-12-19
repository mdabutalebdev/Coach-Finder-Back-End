import React from "react";
import Login_logo from "../assets/log_logo.png";
import Button from "./layouts/Button";

const Login = () => {
  return (
    <div className="container flex flex-col justify-center items-center mt-20">
      <img src={Login_logo} alt="Login_logo" className="" />
      <h3 className="font-semibold text-[20px] text-primaryColor pt-8 pb-8">
        Admin Panel
      </h3>
      <div className="mt-6">
        <label htmlFor="email"> Your email address</label> <br />
        <input
          name="email"
          id="email"
          type="email"
          placeholder="account@email.com"
          className="font-normal text-[12px] text-[#1A1A1A] opacity-60 border border-[#A2A2A2] py-3 pl-3  w-[446px] rounded-[8px] outline-none mt-2"
        ></input>
      </div>
      <div className="mt-6">
        <label htmlFor="password"> Your password</label> <br />
        <input
          name="password"
          id="password"
          type="password"
          placeholder="*******"
          className="font-normal text-[12px] text-[#1A1A1A] opacity-60 border border-[#A2A2A2] py-3 pl-3  w-[446px] rounded-[8px] outline-none mt-2"
        ></input>
      </div>
      <Button className="!px-52 mt-6"> Login</Button>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import Login_logo from "../assets/log_logo.png";
import Button from "./layouts/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";




const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdminLoginForm = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await axios.post(
        "http://77.37.74.82:5000/api/auth/admin/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response?.data) {
        Swal.fire({
          title: response.data.message,
          icon: "success",
        });
      }
      localStorage.setItem("adminAuthToken", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      if (err) {
        Swal.fire({
          title: "Credentials are wrong!",
          text: "Please try again!",
          icon: "error",
        });
      }
      console.error(
        "Login failed:",
        err.response?.data?.message || err.message
      );
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container flex flex-col justify-center items-center mt-20">
      <img src={Login_logo} alt="Login_logo" className="" />
      <h3 className="font-semibold text-[20px] text-primaryColor pt-8 pb-8">
        Admin Panel
      </h3>
      <form className="" onSubmit={handleAdminLoginForm}>
        <div className="mt-6">
          <label htmlFor="email">Your email address</label> <br />
          <input
            name="email"
            required
            id="email"
            type="email"
            placeholder="account@email.com"
            className="font-normal text-[12px] text-[#1A1A1A] opacity-60 border border-[#A2A2A2] py-3 pl-3  w-full rounded-[8px] outline-none mt-2"
            value={formData.email}
            onChange={handleInputChange}
            disabled={loading}
          />
        </div>
        <div className="mt-6">
          <label htmlFor="password">Your password</label> <br />
          <input
            name="password"
            required
            id="password"
            type="password"
            placeholder="*******"
            className="font-normal text-[12px] text-[#1A1A1A] opacity-60 border border-[#A2A2A2] py-3 pl-3  w-full rounded-[8px] outline-none mt-2"
            value={formData.password}
            onChange={handleInputChange}
            disabled={loading}
          />
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <Button type="submit" className="!px-52 mt-6" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
};

export default Login;

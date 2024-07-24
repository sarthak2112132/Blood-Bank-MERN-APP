import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { message } from "antd";
import API from "../../../services/API";
export const userLogin = createAsyncThunk(
  "UserLogin",
  async ({ role, email, password }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/auth/login",
        { role, email, password }
      );
      if (data.success) {
        localStorage.setItem("token", data.token);
        if (data?.user?.role === "organisation") {
          localStorage.setItem("user", data?.user?.organisationName);
        } else if (data?.user?.role === "hospital") {
          localStorage.setItem("user", data?.user?.hospitalName);
        } else {
          localStorage.setItem("user", data?.user?.name);
        }
        localStorage.setItem("role", data?.user?.role);
        localStorage.setItem("email", data?.user?.email);
        localStorage.setItem("ID", data?.user?._id);
        message.success(data.message);
        window.location.replace("/");
      } else {
        message.error(data.message);
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const userRegister = createAsyncThunk(
  "User Regsiter",
  async ({
    role,
    name,
    email,
    password,
    organisationName,
    hospitalName,
    website,
    address,
    phone,
  }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/auth/register",
        {
          role,
          name,
          email,
          password,
          organisationName,
          hospitalName,
          website,
          address,
          phone,
        }
      );
      if (data.success) {
        console.log(data);
        message.success(data.message);
        window.location.replace("/login");
      } else {
        message.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
);

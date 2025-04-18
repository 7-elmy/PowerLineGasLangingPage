"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const apiRequest = createAsyncThunk(
  "api/request",
  async (
    { entity, url, method = "GET", data = null, headers = {} },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios({
        //   url: `${import.meta.env.VITE_API_URL}${url}`,
        url: `https://powerline-app.vercel.app/${url}`,
        method,
        data,
        headers: {
          Authorization: `${sessionStorage.getItem("token")}`,
          ...headers,
        },
      });

      if (response.status === 200 || response.status === 201) {
        console.log(response);
          // if(entity ="wishlist"){
          //   fun()
          // }
        return { entity, data: response }; // Store API response under the correct entity
      } else {
        return rejectWithValue(
          response.data?.message || "Something went wrong"
        );
      }
    } catch (error) {
      return rejectWithValue({
        entity,
        error:
          error.response?.data?.errors ||
          error.response?.data?.message ||
          error.message ||
          "An error occurred",
      });
    }
  }
);

import { createSlice } from "@reduxjs/toolkit";
import { apiRequest } from "../Apis/apiRequest";

const apiSlice = createSlice({
    name: "api",
    initialState: {
      login: { data: null, loading: false, error: null },
     
    },
    reducers: {}, // No reducers needed since we're handling everything in `extraReducers`
    extraReducers: (builder) => {
      builder
        .addCase(apiRequest.pending, (state, action) => {
          console.log({arg:action.meta.arg});
          
          const { entity } = action.meta.arg;
          state[entity].loading = true;
          state[entity].error = null;
        })
        .addCase(apiRequest.fulfilled, (state, action) => {
          console.log({fulfilled:action.payload});
          const { entity, data } = action.payload;
          state[entity].loading = false;
          state[entity].data = data;
        })
        .addCase(apiRequest.rejected, (state, action) => {
          console.log({reject:action.payload});
          
          const { entity } = action.payload;
          state[entity].loading = false;
          state[entity].error = action.payload.error;
        });
    },
  });
  
  export let apiReducer= apiSlice.reducer;
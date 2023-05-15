import { createSlice } from "@reduxjs/toolkit";
import { sendForm } from "./postUserAPI";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const postUserSlice = createSlice({
  name: "postUser",
  initialState: { ...initialState },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendForm.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error = null;
      })
      .addCase(sendForm.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.body.token;
      })
      .addCase(sendForm.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
      });
  },
});

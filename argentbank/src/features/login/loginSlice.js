import { createSlice } from "@reduxjs/toolkit";
import { sendForm } from "./loginAPI";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState: { ...initialState },
  reducers: {
    logout: (state) => {
      localStorage.getItem("token");
      localStorage.removeItem("token");
      state.data = null;
      state.isLoggedIn = false;
    },
  },
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
        localStorage.setItem("token", state.data);
      })
      .addCase(sendForm.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
      });
  },
});

export default loginSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { sendForm } from "./loginAPI";

const initialState = {
  loading: false,
  token: null,
  error: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: { ...initialState },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendForm.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(sendForm.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.body.token;
        localStorage.setItem("token", state.token);
        state.isLoggedIn = true;
      })
      .addCase(sendForm.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message;
      })
      .addCase("LOGOUT", (state) => {
        localStorage.removeItem("token");
        Object.assign(state, initialState);
      });
  },
});

export default authSlice.reducer;

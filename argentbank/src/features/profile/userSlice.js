import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./fetchUserAPI";

const initialState = {
  loading: false,
  username: null,
  firstName: null,
  lastName: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: { ...initialState },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.username = null;
        state.firstName = null;
        state.lastName = null;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.username = action.payload.body.userName;
        state.firstName = action.payload.body.firstName;
        state.lastName = action.payload.body.lastName;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.username = null;
        state.firstName = null;
        state.lastName = null;
        state.error = action.error.message;
      })
      .addCase("LOGOUT", (state) => {
        Object.assign(state, initialState);
      });
  },
});

export default userSlice.reducer;

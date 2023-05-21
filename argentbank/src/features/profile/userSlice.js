import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./fetchUserAPI";
import { updateUser } from "./updateUserAPI";

const initialState = {
  loading: false,
  userName: null,
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
        state.userName = null;
        state.firstName = null;
        state.lastName = null;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userName = action.payload.body.userName;
        state.firstName = action.payload.body.firstName;
        state.lastName = action.payload.body.lastName;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.userName = null;
        state.firstName = null;
        state.lastName = null;
        state.error = action.error.message;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.userName = null;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userName = action.payload.body.userName;
      })
      .addCase("LOGOUT", (state) => {
        Object.assign(state, initialState);
      });
  },
});

export default userSlice.reducer;

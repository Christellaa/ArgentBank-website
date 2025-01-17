import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userSlice from "../features/profile/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userSlice,
  },
});

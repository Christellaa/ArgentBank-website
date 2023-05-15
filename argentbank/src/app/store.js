import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/posts/loginSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import postUserReducer from "../features/posts/postUserSlice";

export const store = configureStore({
  reducer: {
    postUser: postUserReducer,
  },
});

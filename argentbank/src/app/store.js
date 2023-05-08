import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postUserReducer from "../features/posts/postUser";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    postUser: postUserReducer,
  },
});

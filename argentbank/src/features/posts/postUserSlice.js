import { createSlice } from "@reduxjs/toolkit";
import { sendForm } from "./postUserAPI";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

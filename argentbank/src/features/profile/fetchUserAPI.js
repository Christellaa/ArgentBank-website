import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "profile/fetchUserAPI",
  async (values, thunkApi) => {
    const userToken = localStorage.getItem("token");
    const res = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    });
    if (!res.ok) {
      return thunkApi.rejectWithValue(values);
    }
    return res.json();
  }
);

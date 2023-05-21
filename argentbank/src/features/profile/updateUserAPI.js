import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateUser = createAsyncThunk(
  "profile/updateUserAPI",
  async (values, thunkApi) => {
    const userToken = localStorage.getItem("token");
    const res = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: values.username,
      }),
    });
    if (!res.ok) {
      return thunkApi.rejectWithValue(values);
    }
    return res.json();
  }
);

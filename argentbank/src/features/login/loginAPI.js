import { createAsyncThunk } from "@reduxjs/toolkit";

export const sendForm = createAsyncThunk(
  "login/loginAPI",
  async (values, thunkApi) => {
    const res = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.username,
        password: values.password,
      }),
    });
    if (!res.ok) {
      return thunkApi.rejectWithValue(values);
    }
    return res.json();
  }
);

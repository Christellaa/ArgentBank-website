import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import "./App.css";
import { userToken } from "./features/auth/authSlice";
import { useDispatch } from "react-redux";
import { store } from "./app/store";
import { fetchUser } from "./features/profile/fetchUserAPI";

function App() {
  const dispatch = useDispatch();

  if (localStorage.getItem("token") !== null) {
    const token = localStorage.getItem("token");
    store.dispatch(userToken(token));
    dispatch(fetchUser());
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;

import { useStore } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { sendForm } from "../features/posts/postUserAPI";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const { loading, error } = useSelector((state) => state.postUser);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const formSent = await dispatch(
      sendForm({ username: username, password: password })
    );
    if (sendForm.fulfilled.match(formSent)) {
      navigate("/profile");
    } else if (sendForm.rejected.match(formSent)) {
      return error;
    }
  }

  return (
    <>
      {submit}
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper" disabled={submit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            required
            value={FormData.username || ""}
          />
        </div>
        <div className="input-wrapper" disabled={submit}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            value={FormData.password || ""}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button disabled={submit} type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
    </>
  );
}

export default LoginForm;

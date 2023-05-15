import { useState } from "react";
import { sendForm } from "../features/login/loginAPI";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const { loading, error } = useSelector((state) => state.login);
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
      <form method="post" onSubmit={handleSubmit}>
        {error && (
          <div>
            <p class="sign-in-error">Incorrect username or password.</p>
          </div>
        )}
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button disabled={loading} type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
    </>
  );
}

export default LoginForm;

import { Link } from "react-router-dom";
import argentBankLogo from "../img/argentBankLogo.png";
import formSent from "./LoginForm";
import { sendForm } from "../features/posts/loginAPI";

function Navbar() {
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {sendForm.fulfilled.match(formSent) ? (
        <Link to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      ) : (
        <Link to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Log out
        </Link>
      )}
    </nav>
  );
}

export default Navbar;

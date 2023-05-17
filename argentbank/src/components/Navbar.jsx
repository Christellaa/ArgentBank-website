import { Link } from "react-router-dom";
import argentBankLogo from "../img/argentBankLogo.png";
import logout from "../features/login/loginSlice";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();
  const userLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const logOut = dispatch(logout);

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
      {userLoggedIn === true ? (
        <Link to="/" className="main-nav-item" onClick={logOut}>
          <i className="fa fa-user-circle"></i>
          Log out
        </Link>
      ) : (
        <Link to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      )}
    </nav>
  );
}

export default Navbar;

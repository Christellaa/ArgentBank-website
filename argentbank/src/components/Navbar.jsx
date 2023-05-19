import { Link } from "react-router-dom";
import argentBankLogo from "../img/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { selectUserLoggedIn } from "../app/selectors";

function Navbar() {
  const dispatch = useDispatch();
  const userLoggedIn = useSelector(selectUserLoggedIn);
  const { username } = useSelector((state) => state.user);

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
        <div>
          <Link to="/profile" class="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {username}
          </Link>
          <Link
            to="/"
            className="main-nav-item"
            onClick={() => dispatch({ type: "LOGOUT" })}
          >
            <i class="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
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

import Navbar from "../components/Navbar";
import accountsData from "../data/accountsData.json";
import Accounts from "../components/Accounts";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUserLoggedIn } from "../app/selectors";

function Profile() {
  const userLoggedIn = useSelector(selectUserLoggedIn);
  const { username } = useSelector((state) => state.user);
  return (
    <>
      {userLoggedIn === true ? (
        <>
          <Navbar />
          <main className="main bg-dark">
            <div className="header">
              <h1>
                Welcome back
                <br />
                {username}
              </h1>
              <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accountsData.map(({ id, title, amount, text }) => (
              <Accounts key={id} title={title} amount={amount} text={text} />
            ))}
          </main>
          <Footer />
        </>
      ) : (
        <div>
          <p>You don't have access to this page. Please sign in.</p>
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      )}
    </>
  );
}

export default Profile;

import Navbar from "../components/Navbar";
import accountsData from "../data/accountsData.json";
import Accounts from "../components/Accounts";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUserLoggedIn } from "../app/selectors";
import UpdateForm from "../components/UpdateForm";
import { useState } from "react";

function Profile() {
  const userLoggedIn = useSelector(selectUserLoggedIn);
  const { username, firstname, lastname } = useSelector((state) => state.user);
  const [isUpdating, setUpdate] = useState(false);
  function Toggle() {
    setUpdate(!isUpdating);
  }
  return (
    <>
      {userLoggedIn === true ? (
        <>
          <Navbar />
          <main className="main bg-dark">
            <div className="header">
              {!isUpdating && (
                <>
                  <h1>
                    Welcome back
                    <br />
                    {username}
                  </h1>
                  <button className="edit-button" onClick={Toggle}>
                    Edit Name
                  </button>
                </>
              )}
              {isUpdating && UpdateForm(username, firstname, lastname)}
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

import Navbar from "../components/Navbar";
import accountsData from "../data/accountsData.json";
import Accounts from "../components/Accounts";
import Footer from "../components/Footer";

function Profile() {
  return (
    <>
      <Navbar />
      <main class="main bg-dark">
        <div class="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button class="edit-button">Edit Name</button>
        </div>
        <h2 class="sr-only">Accounts</h2>
        {accountsData.map(({ id, title, amount, text }) => (
          <Accounts key={id} title={title} amount={amount} text={text} />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default Profile;

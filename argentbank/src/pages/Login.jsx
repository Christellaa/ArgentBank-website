import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Form />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Login;

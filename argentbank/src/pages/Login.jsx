import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Navbar />
      <main class="main bg-dark">
        <section class="sign-in-content">
          <i class="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Form />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Login;

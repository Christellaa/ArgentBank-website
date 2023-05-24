import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <h1>404</h1>
      <p>The page you are searching for does not exist.</p>
      <Link to="/" className="main-nav-item">
        Return to the homepage
      </Link>
    </>
  );
}

export default Error;

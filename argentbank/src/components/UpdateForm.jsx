import { useState } from "react";
import Profile from "../pages/Profile";

function UpdateForm({ username, firstname, lastname }) {
  //   const [isUpdating, setUpdate] = useState(true);
  //   function Toggle() {
  //     setUpdate(isUpdating);
  //   }

  return (
    <>
      {/* {isUpdating && ( */}
      <h1>Edit user info</h1>
      <form method="post">
        <div className="input-wrapper--update">
          <label htmlFor="username">User name:</label>
          <input
            className="input--update"
            type="text"
            id="username"
            required
            placeholder={`${firstname}`}
            //   onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-wrapper--update">
          <label htmlFor="firstname">First name:</label>
          <input
            className="input--update"
            type="text"
            id="firstname"
            value={`${firstname}`}
          />
        </div>
        <div className="input-wrapper--update">
          <label htmlFor="lastname">Last name:</label>
          <input
            className="input--update"
            type="text"
            id="lastname"
            value={`${firstname}`}
          />
        </div>
        <div className="features update-buttons">
          <button type="submit" className="buttons update-button">
            Save
          </button>
          <button className="buttons update-button">
            {/* onClick={Toggle} */}
            Cancel
          </button>
        </div>
      </form>
      {/* )} */}
      {/* {!isUpdating && Profile()} */}
    </>
  );
}

export default UpdateForm;

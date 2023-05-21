function UpdateForm({ Toggle, userName, firstName, lastName }) {
  const [username, setUsername] = useState("");
  async function handleSubmit(e) {
  }

  return (
    <>
      <h1>Edit user info</h1>
      <form method="post" onSubmit={handleSubmit}>
        <div className="input-wrapper--update">
          <label htmlFor="username">User name:</label>
          <input
            className="input--update"
            type="text"
            id="username"
            required
            defaultValue={`${userName}`}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-wrapper--update">
          <label htmlFor="firstname">First name:</label>
          <input
            className="input--update input--intangible"
            type="text"
            id="firstname"
            value={`${firstName}`}
            readOnly={true}
          />
        </div>
        <div className="input-wrapper--update">
          <label htmlFor="lastname">Last name:</label>
          <input
            className="input--update input--intangible"
            type="text"
            id="lastname"
            value={`${lastName}`}
            readOnly={true}
          />
        </div>
        <div className="features update-buttons">
          <button type="submit" className="buttons update-button">
            Save
          </button>
          <button className="buttons update-button" onClick={Toggle}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default UpdateForm;

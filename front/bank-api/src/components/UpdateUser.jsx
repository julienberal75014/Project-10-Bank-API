import "../assets/styles/main.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, updateUser } from "../redux/action";
import { getUser } from "../redux/reducer";

function UpdatedUser({ userData }) {
  const dispatch = useDispatch();

  const [userName, setUsername] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  async function handleEdit(e) {
    e.preventDefault();

    const response = await updateUser(firstName, lastName, userData.token);
    const user = await getUserData(userData.token);
    dispatch(
      getUser({
        firstName: user.body.firstName,
        lastName: user.body.lastName,
        token: userData.token,
      })
    );

    setUsername(false);
  }
  return userName ? (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {userData.firstName} {userData.lastName}
      </h1>
      <button className="edit-button">Edit Name</button>
      <form className="formChange" onSubmit={(e) => handleEdit(e)}>
        <div className="input-change-form">
          <input
            className="input-change"
            type="text"
            placeholder={userData.firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="input-change"
            type="text"
            placeholder={userData.lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="button-form">
          <button className="button-change" type="submit">
            Save
          </button>
          <button
            className="button-change"
            // eslint-disable-next-line no-sequences
            onClick={(e) => (e.preventDefault(e), setUsername(false))}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {userData.firstName} {userData.lastName}
      </h1>
      <button className="edit-button" onClick={() => setUsername(true)}>
        Edit Name
      </button>
    </div>
  );
}

export default UpdatedUser;

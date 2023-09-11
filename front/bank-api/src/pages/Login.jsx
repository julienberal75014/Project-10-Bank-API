import "../assets/styles/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, loginUser } from "../redux/action";
import { getUser } from "../redux/reducer";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userRedux = useSelector((state) => state.user);
  console.log(userRedux);

  async function handleLogin(e) {
    e.preventDefault();

    const response = await loginUser(email, password);
    console.log(response);
    const token = response.body.token;
    const user = await getUserData(token);
    console.log(user, token);
    dispatch(
      getUser({
        firstName: user.body.firstName,
        lastName: user.body.lastName,
        token: token,
      })
    );
  }

  return (
    <div>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <FontAwesomeIcon className="sign-in-icon" icon={faCircleUser} />
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {/*<!-- PLACEHOLDER DUE TO STATIC SITE -->*/}
            <button className="sign-in-button" onClick={handleLogin}>
              Sign In
            </button>
            {/*<!-- SHOULD BE THE BUTTON BELOW -->
          <!-- <button className="sign-in-button">Sign In</button> -->
          <!--  -->*/}
          </form>
        </section>
      </main>
    </div>
  );
}

export default Login;

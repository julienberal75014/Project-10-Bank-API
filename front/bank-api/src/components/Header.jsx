import "../assets/styles/main.css";
import BankLogo from "../assets/img/argentBankLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/action";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);

  console.log(userData);

  async function handleLogout(e) {
    e.preventDefault();

    dispatch(logoutUser());
    localStorage.clear();
    navigate("/login");
    console.log(userData);
  }

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={BankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {userData.token ? (
        <div className="main-nav-item2">
          <p className="user-name">
            {userData.firstName} {userData.lastName}
          </p>
          <div className="main-nav-item" onClick={(e) => handleLogout(e)}>
            <FontAwesomeIcon icon={faSignOut} />
            <span className="sign-out">Sign Out</span>
          </div>
        </div>
      ) : (
        <Link className="main-nav-item" to="/login">
          <FontAwesomeIcon icon={faCircleUser} />
          <span className="sign-in">Sign In</span>
        </Link>
      )}
    </nav>
  );
}

export default Header;

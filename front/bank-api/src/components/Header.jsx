import "../assets/styles/main.css";
import BankLogo from "../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faSignOut } from "@fortawesome/free-solid-svg-icons";

function Header() {
  // TODO : rajouter condition que si l'utilisateur est connecté on affiche le bouton sign out
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
      <div>
        <Link className="main-nav-item" to="/login">
          <FontAwesomeIcon icon={faCircleUser} />
          <span className="sign-in">Sign In</span>
        </Link>
        <Link className="main-nav-item" to="/">
          <FontAwesomeIcon icon={faSignOut} />
          <span className="sign-in">Sign Out</span>
        </Link>
      </div>
    </nav>
  );
}

export default Header;

import "../assets/styles/main.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, logoutUser } from "../redux/action";
import UpdatedUser from "../components/UpdateUser";

function UserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);
  const state = useSelector((state) => state);

  useEffect(() => {
    // si pas de token, on redirige vers la page login
    if (!userData.token) {
      // si on a un token, on récupère les données de l'utilisateur et on le redirige vers la page profil
      if (userData.token) {
        dispatch(getUserData(userData.token));
        navigate("/profil");
      } else {
        // si on a pas de token, on redirige vers la page login
        dispatch(logoutUser());
        navigate("/login");
      }
    }
  }, [userData.token, dispatch, navigate]);
  return (
    <main className="main bg-dark">
      <h2 className="sr-only">Accounts</h2>
      <UpdatedUser userData={userData} />
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default UserProfile;

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../features/userSlice";
import { firebaseAuth } from "../firebase";
import "./logoutButton.css";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutOfApp = () => {
    firebaseAuth.signOut().then(() => {
      dispatch(logout());
      history.replace("/");
    }).catch(error => alert(error.message));
  };

  return (
    <button className="logoutButton" onClick={logoutOfApp}>
      Log Out
    </button>
  );
};
export default LogoutButton;

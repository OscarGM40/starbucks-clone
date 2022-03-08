import { Link } from "react-router-dom";
import "./signInButton.css";

const SignInButton = () => {
  return (
    <Link to="/account/signin" className="signInButton">
      Sign In
    </Link>
  );
};
export default SignInButton;

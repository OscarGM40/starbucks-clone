import "./header.css";
import { Link } from "react-router-dom";
import { Example } from "../framer/Example";
import { FindAStore } from "./FindAStore";
import { useAppSelector } from "../app/hooks";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";
import LogoutButton from "./LogoutButton";

type Props = {
  menuPage?: boolean;
};
const Header = ({ menuPage }: Props) => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <div className="header">
      <div className="header__left">
        <Link className="header__logo" to="/">
          <img
            // src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            src="images/StarbucksLogo.png"
            alt=""
          />
        </Link>
        <Link to="/menu" className="header__link">
          Menu
        </Link>
        <Link to="/" className="header__link">
          Rewards
        </Link>
        <Link to="/" className="header__link">
          Gift Cards
        </Link>
      </div>
      <div className="header__right">
        <Example />
        <FindAStore />

        {/* USER HERE */}
        {!user ? (
          <>
            <Link to="/account/signin">
              <SignInButton />
            </Link>
            <Link to="/account/signup">
              <SignUpButton />
            </Link>
          </>
        ) : (
          <div className="header__logout">
            {menuPage ? <LogoutButton /> : <Link to="/menu">Order Now</Link>}
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;

import { Link } from "react-router-dom";
import { FooterSecondary } from "../components/FooterSecondary";
import { SignupForm } from "../components/SignupForm";
import "./signupScreen.css";

export const SignupScreen = () => {
  return (
    <div className="signupScreen">
      <div className="signupScreen__header">
        <Link to="">
          <img src="/images/StarbucksLogo.png" alt="" />
        </Link>
      </div>
      <h1 className="signupScreen__heading">Create an account</h1>
      <div className="signupScreen__rewards">
        <h4 className="">STARBUCKS® REWARDS</h4>
        <p>
          Join Starbucks Rewards to earn Stars for free food and drinks, any way
          you pay. Get access to mobile ordering, a birthday Reward, and{" "}
          <Link to="">more</Link>.
        </p>
      </div>
      <SignupForm />
      <FooterSecondary alignItems="center" flexDirection="column" />
    </div>
  );
};

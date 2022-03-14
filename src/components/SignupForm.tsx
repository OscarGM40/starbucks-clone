import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./signupForm.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ReportProblemRoundedIcon from "@material-ui/icons/ReportProblemRounded";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import { useState } from "react";
import { FormSubmit } from "./FormSubmit";
import { firebaseAuth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { useHistory } from "react-router-dom";

type Inputs = {
  fName: string;
  lName: string;
  email: string;
  password: string;
};

const schema = yup.object({
  fName: yup.string().required().min(2).max(30),
  lName: yup.string().required().min(2).max(70),
  email: yup.string().required().email(),
  password: yup.string().required().min(6).max(20),
});

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit: SubmitHandler<Inputs> = ({
    fName,
    lName,
    email,
    password,
  }) => {
    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        /* la clave esta en que updateProfile({}) me deja actualizar el usuario con lo que quiera?? */
        userAuth.user
          ?.updateProfile({
            displayName: fName,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user?.email!,
                uid: userAuth.user?.uid!,
                displayName: fName!,
              })
            );
            history.replace("/menu");
          });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signupForm">
      <div className="signupForm__container">
        <form onSubmit={handleSubmit(onSubmit)} className="signupForm__form">
          <h4 className="signupForm__section">Personal Information</h4>
          <div className="signupForm__inputContainer">
            <TextField
              label="First name"
              {...register("fName")}
              name="fName"
              type="text"
              InputLabelProps={{
                style: {
                  color: "rgba(0,0,0,.56)",
                },
              }}
              InputProps={{
                style: {
                  fontWeight: "800",
                },
              }}
              className="signupForm__input"
              // inputRef={register({ required: true })} version anterior??
            />
            {errors.fName && (
              <div className="signupForm__error">
                <CloseIcon fontSize="small" />
                <span>{errors.fName.message}</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="signupForm__reportIcon"
                />
              </div>
            )}
          </div>{" "}
          {/* end of input */}
          <div className="signupForm__inputContainer">
            <TextField
              label="Last name"
              {...register("lName")}
              name="lName"
              type="text"
              InputLabelProps={{
                style: {
                  color: "rgba(0,0,0,.56)",
                },
              }}
              InputProps={{
                style: {
                  fontWeight: "800",
                },
              }}
              className="signupForm__input"
            />
            {errors.lName && (
              <div className="signupForm__error">
                <CloseIcon fontSize="small" />
                <span>{errors.lName.message}</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="signupForm__reportIcon"
                />
              </div>
            )}
          </div>
          {/* end of input */}
          <h4 className="signupForm__section">Account Security</h4>
          <div className="signupForm__inputContainer">
            <TextField
              label="Email address"
              {...register("email")}
              name="email"
              type="email"
              InputLabelProps={{
                style: {
                  color: "rgba(0,0,0,.56)",
                },
              }}
              InputProps={{
                style: {
                  fontWeight: "800",
                },
              }}
              className="signupForm__input"
            />
            {errors.email && (
              <div className="signupForm__error">
                <CloseIcon fontSize="small" />
                <span>{errors.email.message}</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="signupForm__reportIcon"
                />
              </div>
            )}
          </div>
          {/* end of input */}
          <div className="signupForm__inputContainer">
            <TextField
              label="Password"
              {...register("password")}
              name="password"
              type={passwordShown ? "text" : "password"}
              InputLabelProps={{
                style: {
                  color: "rgba(0,0,0,.56)",
                },
              }}
              InputProps={{
                style: {
                  fontWeight: "800",
                },
              }}
              className="signupForm__input"
            />
            {/* toggleVisibility for password */}
            {passwordShown ? (
              <VisibilityOutlinedIcon
                onClick={() => setPasswordShown(!passwordShown)}
                className="signupForm__visibilityIcon"
              />
            ) : (
              <VisibilityOffOutlinedIcon
                onClick={() => setPasswordShown(!passwordShown)}
                className="signupForm__visibilityIcon"
              />
            )}

            {errors.password && (
              <div className="signupForm__error">
                <CloseIcon fontSize="small" />
                <span>{errors.password.message}</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="signupForm__reportIcon"
                />
              </div>
            )}
          </div>
          <h4 className="signupForm__rewards">
            COLLECT MORE STARS & EARN REWARDS
          </h4>
          <span className="signupForm__span">
            Email is a great way to know about offers and what’s new from
            Starbucks.
          </span>
          <FormSubmit name="Create account" type="submit" />
        </form>
      </div>
    </div>
  );
};

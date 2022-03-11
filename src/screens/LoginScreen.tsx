import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import "./loginScreen.css";
import { TextField } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ReportProblemRoundedIcon from "@material-ui/icons/ReportProblemRounded";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FooterSecondary } from "../components/FooterSecondary";
import { FormSubmit } from "../components/FormSubmit";
import { firebaseAuth } from "../firebase";
import { useAppDispatch } from "../app/hooks";
import { login } from "../features/userSlice";


/* aqui irán los campos del formulario con su tipado */
type Inputs = {
  email: string;
  password: string;
};
const schema = yup.object({
  email:yup.string().required().email(),
  password:yup.string().required().min(6).max(20)
})

export const LoginScreen = () => {
  /* la clave es el hook useForm,que puedo ver que me proporciona todo,los errores,una forma de registrar controles en el formulario,la funcion que hará submit,comprobando antes los errores,etc.Incluso puedo ver con watch el valor actual */
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver:yupResolver(schema)
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useAppDispatch();

  /* data serán los campos(data.email,data.name,etc...) */
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    firebaseAuth.signInWithEmailAndPassword(data.email,data.password)
    .then( (userAuth) => {
      dispatch(login({
        email: userAuth.user?.email!,
        uid:userAuth.user?.uid!,
        displayName:userAuth.user?.displayName!
      }))
    })
    .catch((error) => alert(error.message))
  };

  /* con console.log(watch(fieldName) puedo ver el value en cada onChange si fuera necesario) */
  // console.log(watch("email"));
  // console.log(watch("password"));

  return (
    <div className="loginScreen">
      <div className="loginScreen__left">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            alt=""
            className=""
          />
        </Link>
        <div className="loginScreen__info">
          <h1>Sign in or create an account 🌟</h1>
        </div>
      </div>

      <div className="loginScreen__right">
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" <- te cagas */}
        <form className="" onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* debo registrar cada nuevo control en el hook invocando a register */}
          {/* fijate que además lo vamos a combinar con material */}
          <div className="loginScreen__inputContainer">
            <TextField
              label="Email Address"
              //  para incluir validación debo usar un segundo argumento que es un objeto con las validaciones
              {...register("email", { required: true })}
              name="email"
              type="email"
              /* si quiero estilizar la Label de mi Input de Material puedo hacerlo con InputLabelProps.Si quiero estilizar el Input usaré InputProps,no confundir una con otra */
              InputLabelProps={{
                style: {
                  /* al loro,estoy con sintaxis css */
                  color: "rgba(0,0,0,.56)",
                },
              }}
              InputProps={{
                style: {
                  fontWeight: "800",
                },
              }}
              className="loginScreen__input"
              // inputRef={register({ required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.email && (
              <div className="loginScreen__error">
                <CloseIcon fontSize="small" />
                <span>Enter an email.</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="loginScreen__reportIcon"
                />
              </div>
            )}
          </div>
          <div className="loginScreen__inputContainer">
            <TextField
              label="Password"
              //  para incluir validación debo usar un segundo argumento que es un objeto con las validaciones
              {...register("password", { required: true })}
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
              className="loginScreen__input"
              // inputRef={register({ required: true })}
            />
            {/* toggleVisibility for password */}
            {passwordShown ? (
              <VisibilityOutlinedIcon
                onClick={() => setPasswordShown(!passwordShown)}
                className="loginScreen__visibilityIcon"
              />
            ) : (
              <VisibilityOffOutlinedIcon
                onClick={() => setPasswordShown(!passwordShown)}
                className="loginScreen__visibilityIcon"
              />
            )}

            {errors.password && (
              <div className="loginScreen__error">
                <CloseIcon fontSize="small" />
                {/* <span>Enter a password.</span> */}
                <span>{errors.password.message}</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="loginScreen__reportIcon"
                />
              </div>
            )}
          </div>{" "}
          {/* fin control para password */}
          <div className="loginScreen__resetLinks">
            <Link to="">Forgot your username?</Link>
            <Link to="">Forgot your password?</Link>
          </div>
          <FormSubmit name="Sign in" type="submit" />
        </form>

        <div className="loginScreen__rewards">
          <h4>JOIN STARBUCKS® REWARDS</h4>
        </div>

        <div className="loginScreen__joinNow">
          <div className="loginScreen__joinNowContainer">
            <Link to="/account/create">Join now</Link>
            <h4>Create an account and bring on the Rewards!</h4>
            <p>
              Join Starbucks® Rewards to earn free food and drinks, get free
              refills, pay and order with your phone, and more.
            </p>
          </div>
        </div>
        <FooterSecondary paddingLeft={30} flexDirection="column" />
      </div>
    </div>
  );
};
  
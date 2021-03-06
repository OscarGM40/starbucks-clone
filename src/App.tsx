import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { LoginScreen } from "./screens/LoginScreen";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useEffect } from "react";
import { firebaseAuth } from "./firebase";
import { login, logout } from "./features/userSlice";
import { SignupScreen } from "./screens/SignupScreen";
import { MenuScreen } from "./screens/MenuScreen";
import { FeaturedScreen } from "./screens/FeaturedScreen";

function App() {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        /* user esta logeado */
        dispatch(
          login({
            email: userAuth.email!,
            uid: userAuth.uid,
            displayName: userAuth.displayName!,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <HomeScreen />
            <Fade>
              <Footer />
            </Fade>
          </Route>
          <Route exact path="/account/signin">
            {user ? <Redirect to="/menu" /> : <LoginScreen />}
          </Route>
          <Route exact path="/account/create">
            {user ? <Redirect to="/menu" /> : <SignupScreen />}
          </Route>
          <Route exact path="/menu">
            {!user ? (
              <Redirect to="/account/signin" />
            ) : (
              <>
                <Header menuPage />
                <MenuScreen />
              </>
            )}
          </Route>
          <Route exact path="/menu/featured">
            <Header />
            <FeaturedScreen />
            <Fade>
              <Footer />
            </Fade>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

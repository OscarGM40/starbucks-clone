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
import { useAppSelector } from "./app/hooks";

function App() {

  const user = useAppSelector(state => state.user.user);
  
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
          </Switch>
      </Router>
    </div>
  );
}

export default App;

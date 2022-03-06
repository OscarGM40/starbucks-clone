import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
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
          </Switch>
      </Router>
    </div>
  );
}

export default App;

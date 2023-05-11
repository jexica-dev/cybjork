import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";

function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <Component />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </>
  );
}

export default App;

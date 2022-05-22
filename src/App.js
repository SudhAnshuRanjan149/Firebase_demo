import React from "react";
import "./styles.css";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/Signup" component={SignUp} />
          <Route exact path="/Signin" component={SignIn} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

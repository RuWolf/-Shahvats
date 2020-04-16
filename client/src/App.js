import React from 'react';
import './styles/index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShahvatsDashboard from "./components/ShahvatsDashboard";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Profile from "./components/Profile"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Login} />
        <Route exact path={"/register"} component={Registration} />
        <Route exact path={"/game"} component={ShahvatsDashboard} />
        <Route exact path={"/profile"} component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'antd/dist/antd.css';
import ShahvatsDashboard from "./components/ShahvatsDashboard";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/register"} component={Registration} />
        <Route exact path={"/profile"} component={ShahvatsDashboard} />
      </Switch>
    </Router>
  );
}

export default App;

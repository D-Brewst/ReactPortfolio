import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import MyFooter from "./components/Footer";

export default function Routes() {
  return (
    <Router>
      <MyNavbar />
      <Switch>
        <Route path="/Portfolio">
          <h1>Projects</h1>
        </Route>
        <Route path="/">
          <h1>HomePage</h1>
        </Route>
        <Route path="/Contact">
          <h1>Contact</h1>
        </Route>
      </Switch>
      <MyFooter />
    </Router>
  );
}
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import MyFooter from "./components/Footer";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";

export default function Routes() {
  return (
    <Router>
      <MyNavbar />
      <Switch>
        <Route path="/Portfolio">
          <Portfolio />
        </Route>
        <Route path="/">
          <About />
        </Route>
        <Route path="/Contact">
          <h1>Contact</h1>
        </Route>
      </Switch>
      <MyFooter />
    </Router>
  );
}
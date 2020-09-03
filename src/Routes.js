import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import MyFooter from "./components/Footer";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

export default function Routes() {
  return (
    <Router>
      <MyNavbar />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/Portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
      </Switch>
      <MyFooter />
    </Router>
  );
}
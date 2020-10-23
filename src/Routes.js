import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import MyFooter from "./components/Footer";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

export default function Routes() {
  return (
    <Router>
      <MyNavbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route> */}
      </Switch>
      <MyFooter />
    </Router>
  );
}
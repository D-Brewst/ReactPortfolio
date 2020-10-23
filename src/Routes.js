import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyNavbar from "./Components/Navbar";
import MyFooter from "./Components/Footer";
import Home from "./Pages/home";

export default function Routes() {
  return (
    <Router>
      <MyNavbar />
        <Route exact path="/">
          <Home />
        </Route>
      <MyFooter />
    </Router>
  );
}
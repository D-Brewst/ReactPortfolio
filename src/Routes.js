import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import MyFooter from "./components/Footer";
import Home from "./pages/home";

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
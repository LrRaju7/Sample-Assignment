//IMPORTING PACKAGES
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//IMPORTING COMPONENT FILES
import Nav from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import InputValues from "./components/Inputs";
import Footer from "./components/Footer";
import ErrorPage from "./components/PageNotFound";

//IMORTING CSS FILES
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//FUNCTIONAL COMPONENT
const App = () => {

  return (
    <Router>
      <div className="App">
        {/* NAV COMPONENT */}
        <Nav />
        <Switch>
          {/* APP ROUTES */}
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/input" component={InputValues} />
          <Route component={ErrorPage} />
        </Switch>
        {/* FOOTER COMPONENT */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

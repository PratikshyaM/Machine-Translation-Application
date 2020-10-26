import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import Translate from "./components/translate.component";
import UserProfile from "./components/userprofile.component";

import logo from "./logo.svg";

class App extends Component{
  render() {
    return (
        <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://www.magic-moments.in" >
              <img src={logo} width="30" height="30" alt="http://www.magic-moments.in" />
            </a>
            <Link to="/" className="navbar-brand">Translate App</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Login</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/translate/:doc" className="nav-link">Translate</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/userprofile" className="nav-link">UserProfile</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Logout</Link>
                </li>
              </ul>
            </div>
          </nav>
        <Route path="/" exact component={Login} />
        <Route path="/translate/:doc" component={Translate} />
        <Route path="/userprofile" component={UserProfile} />
      </div>
        </Router>

    );
  }
}

export default App;
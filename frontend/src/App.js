import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AuthState from "./context/auth/AuthState";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <AuthState>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </AuthState>
  );
};

export default App;

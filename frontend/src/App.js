import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AuthState from "./context/auth/AuthState";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./routing/PrivateRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <AuthState>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </AuthState>
  );
};

export default App;

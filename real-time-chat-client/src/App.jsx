// src/App.js

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Chat from "./components/Chat";
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

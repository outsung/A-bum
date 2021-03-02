import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import "./App.css";

import { TransitionGroup, CSSTransition } from "react-transition-group";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route
          render={({ location }) => (
              <TransitionGroup>
                <CSSTransition key={location.key} timeout={1000} classNames="chew">
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )
          }
        ></Route>
      </Router>
    </div>
  );
};

export default App;
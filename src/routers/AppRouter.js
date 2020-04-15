import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import { createBrowserHistory } from "history";
import CityPageContainer from "../containers/CityPageContainer";

const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/:slug" exact component={CityPageContainer} />
        <Route path="/signup" exact component="SignUp" />
        <Route path="/signin" exact component="SignIn" />
      </Switch>
    </Router>
  );
};

export default AppRouter;

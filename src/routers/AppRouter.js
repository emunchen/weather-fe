import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import { createBrowserHistory } from "history";
import CityPageContainer from "../containers/CityPageContainer";
import LoginPageContainer from "../containers/LoginPageContainer";

const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPageContainer} />
        <Route path="/:slug" exact component={CityPageContainer} />
      </Switch>
    </Router>
  );
};

export default AppRouter;

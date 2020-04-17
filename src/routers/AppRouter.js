import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CityPageContainer from "../containers/CityPageContainer";
import LoginPageContainer from "../containers/LoginPageContainer";
import HomePageContainer from "../containers/HomePageContainer";

import history from "../history";

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePageContainer} />
        <Route path="/login" exact component={LoginPageContainer} />
        <Route exact path="/:slug" component={CityPageContainer} />
      </Switch>
    </Router>
  );
};

export default AppRouter;

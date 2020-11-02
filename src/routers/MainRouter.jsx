import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { dataRouteDashboard, dataRouteAuth } from "../assets";
import { NotFoundPage } from "../pages";
import { Wrapper } from "../templates";

const MainRouter = () => {
  const [routes, setRoutes] = useState(dataRouteDashboard);

  return (
    <Router>
      <Switch>
        {routes.map((data, index) => {
          return (
            <Route key={index} exact={data.exact} path={data.path}>
              <Wrapper auth={true}>
                <data.component />
              </Wrapper>
            </Route>
          );
        })}
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default MainRouter;

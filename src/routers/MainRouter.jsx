import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { dataRouteDashboard, dataRouteAuth } from "../assets";
import { NotFoundPage } from "../pages";
import { Wrapper } from "../templates";
import { getData } from "../utils";

const MainRouter = () => {
  // const [routes, setRoutes] = useState(dataRouteDashboard);
  const [routes, setRoutes] = useState(dataRouteAuth);
  let dataUser = getData("userData");

  useEffect(() => {
    if (dataUser) {
      setRoutes(dataRouteDashboard);
    } else {
      setRoutes(dataRouteAuth);
    }
  }, [dataUser]);

  return (
    <Router>
      <Switch>
        {routes.map((data, index) => {
          return (
            <Route key={index} exact={data.exact} path={data.path}>
              <Wrapper auth={dataUser}>
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

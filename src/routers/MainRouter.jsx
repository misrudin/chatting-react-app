import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { dataRouteDashboard, dataRouteAuth } from "../assets";
import { NotFoundPage } from "../pages";
import { Wrapper } from "../templates";
import { getData } from "../utils";

const MainRouter = () => {
  const [routes, setRoutes] = useState(dataRouteAuth);
  const {isLoggedIn} = useSelector(state => state.authState)
  let dataUser = getData("userData");
  const dispatch = useDispatch()

  useEffect(()=>{
    if (isLoggedIn) {
      setRoutes(dataRouteDashboard);
    } else {
      setRoutes(dataRouteAuth);
    }
  },[isLoggedIn])

  useEffect(() => {
    if (dataUser) {
      dispatch({type:'LOGIN'})
      setRoutes(dataRouteDashboard);
    } else {
      setRoutes(dataRouteAuth);
      dispatch({type:'LOGOUT'})
    }
  }, []);

  return (
    <Router>
      <Switch>
        {routes.map((data, index) => {
          return (
            <Route key={index} exact={data.exact} path={data.path}>
              <Wrapper auth={isLoggedIn}>
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

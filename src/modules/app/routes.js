import React, { lazy, Suspense } from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";

const render = Comp => props => <Comp {...props} />;
const Home = render(lazy(() => import("~/modules/home")));
const RestaurantPage = render(lazy(() => import("~/modules/restaurant")));

const Routes = () => (
  <div>
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/all" />
          <Route path="/all" component={Home} />
          <Route path="/restaurant/:restaurantid" component={RestaurantPage} />
        </Switch>
      </Router>
    </Suspense>
  </div>
);
export default Routes;

/**
 * To transform the `JSX` code into `Inferno` compatible `VirtualDOM`
 * If you want to use `Bable` instead of `Bublé` comment this and go
 * uncomment configurations in `.bablerc` and `babel-plugin-inferno`
 * will do the transform for you
 */
require("inferno-compat");

import Inferno from "inferno";
import Component from "inferno-component";
import { Router, Route, IndexRoute, Redirect } from "inferno-router";
import createHashHistory from "history/createHashHistory";

import { MainComponent } from "./main/main";
import { HomeComponent } from "./home/home";
import { AboutComponent } from "./about/about";
import { NotFoundComponent } from "./not_found/not-found";


const hashHistory = createHashHistory();

const routes = (
  <Router history={ hashHistory }>
    <Route component={ MainComponent } owner="Khaled Al-Ansari" host="Surge.sh">
      <IndexRoute component={ HomeComponent } />
      <Route path="/about" component={ AboutComponent }></Route>

      <Route path="/404" component={ NotFoundComponent }/>
      <Redirect from="*" to="/404" />
    </Route>
  </Router>
);

Inferno.render(
  routes,
  document.getElementById("app")
);
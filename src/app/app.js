/**
 * To transform the `JSX` code into `Inferno` compatible `VirtualDOM`
 * If you want to use `Bable` instead of `Bublé` comment this and go
 * uncomment configurations in `.bablerc` and `babel-plugin-inferno`
 * will do the transform for you
 */
require("inferno-compat");

import Inferno from "inferno";
import Component from "inferno-component";
import { Router, Route, IndexRoute } from "inferno-router";
import createHashHistory from "history/createHashHistory";

import { MainComponent } from "./main/main";
import { HomeComponent } from "./home/home";
import { AboutComponent } from "./about/about";


const hashHistory = createHashHistory();

const routes = (
  <Router history={ hashHistory }>
    <Route component={ MainComponent }>
      <IndexRoute component={ HomeComponent } />
      <Route path="/about" component={ AboutComponent }></Route>
    </Route>
  </Router>
);

Inferno.render(
  routes,
  document.getElementById("app")
);
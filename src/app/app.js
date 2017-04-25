import Inferno from 'inferno';
import Component from 'inferno-component';
import { Router, Route, IndexRoute } from 'inferno-router';
import createHashHistory from 'history/createHashHistory';

import MainComponent from "./main";
import HomeComponent from "./home";
import AboutComponent from "./about";


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
)
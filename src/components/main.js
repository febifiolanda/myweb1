import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Contact from './contact';
import Portofolio from './portofolio';
import Profile from './Profile';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/contact" component={Contact} />
    <Route path="/portofolio" component={Portofolio} />
    <Route path="/Profile" component={Profile} />
  </Switch>
)

export default Main;

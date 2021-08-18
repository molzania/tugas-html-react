import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/Home' component={Home}></Route>
      <Route exact path='/Contact' component={Contact}></Route>
    </Switch>
  );
}

export default Main;
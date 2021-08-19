import React from "react";
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Work from './Work';

const Main = () => {
  
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/Home' component={Home}></Route>
      <Route exact path='/Contact' component={Contact}></Route>
      <Route exact path='/Work' component={Work}></Route>
    </Switch>
  );
}

export default Main;
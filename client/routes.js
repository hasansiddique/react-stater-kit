import React from 'react';
import {Route} from 'react-router-dom';
import Home from './home/Home.container';
import About from './about/About.container';

const Routes = () => (
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
  </div>
);

export default Routes;

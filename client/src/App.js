import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/login';
import Register from './components/register';
import Home from './components/home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import Login from './components/Login';
import Signup from './components/Signup';
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList';
import Analytics from './components/Analytics';
import RedirectHandler from './components/RedirectHandler';
import ErrorBoundary from './components/ErrorBoundary';

const Routes = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/shorten" component={LinkForm} />
          <PrivateRoute path="/links" component={LinkList} />
          <PrivateRoute path="/analytics" component={Analytics} />
          <Route path="/:shortCode" component={RedirectHandler} />
          <Route path="/" exact component={LinkForm} />
        </Switch>
      </ErrorBoundary>
    </Router>
  );
};

export default Routes;
/* eslint-disable prettier/prettier */
import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//
import HomePage from './app/Home';

export default function App() {
  return (
    <RecoilRoot>
      <Router>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

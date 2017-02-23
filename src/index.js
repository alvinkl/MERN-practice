import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import AuthService from '../build/AuthService';

import App from './components/App';
import Poll from './components/PollingView/Poll';
import NewPoll from './components/NewPolling/NewPoll';
import PollPage from './components/PollPage/PollPage';
import Login from './components/Login';

const auth = new AuthService('ixXUVnBXsIMmScQsfOmIGoRUBG5DqIpI', 'alvinkl.au.auth0.com');

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' });
  }
}

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path='/' component={ App } auth={ auth } >
      <IndexRoute component={ Poll } auth={ auth }></IndexRoute>
      <Route path='newPoll' component={ NewPoll } onEnter={ requireAuth } auth={ auth }/>
      <Route path='pollPage/:pollId' component={ PollPage } />
      <Route path='login' component={ () => (<Login auth={ auth }/>) } />
    </Route>
  </Router>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App';
import Poll from './components/PollingView/Poll';
import NewPoll from './components/NewPolling/NewPoll';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path='/' component={ App } >
      <IndexRoute component={ Poll }></IndexRoute>
      <Route path='newPoll' component={ NewPoll }></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);

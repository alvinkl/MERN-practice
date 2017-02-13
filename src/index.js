import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App';
import Poll from './components/PollingView/Poll';
import NewPoll from './components/NewPolling/NewPoll';
import PollPage from './components/PollPage/PollPage';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path='/' component={ App } >
      <IndexRoute component={ Poll }></IndexRoute>
      <Route path='newPoll' component={ NewPoll }></Route>
      <Route path='pollPage' component={ PollPage }>
        <Route path='/pollPage/:poll' component={ PollPage }></Route>
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);

import React, { Component } from 'react';

import PollList from '../PollingView/PollList';

class MyPoll extends Component {
  constructor(props) {
    super(props);
    let user = props.params.userId;
    this.url = `http://localhost:3100/api/${user}`;
  }

  render() {
    return (
      <div>
        <PollList url={ this.url } />
      </div>
    );
  }
}

export default MyPoll;
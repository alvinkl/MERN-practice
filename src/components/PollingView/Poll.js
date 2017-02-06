import React, { Component } from 'react';

import PollList from './PollList';

export default class Poll extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1 className='text-center'><strong>fcc-voting</strong></h1>
        <h4 className='text-center'>Below are polls you own.</h4>
        <h4 className='text-center'>Select a poll to see the results and vote, or <a href="">make a new poll!</a></h4>
        <PollList 
          url='http://localhost:3100/api/'
          pollInterval={2000} />
      </div>
    );
  }
}
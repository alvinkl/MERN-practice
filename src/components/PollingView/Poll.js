import React, { Component } from 'react';
import { Link } from 'react-router';

import PollList from './PollList';

export default class Poll extends Component {
  constructor(props) {
    super(props);
    this.auth = this.props.route.auth;
    this.state = { loggedIn: this.auth.loggedIn() };
  }

  render() {
    
    return (
      <div>
        <h1 className='text-center'><strong>fcc-voting</strong></h1>
        <h4 className='text-center'>Below are polls you own.</h4>
        <h4 className='text-center'>Select a poll to see the results and vote, or <Link to="newPoll"><span> make a new poll!</span></Link> 
        </h4>
        <PollList 
          url='http://localhost:3100/api/'
          pollInterval={2000} />
      </div>
    );
  }
}
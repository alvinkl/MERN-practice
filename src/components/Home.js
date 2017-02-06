import React, { Component } from 'react';

import Poll from './Poll';

export default class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="jumbotron">
        <Poll />
      </div>
    );
  }
}
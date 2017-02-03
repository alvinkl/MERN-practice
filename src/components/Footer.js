import React, { Component } from 'react';

export default class Nav extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>
        This "fcc-voting" app is built by @alvinkl of freecodecamp, <br/>
        following the instructions of "Basejump: Build a Voting App | Free Code Camp". <br/>
        Github repository: alvinkl/fcc-voting
      </p>
    );
  }

}
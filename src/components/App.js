import React, { Component } from 'react';

import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';

export default class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">  
        <Nav />
        <Home />
        <Footer />
      </div>
    )
  }

}
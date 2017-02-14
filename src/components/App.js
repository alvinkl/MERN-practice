import React, { Component } from 'react';
import { Link } from 'react-router';

import Footer from './Footer';

export default class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">  
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">fcc-voting</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/">Home</Link></li>
              <li><a href="http://localhost:3100/auth/twitter" className="btn btn-default">Sign in Twitter</a></li>
              {/*<li><Link to="pollPage">My Polls</Link></li>
              <li><Link to="newPoll">New Poll</Link></li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">User
                <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#" className="btn btn-default">Sign out</a></li>
                </ul>
              </li>*/}
            </ul>
          </div>
        </nav>
        <div className='jumbotron'>
          { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }

}
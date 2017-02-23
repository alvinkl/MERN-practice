import React, { Component } from 'react';
import { Link } from 'react-router';

import Footer from './Footer';

export default class App extends Component {
  
  constructor(props) {
    super(props);

    this.auth = this.props.route.auth;
    this.state = { loggedIn: this.auth.loggedIn() };

    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.auth.logout();
    this.setState({ loggedIn: this.auth.loggedIn() });
  }

  render() {
    let children = null;

    let link = this.state.loggedIn ? 
                (<ul className="nav navbar-nav navbar-right">
                  <li><Link to={`myPoll/${this.auth.getProfile().user_id}`}>My Polls</Link></li>
                  <li><Link to="newPoll">New Poll</Link></li>
                  <li><a className="btn btn-danger" onClick={ this.logout }>Sign out</a></li>
                </ul>)
              :  (<ul className="nav navbar-nav navbar-right">
                    <li><a className="btn btn-default" onClick={ this.auth.login.bind(this) }>Login</a></li>
                  </ul>)
    return (
      <div className="container">  
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">fcc-voting</a>
            </div>
            { link }
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/">Home</Link></li>
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
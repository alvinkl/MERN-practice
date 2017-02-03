import React, { Component } from 'react';

export default class Nav extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">fcc-voting</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#">My Polls</a></li>
            <li><a href="#">New Poll</a></li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">User
              <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#" className="btn btn-default">Sign out</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

}
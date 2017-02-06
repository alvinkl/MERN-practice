import React, { Component } from 'react';

export default class NewPoll extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form className="form-horizontal" action="http://localhost:3100/api/" method="POST">
        <h1>Make a new poll!</h1>
        <div className="form-group">
          <label htmlFor="user">User:</label><br/>
          <input type="text" className="col-xs-12" required/>
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label><br/>
          <input type="text" className="col-xs-12" required/>
        </div>
        <div className="form-group">
          <label htmlFor="options">Options (seperated by line):</label><br/>
          <textarea rows="4" className="col-xs-12 form-control" required/>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Make!</button>
      </form>
    );
  }
}
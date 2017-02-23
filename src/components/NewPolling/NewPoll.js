import React, { Component } from 'react';
import axios from 'axios';

export default class NewPoll extends Component {
  constructor(props) {
    super(props);
    this.auth = this.props.route.auth;
    let user = this.auth.getProfile();
    console.log(user.user_id)
    this.state = {
      user: user.user_id,
      title: "",
      options: ""
    }

    this.auth.on('profile_updated', newProfile => {
      this.setState({ user: newProfile.user_id })
    })

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
    var options = this.state.options.split(",");

    axios.post('http://localhost:3100/api/', {
      user: this.state.user,
      title: this.state.title,
      polls: options
    })
      .then((res) => {
        console.log(res);
        this.setState({
          title: "",
          options: ""
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  setValue(field, event) {
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
  }

  render() {
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <h1>Make a new poll!</h1>
        <div className="form-group">
          <label htmlFor="title">Title:</label><br/>
          <input 
            name="title" 
            type="text" 
            className="col-xs-12" 
            onChange={ this.setValue.bind(this, 'title') }
            required/>
        </div>
        <div className="form-group">
          <label htmlFor="options">Options (seperated by line):</label><br/>
          <textarea 
            name="options" 
            rows="4" 
            className="col-xs-12 form-control" 
            onChange={ this.setValue.bind(this, 'options') }
            required/>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Make!</button>
      </form>
    );
  }
}
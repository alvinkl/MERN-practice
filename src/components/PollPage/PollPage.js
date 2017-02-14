import React, { Component } from 'react';
import axios from 'axios';

import Chart from './Chart';

export default class PollPage extends Component {
  constructor(params) {
    super(params);
    this.URL = 'http://localhost:3100/api';
    this.params = params.params.pollId;

    this.state = { data: { polls: [] } };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadPollFromServer = this.loadPollFromServer.bind(this);
  }

  loadPollFromServer() {
    axios.get(`${this.URL}/${this.params}`)
      .then(res => {
        this.setState({ data: res.data });
      })
  }

  componentWillMount() {
    this.loadPollFromServer();
  }

  handleSubmit(e) {
    e.preventDefault();
    let selectedOption = this.refs.options.value;
    
    axios.put(this.URL, {
      postId: this.state.data._id,
      id: selectedOption,
      type: 1
    })
      .then(res => this.loadPollFromServer())
      .catch(err => console.log(err));
    
  }

  render() {
    let options = this.state.data.polls.map(item => {
      return (
        <option key={ item._id } value={ item._id }>{ item.polling }</option>
      )
    });

    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            { this.state.data.title } <hr/>
            <div className="form-group">
              <label htmlFor="sel1">Select list:</label><br/>
              <select className="form-control" id="sel1" ref="options">
                { options }
              </select>
            </div>
            <br/>
            <button className="btn-block btn btn-success" onClick={this.handleSubmit}>Submit</button>
            <button className="btn-block btn btn-default">Share on Twitter</button>
          </div>
          <div className="col-sm-6">
            <Chart data={ this.state.data }/>
          </div>
        </div>
      </div>
    );
  }
}
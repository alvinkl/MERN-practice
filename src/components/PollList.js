import React, { Component } from 'react';
import axios from 'axios';

import Polling from './Polling.js'

const data = [
  { id: 1, user: 'Bryan', title: 'Testing title', polls: [{ polling: 'pol1', count: 5 }]},
  { id: 1, user: 'Test', title: 'Testing title', polls: [{ polling: 'pol2', count: 2 }]}
]

export default class PollList extends Component {
  constructor() {
    super();
    this.setState = { data: [] };
    this.loadPollsFromServer = this.loadPollsFromServer.bind(this);
  }

  loadPollsFromServer() {
    // axios.get(this.props.url)
    //   .then(res => {
    //     this.setState({ data: res.data });
    //   })
    this.setState({ data: data });
  }

  componentDidMount() {
    this.loadPollsFromServer();
    // setInterval(this.loadPollsFromServer, this.props.pollInterval);
  }

  render() {
    let polling = data.map(item => {
      return ( <a className='btn-block' href=""><li key={ item._id } className="list-group-item text-center">{ item.title }</li></a> );
    });
    return (
      <ul className="list-group">
        {/*<Polling data={ data }/>*/}
        { polling }
      </ul>
    );
  }

}
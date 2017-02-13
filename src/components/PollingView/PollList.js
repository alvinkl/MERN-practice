import React, { Component } from 'react';
import axios from 'axios';

// const data = [
//   { id: 1, user: 'Bryan', title: 'Testing title', polls: [{ polling: 'pol1', count: 5 }]},
//   { id: 1, user: 'Test', title: 'Testing title', polls: [{ polling: 'pol2', count: 2 }]}
// ]

export default class PollList extends Component {
  constructor(props) {
    super(props);
    this.state = { _loadData: true, data: [] };
    this.loadPollsFromServer = this.loadPollsFromServer.bind(this);
  }

  loadPollsFromServer() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({ data: res.data });
      })
  }

  componentDidMount() {
    this.loadPollsFromServer();
    // this.state._loadData = setInterval(this.loadPollsFromServer, this.props.pollInterval);
  }

  componentWillUnMount() {
    clearInterval(this.state._loadData);
  }

  render() {
    let polling = this.state.data.map(item => {
      return ( <a key={ item._id } className='btn-block' href=""><li key={ item._id } className="list-group-item text-center">{ item.title }</li></a> );
    });

    return (
      <ul className="list-group">
        { polling }
      </ul>
    );
  }

}
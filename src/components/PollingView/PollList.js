import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

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
    // clearInterval(this.state._loadData);
  }

  render() {
    let polling = this.state.data.map(item => {
      return ( <Link key={ item._id } className='btn-block' to={`pollPage/${item._id}`}><li key={ item._id } className="list-group-item text-center">{ item.title }</li></Link> );
    });

    return (
      <ul className="list-group">
        { polling }
      </ul>
    );
  }

}
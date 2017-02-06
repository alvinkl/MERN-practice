import React, { Component } from 'react';

export default class PollList extends Component {
  constructor() {
    super();
  }

  render() {
    let polling = this.props.data.map(item => {
      return ( <a className='btn-block' href=""><li key={ item._id } className="list-group-item text-center">{ item.title }</li></a> );
    });
    return (polling);
  }

}
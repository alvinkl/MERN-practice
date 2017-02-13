import React, { Component } from 'react';

import Chart from './Chart';

const data = { 
  id: 1, 
  user: 'Test', 
  title: 'Another title', 
  polls: [
    { 
      id: '0',
      polling: 'pol2', 
      count: 2 
    }, 
    { 
      id: '1',
      polling: 'pol3', 
      count: 4 
    },
    { 
      id: '2',
      polling: 'pol4', 
      count: 2 
    },
    { 
      id: '3',
      polling: 'pol5', 
      count: 2 
    },
  ]
};


export default class PollPage extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({ data: data });
  }

  handleSubmit(e) {
    e.preventDefault();
    let selectedOption = this.refs.options.value;
    data.polls[selectedOption].count++;
    this.setState({
      data: data
    });
  }

  render() {
    let i = 0;  
    let options = this.state.data.polls.map(item => {
      return (
        <option key={ i++ } value={ item.id }>{ item.polling }</option>
      )
    });

    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            { data.title } <hr/>
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
import React, { Component } from 'react';
import { Line } from 'react-chartjs';

export default class Chart extends Component {
  render() {
    let labels = [];
    let data = [];
    this.props.data.polls.map(item => {
      labels.push(item.polling);
      data.push(item.count);
    });


    let chartData = {
      labels: labels,
      datasets: [{
          label: '# of Votes',
          data: data,
          borderWidth: 1
      }]
    }

    let chartOptions = {
      scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }

    return <Line 
              data={chartData} 
              options={chartOptions} 
              width="400" 
              height="250"/>
  }
}
import React from 'react';
import { Bar } from 'react-chartjs-2';
/* import { Line } from 'react-chartjs-2';
import { Pie, Doughnut } from 'react-chartjs-2'; */

const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }

export default class Vulnerbility extends React.Component {
    render() {
        return (
            <div>
                <h1>Vulnerbility</h1>
                <Bar
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Bar Chart',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        )
    }
}
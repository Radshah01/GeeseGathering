import React from 'react';
import { Bar } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import { UserData } from '../Data';


const stackedBar = ({chartData}) => {
    return <Bar data={chartData}  options={{
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                stacked: true,
                min: UserData[0].hour,
                max: UserData[23].hour,
                ticks:{
                    color: 'rgb(148, 148, 148)',
                    maxTicksLimit: UserData.length / 4
                },
                position: 'bottom'
            },
            y: {
                stacked: true,
                min: 0,
                max: 60,
                ticks: {
                  color: 'rgb(148, 148, 148)',
                  callback: value => `${value}min`,
                  stepSize: 20,
                },
                
            }
        },
        layout: {
            padding: 0,
        },
        plugins: {
            legend: {
                labels: {
                    boxHeight: 15,
                    boxWidth: 15,
                    color: "#F7F7F7",
                    font: {
                        family: "Arial",
                        size: 14,
                    }
                }
            }
        }
       
    }}/>;
}

export default stackedBar
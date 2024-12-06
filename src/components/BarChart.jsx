import React from 'react'
import {Bar} from 'react-chartjs-2'
import {
   Chart as ChartJS,
   CategoryScale, 
   LinearScale, 
   BarElement, 
   Title, 
   Tooltip, 
   Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend
)
const dataDemo = {
    labels: [                 // x-axis labels
      "Rent",
      "Groceries",
      "Utilities",
      "Entertainment",
      "Transportation"
    ],
    datasets: [
      {
        label: "steps",
        data: [3000, 5000, 4500, 6000, 8000, 7000, 9000], //y-axis
        borderColor: "rgb(75, 192, 192)", //array can be used 
      },
    ]
  }
function BarChart({
    data=dataDemo,
    title='Chart',
    legendPosition='top',
    style={},
    xAxisTitle='x-axis',
    yAxisTitle="y-axis"
    }) {

    const options = {
    responsive:true,
    plugins: {
        legend: {
            position: legendPosition,
            labels: {
                font: {
                size: 14,
                weight: "bold",
                },
                color: "#fff",
            },
        },
        title: {
            display: true,
            text: title,
            font: {
            size: 16,
            weight: "bold",
            },
            color: "#fff",
        },
    },
    scales: {
    x: {
        title: {
        display: true,
        text: xAxisTitle,
        font: {
            size: 14,
            weight: "bold",
        },
        color: "#007BFF",
        },
    },
    y: {
        title: {
        display: true,
        text: yAxisTitle,
        font: {
            size: 14,
            weight: "bold",
        },
        color: "#007BFF",
        },
        beginAtZero: true,
    },
    },
    barThickness: 50,
    };
    return (
        <Bar 
            options={options}
            data={data}
            style={style}
        />
    )
}

export default BarChart
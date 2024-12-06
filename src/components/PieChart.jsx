import React from 'react'
import {Pie} from 'react-chartjs-2'
import {
   Chart as ChartJS,
   CategoryScale, 
   LinearScale, 
   ArcElement, 
   Title, 
   Tooltip, 
   Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  ArcElement, 
  Title, 
  Tooltip, 
  Legend
)
const dataDemo={
    labels: [                 // x-axis labels
      "Facebook",
      "Instagram",
      "Twitter",
      "Youtube",
      "LinkedIn"
    ],
    datasets: [
      {
        label: "Time Spent",
        data: [120, 50, 45, 60, 80], //y-axis
        borderColor: ["rgb(255, 99, 132, 0.9)", "rgb(54, 162, 235, 0.9)", "rgb(255, 206, 86, 0.9)", "rgb(75, 192, 192, 0.9)", "rgb(153, 102, 255, 0.9)"], //array can be used 
        backgroundColor: ["rgb(255, 99, 132, 0.9)", "rgb(54, 162, 235, 0.9)", "rgb(255, 206, 86, 0.9)", "rgb(75, 192, 192, 0.9)", "rgb(153, 102, 255, 0.9)"], //array can be used 
        hoverOffset: 4,
        borderWidth: 1,
      },
    ]
  }
function PieChart({
  data=dataDemo,
  title='Chart',
  legendPosition='top',
  style={},
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
        cutout:0
      };
    return (
        <Pie 
            options={options}
            data={data}
            style={style}
        />
  )
}

export default PieChart
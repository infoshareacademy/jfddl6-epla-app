import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar} from 'recharts'

const barChartData = [
  {
    day: "Sunday",
    partecipants: 25,
    fill: "#e58e26",
  },
  {
    day: "Monday",
    partecipants: 8,
    fill: "#38ada9",
  },
  {
    day: "Tuesday",
    partecipants: 10,
    fill: "#3c6382",
  },
  {
    day: "Wednesday",
    partecipants: 12,
    fill: "#e55039",
  },
  {
    day: "Thursday",
    partecipants: 8,
    fill: "#82ccdd",
  },
  {
    day: "Friday",
    partecipants: 18,
    fill: "#fad390",
  },
  {
    day: "Saturday",
    partecipants: 33,
    fill: "#38ada9",
  },
]

const DashboardBarChart = () => (
  <div style={{width: '80vw', height: '8vh'}}>
    <BarChart width={700} height={250} data={barChartData}>
      <CartesianGrid strokeDasharray="7 7" />
      <XAxis dataKey="day" />
      <YAxis />
      <Bar label={true} dataKey="partecipants" fill="#8884d8" />
    </BarChart>
  </div>
);

export default DashboardBarChart

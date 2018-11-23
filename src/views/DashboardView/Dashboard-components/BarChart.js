import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar} from 'recharts'

const barChartData = [
  {
    day: "Sunday",
    partecipants: 25,
    fill: "rgba(229, 142, 38, 0.7)",
  },
  {
    day: "Monday",
    partecipants: 8,
    fill: "rgba(56, 173, 169, 0.7)",
  },
  {
    day: "Tuesday",
    partecipants: 10,
    fill: "rgba(60, 99, 130, 0.7)",
  },
  {
    day: "Wednesday",
    partecipants: 12,
    fill: "rgba(229, 80, 57, 0.7)",
    label: false
  },
  {
    day: "Thursday",
    partecipants: 8,
    fill: "rgba(130, 204, 221, 0.7)",
  },
  {
    day: "Friday",
    partecipants: 18,
    fill: "rgba(120, 224, 143, 0.7)",
  },
  {
    day: "Saturday",
    partecipants: 33,
    fill: "rgba(56, 173, 169, 0.7)",
    mainColor: "white",
  },
]

const DashboardBarChart = () => (
  <div style={{width: '80vw', height: '8vh'}}>
    <BarChart width={700} height={250} data={barChartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Bar label={{ fill: 'red', fontSize: 20 }} dataKey="partecipants"/>
    </BarChart>
  </div>
)

export default DashboardBarChart

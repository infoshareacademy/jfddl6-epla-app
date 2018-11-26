import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts'

const barChartData = [
  {
    day: "Sunday",
    partecipants: 25,
    fill: "rgba(229, 142, 38, 1)",
  },
  {
    day: "Monday",
    partecipants: 8,
    fill: "rgba(56, 173, 169, 1)",
  },
  {
    day: "Tuesday",
    partecipants: 10,
    fill: "rgba(60, 99, 130, 1)",
  },
  {
    day: "Wednesday",
    partecipants: 12,
    fill: "rgba(229, 80, 57, 1)",
    label: false
  },
  {
    day: "Thursday",
    partecipants: 8,
    fill: "rgba(130, 204, 221, 1)",
  },
  {
    day: "Friday",
    partecipants: 18,
    fill: "rgba(120, 224, 143, 1)",
  },
  {
    day: "Saturday",
    partecipants: 33,
    fill: "rgba(56, 173, 169, 1)",
    mainColor: "white",
  },
]

const DashboardBarChart = (props) => (
  <div style={{
    alignSelf: 'flexEnd'
  }}>
    <h2 style={{ textAlign: 'center',
  alignSelf: 'flexStart' }}>
      Events partecipants
    </h2>
    <BarChart width={props.width} height={400} data={barChartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Bar label={{ fill: 'rgba(122, 56, 56, 1)', fontSize: 20 }} dataKey="partecipants" />
    </BarChart>
  </div>
)

export default DashboardBarChart

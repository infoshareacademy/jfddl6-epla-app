import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts'

const barChartData = [
  {
    day: "1",
    participants: 25,
    fill: "rgba(229, 142, 38, 1)",
  },
  {
    day: "2",
    participants: 8,
    fill: "rgba(56, 173, 169, 1)",
  },
  {
    day: "3",
    participants: 10,
    fill: "rgba(60, 99, 130, 1)",
  },
  {
    day: "4",
    participants: 12,
    fill: "rgba(229, 80, 57, 1)",
    label: false
  },
  {
    day: "5",
    participants: 8,
    fill: "rgba(130, 204, 221, 1)",
  },
  {
    day: "6",
    participants: 18,
    fill: "rgba(120, 224, 143, 1)",
  },
  {
    day: "7",
    participants: 33,
    fill: "rgba(56, 173, 169, 1)",
    mainColor: "white",
  },
]

const DashboardBarChart = (props) => (
  <div>
    <h2
      style={{ textAlign: 'center' }}
    >
      Events participants
    </h2>
    <BarChart width={props.width} height={props.height} data={props.barChartData || barChartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Bar label={{ fill: 'rgba(122, 56, 56, 1)', fontSize: 20 }} dataKey="participants" />
    </BarChart>
  </div>
)

export default DashboardBarChart

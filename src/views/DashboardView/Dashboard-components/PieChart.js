import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts'

const pieChartData = [
  {
    name: 'sports events',
    value: 2,
    fill: "rgba(183, 21, 64, 0.8)"
  },
  {
    name: 'cultural events',
    value: 4,
    fill: "rgba(246, 185, 59, 0.8)"
  },
  {
    name: 'music events',
    value: 5,
    fill: "rgba(10, 61, 98, 0.8)"
  },
  {
    name: 'religious events',
    value: 2,
    fill: "rgba(7, 153, 146, 0.8)"
  },
]

const DashboardPieChart = (props) => (
  <div>
    <h2
      style={{ textAlign: 'center' }}
    >
      Events categories
    </h2>
    <PieChart width={props.width} height={props.height} margin={props.margin}>
      <Pie
        data={pieChartData}
        dataKey="value"
        nameKey="name"
        fill="#8884d8"
      />

      <Tooltip
      />

    </PieChart>
  </div>
)

export default DashboardPieChart

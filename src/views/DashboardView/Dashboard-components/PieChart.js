import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts'

const pieChartData = [
  {
    name: 'sports events',
    value: 2,
    fill: "#b71540"
  },
  {
    name: 'cultural events',
    value: 4,
    fill: "#f6b93b"
  },
  {
    name: 'music events',
    value: 5,
    fill: "#0a3d62"
  },
  {
    name: 'religious events',
    value: 2,
    fill: "#079992"
  },
]

const DashboardPieChart = () => (
  <div >
    <PieChart width={500} height={500}>
      <Pie
        data={pieChartData}
        dataKey="value"
        nameKey="name"
        fill="#8884d8"
      />
      <Tooltip />
    </PieChart>
  </div>
);

export default DashboardPieChart

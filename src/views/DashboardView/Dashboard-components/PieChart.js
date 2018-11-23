import React from 'react';
import { PieChart, Pie, Tooltip }  from 'recharts'

const data = [
  {
    value: 30,
    name: 'biegi',
    fill: "blue"
  },
  {
    value: 40,
    name: 'inne biegi',
    fill: "green"
  }
]

const DashboardPieChart = () => (
  <div >
    <PieChart width={500} height={500}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        fill="#8884d8" 
      />
      <Tooltip />
    </PieChart>
  </div>
);

export default DashboardPieChart

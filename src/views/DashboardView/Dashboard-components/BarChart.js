import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar} from 'recharts'

const data = [
  { 
    time: "pon",
    users: 1,
  },
  {
    time: "wt",
    users: 3,
  },{
    time: "śr",
    users: 7,
  }
]

const DashboardBarChart = () => (
  <div style={{width: '100vw', height: '100vh'}}>
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Bar label={true} dataKey="users" fill="#8884d8" />
    </BarChart>
  </div>
);

export default DashboardBarChart

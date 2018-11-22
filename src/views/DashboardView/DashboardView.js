import React from 'react'
import DashboardPieChart from './Dashboard-components/PieChart'
import DashboardBarChart from './Dashboard-components/BarChart'

const DashboardView = (props) => (
    <div>
        <DashboardPieChart/>

        <DashboardBarChart/>
    </div>
)


export default DashboardView
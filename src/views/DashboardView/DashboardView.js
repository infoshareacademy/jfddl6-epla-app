import React from 'react'
import './DashBoardStyles.css'
import DashboardPieChart from './Dashboard-components/PieChart'
import DashboardBarChart from './Dashboard-components/BarChart'

class DashboardView extends React.Component {
    state = {
        viewportWidth: window.innerWidth
    }

    componentDidMount(){
        window.addEventListener(
            'resize',
            this.resizeHandler
        )
    }

    resizeHandler = () => console.log(window.innerWidth)

    render() {
        return (
            <div className="chartsContainer">
                <DashboardPieChart
                    width={this.state.viewportWidth / 2 - 50}
                />

                <DashboardBarChart
                    width={this.state.viewportWidth / 2 - 50}
                />
            </div>
        )
    }

    componentWillUnmount(){
        window.removeEventListener(
            'resize',
            this.resizeHandler
        )
    }
}


export default DashboardView
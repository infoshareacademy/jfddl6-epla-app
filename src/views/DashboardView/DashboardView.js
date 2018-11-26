import React from 'react'
import './DashBoardStyles.css'
import DashboardPieChart from './Dashboard-components/PieChart'
import DashboardBarChart from './Dashboard-components/BarChart'
import { Grid, Row, Col } from 'react-flexbox-grid';

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

    resizeHandler = () => this.setState({
        viewportWidth: window.innerWidth
      })

    render() {
        return (

             <Grid fluid>
             <Row>
               <Col xs={1} md={5}>
               <DashboardPieChart
            width={this.state.viewportWidth / 2 - 50}
        />
               </Col>
               <Col xs={1} md={5}>
               <DashboardBarChart
            width={this.state.viewportWidth / 2 - 50}
        />
               </Col>
             </Row>
           </Grid>
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
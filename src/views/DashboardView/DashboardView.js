import React from 'react'
// import './DashBoardStyles.css'
import DashboardPieChart from './Dashboard-components/PieChart'
import DashboardBarChart from './Dashboard-components/BarChart'
import { Grid, Row, Col } from 'react-flexbox-grid';

class DashboardView extends React.Component {
    state = {
        viewportWidth: window.innerWidth
    }

    componentDidMount() {
        window.addEventListener(
            'resize',
            this.resizeHandler
        )
    }

    resizeHandler = () => this.setState({
        viewportWidth: window.innerWidth
    })

    render() {
        if (window.innerWidth > 960) {
            return (

                <Grid fluid>
                    <Row>
                        <Col xs={12} s={6} md={6}>
                            <DashboardPieChart
                                width={this.state.viewportWidth / 2 - 50}
                                height={this.state.viewportWidth / 2 - 80}
                            />
                        </Col>
                        <Col xs={12} s={6} md={6}>
                            <DashboardBarChart
                                width={this.state.viewportWidth / 2 - 50}
                                height={this.state.viewportWidth / 2 - 80}
                            />
                        </Col>
                    </Row>
                </Grid>
            )
        }
        else if (window.innerWidth > 760) {
            return (

                <Grid fluid>
                    <Row>
                        <Col xs={12} s={12} md={12}>
                            <Row center="xs">
                                <DashboardPieChart
                                    width={this.state.viewportWidth / 2}
                                    height={this.state.viewportWidth / 2}
                                />
                            </Row>
                        </Col>
                        <Col xs={12} s={12} md={12}>
                            <DashboardBarChart
                                width={this.state.viewportWidth - 80}
                                height={this.state.viewportWidth / 2 + 20}
                            />
                        </Col>
                    </Row>
                </Grid>
            )
        }
        else {
            return (

                <Grid fluid>
                    <Row>
                        <Col xs={12} s={12} md={12}>
                            <Row center="xs">
                                <DashboardPieChart
                                    width={this.state.viewportWidth - 80}
                                    height={this.state.viewportWidth - 80}
                                />
                            </Row>
                        </Col>
                        <Col xs={12} s={12} md={12}>
                            <DashboardBarChart
                                width={this.state.viewportWidth - 80}
                                height={this.state.viewportWidth / 2 + 20}
                            />
                        </Col>
                    </Row>
                </Grid>
            )
        }
    }

    componentWillUnmount() {
        window.removeEventListener(
            'resize',
            this.resizeHandler
        )
    }
}


export default DashboardView
import React from 'react'
import DashboardPieChart from './Dashboard-components/PieChart'
import DashboardBarChart from './Dashboard-components/BarChart'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { connect } from 'react-redux'

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
        const now = new Date()
        const todayMidnightTimestamp = now.getTime()
            - now.getHours() * 60 * 60 * 1000
            - now.getMinutes() * 60 * 1000
            - now.getSeconds() * 1000
            - now.getMilliseconds()

        const loginsData = this.props._loginsData && this.props._loginsData.map(timestamp => timestamp.timestamp)

        const midnightTimestamp = {
            day0: todayMidnightTimestamp,
            day1: todayMidnightTimestamp - 24 * 60 * 60 * 1000,
            day2: todayMidnightTimestamp - 2 * 24 * 60 * 60 * 1000,
            day3: todayMidnightTimestamp - 3 * 24 * 60 * 60 * 1000,
            day4: todayMidnightTimestamp - 4 * 24 * 60 * 60 * 1000,
            day5: todayMidnightTimestamp - 5 * 24 * 60 * 60 * 1000,
            day6: todayMidnightTimestamp - 6 * 24 * 60 * 60 * 1000
        }

        const loginsPerDay = {
            day0: loginsData && loginsData.filter(timestamp => timestamp >= midnightTimestamp.day0).length,
            day1: loginsData && loginsData.filter(timestamp => timestamp >= midnightTimestamp.day1 && timestamp < midnightTimestamp.day0).length,
            day2: loginsData && loginsData.filter(timestamp => timestamp >= midnightTimestamp.day2 && timestamp < midnightTimestamp.day1).length,
            day3: loginsData && loginsData.filter(timestamp => timestamp >= midnightTimestamp.day3 && timestamp < midnightTimestamp.day2).length,
            day4: loginsData && loginsData.filter(timestamp => timestamp >= midnightTimestamp.day4 && timestamp < midnightTimestamp.day3).length,
            day5: loginsData && loginsData.filter(timestamp => timestamp >= midnightTimestamp.day5 && timestamp < midnightTimestamp.day4).length,
            day6: loginsData && loginsData.filter(timestamp => timestamp >= midnightTimestamp.day6 && timestamp < midnightTimestamp.day5).length
        }

        const barData = Object.values(loginsPerDay).map((loginsNumber, index) => ({
            day: 0 - index,
            participants: loginsNumber,
            fill: "rgba(229, 80, 57, 1)",
            label: false
        }))

        const eventsData = this.props._data
        console.log(eventsData)


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
                                barChartData={barData}
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

const mapStateToProps = state => ({
    _loginsData: state.loginsTimestamps.loginsData,
    _data: state.favouritesView.data
})

export default connect(mapStateToProps)(DashboardView)

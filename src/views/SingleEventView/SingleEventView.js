import React from 'react'
import Paper from 'material-ui/Paper'
import { Grid, Row, Col } from 'react-flexbox-grid'

class SingleEventView extends React.Component {

    state = {
        viewportWidth: window.innerWidth,
        data: null
    }

    render() {
        return (
            <Paper>
                <Grid>
                    <Row>
                        <Col>
                            <h1>Event Name:</h1>
                            <h2>Event Category:</h2>
                            <h3>Overview:</h3>
                            <h3>Overview:</h3>
                        </Col>
                        <Col>
                            <img
                                alt={'photoExample'}
                                src={'https://ketstatic.cdn.ket.org/wp_transfer/images/NAAT/NAAT__003506.4832838.512x288.jpg'}
                                style={{ maxWidth: '100%' }}
                            />
                        </Col>
                    </Row>
                </Grid>
            </Paper>
        )
    }
}

export default SingleEventView
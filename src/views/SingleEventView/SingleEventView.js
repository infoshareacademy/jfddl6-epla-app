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
                        <Col xs={12} s={6} md={6}>
                            <h1>Event Name: Polowanie na żaby</h1>
                            <h3>Event Category: cultural</h3>
                            <h3>Date:</h3>
                            <h3>Numbers of participants:</h3>
                            <h3>Add to favourites: </h3>
                        </Col>
                        <Col xs={12} s={6} md={6}>
                            <img
                                alt={'photoExample'}
                                src={'https://ketstatic.cdn.ket.org/wp_transfer/images/NAAT/NAAT__003506.4832838.512x288.jpg'}
                                style={{
                                    maxWidth: '100%',
                                }}
                            />
                        </Col>
                    </Row>
                </Grid>
            </Paper>
        )
    }
}

export default SingleEventView
import React from 'react'
import Paper from 'material-ui/Paper'
import { Grid, Row, Col } from 'react-flexbox-grid'


class SingleEventView extends React.Component {

    render() {
        return (
            <Paper>
                <Grid>
                    <Row>
                        <Col>
                            <h1>naglowek1</h1>
                        </Col>
                    </Row>
                </Grid>
            </Paper>
        )
    }
}

export default SingleEventView
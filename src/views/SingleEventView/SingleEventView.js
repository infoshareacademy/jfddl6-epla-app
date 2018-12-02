import React from 'react'
import Paper from 'material-ui/Paper'
import { database } from '../../firebase'
import { Grid, Row, Col } from 'react-flexbox-grid'

import CheckboxFavourite from './CheckboxFavourite'

class SingleEventView extends React.Component {

    state = {
        viewportWidth: window.innerWidth,
        data: null
    }




    componentDidMount() {
        // const key = this.props.match.params.key;
        database.ref(`/events/-LSj8eFsFjHkEyFFj4cu`)
            .on('value', (snapshot) => {
                this.setState({
                    data: snapshot.val()
                })
            })
    }


    toggleFavourite = () => {
        return (
        console.log('togggle!'),

        // if (!this.state.data) return

        database.ref(`/products/-LSj8eFsFjHkEyFFj4cu`).update({
            isFavourite: !this.state.data.isFavourite
        })
        )
    }

    render() {
        return (
            <Paper>
                <Grid>
                    <Row>
                        <Col xs={12} s={6} md={6}>
                            <h1>Event Name: {this.state.data && this.state.data.eventName}</h1>
                            <h3>Event Category: {this.state.data && this.state.data.category}</h3>
                            <h3>City: {this.state.data && this.state.data.city}</h3>
                            <h3>Date: {this.state.data && this.state.data.date}</h3>
                            <h3>Numbers of participants: {this.state.data && this.state.data.participants}</h3>
                            <h3>Street adress: {this.state.data && this.state.data.street}</h3>
                            <CheckboxFavourite
                                toggleFavourite={this.toggleFavourite}
                                onChange={() => console.log('222')}
                            />
                        </Col>
                        <Col xs={12} s={6} md={6}>
                            <img
                                alt={'eventPhoto'}
                                src={'https://ketstatic.cdn.ket.org/wp_transfer/images/NAAT/NAAT__003506.4832838.512x288.jpg'}
                                style={{
                                    maxWidth: '100%',
                                    marginTop: '2vh'
                                }}
                            />
                        </Col>
                    </Row>
                </Grid>
            </Paper >
        )
    }
}

export default SingleEventView
import React from 'react'
import Paper from 'material-ui/Paper'
import { database } from '../../firebase'
import { Grid, Row, Col } from 'react-flexbox-grid'
import IconButton from 'material-ui/IconButton'
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'


class SingleEventView extends React.Component {

    state = {
        viewportWidth: window.innerWidth,
        data: null,
        events: []
    }


    componentDidMount() {
        this.loadData()

    }
    
    componentWillUnmount() {
        database.ref('/events/-LS_KYvXqU1hmJe7W4we').off()
    }

    loadData = () => {
        database.ref('/events/-LSj8eFsFjHkEyFFj4cu')
            .on('value', (snapshot) => {
                this.setState({
                    data: snapshot.val()
                })
            })
    }

    isfavourite = () => {
        fetch('https:epla-app.firebaseio.com/events/-LSj8eFsFjHkEyFFj4cu.json', {
            method: 'PATCH',
            body: JSON.stringify({ isFavourite: !this.state.data.isFavourite })
        }).then(() => this.loadData())
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
                            <h3>Add to favourites:
                            <IconButton
                                onClick={this.isfavourite}
                            >
                                {this.state.data && this.state.data.isFavourite ?
                                    <ActionFavorite />
                                    :
                                    <ActionFavoriteBorder />
                                }
                            </IconButton>
                            </h3>
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
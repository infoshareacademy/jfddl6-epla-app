import React from 'react'
import Paper from 'material-ui/Paper'
import { database } from '../../firebaseConfig'
import { Grid, Row, Col } from 'react-flexbox-grid'
import IconButton from 'material-ui/IconButton'
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'

import { connect } from 'react-redux'

import {
    getEventListFromDbAsyncAction,
    stopListeningToDbAsyncAction,
    toggleFavouriteAsyncAction
} from '../../state/favouritesView'

const mapImageSourceToCategory = {
    music: "https://images.pexels.com/photos/952437/pexels-photo-952437.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    sport: "https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    cultural: "https://images.pexels.com/photos/1313814/pexels-photo-1313814.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    religious: "https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
}

const imageStyle = {
    width: 500,
    borderRadius: 50,
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: '3vh'
}

class SingleEventView extends React.Component {

    constructor(props) {

        super()
        this.state = {
            viewportWidth: window.innerWidth,
        }
    }

    componentDidMount() {
        this.props._getEventListFromDbAsyncAction()
    }


    componentWillUnmount() {
        this.props._stopListeningToDbAsyncAction()
    }

    isFavourite = event => {
        database.ref(`/events`).child(this.props.match.params.id)
            .update({
                isFavourite: !event.isFavourite
            })
    }

    render() {
        const event = this.props._data.find(element => element.key === this.props.match.params.id)
        return (
            <Paper>
                <Grid>
                    <Row>
                        <Col xs={12} s={6} md={6}>
                            <h1>Event Name: {event && event.eventName}</h1>
                            <h3>Event Category: {event && event.category}</h3>
                            <h3>City: {event && event.city}</h3>
                            <h3>Date: {event && event.date}</h3>
                            <h3>Numbers of participants: {event && event.participants}</h3>
                            <h3>Street adress: {event && event.street}</h3>
                            <h3>Add to favourites:
                            <IconButton
                                    onClick={() => event && this.props._toggleFavouriteAsyncAction(event)}
                                >
                                    {event && event.isFavourite ?
                                        <ActionFavorite />
                                        :
                                        <ActionFavoriteBorder />
                                    }
                                </IconButton>
                            </h3>
                        </Col>
                        <Col xs={12} s={6} md={6}>
                            <img src={event && mapImageSourceToCategory[event.category]} alt={event && event.category}
                                style={imageStyle}
                            />
                        </Col>
                    </Row>
                </Grid>
            </Paper >
        )
    }
}

const mapStateToProps = state => ({
    _data: state.favouritesView.data
})

const mapDispatchToProps = dispatch => ({
    _getEventListFromDbAsyncAction: () => dispatch(getEventListFromDbAsyncAction()),
    _stopListeningToDbAsyncAction: () => dispatch(stopListeningToDbAsyncAction()),
    _toggleFavouriteAsyncAction: (event) => dispatch(toggleFavouriteAsyncAction(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleEventView)
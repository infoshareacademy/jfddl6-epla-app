import React from 'react'
import Paper from 'material-ui/Paper'
import { database } from '../../firebase'
import { Grid, Row, Col } from 'react-flexbox-grid'
import IconButton from 'material-ui/IconButton'
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'


class SingleEventView extends React.Component {

    constructor(props) {

        super()
        this.state = {
            viewportWidth: window.innerWidth,
            data: null
        }
    }


    componentDidMount() {
        this.loadData()

    }

    componentWillUnmount() {
        database.ref(`/events/${this.props.match.params.id}`).off()
    }

    loadData = () => {
        database.ref(`/events/${this.props.match.params.id}`)
            .on('value', (snapshot) => {
                this.setState({
                    data: snapshot.val()
                })
            })
    }

    isFavourite = (event) => {
        fetch(`https:epla-app.firebaseio.com/events/${this.props.match.params.id}.json`, {
            method: 'PATCH',
            body: JSON.stringify({ isFavourite: !event.isFavourite })
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
                                    onClick={() => this.isFavourite(this.state.data)}
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
                            {
                                this.state.data && this.state.data.category === "Music" ?
                                    <img src="https://images.pexels.com/photos/952437/pexels-photo-952437.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Music"
                                        style={{
                                            width: 500,
                                            borderRadius: 50,
                                            flexWrap: 'wrap',
                                            justifyContent: 'space-evenly',
                                            marginTop: '3vh'
                                        }}
                                    />
                                    :
                                    this.state.data && this.state.data.category === "Sport" ?
                                        <img src="https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Sport"
                                            style={{
                                                width: 500,
                                                borderRadius: 50,
                                                flexWrap: 'wrap',
                                                justifyContent: 'space-evenly',
                                                marginTop: '3vh'
                                            }}
                                        />
                                        :
                                        this.state.data && this.state.data.category === "Cultural" ?
                                            <img src="https://images.pexels.com/photos/1313814/pexels-photo-1313814.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Cultural"
                                                style={{
                                                    width: 500,
                                                    borderRadius: 50,
                                                    flexWrap: 'wrap',
                                                    justifyContent: 'space-evenly',
                                                    marginTop: '3vh'
                                                }}
                                            />
                                            :
                                            this.state.data && this.state.data.category === "Religious" ?
                                                <img src="https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Religious"
                                                    style={{
                                                        width: 500,
                                                        borderRadius: 50,
                                                        flexWrap: 'wrap',
                                                        justifyContent: 'space-evenly',
                                                        marginTop: '3vh'
                                                    }}
                                                />
                                                : false
                            }
                        </Col>
                    </Row>
                </Grid>
            </Paper >
        )
    }
}

export default SingleEventView
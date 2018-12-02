import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'


import { database } from '../../firebase'

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
    },
}


const dbRef = database.ref('/events')

class FavouritesView extends React.Component {

    state = {
        data: []
    }



    componentDidMount() {
        dbRef.on(
            'value',
            snapshot => {
                const events = Object.entries(
                    snapshot.val()
                ).map(entry => ({
                    ...entry[1],
                    key: entry[0]
                }))

                this.setState({ data: events })

            }
        )
    }

    componentWillUnmount() {
        dbRef.off()
    }

    onDeleteEventClickHandler = eventKey => {
        dbRef.child(eventKey)
        .update({
            isFavourite: false})
    }

  


    render() {
        return (
            <div>
                <div style={styles.root}>
                    <GridList
                        cellHeight={180}
                        style={styles.gridList}
                    >
                        <Subheader>Favourites List</Subheader>


                        {this.state.data.filter(event => event.isFavourite === true)
                            .map((event) => (
                                <GridTile
                                    key={`${event.eventName}+${event.date}`}
                                    title={event.eventName}
                                    subtitle={<span>Category: <b>{event.category}</b></span>}
                                    actionIcon={<IconButton
                                        onClick={() => this.onDeleteEventClickHandler(event.key)}
                                    >
                                        <StarBorder color="white" />
                                    </IconButton>}
                                >
                                    {
                                        event.category === "Sport" ?
                                            <img src={'https://cdn.prod-carehubs.net/n1/802899ec472ea3d8/uploads/2017/02/a-watercolor-graphic-of-a-heart-in-pinks-and-purples-special-crop-1024x864.jpg'} />
                                            :
                                            <img src={'https://www.publicdomainpictures.net/pictures/90000/nahled/red-scribble-heart.jpg'} />
                                    }
                                </GridTile>
                            ))}
                    </GridList>
                </div>
            </div>
        )
    }
}

export default FavouritesView
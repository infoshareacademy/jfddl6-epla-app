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


    render() {
        return (
            <div>
            <div>
                {
                    this.state.data.filter(event => event.isFavourite === true)
                        .map(event =>
                            <div>
                                <li>
                                    <p>{event.eventName}</p>
                                    <p>{event.date}</p>
                                    <p>{event.city}</p>
                                    <p>{event.street}</p>
                                </li>
                            </div>)
                }
            </div>

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
                            
                        >
                            <img src={'https://image.freepik.com/free-photo/cute-cat-picture_1122-449.jpg'} />
                        </GridTile>
                    ))}
                </GridList>
            </div>
</div>
        )
    }
}

export default FavouritesView
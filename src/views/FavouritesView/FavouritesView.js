import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import {
    toggleFavouriteAsyncAction
} from '../../state/favouritesView'

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 1000,
        height: 900,
        overflowY: 'auto',
    },
}

class FavouritesView extends React.Component {

    render() {
        return (
            <div>
                <div style={styles.root}>
                    <GridList
                        cellHeight={360}
                        style={styles.gridList}
                    >
                        <Subheader>Favourites List</Subheader>
                        {this.props._data.filter(event => Object.keys(this.props._favs || {}).includes(event.key) ? true : false)
                            .map((event) => (
                                <Link to={`/single-event/${event.key}`} key={event.key}>
                                    <GridTile
                                        title={event.eventName}
                                        subtitle={<span>Category: <b>{event.category}</b></span>}
                                        actionIcon={<IconButton
                                            onClick={(e) => { this.props._toggleFavouriteAsyncAction(event) }}
                                        >
                                            <StarBorder color="white" />
                                        </IconButton>}
                                    >
                                        {
                                            event.category === "Sport" ?
                                                <img
                                                    alt="favourites"
                                                    src={'https://cdn.prod-carehubs.net/n1/802899ec472ea3d8/uploads/2017/02/a-watercolor-graphic-of-a-heart-in-pinks-and-purples-special-crop-1024x864.jpg'} />
                                                :
                                                <img
                                                    alt="favourites"
                                                    src={'https://www.publicdomainpictures.net/pictures/90000/nahled/red-scribble-heart.jpg'} />
                                        }
                                    </GridTile>
                                </Link>
                            ))}
                    </GridList>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    _data: state.favouritesView.data,
    _favs: state.favouritesView.favs
})

const mapDispatchToProps = dispatch => ({
    _toggleFavouriteAsyncAction: (event) => dispatch(toggleFavouriteAsyncAction(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesView)

import React, { Component } from 'react'
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import EventListViewPaper from './EventListViewPaper'

class EventListView extends React.Component {
    state = {
        cols: 2
    }


    componentWillMount() {
        const width = window.innerWidth

        if (width < 1000) {
            this.setState({
                cols: 2
            })
        } else {
            this.setState({
                cols: 4
            })
        }
    }

    render() {
        return (
            <div>
                <EventListViewPaper>
                    <div style={styles.root}>
                        <GridList
                            cellHeight={180}
                            style={styles.gridList}
                            cols={this.state.cols}
                        >

                            <Subheader>Event</Subheader>
                            {tilesData.map((tile) => (
                                <GridTile
                                    key={tile.img}
                                    title={tile.title}
                                    subtitle={<span>by <b>{tile.author}</b></span>}
                                    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                                >
                                    <img src={tile.img} />
                                </GridTile>
                            ))}
                        </GridList>
                    </div>
                </EventListViewPaper>
            </div>
        );
    }
}
const tilesData = [
    {
        img: 'images/grid-list/00-52-29-429_640.jpg',
        title: 'Breakfast',
        author: 'jill111',
    },
    {
        img: 'images/grid-list/burger-827309_640.jpg',
        title: 'Tasty burger',
        author: 'pashminu',
    },
    {
        img: 'images/grid-list/camera-813814_640.jpg',
        title: 'Camera',
        author: 'Danson67',
    },
]


const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: '100%',
        height: 450,
        overflowY: 'auto',
    },
};


export default EventListView
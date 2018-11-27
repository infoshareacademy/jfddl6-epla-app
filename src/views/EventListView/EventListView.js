import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import EventListViewPaper from './EventListViewPaper'

const EventListView = () => (
    <div>
        List
    <EventListViewPaper>

            <b>abc</b>
            <GridListMain />

        </EventListViewPaper>
    </div>
)


const GridListMain = () => (
    <div style={styles.root}>
        <GridList
            cellHeight={180}
            style={styles.gridList}
            cols={2}
        >

            <Subheader>December</Subheader>
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
);


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
    {
      img: 'images/grid-list/morning-819362_640.jpg',
      title: 'Morning',
      author: 'fancycrave1',
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
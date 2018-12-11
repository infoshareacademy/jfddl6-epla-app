import React from 'react'
import List from './List'
import SearchForm from './SearchForm'
import Paper from 'material-ui/Paper'
// import { Grid, Row, Col } from 'react-flexbox-grid';
import { GridList, GridTile } from 'material-ui/GridList'

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




class EventListView extends React.Component {
    state = {
        filterText: '',
        numberOfUsers: 150,
        filterCategory: '',
        events: [],
        cols: 6,
        viewportWidth: window.innerWidth
    }


    onFilteredTextChangeHandler = (e, value) => this.setState({ filterText: value })

    handleUsersChange = (e, value) => this.setState({ numberOfUsers: value })

    handleEventsFilterCategoryChange = (e, key, value) => this.setState({ filterCategory: value })

    isFavourite = (event) => {
        fetch(`https:epla-app.firebaseio.com/events/${event.key}.json`, {
            method: 'PATCH',
            body: JSON.stringify({ isFavourite: !event.isFavourite })
        }).then(() => this.loadData())
    }

    componentDidMount() {
        this.loadData()
    }

    loadData = () => {
        fetch('https://epla-app.firebaseio.com/events.json')
            .then(response => response.json())
            .then(data => {
                const events = Object.entries(data).map(([key, value]) => ({
                    ...value,
                    key
                }))
                this.setState({ events: events })
            })
    }

    render() {
        return (
            <div>

                <SearchForm
                    onFilteredTextChangeHandler={this.onFilteredTextChangeHandler}
                    handleUsersChange={this.handleUsersChange}
                    handleEventsFilterCategoryChange={this.handleEventsFilterCategoryChange}
                    filterCategory={this.state.filterCategory}
                    filterText={this.state.filterText}
                    numberOfUsers={this.state.numberOfUsers}
                />

                <div>
                    <div style={styles.root}>
                        <GridList
                            cellHeight={360}
                            style={styles.gridList}
                        >
                        <Subheader>Events List</Subheader>
                        {this.state.data.filter(event => event.isFavourite === true)
                        .map((event) => (
                                <Link to={`/single-event/${event.key}`} key={event.key}>
                            <GridTile
                                title={event.eventName}
                                subtitle={<span>eventName: <b>{event.e}</b></span>}
                            >
                                <List
                                    width={this.state.viewportWidth / 2 - 50}
                                    height={this.state.viewportWidth / 2 - 80}
                                    events={this.state.events}
                                    filterCategory={this.state.filterCategory}
                                    filterText={this.state.filterText}
                                    numberOfUsers={this.state.numberOfUsers}
                                    isFavourite={this.isFavourite}
                                />
                            </GridTile>
                        </GridList>
                    </div>
                </div>
            </div>
        )
    }

}

export default EventListView
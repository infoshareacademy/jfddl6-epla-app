import React from 'react'
import List from './List'
import SearchForm from './SearchForm'
import { GridList } from 'material-ui/GridList'


const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: 450,
    },
};



class EventListView extends React.Component {
    state = {
        filterText: '',
        numberOfUsers: 150,
        filterCategory: '',
        events: [],
        cols: 2
    }


    onFilteredTextChangeHandler = (e, value) => this.setState({ filterText: value })

    handleUsersChange = (e, value) => this.setState({ numberOfUsers: value })

    handleEventsFilterCategoryChange = (e, key, value) => this.setState({ filterCategory: value })

    componentDidMount() {
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

                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                    cols={this.state.cols}
                    padding={12}
                >
                    <List
                        events={this.state.events}
                        filterCategory={this.state.filterCategory}
                        filterText={this.state.filterText}
                        numberOfUsers={this.state.numberOfUsers}
                    />

                </GridList>
            </div >
        )
    }

}

export default EventListView
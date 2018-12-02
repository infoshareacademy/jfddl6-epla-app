import React from 'react'
import List from './List'
import SearchForm from './SearchForm'
import Paper from 'material-ui/Paper'
import { GridList, GridTile } from 'material-ui/GridList';



class EventListView extends React.Component {
    state = {
        filterText: '',
        numberOfUsers: 150,
        filterCategory: '',
        events: []
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
                <Paper>
                    <SearchForm
                        onFilteredTextChangeHandler={this.onFilteredTextChangeHandler}
                        handleUsersChange={this.handleUsersChange}
                        handleEventsFilterCategoryChange={this.handleEventsFilterCategoryChange}
                        filterCategory={this.state.filterCategory}
                        filterText={this.state.filterText}
                        numberOfUsers={this.state.numberOfUsers}
                    />
                    <GridList>

                        <List
                            events={this.state.events}
                            filterCategory={this.state.filterCategory}
                            filterText={this.state.filterText}
                            numberOfUsers={this.state.numberOfUsers}
                        />
                    </GridList>
                </Paper>
            </div >
        )
    }

}

export default EventListView
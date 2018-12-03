import React from 'react'
import List from './List'
import SearchForm from './SearchForm'
import Paper from 'material-ui/Paper'




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
                <Paper >

                    <List
                        events={this.state.events}
                        filterCategory={this.state.filterCategory}
                        filterText={this.state.filterText}
                        numberOfUsers={this.state.numberOfUsers}
                        isFavourite={this.isFavourite}
                    />


                </Paper>
            </div >
        )
    }

}

export default EventListView
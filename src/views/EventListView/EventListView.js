import React from 'react'
import List from './List'
import SearchForm from './SearchForm'

class EventListView extends React.Component {
    state = {
        filterText: '',
        numberOfUsers: 150,
        category: '',
        events: []
    }


    onFilteredTextChangeHandler = (e, index, value) => this.setState({ category: value })

    handleUsersChange = (e, value) => this.setState({numberOfUsers: value})

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
                    handleUsersChange ={this.handleUsersChange}
                />
                <List
                    events={this.state.events}
                />

            </div>
        )
    }

}

export default EventListView
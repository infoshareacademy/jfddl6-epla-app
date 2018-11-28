import React from 'react'
import List from './List'

class EventListView extends React.Component {
    state = {
        filterText: '',
        numberOfUsers: 150,
        category: '',
        events: []
    }

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
                <List
                    events={this.state.events} />
            </div>
        )
    }

}

export default EventListView
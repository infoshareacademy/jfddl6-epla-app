import React from 'react'

import { database } from '../../firebase'
import List from './List'
import SearchForm from './SearchForm'
import Paper from 'material-ui/Paper'

const dbRef = database.ref('/events')

class EventListView extends React.Component {
    state = {
        filterText: '',
        numberOfUsers: 150,
        filterCategory: '',
        data: [],
        cols: 2
    }


    onFilteredTextChangeHandler = (e, value) => this.setState({ filterText: value })

    handleUsersChange = (e, value) => this.setState({ numberOfUsers: value })

    handleEventsFilterCategoryChange = (e, key, value) => this.setState({ filterCategory: value })

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

    componentWillUnmount() {
        dbRef.off()
    }

    isFavourite = event => {
        dbRef.child(event.key)
            .update({
                isFavourite: !event.isFavourite
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
                        events={this.state.data}
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
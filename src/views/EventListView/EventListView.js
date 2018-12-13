import React from 'react'

import List from './List'
import SearchForm from './SearchForm'
import Paper from 'material-ui/Paper'
import { connect } from 'react-redux'

import {
    getEventListFromDbAsyncAction,
    stopListeningToDbAsyncAction,
    toggleFavouriteAsyncAction
} from '../../state/favouritesView'

import {
    filterTextChangeAction,
    usersNumberChangeAction,
    eventsFilterCategoryChangeAction
} from '../../state/eventListView'

class EventListView extends React.Component {
    state = {
        filterText: '',
        numberOfUsers: 150,
        filterCategory: '',
        data: []
    }

    componentDidMount() {
        this.props._getEventListFromDbAsyncAction()
    }

    componentWillUnmount() {
        this.props._stopListeningToDbAsyncAction()
    }

    render() {
        return (
            <div>
                <SearchForm
                    onFilteredTextChangeHandler={this.props._filterTextChangeAction}
                    handleUsersChange={this.props._usersNumberChangeAction}
                    handleEventsFilterCategoryChange={this.props._eventsFilterCategoryChangeAction}
                    filterCategory={this.props._filterCategory}
                    filterText={this.props._filterText}
                    numberOfUsers={this.props._numberOfUsers}
                />
                <Paper >
                    <List
                        events={this.props._data}
                        filterCategory={this.props._filterCategory}
                        filterText={this.props._filterText}
                        numberOfUsers={this.props._numberOfUsers}
                        isFavourite={this.props._toggleFavouriteAsyncAction}
                    />


                </Paper>
            </div >
        )
    }

}

const mapStateToProps = state => ({
    _data: state.favouritesView.data,
    _numberOfUsers: state.eventListView.numberOfUsers,
    _filterText: state.eventListView.filterText,
    _filterCategory: state.eventListView.filterCategory
})

const mapDispatchToProps = dispatch => ({
    _getEventListFromDbAsyncAction: () => dispatch(getEventListFromDbAsyncAction()),
    _stopListeningToDbAsyncAction: () => dispatch(stopListeningToDbAsyncAction()),
    _toggleFavouriteAsyncAction: (event) => dispatch(toggleFavouriteAsyncAction(event)),
    _filterTextChangeAction: (event, val) => dispatch(filterTextChangeAction(val)),
    _usersNumberChangeAction: (event, val) => dispatch(usersNumberChangeAction(val)),
    _eventsFilterCategoryChangeAction: (event, i, val) => dispatch(eventsFilterCategoryChangeAction(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(EventListView)
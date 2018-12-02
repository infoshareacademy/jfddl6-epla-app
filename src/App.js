import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem'
import Notification from './Components/Notification'

import Navigation from './Navigation/Navigation'
import AddEventForm from './views/AddEventFormView/AddEventFormView.js'
import DashboardView from './views/DashboardView/DashboardView'
import EventListView from './views/EventListView/EventListView'
import SingleEventView from './views/SingleEventView/SingleEventView'
import FavouritesView from './views/FavouritesView/FavouritesView'
class App extends React.Component {

  state = {
    isNotificationOpen: false,
    notificationMessage: ''
  }

  toggleNotification = (message) => {
    this.setState({
      isNotificationOpen: !this.state.isNotificationOpen,
      notificationMessage: message || ''
    })
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <div>
              <Navigation
              title="ePla"
            keyChildProp="to">
                <Link to='/'>
                  <MenuItem>
                    Home
              </MenuItem>
                </Link>
                <Link to='/event-list'>
                  <MenuItem>
                    Event List
              </MenuItem>
                </Link>
                <Link to='/add-event-form'>
                  <MenuItem>
                    Add Event
              </MenuItem>
                </Link>
                <Link to='/favourites'>
                  <MenuItem>
                    Favourites List
              </MenuItem>
                </Link>
              </Navigation>
            </div>
            <div>
              <Route path="/" exact={true} component={DashboardView} />
              <Route path="/event-list" component={EventListView} />
              <Route path="/single-event/:id" component={SingleEventView} />
              <Route path="/add-event-form" component={() => <AddEventForm toggleNotification={this.toggleNotification} />} />
              <Route path="/favourites" component={FavouritesView} />
            </div>
          </div>
        </Router>

        <Notification
          isNotificationOpen={this.state.isNotificationOpen}
          handleRequestClose={this.toggleNotification}
          notificationMessage={this.state.notificationMessage}
        />

      </div>
    )
  }
}
export default App

import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem'

import Navigation from './Navigation/Navigation'

import AddEventForm from './views/AddEventFormView/AddEventFormView.js'
import DashboardView from './views/DashboardView/DashboardView'
import EventListView from './views/EventListView/EventListView'
import SingleEventView from './views/SingleEventView/SingleEventView'

const App = (props) => (
  <div>
    <Router>
      <div>
        <div>
          <Navigation
            title="ePla"
            keyChildProp="to"
          >
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
          </Navigation>
        </div>
        <div>
          <Route path="/" exact={true} component={DashboardView} />
          <Route path="/event-list" component={EventListView} />
          <Route path="/single-event" component={SingleEventView} /> {/* zmienić path: "/single-event/:id" */}
          <Route path="/add-event-form" component={AddEventForm} />
        </div>
      </div>
    </Router>
  </div>
)

export default App

import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//import Navigation from './Navigation/Navigation'
import AddEventForm from './views/AddEventFormView/AddEventFormView.js'
import DashboardView from './views/DashboardView/DashboardView'
import EventListView from './views/EventListView/EventListView'
import SingleEventView from './views/SingielEventView/SingleEventView'

const App = (props) => (
  <div>
    <Router>
      <div>
        <div>
          <ul>
            <li><Link to='/Dashboard'>Home</Link></li>
            <li><Link to='/EventList'>Event List</Link></li>
            <li><Link to='/AddEventForm'>Add Event</Link></li>
          </ul>
        </div>
          <Route path="/dashboard" component={DashboardView} />
          <Route path="/event-list" component={EventListView} />
          <Route path="/single-event/:id" component={SingleEventView} />
          <Route path="/add-event-form" component={AddEventForm} />
      </div>
      </Router>
    </div>
)



export default App

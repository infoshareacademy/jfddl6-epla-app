import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

//import AddEventForm from './views/AddEventFormView/AddEventFormView.js'
//import DashboardView from './views/DashboardView/DashboardView'
//import EventListView from './views/EventListView/EventListView'
//import SingleEventView from './views/SingielEventView/SingleEventView'

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
          <Route path="/Dashboard" component={DashboardView} />
          <Route path="/EventList" component={EventListView} />
          <Route path="/EventList/SingleEvent:id" component={SingleEventView} />
          <Route path="/AddEventForm" component={AddEventForm} />
      </div>
      </Router>
    </div>
)



export default App

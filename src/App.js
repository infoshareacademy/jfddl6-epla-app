import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import AddEventForm from './views/AddEventFormView/AddEventFormView.js'

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
          <Route path="/Dashboard" component={Route1} />
          <Route path="/EventList" component={Route2} />
          <Route path="/AddEventForm" component={AddEventForm} />
      </div>
      </Router>
    </div>
)



export default App

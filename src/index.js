import React from 'react'
import ReactDOM from 'react-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './index.css'
import App from './App'
import eplaTheme from './style'

ReactDOM.render(
    <MuiThemeProvider muiTheme={eplaTheme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
)

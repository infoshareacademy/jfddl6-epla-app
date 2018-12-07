import React from 'react'
import ReactDOM from 'react-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'
import {store} from './store'

import './index.css'
import App from './App'
/*import eplaTheme from './style'*/

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider /*muiTheme={eplaTheme}*/>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)

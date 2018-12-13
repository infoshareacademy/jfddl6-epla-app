import React from 'react'
import Snackbar from 'material-ui/Snackbar'
import { connect } from 'react-redux'

import { toggleNotificationAction } from '../state/notification'


const Notification = (props) => (
    <div>
        <Snackbar
            open={props._isNotificationOpen}
            message={props._notificationMessage}
            autoHideDuration={4000}
            onRequestClose={props._toggleNotificationAction}
        />
    </div>
)

const mapStateToProps = state => ({
    _isNotificationOpen: state.notification.isNotificationOpen,
    _notificationMessage: state.notification.notificationMessage
})

const mapDispatchToProps = dispatch => ({
    _toggleNotificationAction: (message) => dispatch(toggleNotificationAction(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(Notification)
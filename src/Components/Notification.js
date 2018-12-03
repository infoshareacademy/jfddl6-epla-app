import React from 'react'
import Snackbar from 'material-ui/Snackbar'


const Notification = (props) => (
    <div>
        <Snackbar
            open={props.isNotificationOpen}
            message={props.notificationMessage}
            autoHideDuration={4000}
            onRequestClose={props.handleRequestClose}
        />
    </div>
)


export default Notification